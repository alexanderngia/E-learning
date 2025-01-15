"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  YouTubePlayer,
  YouTubeEvent,
  YouTubePlayerProps,
  VideoTimeDisplayProps,
} from "../types/youtube";

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const TimeDisplay: React.FC<VideoTimeDisplayProps> = ({
  currentTime,
  duration,
}) => (
  <div className="text-white text-sm">
    {formatTime(currentTime)} / {formatTime(duration)}
  </div>
);

const YouTubePlayerComponent: React.FC<YouTubePlayerProps> = ({
  videoId,
  title,
  skipDuration = 10,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showVolumeBar, setShowVolumeBar] = useState<boolean>(false);
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const volumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const loadYouTubeAPI = (): void => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    // Initialize YouTube Player
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("youtube-player", {
        videoId,
        playerVars: {
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    loadYouTubeAPI();

    return () => {
      if (volumeTimeoutRef.current) {
        clearTimeout(volumeTimeoutRef.current);
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (player) {
      player.loadVideoById(videoId); // Tải video mới bằng videoId
      setIsPlaying(false); // Đặt lại trạng thái phát
      setProgress(0); // Đặt lại tiến trình
      setCurrentTime(0); // Đặt lại thời gian hiện tại
    }
  }, [videoId, player]);

  const onPlayerReady = (event: { target: YouTubePlayer }): void => {
    setPlayer(event.target);
    setDuration(event.target.getDuration());
    setVolume(event.target.getVolume() / 100);

    progressInterval.current = setInterval(() => {
      if (player && isPlaying) {
        const currentTime = player.getCurrentTime();
        const duration = player.getDuration();
        setCurrentTime(currentTime);
        setProgress((currentTime / duration) * 100);
      }
    }, 1000);
  };

  const onPlayerStateChange = (event: YouTubeEvent): void => {
    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
  };

  const togglePlay = (): void => {
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const skipForward = (): void => {
    if (!player) return;
    const newTime = Math.min(
      player.getCurrentTime() + skipDuration,
      player.getDuration()
    );
    player.seekTo(newTime, true);
  };

  const skipBackward = (): void => {
    if (!player) return;
    const newTime = Math.max(player.getCurrentTime() - skipDuration, 0);
    player.seekTo(newTime, true);
  };

  const handleProgressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (!player) return;
    const newTime = (Number(e.target.value) / 100) * duration;
    player.seekTo(newTime, true);
    setProgress(Number(e.target.value));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!player) return;
    const value = Number(e.target.value);
    setVolume(value);
    player.setVolume(value * 100);
    setIsMuted(value === 0);
  };

  const toggleMute = (): void => {
    if (!player) return;
    if (isMuted) {
      player.unMute();
      player.setVolume(volume * 100);
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  };

  const handleVolumeHover = (isHovering: boolean): void => {
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }

    if (isHovering) {
      setShowVolumeBar(true);
    } else {
      volumeTimeoutRef.current = setTimeout(() => {
        setShowVolumeBar(false);
      }, 300);
    }
  };

  const toggleFullscreen = async (): Promise<void> => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  return (
    <div ref={containerRef} className="relative group h-full ">
      <div className="aspect-video w-full h-full">
        <div id="youtube-player" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <input
          type="range"
          value={progress}
          onChange={handleProgressChange}
          className="w-full h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer custom-youtube"
          style={{
            background: `linear-gradient(to right, #bd71ff ${progress}%, #9ca3af ${progress}%)`,
          }}
        />

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            {/* Skip backward button */}
            <button
              onClick={skipBackward}
              className="text-white hover:text-[var(--primary-color)] transition-colors"
              title={`Backward ${skipDuration}s`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                />
              </svg>
            </button>

            {/* Play/Pause button */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-[var(--primary-color)] transition-colors"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              )}
            </button>

            {/* Skip forward button */}
            <button
              onClick={skipForward}
              className="text-white hover:text-[var(--primary-color)] transition-colors"
              title={`Forward ${skipDuration}s`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                />
              </svg>
            </button>

            <div
              className="flex relative group/volume"
              onMouseEnter={() => handleVolumeHover(true)}
              onMouseLeave={() => handleVolumeHover(false)}
            >
              <button
                onClick={toggleMute}
                className="text-white hover:text-[var(--primary-color)]"
              >
                {isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                )}
              </button>

              {/* Vertical volume slider */}
              <div
                className={`custom-volume absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-black/80 rounded-lg transition-opacity duration-200  ${
                  showVolumeBar
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="h-20 w-1 bg-gray-400 rounded-lg appearance-none cursor-pointer OriginBottomRotate90"
                  style={{
                    background: `linear-gradient(to top, #3b82f6 ${
                      (isMuted ? 0 : volume) * 100
                    }%, #9ca3af ${(isMuted ? 0 : volume) * 100}%)`,
                  }}
                />
              </div>
            </div>

            <TimeDisplay currentTime={currentTime} duration={duration} />
          </div>

          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-[var(--primary-color)]"
          >
            {isFullscreen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayerComponent;

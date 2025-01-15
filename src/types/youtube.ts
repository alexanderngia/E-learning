// types.ts
declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
  interface YT {
    Player: typeof YT.Player & {
      prototype: {
        loadVideoById: (videoId: string) => void;
      };
    };
  }
}

export interface YouTubePlayer {
  loadVideoById(videoId: string): unknown;
  playVideo(): void;
  pauseVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getCurrentTime(): number;
  getDuration(): number;
  getVolume(): number;
  setVolume(volume: number): void;
  mute(): void;
  unMute(): void;
}

export interface YouTubeEvent {
  target: YouTubePlayer;
  data: number;
}

export interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  skipDuration?: number;
}

export interface VideoTimeDisplayProps {
  currentTime: number;
  duration: number;
}

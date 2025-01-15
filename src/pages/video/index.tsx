import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
import YouTubePlayer from "@/components/video";

interface IVideo {
  id: string;
  title: string;
  youtubeId: string;
  desc: string;
}

const videos: IVideo[] = [
  {
    id: "Lesson 1",
    title: "Graphic Design Basics",
    desc: "So you want to be a graphic designer? Learn the fundamentals of design in this graphic design basics course",
    youtubeId: "GQS7wPujL2k",
  },
  {
    id: "Lesson 2",
    title: "The Principles of Design",
    desc: "Design principles are a set of rules that can help you create visually pleasing work",
    youtubeId: "9EPTM91TBDU",
  },
  {
    id: "Lesson 3",
    title: "The Basic Elements of Design",
    desc: "Every design is made of basic elements that are then combined and built into a structure to ultimately communicate a message. In this course, we’ll dive into the basic elements of design that can help you improve your content creation skills and communicate successfully",
    youtubeId: "MshxnTQW4qU",
  },
  {
    id: "Lesson 4",
    title: "Rules of Composition",
    desc: "Whether you work in design, photography, or art, you need to know how to arrange elements to create harmonious designs",
    youtubeId: "r6LPNRVhGKA",
  },
  {
    id: "Lesson 5",
    title: "Design Styles Across the Decades",
    desc: "The only constant in the design world is the changing trends",
    youtubeId: "xfL2f_rMyiw",
  },
  {
    id: "Lesson 6",
    title: "Color Theory for Beginners",
    desc: "Understanding color theory can help you design the most basic but punchy designs",
    youtubeId: "2QTHs7QSR9o",
  },
  {
    id: "Lesson 7",
    title: "65 Design Terms You Should Know",
    desc: "Design has its own language, and understanding key design terms will help you communicate your ideas clearly",
    youtubeId: "PIa17rsNSEE",
  },
  {
    id: "Lesson 8",
    title: "The Ultimate Guide to Typography",
    desc: "The Ultimate Guide to Typography ",
    youtubeId: "yAuUDyUC-GM",
  },
  {
    id: "Lesson 9",
    title: "The Psychology of Fonts",
    desc: "The Psychology of Fonts",
    youtubeId: "VqfGq8wJ968",
  },
  {
    id: "Lesson 10",
    title: "Magazine Cover Design With Matt",
    desc: "Magazine Cover Design With Matt ",
    youtubeId: "VqfGq8wJ968",
  },
  {
    id: "Lesson 11",
    title: "What Is Visual Hierarchy?",
    desc: "What Is Visual Hierarchy?",
    youtubeId: "DBHBmeNhYrY",
  },
  {
    id: "Lesson 12",
    title: "What Makes a Great Movie Logo?",
    desc: "What Makes a Great Movie Logo?",
    youtubeId: "TrkiAsCJPJo",
  },
];
const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState<IVideo | null>(videos[0]);

  return (
    <div className="flex flex-col">
      <div className="w-full h-[650px]">
        {currentVideo && (
          <YouTubePlayer
            videoId={currentVideo?.youtubeId}
            skipDuration={5}
            title="Example Video"
          />
        )}
      </div>

      {/* Playlist */}
      <div className="flex">
        <div className="w-2/3 p-7 bg-[var(--primary-color)] text-white">
          <h3 className="text-3xl uppercase font-extrabold mb-5 pl-7">
            {currentVideo && currentVideo?.id + `: ` + currentVideo?.title}
          </h3>
          <div className="bg-[var(--sub-color)] rounded-3xl p-7">
            <p>{currentVideo?.desc}</p>
            <br></br>
            <p>#GraphicDesign #LearnDesign #CreativeBasics #Euréka</p>
          </div>
        </div>
        <div className="w-1/3 flex-col flex gap-4 overflow-auto h-[500px] bg-[#d9d9d9] p-5">
          {videos.map((video: IVideo) => (
            <div
              key={video.id}
              className={`p-4 cursor-pointer bg-white hover:bg-[var(--sub-color)] hover:text-white rounded-[24px]
                      ${
                        currentVideo?.id === video.id
                          ? "!bg-[var(--sub-color)] text-white"
                          : ""
                      }`}
              onClick={() => setCurrentVideo(video)}
            >
              <div className="flex items-center gap-5 h-full">
                <div className="w-[150px] h-[150px] aspect-video bg-gray-200 rounded-[8px]">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <div className="flex flex-col h-full items-start justify-start">
                  <p className="font-semibold text-lg mb-2">
                    {video.id + `: ` + video.title}
                  </p>
                  <p className="font-base whitespace-normal line-clamp-3 text-xs">
                    {video.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;

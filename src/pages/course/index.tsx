"use client";
import { Card } from "@/components/card";
import { CarouselReview } from "@/components/carousel";
import InputComponent from "@/components/input";
import useAuth from "@/helper/useAuth";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const data = [
  {
    img: "/asset/cousrse-1.png",
  },
  {
    img: "/asset/cousrse-2.png",
  },
  {
    img: "/asset/cousrse-3.png",
  },
  {
    img: "/asset/cousrse-4.png",
  },
  {
    img: "/asset/cousrse-5.png",
  },
  {
    img: "/asset/cousrse-6.png",
  },
];

const dataTeacher = [
  {
    img: "/asset/avatar.png",
    name: "Huy Poster",
    desc: "Designer/Influencer",
  },
  {
    img: "/asset/avatar.png",
    name: "Royce Truong",
    desc: "Designer/VFX/Motion",
  },
  {
    img: "/asset/avatar.png",
    name: "Alexander Nguyen",
    desc: "Developer",
  },
];

const reviewData = [
  {
    img: "/asset/avatar.png",
    name: "Huy Poster",
    course: "Graduated Basic Course",
    desc: "This course is truly amazing! I’ve learned so many foundational concepts and how to apply them in practice. The instructors explain everything clearly and are very supportive.",
  },
  {
    img: "/asset/avatar.png",
    name: "Khoa Poster",
    course: "Graduated Basic Course",
    desc: "The practical exercises are incredibly helpful. Thanks to them, I’ve improved my skills and added some great pieces to my portfolio.",
  },
  {
    img: "/asset/avatar.png",
    name: "Huy Poster",
    course: "Graduated Basic Course",
    desc: "This course is truly amazing! I’ve learned so many foundational concepts and how to apply them in practice. The instructors explain everything clearly and are very supportive.",
  },
  {
    img: "/asset/avatar.png",
    name: "Khoa Poster",
    course: "Graduated Basic Course",
    desc: "The practical exercises are incredibly helpful. Thanks to them, I’ve improved my skills and added some great pieces to my portfolio.",
  },
  {
    img: "/asset/avatar.png",
    name: "Huy Poster",
    course: "Graduated Basic Course",
    desc: "This course is truly amazing! I’ve learned so many foundational concepts and how to apply them in practice. The instructors explain everything clearly and are very supportive.",
  },
  {
    img: "/asset/avatar.png",
    name: "Khoa Poster",
    course: "Graduated Basic Course",
    desc: "The practical exercises are incredibly helpful. Thanks to them, I’ve improved my skills and added some great pieces to my portfolio.",
  },
  {
    img: "/asset/avatar.png",
    name: "Huy Poster",
    course: "Graduated Basic Course",
    desc: "This course is truly amazing! I’ve learned so many foundational concepts and how to apply them in practice. The instructors explain everything clearly and are very supportive.",
  },
  {
    img: "/asset/avatar.png",
    name: "Khoa Poster",
    course: "Graduated Basic Course",
    desc: "The practical exercises are incredibly helpful. Thanks to them, I’ve improved my skills and added some great pieces to my portfolio.",
  },
  {
    img: "/asset/avatar.png",
    name: "Huy Poster",
    course: "Graduated Basic Course",
    desc: "This course is truly amazing! I’ve learned so many foundational concepts and how to apply them in practice. The instructors explain everything clearly and are very supportive.",
  },
  {
    img: "/asset/avatar.png",
    name: "Khoa Poster",
    course: "Graduated Basic Course",
    desc: "The practical exercises are incredibly helpful. Thanks to them, I’ve improved my skills and added some great pieces to my portfolio.",
  },
  {
    img: "/asset/avatar.png",
    name: "Huy Poster",
    course: "Graduated Basic Course",
    desc: "This course is truly amazing! I’ve learned so many foundational concepts and how to apply them in practice. The instructors explain everything clearly and are very supportive.",
  },
  {
    img: "/asset/avatar.png",
    name: "Khoa Poster",
    course: "Graduated Basic Course",
    desc: "The practical exercises are incredibly helpful. Thanks to them, I’ve improved my skills and added some great pieces to my portfolio.",
  },
];

const Course = () => {
  useAuth();

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const carouselRefTeacher = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout | undefined;

    const startAutoScroll = (
      carouselRef: React.RefObject<HTMLDivElement | null>
    ) => {
      scrollInterval = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          if (scrollLeft + clientWidth >= scrollWidth) {
            carouselRef.current.scrollTo({ left: 0 });
          } else {
            carouselRef.current.scrollBy({ left: 2, behavior: "smooth" });
          }
        }
      }, 20);
    };

    if (!isHovered) {
      startAutoScroll(carouselRef);
      startAutoScroll(carouselRefTeacher);
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isHovered]);

  const classHeadTeacher = `w-[250px] h-[250px] 2xl:w-[332px] 2xl:h-[332px] rounded-full -mb-[80px] z-10`;
  const classBodyTeacher = `flex items-center justify-center text-center flex-col bg-white w-[490px] h-[280px] 2xl:w-[540px] 2xl:h-[300px] rounded-[80px] pt-[80px]`;
  return (
    <div className="flex flex-col items-center w-full max-w-[1920px] gap-[100px]">
      <Image
        src="/asset/bg-course.png"
        alt="background image"
        layout="responsive"
        width={1920}
        height={6086}
        className="object-cover absolute top-0 left-0 z-0 w-full"
        priority
      />
      <div className="flex flex-col h-[800px] w-full items-center justify-center relative gap-9">
        <h1 className="text-[#b484de] text-[125px] z-10 font-black leading-none drop-shadow-5xl font-sans">
          Euréka
        </h1>
        <p className="text-white text-[50px] z-10 font-bold drop-shadow-5xl">
          Unlock Potential, Create Differently!
        </p>
        <Image
          src="/asset/course-earth.png"
          alt="background image"
          width={600}
          height={859}
          className=" absolute top-[6%] mx-auto z-1"
        />
        <Image
          src="/asset/course-rocket.png"
          alt="background image"
          width={272}
          height={212}
          className=" absolute top-[35%] 2xl:right-[12%] right-[2%] z-10"
        />
        <InputComponent />
      </div>
      <div className="flex items-center justify-center w-full relative gap-[100px]">
        <p className="font-normal text-white text-5xl text-center leading-none">
          <span className="font-bold">
            +300
            <br />
          </span>
          <span className="font-medium text-[32px]">Fresh Learners</span>
        </p>
        <svg
          className="w-[5px] h-full"
          width="5"
          height="150"
          viewBox="0 0 5 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.5"
            y1="1.09278e-07"
            x2="2.49999"
            y2="150"
            stroke="white"
            strokeWidth="5"
          />
        </svg>
        <p className=" font-normal text-white text-5xl text-center leading-none">
          <span className="font-bold">
            +9 <br />
          </span>
          <span className="font-medium text-[32px]">Years of Experience</span>
        </p>
        <svg
          className="w-[5px] h-full"
          width="5"
          height="150"
          viewBox="0 0 5 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.5"
            y1="1.09278e-07"
            x2="2.49999"
            y2="150"
            stroke="white"
            strokeWidth="5"
          />
        </svg>
        <p className="font-normal text-white text-5xl text-center tracking-[0] leading-none">
          <span className="font-bold">
            30+
            <br />
          </span>

          <span className="font-medium text-[32px]">Brand Partners</span>
        </p>
      </div>
      <div className="flex flex-col pt-[15vh] 2xl:pt-[10vh] w-full items-center justify-center relative">
        <h3 className="text-white text-[64px] z-10 font-bold leading-none">
          MEET OUR TEACHING STAFFS
        </h3>
        <div className="overflow-auto w-full flex">
          <div className="w-full flex items-end justify-start gap-10 h-[700px]">
            <div
              ref={carouselRefTeacher}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className=" relative flex gap-10 w-full h-full overflow-auto course-custom pb-10"
            >
              {[...dataTeacher, ...dataTeacher].map(
                ({ img, name, desc }, index) => {
                  return (
                    <div
                      key={uuidv4()}
                      className="relative flex flex-col items-center justify-end hover:scale-105 transition-transform duration-300 transform cursor-pointer"
                    >
                      <div className={`${classHeadTeacher} `}>
                        <Image
                          src={img}
                          alt="background image"
                          layout="responsive"
                          width={333}
                          height={333}
                          className="object-cover top-0 left-0 z-0 w-full"
                          priority
                        />
                      </div>

                      <div className={`${classBodyTeacher} `}>
                        <h3 className="text-[36px] font-bold">{name}</h3>
                        <p className="text-[20px]">{desc}</p>
                        <p className="flex items-center justify-center w-[100px] text-[36px] font-bold gap-1">
                          5.0
                          <Image
                            src="/asset/star.png"
                            alt="background image"
                            layout="responsive"
                            width={30}
                            height={30}
                            className="!w-[30px] !h-[30px]"
                          />
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[1000px] w-full items-center justify-center relative gap-5">
        <h3 className="text-white text-[64px] z-10 font-bold leading-none">
          MOST POPULAR COURSES
        </h3>
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full h-[632px] bg-[var(--primary-color)] mt-[44px] flex items-center justify-start course-custom overflow-auto"
        >
          <div className="flex gap-[40px] justify-center px-[60px] ">
            {[...data, ...data].map(({ img }, index) => (
              <Card
                onClick={() => router.push("/video")}
                key={uuidv4()}
                img={img}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[600px] w-full items-center justify-center relative gap-[100px]">
        <h3 className="text-white text-[64px] z-10 font-bold leading-none">
          REVIEW FROM LEARNERS
        </h3>

        <CarouselReview data={reviewData} arrowClass="w-[20px]" />
      </div>
      <div className="flex flex-col bg-white w-full items-center justify-center relative p-[80px] pb-[120px] gap-20">
        <div className="flex justify-center items-center w-full gap-5">
          <div className="w-[110px] h-[110px] rounded-full bg-[var(--primary-color)] flex items-center justify-center">
            <p className="text-[64px] text-white font-extrabold">3</p>
          </div>
          <h2 className=" text-[40px] z-10 font-black">
            THINGS THAT EURÉKA WILL BRING TO YOU
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-[50px]">
          <p className=" text-[32px] text-center font-semibold w-[80%]">
            <span className="text-[var(--primary-color)] font-extrabold">
              Personalized Learning Paths:
            </span>
            <br></br>Euréka designs flexible learning paths tailored to each
            student’s goals, strengths, and pace. This ensures optimal skill
            development that aligns with their specific needs.
          </p>

          <p className=" text-[32px] text-center font-semibold w-[80%]">
            <span className="text-[var(--primary-color)] font-extrabold">
              Connecting a Creative Community:
            </span>
            <br></br>Euréka is more than just a learning platform; it’s a
            community for graphic designers where learners can network, share
            ideas, and collaborate on real-world projects, creating an engaging
            and connected learning experience.
          </p>
          <p className=" text-[32px] text-center font-semibold w-[80%]">
            <span className="text-[var(--primary-color)] font-extrabold">
              Personalized Learning Paths:
            </span>
            <br></br>Euréka designs flexible learning paths tailored to each
            student’s goals, strengths, and pace. This ensures optimal skill
            development that aligns with their specific needs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Course;

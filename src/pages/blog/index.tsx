import { UserCard } from "@/components/card";
import CarouselTransition from "@/components/carousel";
import Image from "next/image";
const data = [
  {
    src: "/asset/blog-carousel-1.png",
  },
  {
    src: "/asset/blog-carousel-1.png",
  },
  {
    src: "/asset/blog-carousel-1.png",
  },
  {
    src: "/asset/blog-carousel-1.png",
  },
];
const Blog = () => {
  return (
    <div className="flex items-center w-full max-w-[1920px]">
      <div className="flex flex-col w-full h-[745px] relative">
        <CarouselTransition data={data} customClass="absolute top-0 left-0" />
        <h1 className="text-[65px] font-bold absolute top-[25%] left-[6%] text-white leading-tight drop-shadow-3xl">
          Arts <br></br> Of <br></br>The Week
        </h1>
        <div className="w-[30%] h-[65%] absolute top-[17%] right-10 bg-white rounded-[10%] py-10 pl-8 pr-5 flex flex-col gap-5 overflow-auto">
          <div className="w-full h-full flex flex-col gap-5 overflow-auto pr-10">
            {[
              {
                img: "/asset/course-number.png",
                title: "sadsdwda",
                text: "Really impressive! The way you used color and lighting in this design is very subtle, creating a sense of attraction and professionalism. This is a great inspiration for me, thank you for sharing!",
              },
              {
                img: "/asset/course-number.png",
                title: "sadsdwda",
                text: "Really impressive! The way you used color and lighting in this design is very subtle, creating a sense of attraction and professionalism. This is a great inspiration for me, thank you for sharing!",
              },
              {
                img: "/asset/course-number.png",
                title: "sadsdwda",
                text: "Really impressive! The way you used color and lighting in this design is very subtle, creating a sense of attraction and professionalism. This is a great inspiration for me, thank you for sharing!",
              },
              {
                img: "/asset/course-number.png",
                title: "sadsdwda",
                text: "Really impressive! The way you used color and lighting in this design is very subtle, creating a sense of attraction and professionalism. This is a great inspiration for me, thank you for sharing!",
              },
            ].map((item, index) => {
              return (
                <UserCard
                  key={index}
                  img={item.img}
                  text={item.text}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
        <div className="flex px-5 absolute bottom-[8%] right-[3%] gap-5">
          <Image
            src="/asset/rating.png"
            alt="background image"
            width={189} // Kích thước gốc của ảnh
            height={59} // Kích thước gốc của ảnh
          />
          <Image
            src="/asset/comment.png"
            alt="background image"
            width={271} // Kích thước gốc của ảnh
            height={59} // Kích thước gốc của ảnh
          />
        </div>
      </div>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></div>
    </div>
  );
};
export default Blog;

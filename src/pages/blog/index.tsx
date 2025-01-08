import { BlogCard, UserCard } from "@/components/card";
import { CarouselTransition } from "@/components/carousel";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

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

const blogData = [
  {
    postSrc: "/asset/blog-img-1.png",
    authorSrc: "/asset/avatar.png",
    name: "Khoa TVK",
    course: "Graduated Capcut Course",
    desc: "This artwork captures the enchanting essence of a magical hideaway—a treehouse that feels alive with warmth and wonder. Each glowing lantern, delicate flower, and intricate wooden detail was designed to immerse viewers in a serene, storybook-like world. It’s a celebration of imagination, where nature and fantasy blend seamlessly into a cozy, dreamlike retreat.",
  },
  {
    postSrc: "/asset/blog-img-2.png",
    authorSrc: "/asset/avatar.png",
    name: "Khoa TVK",
    course: "Graduated Capcut Course",
    desc: "This artwork captures the enchanting essence of a magical hideaway—a treehouse that feels alive with warmth and wonder. Each glowing lantern, delicate flower, and intricate wooden detail was designed to immerse viewers in a serene, storybook-like world. It’s a celebration of imagination, where nature and fantasy blend seamlessly into a cozy, dreamlike retreat.",
  },
  {
    postSrc: "/asset/blog-img-3.png",
    authorSrc: "/asset/avatar.png",
    name: "Khoa TVK",
    course: "Graduated Capcut Course",
    desc: "This artwork captures the enchanting essence of a magical hideaway—a treehouse that feels alive with warmth and wonder. Each glowing lantern, delicate flower, and intricate wooden detail was designed to immerse viewers in a serene, storybook-like world. It’s a celebration of imagination, where nature and fantasy blend seamlessly into a cozy, dreamlike retreat.",
  },
  {
    postSrc: "/asset/blog-img-4.png",
    authorSrc: "/asset/avatar.png",
    name: "Khoa TVK",
    course: "Graduated Capcut Course",
    desc: "This artwork captures the enchanting essence of a magical hideaway—a treehouse that feels alive with warmth and wonder. Each glowing lantern, delicate flower, and intricate wooden detail was designed to immerse viewers in a serene, storybook-like world. It’s a celebration of imagination, where nature and fantasy blend seamlessly into a cozy, dreamlike retreat.",
  },
  {
    postSrc: "/asset/blog-img-1.png",
    authorSrc: "/asset/avatar.png",
    name: "Khoa TVK",
    course: "Graduated Capcut Course",
    desc: "This artwork captures the enchanting essence of a magical hideaway—a treehouse that feels alive with warmth and wonder. Each glowing lantern, delicate flower, and intricate wooden detail was designed to immerse viewers in a serene, storybook-like world. It’s a celebration of imagination, where nature and fantasy blend seamlessly into a cozy, dreamlike retreat.",
  },
  {
    postSrc: "/asset/blog-img-2.png",
    authorSrc: "/asset/avatar.png",
    name: "Khoa TVK",
    course: "Graduated Capcut Course",
    desc: "This artwork captures the enchanting essence of a magical hideaway—a treehouse that feels alive with warmth and wonder. Each glowing lantern, delicate flower, and intricate wooden detail was designed to immerse viewers in a serene, storybook-like world. It’s a celebration of imagination, where nature and fantasy blend seamlessly into a cozy, dreamlike retreat.",
  },
];
const Blog = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1920px]">
      <div className="flex flex-col w-full h-[745px] relative">
        <CarouselTransition
          data={data}
          customClass="bg-[var(--primary-color)]"
        />
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
            ].map((item) => {
              return (
                <UserCard
                  key={uuidv4()}
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
            src="/asset/Rating.png"
            alt="background image"
            width={189} // Kích thước gốc của ảnh
            height={59} // Kích thước gốc của ảnh
          />
          <Image
            src="/asset/Comment.png"
            alt="background image"
            width={271} // Kích thước gốc của ảnh
            height={59} // Kích thước gốc của ảnh
          />
        </div>
      </div>
      <div className="flex items-center justify-center bg-[var(--primary-color)] w-full">
        <div className="bg-white w-[85%] px-2 py-10 -mt-10 z-10 rounded-[50px] flex items-center justify-between flex-wrap gap-10 ">
          <div className=" overflow-y-auto h-[800px] flex items-center justify-between flex-wrap gap-10 px-10">
            {blogData.map(({ postSrc, authorSrc, name, course, desc }) => {
              return (
                <div className="flex flex-col gap-5 w-[48%]">
                  <BlogCard
                    customClass="w-full"
                    key={uuidv4()}
                    postSrc={postSrc}
                    authorSrc={authorSrc}
                    name={name}
                    course={course}
                    desc={desc}
                  />
                  <div className="flex gap-5 w-full">
                    <Image
                      src="/asset/Rating.png"
                      alt="background image"
                      width={189} // Kích thước gốc của ảnh
                      height={59} // Kích thước gốc của ảnh
                    />
                    <Image
                      src="/asset/Comment.png"
                      alt="background image"
                      width={271} // Kích thước gốc của ảnh
                      height={59} // Kích thước gốc của ảnh
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;

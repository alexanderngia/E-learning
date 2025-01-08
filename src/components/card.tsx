import Image from "next/image";

interface CardProps {
  img?: string;
  text?: string;
  title?: string;
  name?: string;
  course?: string;
  desc?: string;
  postSrc?: string;
  authorSrc?: string;
  customClass?: string;
}
export const Card: React.FC<CardProps> = ({ img }) => {
  return (
    <div
      className={` text-white rounded-[24px] text-[20px] relative lg:w-[400px] lg:h-[400px] 3xl:w-[520px] 3xl:h-[520px] hover:scale-110 transition-transform duration-300 transform cursor-pointer`}
    >
      {img && (
        <Image
          src={img}
          alt="background image"
          width={520} // Kích thước gốc của ảnh
          height={520} // Kích thước gốc của ảnh
          className=" absolute top-0 left-0 z-0 "
        />
      )}
    </div>
  );
};

export const UserCard: React.FC<CardProps> = ({ img, text, title }) => {
  return (
    <div className={`flex justify-between items-start text-black `}>
      {img && (
        <Image
          src={img}
          alt="background image"
          width={42} // Kích thước gốc của ảnh
          height={42} // Kích thước gốc của ảnh
          className=""
        />
      )}
      <p className="w-[85%] text-sm">
        <span className="font-bold">{title}</span>
        <br></br>
        {text}
      </p>
    </div>
  );
};

export const ReviewCard: React.FC<CardProps> = ({
  img,
  name,
  course,
  desc,
}) => {
  return (
    <div
      className={`flex justify-between items-center text-white w-[95%] h-[328px] bg-[var(--primary-color)] rounded-[60px] p-[30px] `}
    >
      <div className="flex flex-col items-center justify-center w-fit h-full gap-1">
        {img && (
          <Image
            src={img}
            alt="background image"
            width={135} // Kích thước gốc của ảnh
            height={135} // Kích thước gốc của ảnh
            className=""
          />
        )}
        <p className="font-bold text-[32px]">{name}</p>
        <p className="text-base  font-thin">{course}</p>
      </div>
      <div className="border-l-4 border-white w-[2px] h-[90%]"></div>
      <div className="flex flex-col w-[65%] h-full justify-center">
        <div className="w-[90%] h-[70%] flex items-center justify-start">
          <p className="w-[100%] text-[24px]">{desc}</p>
        </div>
        <p className="flex items-center justify-center w-[100px] text-[36px] text-black font-bold gap-1">
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
};

export const BlogCard: React.FC<CardProps> = ({
  name,
  course,
  desc,
  postSrc,
  authorSrc,
  customClass,
}) => {
  return (
    <div
      className={`flex justify-between items-center text-white w-[95%] h-[328px] bg-[var(--primary-color)] rounded-[60px] p-[30px] ${customClass} gap-5`}
    >
      <div className="flex flex-col items-center justify-center w-fit h-full">
        {postSrc && (
          <Image
            src={postSrc}
            alt="background image"
            width={253}
            height={253}
            className=""
          />
        )}
      </div>
      <div className="h-full w-[60%]">
        <div className="flex flex-col h-full justify-center gap-5">
          <div className="w-full h-[20%] flex items-center justify-between">
            <div className="w-[70%] flex items-center gap-3">
              <Image
                src="/asset/avatar.png"
                alt="background image"
                layout="responsive"
                width={50}
                height={50}
                className="!w-[50px] !h-[50px]"
              />
              <div>
                <p className="w-[100%] text-[20px] font-bold">{name}</p>
                <p className="w-[100%] text-[12px] font-extralight">{course}</p>
              </div>
            </div>

            <div className="flex items-center justify-center bg-white rounded-full p-1 pl-3 pr-2">
              <Image
                src="/asset/blog-tool.png"
                alt="background image"
                layout="responsive"
                width={50}
                height={50}
                className="!w-[79px] !h-[44px]"
              />
            </div>
          </div>
          <div className="w-full h-[60%] flex items-center justify-start">
            <p className="w-[100%] text-[15px]">{desc}</p>
          </div>
          <p className="flex items-center justify-center w-[140px] text-black font-bold gap-1">
            <Image
              src="/asset/star.png"
              alt="background image"
              layout="responsive"
              width={25}
              height={25}
              className="!w-[25px] !h-[25px]"
            />
            <Image
              src="/asset/star.png"
              alt="background image"
              layout="responsive"
              width={25}
              height={25}
              className="!w-[25px] !h-[25px]"
            />{" "}
            <Image
              src="/asset/star.png"
              alt="background image"
              layout="responsive"
              width={25}
              height={25}
              className="!w-[25px] !h-[25px]"
            />{" "}
            <Image
              src="/asset/star.png"
              alt="background image"
              layout="responsive"
              width={25}
              height={25}
              className="!w-[25px] !h-[25px]"
            />{" "}
            <Image
              src="/asset/star.png"
              alt="background image"
              layout="responsive"
              width={25}
              height={25}
              className="!w-[25px] !h-[25px]"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

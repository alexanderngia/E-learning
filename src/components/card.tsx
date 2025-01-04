import Image from "next/image";

interface CardProps {
  img: string;
  text?: string;
  title?: string;
}
export const Card: React.FC<CardProps> = ({ img }) => {
  return (
    <div
      className={` text-white rounded-[24px] text-[20px] relative lg:w-[400px] lg:h-[400px] 3xl:w-[520px] 3xl:h-[520px] hover:scale-110 transition-transform duration-300 transform cursor-pointer`}
    >
      <Image
        src={img}
        alt="background image"
        width={520} // Kích thước gốc của ảnh
        height={520} // Kích thước gốc của ảnh
        className=" absolute top-0 left-0 z-0 "
      />
    </div>
  );
};

export const UserCard: React.FC<CardProps> = ({ img, text, title }) => {
  return (
    <div className={`flex justify-between items-start text-black `}>
      <Image
        src={img}
        alt="background image"
        width={42} // Kích thước gốc của ảnh
        height={42} // Kích thước gốc của ảnh
        className=""
      />
      <p className="w-[85%] text-sm">
        <span className="font-bold">{title}</span>
        <br></br>
        {text}
      </p>
    </div>
  );
};

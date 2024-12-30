import Image from "next/image";
import { useRouter } from "next/router";
interface ButtonProps {
  children: string;
  customClass?: string;
  onClick?: any;
  img?: string;
  customImg?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  customClass,
  onClick,
  img,
  customImg,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--primary-color)] text-white py-[6px] px-[50px] rounded-[24px] border-[3px] border-[#BD71FF] text-[20px] hover:bg-[var(--sub-color)] ${customClass}`}
    >
      {img && (
        <Image
          className={customImg}
          src={img}
          alt={img}
          width={30}
          height={30}
        />
      )}
      {children}
    </button>
  );
};

export default Button;

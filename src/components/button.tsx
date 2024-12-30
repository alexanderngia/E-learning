interface ButtonProps {
  children: string;
  customClass?: string;
}
const Button: React.FC<ButtonProps> = ({ children, customClass }) => {
  return (
    <button
      className={`bg-[var(--primary-color)] text-white py-[6px] px-[50px] rounded-[24px] border-[3px] border-[#BD71FF] text-[20px] hover:bg-[var(--sub-color)] ${customClass}`}
    >
      {children}
    </button>          
  );
};

export default Button;

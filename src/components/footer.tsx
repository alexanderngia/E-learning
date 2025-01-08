interface FooterProps {
  customClass: string;
}
const Footer: React.FC<FooterProps> = ({ customClass }) => {
  return <footer className={`${customClass}`}>Footer</footer>;
};

export default Footer;

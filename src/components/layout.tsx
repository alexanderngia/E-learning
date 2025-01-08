import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  customClass: string;
}

const Layout: React.FC<LayoutProps> = ({ children, customClass }) => {
  return (
    <>
      <Header customClass={customClass} />
      <main className={`flex justify-center ${customClass}`}>{children}</main>
      <Footer customClass={customClass} />
    </>
  );
};
export default Layout;

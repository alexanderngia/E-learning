import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex justify-center">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;

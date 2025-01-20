import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
  customClass: string;
}

const Layout: React.FC<LayoutProps> = ({ children, customClass }) => {
  const { pathname } = useRouter();

  const footerProps = {
    email: "info@eureka.com",
    phone: "123-456-7890",
    socialLinks: [
      { platform: "/asset/fb.png", url: "#" },
      { platform: "/asset/insta.png", url: "#" },
      { platform: "/asset/gg.png", url: "#" },
      { platform: "/asset/x.png", url: "#" },
      // Add other social links
    ],
  };
  return (
    <>
      <Header customClass={customClass} />
      <main className={`flex justify-center ${customClass}`}>{children}</main>
      {pathname === "/" && (
        <Footer {...footerProps} customClass={`${customClass} flex w-full px-5 gap-4 justify-between bg-black pt-20`} />
      )}
    </>
  );
};
export default Layout;

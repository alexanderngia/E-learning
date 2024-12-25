import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();
  const isActive = (path: string) =>
    pathname === path ? "bg-[var(--primary-color)] text-white" : "";

  const navItems = "px-[20px] py-[16px] rounded-[10px]";
  return (
    <header className="flex justify-between items-center w-full max-w-[1920px] pl-[7.7%] pr-[2%] h-[80px]">
      <Image src="/asset/Logo.png" width={320} height={80} alt="logo" />
      <nav>
        <ul className="flex gap-[50px]">
          <Link href="/">
            <li className={`${navItems} ${isActive("/")}`}>Home</li>
          </Link>
          <Link href="/course">
            <li className={`${navItems} ${isActive("/course")}`}>Course</li>
          </Link>
          <Link href="/blog">
            <li className={`${navItems} ${isActive("/blog")}`}>Blog</li>
          </Link>
          <Link href="/about">
            <li className={`${navItems} ${isActive("/about")}`}>About</li>
          </Link>
        </ul>
      </nav>
      <div className="flex gap-[55px]">
        <Button>Sign in</Button>
        <Button>Sign up</Button>
      </div>
    </header>
  );
};

export default Header;

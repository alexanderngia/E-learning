import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "./formAccount";

const Header = () => {
  const [openForm, setopenForm] = useState(false);
  const [openFormSignUp, setOpenFormSignUp] = useState(false);

  const { pathname } = useRouter();
  console.log(pathname, "pathname");
  const isActive = (path: string) =>
    pathname === path
      ? "bg-[var(--primary-color)] text-white hover:bg-[var(--sub-color)]"
      : "hover:bg-[var(--sub-color)] hover:text-white";

  const navItems = "px-[20px] py-[16px] rounded-[10px]";
  return (
    <header className="flex justify-between items-center w-full max-w-[1920px] pl-[7.7%] pr-[2%] h-[80px] bg-white z-10 absolute top-0 left-0">
      <Link href="/">
        <Image
          src="/asset/Logo.png"
          width={320}
          height={80}
          alt="logo"
          priority
        />
      </Link>

      <nav>
        <ul className="flex gap-[30px]">
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
      <div className="flex gap-[20px] relative">
        {pathname !== "/account" && (
          <>
            <Button onClick={() => setopenForm(true)}>Sign in</Button>
            <Button
              onClick={() => {
                setopenForm(true);
                setOpenFormSignUp(true);
              }}
            >
              Sign up
            </Button>
            {openForm && (
              <Form
                signUp={openFormSignUp ? true : false}
                onClickClose={() => {
                  setopenForm(false);
                  setOpenFormSignUp(false);
                }}
              />
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

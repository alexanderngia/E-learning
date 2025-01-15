import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getSessionStorage } from "../helper/sessionStorage";
import Button from "./button";
import Form from "./formAccount";

interface HeaderProps {
  customClass: string;
}

const Header: React.FC<HeaderProps> = ({ customClass }) => {
  const [openForm, setopenForm] = useState(false);
  const [openFormSignUp, setOpenFormSignUp] = useState(false);
  const { pathname } = useRouter();

  const isActive = (path: string) =>
    pathname === path
      ? "bg-[var(--primary-color)] text-white hover:bg-[var(--sub-color)]"
      : "hover:bg-[var(--sub-color)] hover:text-white";

  const navItems = "px-[20px] py-[16px] rounded-[10px]";
  const disableOtherLink = pathname === "/" ? "hidden" : "";
  return (
    <header
      className={`flex justify-between items-center w-full pl-[7.7%] pr-[2%] h-[80px] bg-white z-10 absolute top-0 left-0 ${customClass}`}
    >
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
            <li
              className={`${navItems} ${isActive(
                "/"
              )} ${disableOtherLink}`}
            >
              Home
            </li>
          </Link>
          <Link href="/course">
            <li
              className={`${navItems} ${isActive(
                "/course"
              )} ${disableOtherLink}`}
            >
              Course
            </li>
          </Link>
          <Link href="/blog">
            <li
              className={`${navItems} ${isActive("/blog")} ${disableOtherLink}`}
            >
              Blog
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${navItems} ${isActive(
                "/about"
              )} ${disableOtherLink}`}
            >
              About
            </li>
          </Link>
        </ul>
      </nav>
      <div className="flex gap-[20px] relative">
        {pathname === "/" && (
          <>
            <Button
              onClick={() => {
                setopenForm(!openForm);
                setOpenFormSignUp(false);
              }}
            >
              Sign in
            </Button>
            <Button
              onClick={() => {
                setopenForm(!openForm);
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
        {pathname !== "/" && (
          <Link href="/account">
            <Image
              src="/asset/avatar.png"
              width={50}
              height={50}
              alt="logo"
              priority
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

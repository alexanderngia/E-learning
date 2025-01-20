// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import InputComponent from "./input";

interface FooterProps {
  customClass?: string;
  email?: string;
  phone?: string;
  socialLinks?: SocialLink[];
}

// types.ts
type SocialLink = {
  platform: string;
  url: string;
};

const Footer: React.FC<FooterProps> = ({
  email,
  phone,
  socialLinks,
  customClass,
}) => {
  return (
    <footer className={`${customClass} `}>
      {/* Top bar */}
      <div className="px-4 w-[25%]">
        <div className="flex justify-between flex-col text-xl gap-5">
          <Link href="/" className="flex items-center">
            <div className="h-[72px] w-[316px]">
              <Image
                src="/asset/logo-white.png"
                alt="Eureka"
                width={316}
                height={72}
                className="object-contain"
              />
            </div>
          </Link>
          <div className="flex w-full space-x-3">
            <div className="flex flex-col gap-5 pl-9">
              <p className="text-white">{email}</p>
              <p className="text-white">{phone}</p>
              <p className="text-white">CONNECT WITH US</p>
              <div className="flex gap-8">
                {socialLinks &&
                  socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="w-[40px] h-[40px] flex items-center justify-center">
                        <Image
                          src={link.platform}
                          alt="Eureka"
                          width={50}
                          height={50}
                          className="object-contain"
                        />

                        {/* Add other social icons as needed */}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="flex justify-between p-4 w-1/3 flex-col">
        <nav className="flex w-full justify-between">
          <Link
            href="/"
            className="text-white hover:text-gray-300 text-xl font-bold"
          >
            Home
          </Link>
          <div className="flex flex-col text-white gap-5">
            <Link
              href="/courses"
              className="text-white hover:text-gray-300 text-xl font-bold"
            >
              Courses
            </Link>
            <p>Basic</p>
            <p>Intermediate</p>
            <p>Advanced</p>
            <p>Video</p>
            <p>Personal Course</p>
          </div>
          <div className="flex flex-col text-white gap-5">
            <Link
              href="/blog"
              className="text-white hover:text-gray-300 text-xl font-bold"
            >
              Blog
            </Link>
            <p>Art Community</p>
            <p>Personal Blog</p>
          </div>

          <Link
            href="/about"
            className="text-white hover:text-gray-300 text-xl font-bold"
          >
            About
          </Link>
        </nav>
        <p className="text-white text-base mt-20 text-center">
          Euréka © 2025 Inspire. Create. Thrive. All rights reserved.
        </p>
      </div>
      <div className="p-4 w-1/3">
        <div className="flex w-full flex-col gap-5">
          <p className="text-3xl font-bold text-white">BE CREATIVE NOW !</p>
          <p className="text-white text-base">
            Get 10% off and stay up-to-date to our new courses, events,
            workshops, promotions from today
          </p>
          <InputComponent customClass="w-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

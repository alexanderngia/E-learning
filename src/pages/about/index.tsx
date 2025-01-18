import useAuth from "@/helper/useAuth";
import Image from "next/image";
import { useRouter } from "next/router";

const About = () => {
  useAuth();
  const router = typeof window !== "undefined" ? useRouter() : null;
  const navigateToPage = () => {
    if (router) {
      router.push("/course"); // Replace "/target-page" with the desired route
    }
  };
  return (
    <div className="flex flex-col items-center w-full max-w-[1920px] font-montserrat bg-[var(--primary-color)] mt-[80px] gap-5 py-9">
      <h1 className="text-[64px] font-extrabold text-white mt-5">About</h1>
      <div className="h-[232px] w-[232px]">
        <Image
          src="/asset/avatar.png"
          alt="background image"
          width={230}
          height={230}
          className="w-full h-full"
          priority
        />
      </div>
      <div className="bg-white rounded-full flex items-center flex-col px-9 py-2">
        <h2 className="text-[36px] font-bold">Royce Truong</h2>
        <p className="text-[20px]">Founder</p>
      </div>
      <p className="text-white w-[60%] text-[25px]">
        At Euréka, we believe that creativity knows no bounds. As an innovative
        e-learning platform for graphic design, we are dedicated to empowering
        learners with the skills, tools, and inspiration needed to thrive in the
        ever-evolving design industry.
      </p>
      <p className="text-white w-[60%] text-[30px] font-extrabold">
        Join Euréka, where passion meets purpose, and let your creativity soar!
      </p>
      <button
        onClick={navigateToPage}
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center underline text-white font-semibold hover:text-[20px] transition-all duration-150"
      >
        Back to course
      </button>
    </div>
  );
};
export default About;

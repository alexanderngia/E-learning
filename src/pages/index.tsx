import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/router";
const Home = () => {
  const router = typeof window !== "undefined" ? useRouter() : null;
  const navigateToPage = () => {
    if (router) {
      router.push("/course"); // Replace "/target-page" with the desired route
    }
  };
  return (
    <div className="flex flex-col items-center w-full max-w-[1920px] relative">
      <div className="w-full h-screen relative px-[10%] py-[19%]">
        <Image
          src="/asset/hero-img.jpg"
          width={1920}
          height={1080}
          alt="hero image"
          className="absolute top-0 left-0 z-0"
          priority
        />
        <div className="flex flex-col z-1 absolute gap-[20px]">
          <p className="text-[50px] text-white font-bold drop-shadow-3xl leading-none">
            Better ways to learn
          </p>
          <h1 className="text-[125px] text-white font-bold drop-shadow-4xl leading-none">
            Graphics Design
          </h1>
          <p className="w-[505px] text-white bg-black bg-opacity-[80%] rounded-[12px] p-[20px] leading-normal">
            Welcome to our unique graphic design e-learning platform! Here, we
            not only teach you how to use the tools, but also inspire you to
            create your own unique designs.
          </p>
          <Button
            onClick={navigateToPage}
            customClass="w-[285px] text-[32px] rounded-[56px] py-[12px]"
          >
            enroll now!
          </Button>
        </div>
      </div>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></div>
    </div>
  );
};
export default Home;

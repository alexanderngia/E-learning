import Button from "@/components/button";
import useAuth from "@/helper/useAuth";
import Image from "next/image";
const Home = () => {
  useAuth();
  // const router = typeof window !== "undefined" ? useRouter() : null;
  // const navigateToPage = () => {
  //   if (router) {
  //     router.push("/course"); // Replace "/target-page" with the desired route
  //   }
  // };
  return (
    <div className="flex flex-col items-center w-full max-w-[1920px] relative">
      <div className="relative w-full h-auto aspect-video">
        <Image
          src="/asset/hero-img.jpg"
          alt="hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center px-[10%] gap-5">
          <p className="text-4xl md:text-5xl text-white font-bold drop-shadow-3xl leading-none">
            Better ways to learn
          </p>
          <h1 className="text-6xl md:text-8xl text-white font-bold drop-shadow-4xl leading-none">
            Graphics Design
          </h1>
          <p className="max-w-lg text-white bg-black/80 rounded-xl p-5 leading-normal">
            Welcome to our unique graphic design e-learning platform! Here, we
            not only teach you how to use the tools, but also inspire you to
            create your own unique designs.
          </p>
          {/* <Button
      onClick={navigateToPage}
      className="w-72 text-3xl rounded-full py-3"
    >
      enroll now!
    </Button> */}
        </div>
      </div>
    </div>
  );
};
export default Home;

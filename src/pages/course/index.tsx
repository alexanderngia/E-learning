import Image from "next/image";

const Course = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1920px]">
      <Image
        src="/asset/bg-course.png"
        alt="background image"
        layout="responsive" // Tự động điều chỉnh kích thước theo container
        width={1920} // Kích thước gốc của ảnh
        height={6086} // Kích thước gốc của ảnh
        className="object-cover absolute top-0 left-0 z-0"
        priority
      />
      <div className="flex flex-col h-screen w-screen items-center justify-center relative">
        <h1 className="text-[var(--primary-color)] text-[125px] z-10 font-black">
          Euréka
        </h1>
        <p className="text-white text-[50px] z-10 font-bold">
          Unlock Potential, Create Differently!
        </p>
        <Image
          src="/asset/bg-course-hero.png"
          alt="background image"
          width={484} // Kích thước gốc của ảnh
          height={484} // Kích thước gốc của ảnh
          className=" absolute bottom-0 right-0 z-10"
        />
      </div>
      <div className="flex flex-col bg-white w-screen items-center justify-center relative pt-10 pl-10 pr-10 pb-[120px] gap-20">
        <div className="flex justify-center items-center w-full gap-5">
          <Image
            src="/asset/course-number.png"
            width={108}
            height={110}
            alt="number image"
          />
          <h2 className=" text-[40px] z-10 font-black">
            THINGS THAT EURÉKA WILL BRING TO YOU
          </h2>
        </div>
        <div className="flex justify-center items-center w-full gap-5">
          <p className=" text-[32px] text-center font-semibold w-[556px]">
            <span className="text-[var(--primary-color)] font-extrabold">
              Ignite Creativity
            </span>
            <br></br>Discover your unique style and unleash your creative
            potential.
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-[170px]">
          <p className=" text-[32px] text-center font-semibold w-[556px]">
            <span className="text-[var(--primary-color)] font-extrabold">
              Learn Your Way
            </span>
            <br></br>Flexible courses tailored to your pace and goals.
          </p>
          <p className=" text-[32px] text-center font-semibold w-[556px]">
            <span className="text-[var(--primary-color)] font-extrabold">
              Expert Guidance
            </span>
            <br></br>Get support and feedback from industry-leading mentors.
          </p>
        </div>
        <div className="flex justify-center items-center w-full gap-[60px]">
          <p className=" text-[32px] text-center font-semibold w-[556px]">
            <span className="text-[var(--primary-color)] font-extrabold">
              Real-World Practice
            </span>
            <br></br>Build skills through hands-on projects and a professional
            portfolio.
          </p>
          <p className=" text-[32px] text-center font-semibold w-[556px]">
            <span className="text-[var(--primary-color)] font-extrabold">
              Join a Creative Community
            </span>
            <br></br>Connect, share ideas, and collaborate with fellow
            designers.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Course;

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
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></div>
    </div>
  );
};
export default Course;

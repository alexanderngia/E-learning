import Button from "@/components/button";
import { CarouselCourse } from "@/components/carousel";
import useAuth from "@/helper/useAuth";
import Image from "next/image";
import { useRouter } from "next/router";
const Account = () => {
  useAuth();

  const router = useRouter();
  const navigateToPage = (url: string) => {
    if (router) {
      router.push(url); // Replace "/target-page" with the desired route
    }
  };

  const skills = [
    { name: "Illustrators", progress: 25 },
    { name: "Photoshop", progress: 45 },
    { name: "After Effects", progress: 35 },
    { name: "Capcut", progress: 75 },
  ];

  const totalProgress = 64;
  const archiveProgress = 44;
  const unarchiveProgress = 64;
  const mentors = [
    {
      name: "Royce Truong",
      major: "Graphics Design",
      courseTitle: "Basic Graphics Design",
    },
    {
      name: "Royce Truong",
      major: "Graphics Design",
      courseTitle: "Basic Graphics Design",
    },
    {
      name: "Royce Truong",
      major: "Graphics Design",
      courseTitle: "Basic Graphics Design",
    },
  ];

  const courseData = [
    {
      img: "/asset/cousrse-1.png",
      course: "Graduated Basic Course",
      progress: 30,
    },
    {
      img: "/asset/cousrse-2.png",
      course: "Illustrators",
      progress: 80,
    },
    {
      img: "/asset/cousrse-3.png",
      course: "After Effects",
      progress: 80,
    },
    {
      img: "/asset/cousrse-4.png",
      course: "Capcut",
      progress: 60,
    },
  ];
  return (
    <div className="flex justify-center w-full max-w-[1920px] mt-[80px] bg-[var(--primary-color)] pt-20 gap-8 relative">
      <div className="flex flex-col items-center justify-center h-full w-[52%]">
        <div className="flex items-center justify-center gap-6 w-full">
          <div className="h-auto w-[25%]">
            <Image
              src="/asset/avatar.png"
              width={250}
              height={250}
              alt="avatar"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center w-[68%] p-5 rounded-3xl bg-white text-[17px] 2xl:text-[24px] gap-2">
            <p>
              Full name: <span className="font-bold">User Name</span>
            </p>
            <p>
              Day of birth: <span className="font-bold">01/01/2015</span>
            </p>
            <span className="flex flex-wrap gap-2">
              <p className="mr-2">Courses: </p>

              <p className=" text-sm flex px-3 py-1 text-white bg-[var(--sub-color)] rounded-full">
                Capcut
              </p>
              <p className="text-sm px-3 py-1 text-white bg-[var(--sub-color)] rounded-full">
                Graphic
              </p>
              <p className="text-sm px-3 py-1 text-white bg-[var(--sub-color)] rounded-full">
                Design
              </p>
              <p className="text-sm px-3 py-1 text-white bg-[var(--sub-color)] rounded-full">
                Photoshop
              </p>
              <p className="text-sm px-3 py-1 text-white bg-[var(--sub-color)] rounded-full">
                AI
              </p>
            </span>
          </div>
        </div>

        <div className="w-full mt-10">
          {/* Header Section */}
          <div className="bg-[#dc059e] text-white p-10 rounded-tl-[70px] rounded-tr-[70px] -mb-20">
            <div className="flex justify-between items-start ">
              <div className="pb-20">
                <h1 className="text-2xl font-bold mb-4 max-w-md">
                  SHARPEN YOUR SKILLS WITH PROFESSIONAL DESIGNS COURSES
                </h1>
                <p className="text-lg mb-4">Sale 15% until 25/1/2025</p>
              </div>
              <Button
                onClick={() => navigateToPage("/course")}
                customClass="bg-gray-800 text-white !px-4 py-3 rounded-full hover:bg-gray-700 transition"
              >
                JOIN NOW
              </Button>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[70px] w-full">
            {/* Courses Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Your Courses</h2>
              <div className="relative w-full">
                <div className="flex w-full gap-6">
                  <div className="w-full h-[300px]">
                    <CarouselCourse
                      data={courseData}
                      arrowClass="w-3"
                      customArrowClass="!w-[45px] !h-[45px] !relative"
                      customClass="custom-course "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mentors Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Mentors</h2>
              <div className="space-y-4">
                {mentors.map((mentor, index) => (
                  <div
                    key={index}
                    className="bg-[var(--sub-color)] rounded-full p-4 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full">
                      <Image
                        src="/asset/avatar.png"
                        width={250}
                        height={250}
                        alt="avatar"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 grid grid-cols-3">
                      <span className="text-white font-semibold">
                        {mentor.name}
                      </span>
                      <span className="text-white">{mentor.major}</span>
                      <span className="text-white">{mentor.courseTitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[420px]">
        <div className="w-full flex flex-col gap-8 sticky top-[20px]">
          <div className="flex flex-col bg-white rounded-[70px] w-full items-center gap-8 p-6">
            <h1 className="text-3xl font-bold text-center">YOUR SKILLS</h1>

            {/* Circular Progress */}
            <div className="relative w-48 h-48 mx-auto">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  className="stroke-gray-200 fill-none"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="45"
                />
                <circle
                  className="stroke-purple-400 fill-none"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${unarchiveProgress * 2.83} 283`}
                  cx="50"
                  cy="50"
                  r="45"
                />
                <circle
                  className="stroke-purple-800 fill-none"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${archiveProgress * 2.83} 283`}
                  cx="50"
                  cy="50"
                  r="45"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">{totalProgress}%</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-2 text-sm mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-600 rounded"></div>
                <span>Archieved Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-300 rounded"></div>
                <span>Unarchieved Skills</span>
              </div>
            </div>
          </div>
          {/* Skills List */}
          <div className="space-y-6 bg-white rounded-[70px] w-full items-center p-6">
            <div className="space-y-6 p-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="font-medium">{skill.name}</div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-300 rounded-full"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Button */}
            <div className="flex justify-center mt-8">
              <button className="w-12 h-12 bg-[var(--sub-color)] rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;

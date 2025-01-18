import React, { MouseEventHandler, useState } from "react";
import Slider from "react-slick";
import { ReviewCard } from "./card";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

interface RootProps {
  data: ImageProps[] | null | undefined;
  customClass?: string;
  customArrowClass?: string;
}
interface ReviewProps {
  data: ItemProps[] | null | undefined;
  customClass?: string;
  arrowClass?: string;
  customArrowClass?: string;
}
interface ItemProps {
  img?: string;
  name?: string;
  course?: string;
  desc?: string;
  progress?: number;
}

interface ImageProps {
  src: string;
}

interface ArrowProps {
  customClass?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  arrowClass?: string;
  customArrowClass?: string;
}

export const CarouselTransition: React.FC<RootProps> = ({
  data,
  customClass,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Hides the arrows

    appendDots: (dots: any) => (
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "5px",
            margin: 0,
            padding: 0,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
    customPaging: function () {
      return (
        <div className=" w-5 h-5 mx-0 rounded-full bg-white hover:bg-[var(--primary-color)] transition-all duration-300"></div>
      );
    },
  };
  if (!data || data.length === 0) {
    return <div>No images available</div>;
  }
  return (
    <div className={` w-full ${customClass}`}>
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={uuidv4()} className="h-500px w-full">
            <img
              width={1920}
              height={745}
              src={item.src}
              alt={item.src}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { customClass, style, onClick, arrowClass, customArrowClass } = props;
  return (
    <div
      className={`${customClass} ${customArrowClass} bg-[var(--primary-color)] hover:bg-[var(--sub-color)] custom-arrow w-[79px] h-[79px] flex items-center justify-center rounded-full `}
      onClick={onClick}
    >
      <svg
        className={arrowClass}
        width="30"
        height="52"
        viewBox="0 0 30 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.71074 3.02588L25.5254 25.8405L2.71074 48.6552"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({
  customClass,
  style,
  onClick,
  arrowClass,
  customArrowClass,
}) => {
  return (
    <div
      className={`${customClass} ${customArrowClass} bg-[var(--primary-color)] hover:bg-[var(--sub-color)] custom-arrow w-[79px] h-[79px] flex items-center justify-center rounded-full `}
      onClick={onClick}
    >
      <svg
        className={arrowClass}
        width="30"
        height="52"
        viewBox="0 0 30 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.2893 3.02588L4.47461 25.8405L27.2893 48.6552"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const CarouselReview: React.FC<ReviewProps> = ({
  data,
  customClass,
  arrowClass,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1); // Slide hiện tại (bắt đầu từ 1)

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",

    nextArrow: (
      <NextArrow
        arrowClass={arrowClass}
        customClass="absolute bottom-8 right-[38%] xl:right-[40%] 2xl:right-[40%] left-auto top-auto z-10"
      />
    ),
    prevArrow: (
      <PrevArrow
        arrowClass={arrowClass}
        customClass="absolute bottom-8 right-auto left-[34%] xl:left-[37%] 2xl:left-[38%] top-auto z-10"
      />
    ),
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex + 1);
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!data || data.length === 0) {
    return <div>No images available</div>;
  }
  return (
    <div
      className={`h-[450px] w-full pl-[2%] relative custom-review ${customClass}`}
    >
      <Slider {...settings}>
        {data?.map((item, index) => (
          <ReviewCard
            key={uuidv4()}
            name={item.name}
            img={item.img}
            desc={item.desc}
            course={item.course}
          />
        ))}
      </Slider>
      <div className="absolute bottom-0 right-[48%] xl:right-[47%] text-[32px] font-bold text-white z-10">
        {currentSlide} of {data.length}
      </div>
    </div>
  );
};

export const CarouselCourse: React.FC<ReviewProps> = ({
  data,
  customClass,
  arrowClass,
  customArrowClass,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1); // Slide hiện tại (bắt đầu từ 1)

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",

    nextArrow: (
      <NextArrow
        arrowClass={arrowClass}
        customClass="absolute -right-5 top-[35%] z-10 !w-14 !h-14 cursor-pointer"
      />
    ),
    prevArrow: (
      <PrevArrow
        arrowClass={arrowClass}
        customClass="absolute -left-5 top-[35%] z-10 !w-14 !h-14 cursor-pointer"
      />
    ),
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex + 1);
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!data || data.length === 0) {
    return <div>No images available</div>;
  }
  return (
    <div className={`w-full h-full relative ${customClass}`}>
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div
            key={uuidv4()}
            className="flex flex-col h-full !w-[95%] mx-2 bg-gray-200 rounded-3xl relative"
          >
            {/* {item.img && (
                <div className="w-full h-full absolute top-0 left-0 z-0">
                  <Image
                    src={item.img}
                    alt="course"
                    width={50}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              )} */}
            <div className="flex items-end p-10 h-[224px] py-20 relative">
              <h3 className="text-2xl font-bold z-10">{item.course}</h3>
            </div>
            <div className="relative bg-[var(--sub-color)] p-5 rounded-bl-3xl rounded-br-3xl z-10 w-full">
              <div className="bg-purple-400 h-2 rounded-full w-full">
                <div
                  className={`bg-purple-600 w-[${item.progress}%] h-full rounded-full`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

import React, { MouseEventHandler, useState } from "react";
import Slider from "react-slick";
import { ReviewCard } from "./card";
import { v4 as uuidv4 } from "uuid";

interface RootProps {
  data: ImageProps[] | null | undefined;
  customClass?: string;
}
interface ReviewProps {
  data: ItemProps[] | null | undefined;
  customClass?: string;
  arrowClass?: string;
}
interface ItemProps {
  img: string;
  name: string;
  course: string;
  desc: string;
}

interface ImageProps {
  src: string;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  arrowClass?: string;
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
  const { className, style, onClick, arrowClass } = props;
  return (
    <div
      className={`${className} bg-[var(--primary-color)] hover:bg-[var(--sub-color)] custom-arrow w-[79px] h-[79px] flex items-center justify-center rounded-full absolute bottom-0 right-[38%] xl:right-[40%] 2xl:right-[40%]  left-auto top-auto z-10`}
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

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick, arrowClass } = props;
  return (
    <div
      className={`${className} bg-[var(--primary-color)] hover:bg-[var(--sub-color)] custom-arrow w-[79px] h-[79px] flex items-center justify-center rounded-full absolute bottom-0 right-auto left-[34%] xl:left-[37%] 2xl:left-[38%] top-auto z-10`}
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

    nextArrow: <NextArrow arrowClass={arrowClass} />,
    prevArrow: <PrevArrow arrowClass={arrowClass} />,
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

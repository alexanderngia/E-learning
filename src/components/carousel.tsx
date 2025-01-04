import Image from "next/image";
import React from "react";
import Slider from "react-slick";

interface RootProps {
  data: ImageProps[] | null | undefined;
  customClass?: string;
}

interface ImageProps {
  src: string;
}

const CarouselTransition: React.FC<RootProps> = ({ data, customClass }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
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
    <div className={`h-[745px] w-full ${customClass}`}>
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div className="h-500px w-full">
            <img
              width={1920}
              height={745}
              key={index}
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
export default CarouselTransition;

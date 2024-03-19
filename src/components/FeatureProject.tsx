"use client";
import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "./AboutUs.module.css";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

const FeatureProject = ({ lang, direction, parent }: any) => {
  const slidesData = [
    {
      id: 1,
      image: "/feature1.png",
      alt: "feature1",
      description: "Ui/UX Design",
      title: "Water Purification",
    },
    {
      id: 2,
      image: "/feature2.png",
      alt: "feature2",
      description: "Ui/UX Design",
      title: "Water Purification",
    },
    {
      id: 3,
      image: "/feature3.png",
      alt: "feature3",
      description: "Ui/UX Design",
      title: "Water Purification",
    },
  ];
  const slidesDataArabic = [
    {
      id: 1,
      image: "/feature1.png",
      alt: "ميزة 1",
      description: "تصميم واجهة المستخدم/تجربة المستخدم",
      title: "تنقية المياه",
    },
    {
      id: 2,
      image: "/feature2.png",
      alt: "ميزة 2",
      description: "تصميم واجهة المستخدم/تجربة المستخدم",
      title: "تنقية المياه",
    },
    {
      id: 3,
      image: "/feature3.png",
      alt: "ميزة 3",
      description: "تصميم واجهة المستخدم/تجربة المستخدم",
      title: "تنقية المياه",
    },
  ];

  const { theme } = useTheme();
  const themeClass =
    theme === "dark" ? styles.featureCircle : styles.featureCircleLight;
  const directionClass =
    direction === "ltr" ? "" : styles.featureCircleDirection;
  return (
    <div className="projectSplide pt-[50px] pb-[70px] lg:pt-[130px] bg-[#F2F6F5] dark:bg-[#061E2C]">
      <div
        dir={direction}
        className="flex flex-wrap items-center justify-between max-w-[1460px] w-10/12 mx-auto pb-[50px] lg:pb-[80px]"
      >
        <div className="">
          <p className="uppercase dark:text-[#EFCB1C] text[20px] text-[#FF895B]">
            {parent?.latestWorkSection?.title}
          </p>
          <h3 className="text-[30px] lg:text-[50px] font-[500] dark:text-white leading-normal flex justify-center items-center gap-1 text-[#061E2C]">
            {parent?.latestWorkSection?.heading}
          </h3>
        </div>
        <div className="">
          <Link href={`/${lang}/projects`}>
            <p className=" relative  uppercase text-[18px] font-[400] mt-[20px] lg:mt-0 inline-flex items-center gap-4 group text-[#061E2C] dark:text-[#ffffff] ">
              <span className="relative z-20">
                {" "}
                {parent?.latestWorkSection?.btn}
              </span>
              <span
                className={`${
                  direction == "ltr"
                    ? "group-hover:translate-x-[195px] left-[-10px]"
                    : "group-hover:translate-x-[-155px] right-[-10px]"
                } z-10 rounded-full absolute transition-all duration-1000 w-[40px] h-[40px] dark:bg-[#FFFFFF14] bg-[#ECECEC] `}
              ></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                className={`${
                  direction == "ltr" ? "" : "rotate-180"
                } dark:fill-white z-20 fill-[#061E2C]`}
              >
                <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
              </svg>
            </p>
          </Link>
        </div>
      </div>
      {/* <div dir={direction} className="container mx-auto py-20"></div> */}
      <div dir="ltr" className="">
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            focus: "center",
            pagination: false,
            arrows: false,
            autoplay: true,
            interval: 3000,
            breakpoints: {
              1024: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
          onMoved={(splide: any, newIndex: any) => {
            const slides = splide.Components.Elements.slides;
            slides.forEach((slide: any, index: any) => {
              const description = slide.querySelector(".slide-description");
              const centerImg = slide.querySelector(".centered-image");
              if (index === newIndex) {
                description.classList.add("show");
                // centerImg.classList.add("rounded-[30px]]");
              } else {
                description.classList.remove("show");
              }
            });
          }}
        >
          {slidesData.map((slide) => (
            <SplideSlide
              key={slide.id}
              className="splide__slide rounded-[30px] px-[25px] "
            >
              <Link
                href={`/${lang}/projects/${slide.title.replace(/\s+/g, "-")}`}
              >
                <Image
                  className="centered-image w-full h-full w-full max-w-[600px] max-h-[600px] object-cover rounded-[30px] !rounded-[30px]"
                  width={600}
                  height={600}
                  src={slide.image}
                  alt={slide.alt}
                />
                <div className="position-relative">
                  <div className="descriptionDivMain">
                    <div className="slide-description px-2 lg:bottom-[-70px] bottom-[-30px]  py-2 lg:px-[20px] lg:py-[20px] max-w-[80%] max-md:w-[300px] w-[80%] 2xl:w-[70%] 2xl:px-[25px] 2xl:py-[25px]">
                      <div className="flex items-center justify-center">
                        <div className="">
                          <svg
                            width="44"
                            height="45"
                            viewBox="0 0 44 45"
                            className="w-[20px] h-[20px] lg:w-[44px] lg:h-[45px]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="44"
                              y="44.5"
                              width="44"
                              height="44"
                              rx="22"
                              transform="rotate(-180 44 44.5)"
                              fill="white"
                            />
                            <path
                              d="M28.5574 26.7882C28.5786 26.7882 28.9837 26.5455 29.4575 26.2488C29.9313 25.952 30.3097 25.6915 30.2984 25.6699C30.287 25.6484 30.0594 25.3411 29.7926 24.9871C29.2569 24.2762 28.7412 23.3364 28.5126 22.6547C27.8003 20.53 28.1281 18.3238 29.4208 16.5429L29.7499 16.0894L29.1233 15.4628L28.4966 14.8361L28.0824 15.1313C25.3688 17.0652 22.1163 16.8427 19.2327 14.5259C19.0445 14.3746 18.8835 14.2579 18.875 14.2664C18.7966 14.3448 17.8109 15.9563 17.8112 16.0057C17.8113 16.0413 17.9837 16.1873 18.1942 16.3299C20.5251 17.9092 23.1919 18.4241 25.2533 17.6931L25.7478 17.5177L18.873 24.4175L14.5258 28.7805L15.794 30.0487L20.1682 25.6903L27.0518 18.8318L26.8432 19.4689C26.302 21.1216 26.5237 23.0802 27.4755 25.0549C27.7467 25.6175 28.4772 26.7878 28.5574 26.7882Z"
                              fill="#061E2C"
                            />
                          </svg>
                        </div>
                        <div className="vertical-line"></div>
                        <div>
                          <h3 className="text-[14px] mb-0 md:text-[16px]">
                            {slide.description}
                          </h3>
                          <h4 className=" text-[16px] leading-normal lg:text-[22px] min-[1600px]:text-[30px]">
                            {slide.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default FeatureProject;

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

function Experties({ bgchange, aboutpb, direction, parent }: any) {
  const { theme, setTheme } = useTheme();
  return (
    <div
      dir={direction}
      className={`${
        bgchange
          ? "bg-[#F2F6F5] dark:bg-[#061E2C]"
          : "dark:bg-[#061E2C] bg-[#F2F6F5]"
      } pt-[50px] ${aboutpb ? "pb-[50] xl:pb-[130px]" : "pb-0"} lg:pt-[100px] `}
    >
      <div className="grid grid-cols-12 items-center justify-items-between max-w-[1460px] w-10/12 mx-auto">
        <div className="col-span-12 lg:col-span-4 xl:col-span-5 col-start-1">
          <p className="uppercase dark:text-[#EFCB1C] text-[#FF895B] text-[20px]">
            {parent?.ourExpertiseSection?.OurExpertise}
          </p>
          <h3 className="md:text-[50px] text-[30px] font-[500] leading-normal max-w-[433px] dark:text-white text-[#061E2C]">
            {parent?.ourExpertiseSection?.heading}
          </h3>
          <Link href="#!">
            <p className=" relative mt-[20px] mb-[20px] lg:mb-0 lg:mt-[40px] text-[18px] font-[400] inline-flex items-center gap-4 group text-[#061E2C] uppercase dark:text-[#ffffff]">
              {parent?.ourExpertiseSection?.btn}
              <span
                className={`${
                  direction == "ltr"
                    ? "group-hover:translate-x-[105px] left-[-10px]"
                    : "group-hover:translate-x-[-35px] right-[-10px]"
                } rounded-full absolute transition-all duration-1000 w-[40px] z-999 h-[40px] bg-[#0b000013] dark:bg-[#FFFFFF14]`}
              ></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                className={`${
                  direction == "ltr" ? "" : "rotate-180"
                } dark:fill-[#ffffff] fill-[#061E2C]`}
                viewBox="0 0 18 14"
              >
                <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
              </svg>
            </p>
          </Link>
        </div>
        <div
          className={`col-span-12 lg:col-span-6 lg:col-start-5 xl:col-start-7 px-5 grid ${
            theme === "dark" ? "expertbg" : "expertbg1"
          }`}
        >
          <div className="flex flex-wrap lg:flex-nowrap items-center min-[1460px]:gap-[45px] items-center justify-between xl:justify-center gap-[20px]">
            <div className="md:h-[120px] hover:transition-all group duration-300 hover:scale-110 cursor-pointer w-[90px] h-[90px] col-span-3 md:w-[120px] rounded-xl dark:bg-[#FFFFFF14] bg-[#061E2C12] flex items-center justify-center">
              <Image
                src="/assets/home/figma.svg"
                width={30}
                height={30}
                alt="image"
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="md:h-[120px] hover:transition-all group duration-300 hover:scale-110 cursor-pointer w-[90px] h-[90px] col-span-3 md:w-[120px] rounded-xl dark:bg-[#FFFFFF14] bg-[#061E2C12] flex items-center justify-center">
              <Image
                src="/assets/home/photoshop.svg"
                width={52}
                height={52}
                alt="image"
                className=" transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="md:h-[120px] hover:transition-all group duration-300 hover:scale-110 cursor-pointer w-[90px] h-[90px] col-span-3 md:w-[120px] rounded-xl dark:bg-[#FFFFFF14] bg-[#061E2C12] flex items-center justify-center">
              <Image
                src="/assets/home/alustrator.svg"
                width={52}
                height={52}
                alt="image"
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="md:h-[120px] hover:transition-all group duration-300 hover:scale-110 cursor-pointer w-[90px] h-[90px] col-span-3 md:w-[120px] rounded-xl dark:bg-[#FFFFFF14] bg-[#061E2C12] flex items-center justify-center">
              <Image
                src="/assets/home/aftereffect.svg"
                width={52}
                height={52}
                alt="image"
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between lg:justify-center lg:gap-[45px] gap-[20px] py-5">
            <div className="md:h-[120px] hover:transition-all group duration-300 hover:scale-110 cursor-pointer w-[90px] h-[90px] col-span-3 md:w-[120px] rounded-xl dark:bg-[#FFFFFF14] bg-[#061E2C12] flex items-center justify-center">
              <Image
                src="/assets/home/premiere.svg"
                width={52}
                height={52}
                alt="image"
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="md:h-[120px] hover:transition-all group duration-300 hover:scale-110 cursor-pointer w-[90px] h-[90px] col-span-3 md:w-[120px] rounded-xl dark:bg-[#FFFFFF14] bg-[#061E2C12] flex items-center justify-center">
              <Image
                src="/assets/home/xd.svg"
                width={52}
                height={52}
                alt="image"
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="md:h-[120px] hover:transition-all group duration-300 hover:scale-110 cursor-pointer w-[90px] h-[90px] col-span-3 md:w-[120px] rounded-xl dark:bg-[#FFFFFF14] bg-[#061E2C12] flex items-center justify-center">
              <Image
                src="/assets/home/blender.svg"
                width={52}
                height={52}
                alt="image"
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experties;

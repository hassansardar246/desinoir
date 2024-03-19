"use client";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "@/components/data";
import Image from "next/image";
import BrandDesigns from "./BrandDesigns";
import { useTheme } from "next-themes";
function Testimonial({ brandshow, parent }: any) {
  const { theme, setTheme } = useTheme();
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);
  const [click, setClick] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className=" dark:bg-[#061E2C]  bg-[#F2F6F5] pt-30px pb-[50px] px-5 relative">
      {theme === "dark" ? (
        <Image
          src={"/darklight2.png"}
          width={673}
          height={743}
          alt="image"
          className="absolute w-full h-full h-[543px] max-w-[673px] max-h-[743px] top-0 left-0"
        />
      ) : (
        <Image
          src={"/lightdark1.png"}
          width={673}
          height={743}
          alt="image"
          className="absolute top-0 w-full h-full max-w-[673px] max-h-[743px] left-0"
        />
      )}

      <section className="section lg:pt-[60px] pt-[50px] pb-[50px]">
        <div className="mb-[40px] text-center">
          <p className="uppercase dark:text-[#EFCB1C] text-[#FF895B] text-[20px]">
            {parent?.clientVoicesSection?.title}
          </p>
          <h3 className="lg:text-[50px] text-[30px] font-[500] leading-normal dark:text-white text-[#061E2C]">
            {parent?.clientVoicesSection?.heading}
          </h3>
        </div>
        <div className="relative z-10 flex items-start justify-center max-h-[160px] h-auto max-md:h-[100px] mt-[100px] gap-5">
          <Image
            onClick={() =>
              setIndex(
                people[index - 1 < 0 ? people.length - 1 : index - 1]?.id
              )
            }
            width={100}
            height={100}
            src={`${
              people[index - 1 < 0 ? people.length - 1 : index - 1]?.image
            }`}
            alt={"person"}
            className="person-img lg:w-[180px] border-[4px] border-[#DEE9EE] dark:border-[#FFFFFF14] lg:h-[180px] w-[80px] h-[80px] cursor-pointer cursor-pointer  self-end"
          />

          <Image
            onClick={() =>
              setIndex(
                people[index < 0 || index > people.length - 1 ? 0 : index]?.id
              )
            }
            width={100}
            height={100}
            src={`${
              people[index < 0 || index > people.length - 1 ? 0 : index]?.image
            }`}
            alt="person"
            className={` person-img person-active-image lg:w-[180px] lg:h-[180px] w-[80px] h-[80px] cursor-pointer cursor-pointer  self-start`}
          />
          <Image
            onClick={() =>
              setIndex(
                people[index + 1 > people.length - 1 ? 0 : index + 1]?.id
              )
            }
            width={100}
            height={100}
            src={`${
              people[index + 1 > people.length - 1 ? 0 : index + 1]?.image
            }`}
            alt={"person"}
            className="person-img border-[4px] border-[#DEE9EE] dark:border-[#FFFFFF14] lg:w-[180px] lg:h-[180px] w-[80px] h-[80px] cursor-pointer cursor-pointer self-end"
          />
        </div>
        <div className="relative">
          <div className="section-center px-5 min-h-[250px] h-auto">
            <div className="min-[1500px]:w-[1300px] lg:w-[900px] overflow-hidden mx-auto">
              {people.map((person, personIndex) => {
                const { id, image, name, title, quote } = person;
                let position = "nextSlide";
                if (personIndex === index) {
                  position = "activeSlide";
                }

                if (
                  personIndex === index - 1 ||
                  (index === 0 && personIndex === people.length - 1)
                ) {
                  position = "lastSlide";
                }

                return (
                  <>
                    <article className={`${position} lg:pt-[80px]`} key={id}>
                      <p className="font[400] md:text-[24px] text-[18px] overflow-hidden lg:w-[800px] min-[1500px]:w-[1077px] mx-auto dark:text-[#DEE9EE] text-[#061E2C]">
                        {quote}
                      </p>
                      <h4 className="text-[#20D091] font-[500] md:text-[24px] text-[18px] md:mt-[30px] mt-[20px]">
                        {name}
                      </h4>
                      <p className="title dark:text-[white] text-[#061E2C]">
                        {title}
                      </p>
                    </article>
                  </>
                );
              })}
            </div>
          </div>
          <div className="hidden min-[1200px]:block">
            <button
              className="prev bg-[#ECECEC] dark:bg-[#ffffff14]"
              onClick={() => setIndex(index - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                className="  dark:fill-white fill-[#061E2C]"
              >
                <path d="M16.9168 8.04154H3.59808L7.02829 11.4717C7.43506 11.8785 7.43506 12.5379 7.02829 12.9447C6.82464 13.1483 6.5585 13.2499 6.29183 13.2499C6.02516 13.2499 5.75902 13.1483 5.55537 12.9447L0.347038 7.73633C0.151726 7.54154 0.0418301 7.27643 0.0418301 6.99987C0.0418301 6.72331 0.151726 6.45872 0.347038 6.26341L5.55537 1.05508C5.96214 0.648307 6.62152 0.648307 7.02829 1.05508C7.43506 1.46185 7.43506 2.12122 7.02829 2.52799L3.59808 5.9582H16.9168C17.4918 5.9582 17.9585 6.42487 17.9585 6.99987C17.9585 7.57487 17.4918 8.04154 16.9168 8.04154Z" />
              </svg>
            </button>
            <button
              className="next bg-[#ECECEC] dark:bg-[#ffffff14] "
              onClick={() => setIndex(index + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                className=" dark:fill-white fill-[#061E2C]"
              >
                <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
              </svg>
            </button>
          </div>
        </div>
        {brandshow && (
          <div className="pt-[100px] pb-[80px]">
            <BrandDesigns />
          </div>
        )}
      </section>
    </div>
  );
}

export default Testimonial;

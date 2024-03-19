"use client";
import { useEffect, useRef, useState } from "react";
import "./project.css";
import { useTheme } from "next-themes";
import tabImg from "../../../../public/tabImg.png";
import tabImg2 from "../../../../public/tabImg2.png";
import tabImg3 from "../../../../public/tabImg3.png";
import tabImg4 from "../../../../public/tabImg4.png";
import tabImg5 from "../../../../public/tabImg5.png";
import activeTabsIcon from "../../../../public/activeTabsIcon.svg";
import Link from "next/link";
import Pagesheader from "@/components/common/Pagesheader";
import BrandDesigns from "@/components/common/BrandDesigns";
import Footer from "@/components/common/Footer";

const Projects = ({ parent, lang, direction }: any) => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const firstBtnRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    {
      title: "All",
    },
    {
      title: "UI/UX Design",
    },
    {
      title: "Branding",
    },
    {
      title: "Graphic Design",
    },
    {
      title: "Motion Graphic Design",
    },
  ];
  const items = [
    {
      title: "All",
      contentTitle: "Ui/UX Design",
      img: "/tabImg.png",
      para: `Pictogram Placemakers`,
    },
    {
      title: "UI/UX Design",
      img: "/tabImg3.png",
      contentTitle: "Branding",
      para: `Water Purification`,
    },
    {
      title: "Branding",
      contentTitle: "Ui/UX Design",
      para: `DevCastle Portal`,
      img: "/tabImg2.png",
    },
    {
      title: "Graphic Design",
      img: "/feature3.png",
      contentTitle: "Graphic Design",
      para: `Pictogram Placemakers`,
    },
    {
      title: "Motion Graphic Design",
      img: "/tabImg5.png",
      contentTitle: "Motion Graphic Design",
      para: `DevCastle Portal`,
    },
    {
      title: "Branding",
      img: "/tabImg6.png",
      contentTitle: "Branding",
      para: `Water Purification`,
    },
  ];

  const navItemsArabic = [
    {
      title: "الكل",
    },
    {
      title: "تصميم واجهة المستخدم/تجربة المستخدم",
    },
    {
      title: "العلامة التجارية",
    },
    {
      title: "تصميم الجرافيك",
    },
    {
      title: "تصميم الجرافيك المتحرك",
    },
    {
      title: "العلامة التجارية",
    },
  ];

  const itemsArabic = [
    {
      title: "الكل",
      contentTitle: "تصميم واجهة المستخدم/تجربة المستخدم",
      img: "/tabImg.png",
      para: "مصمم الرموز",
    },
    {
      title: "تصميم واجهة المستخدم/تجربة المستخدم",
      img: "/tabImg.png",
      contentTitle: "تصميم واجهة المستخدم/تجربة المستخدم",
      para: "بوابة ديفكاستل",
    },
    {
      title: "العلامة التجارية",
      img: "/tabImg3.png",

      contentTitle: "العلامة التجارية",
      para: "تنقية المياه",
    },
    {
      title: "تصميم الجرافيك",
      img: "/tabImg.png",
      contentTitle: "تصميم الجرافيك",
      para: "مصمم الرموز",
    },
    {
      title: "تصميم الجرافيك المتحرك",
      img: "/tabImg.png",
      contentTitle: "تصميم الجرافيك المتحرك",
      para: "بوابة ديفكاستل",
    },
    {
      title: "العلامة التجارية",
      img: "/tabImg.png",
      contentTitle: "العلامة التجارية",
      para: "تنقية المياه",
    },
  ];

  const filteredItems =
    selectedTab === 0
      ? lang === "en"
        ? items
        : itemsArabic
      : lang === "en"
      ? items.filter(
          (item) => item.contentTitle === navItems[selectedTab].title
        )
      : itemsArabic.filter(
          (item) => item.contentTitle === navItems[selectedTab].title
        );

  const remainingItems = filteredItems.slice(visibleItems);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <div dir={direction}>
      <div>
        <Pagesheader
          lang={lang}
          parent={parent}
          txt1={parent?.page?.OurProjects}
          txt2={parent?.page?.OurProjects2}
          img="/OBJECTS4.png"
        />
        <div className="bg-[#F2F6F5] dark:bg-[#061E2C] h-full pt-[50px] lg:pt-[80px] max-md:pt-[30px]">
          <div className="max-w-[1460px] mx-auto sm:h-auto">
            <div className="px-5">
              <div className="">
                <div className="flex flex-col gap-y-2 full">
                  <div
                    className="p-1 justify-start max-sm:justify-start 
                      max-md:justify-start max-lg:justify-start col-span-8
                      max-md:col-span-12  max-md:pt-[20px] max-lg:pt-[20px] max-lg:col-span-12  rounded-xl flex 
                       flex-wrap gap-5 font-[500] text-white"
                  >
                    {lang == "en"
                      ? navItems.map((item, index) => (
                          <button
                            ref={index === 0 ? firstBtnRef : null}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className={` rounded-[30px] border-2 focus:border-none dark:border-[#FFFFFF14]   py-[14.5px] px-[26px] text-[16px] hover:text-white hover:bg-[#02111B] text-[#989CAA]  dark:text-white text-start focus:bg-[#02111B] focus:bg-[#02111B]-400 
                                            ${
                                              selectedTab === index
                                                ? "bg-[#02111B] text-white border-[0px] "
                                                : "dark:text-white text-[#989CAA]"
                                            }`}
                          >
                            {item.title}
                          </button>
                        ))
                      : navItemsArabic.map((item, index) => (
                          <button
                            ref={index === 0 ? firstBtnRef : null}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className={`outline-none rounded-[30px] border-2 hover:border-[#02111B] py-[14.5px] px-[26px] text-[16px] hover:text-white hover:bg-[#02111B] text-[#989CAA]  dark:text-white text-start focus:bg-[#02111B] focus:bg-[#02111B]-400 
                                          ${
                                            selectedTab === index
                                              ? "bg-[#02111B] text-white "
                                              : "dark:text-white text-[#989CAA]"
                                          }`}
                          >
                            {item.title}
                          </button>
                        ))}
                  </div>
                  <div className="columns-2 max-lg:columns-1 pt-[80px] ">
                    {filteredItems.slice(0, visibleItems).map((item, index) => (
                      <div key={index} className="">
                        <Link
                          href={`/${lang}/projects/${item.para.replace(
                            /\s+/g,
                            "-"
                          )}`}
                          passHref
                          className="group"
                        >
                          <div className=" relative ">
                            <img
                              className="lg:w-[680px] w-full custom-fade transform transition-transform  ease-in-out duration-100 h-auto object-cover rounded-[30px]"
                              src={item.img}
                              alt={item.title}
                            />
                            <div className="absolute bottom-0 custom-fade transition-transform max-sm:hidden  ease-in-out duration-100 !-bottom-[3.125rem] right-[70px] opacity-0 group-hover:opacity-100">
                              <img
                                src={activeTabsIcon.src}
                                alt={activeTabsIcon}
                              />
                            </div>
                          </div>
                          <h1 className="text-[24px] mt-[60px] max-sm:[18px] max-md:text-[20px]  font-[500px] dark:text-[#DEE9EE] text-[#989CAA] uppercase tracking-[0.5px] leading-[120%]">
                            {item.contentTitle}
                          </h1>
                          <p className="text-[50px]  max-sm:text-[30px] max-md:text-[40px]  font-[500px] dark:text-[#FFF] text-[#061E2C] leading-[120%] group-hover:text-[#20D091]">
                            {item.para}
                          </p>
                          <div className="mt-[90px] cursor-pointer group max-sm:mt-[35px] transition-opacity duration-500 ease-in-out"></div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {remainingItems.length > 0 && (
                    <div className="flex justify-center mt-[80px]">
                      <button type="button" onClick={handleLoadMore}>
                        <p className=" relative z-20 uppercase text-[18px] font-[400] inline-flex items-center gap-4 group dark:text-[#ffffff] text-[#061E2C]">
                          {parent.ourProject?.loadMore}
                          <span
                            className={`${
                              direction == "ltr"
                                ? "group-hover:translate-x-[120px] left-[-10px]"
                                : "group-hover:translate-x-[-90px] right-[-10px]"
                            } z-[-1] rounded-full absolute transition-all duration-1000 w-[40px] h-[40px] dark:bg-[#FFFFFF14] bg-[#ECECEC]`}
                          ></span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            className={`${
                              direction == "ltr" ? "" : "rotate-180"
                            } opacity-0 group-hover:opacity-100 transition-all duration-1000 dark:fill-white fill-[#061E2C]`}
                          >
                            <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
                          </svg>
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F6F5] dark:bg-[#061E2C] pt-[70px] max-sm:pt-[30px] text-center">
        <h3 className="lg:text-[47px] text-[30px] mb-0 font-[500] leading-[120%] tracking-normal dark:text-white text-[#061E2C]">
          {parent?.creativitySection?.heading}
        </h3>
        <p className="text-[#989CAA] font-[400] mt-[20px] text-[16px] max-w-[768px] pb-[80px] mx-auto">
          {parent?.creativitySection?.description}
        </p>
        <BrandDesigns />
        <Footer direction={direction} parent={parent} welnote={true} />
      </div>
    </div>
  );
};
export default Projects;

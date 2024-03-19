"use client";
import { useEffect, useRef, useState } from "react";
import "./navArticles.css";
import { useTheme } from "next-themes";
import articleImg from "../../../../public/articleImg.png";
import articleImg2 from "../../../../public/articleImg2.png";
import articleImg3 from "../../../../public/articleImg3.png";
import articleImg4 from "../../../../public/articleImg4.png";
import articleImg5 from "../../../../public/articleImg5.png";
import activeTabsIcon from "../../../../public/activeTabsIcon.svg";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/Footer";

const NavArticles = ({ parent, direction, lang }: any) => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const firstBtnRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   if (firstBtnRef.current) {
  //     firstBtnRef.current.focus();
  //   }
  // }, [firstBtnRef.current]);
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
  const navItemsArabic = [
    {
      title: "الكل",
    },
    {
      title: "تصميم واجهة المستخدم / تجربة المستخدم",
    },
    {
      title: "تسويق العلامة التجارية",
    },
    {
      title: "تصميم الجرافيك",
    },
    {
      title: "تصميم الجرافيك المتحرك",
    },
  ];
  const items = [
    {
      title: "All",
      date: " Oct",
      contentTitle: "Branding",
      slug: "Creating-Online-Environments-The-Work-Well",
      img: articleImg,
      para: `Design Systems: Empowering Collaboration and Brand...`,
    },
    {
      title: "UI/UX Design",
      date: " Oct",
      img: articleImg2,
      contentTitle: "Ui/UX Design",
      slug: "Creating-Online-Environments-The-Work-Well",
      para: `Responsive web design: Creating an optimal user...`,
    },
    {
      title: "Branding",

      date: " Oct",
      img: articleImg3,

      contentTitle: "Branding",
      slug: "Creating-Online-Environments-The-Work-Well",
      para: `Inclusive Design And Accessibility Stream...`,
    },
    {
      title: "Graphic Design",

      date: " Oct",
      img: articleImg4,
      contentTitle: "Graphic",
      slug: "Creating-Online-Environments-The-Work-Well",
      para: `Voice Skills For Google Assistant And...`,
    },
    {
      title: "Motion Graphic Design",

      date: " Oct",
      img: articleImg5,
      contentTitle: "Motion Graphic Design",
      slug: "Creating-Online-Environments-The-Work-Well",
      para: `Creating Online Environments The Work Well For...`,
    },
  ];

  const filteredItems =
    selectedTab === 0
      ? items
      : items.filter(
          (item) => item.contentTitle === items[selectedTab].contentTitle
        );

  const remainingItems = filteredItems.slice(visibleItems);

  const handleLoadMore = () => {
    // Increase the number of visible items on each "Load More" click
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };
  const background = {
    background: "linear-gradient(133deg, #197BFF 11.04%, #20D091 100%)",
    borderRadius: "15px",
  };
  return (
    <div dir={direction}>
      <div className="dark:bg-[#061E2C] bg-[#F2F6F5] h-full md:pt-[80px] pt-[30px]">
        <div className="max-w-[1460px] mx-auto sm:h-auto">
          <div className=" px-5">
            <div className="">
              <div className="flex flex-col gap-y-2 full">
                <div className=" ">
                  <div className="grid grid-cols-12 items-end  ">
                    <div className="col-span-5 max-md:col-span-12 max-lg:col-span-12">
                      <h1 className=" text-[50px]  max-sm:text-[30px] max-md:text-[40px] dark:text-[#FFFFFF] text-[#061E2C] font-[500] mb-0 ">
                        Exploring the World
                        <br />
                        Through Our Articles
                      </h1>
                    </div>
                    <div
                      className="p-1 justify-end max-sm:justify-start 
                      max-md:justify-start max-lg:justify-start col-span-7
                      max-md:col-span-12  max-md:pt-[20px] max-lg:pt-[20px] max-lg:col-span-12  rounded-xl flex 
                       flex-wrap gap-5 font-[500] text-white"
                    >
                      {lang == "en"
                        ? navItems.map((item, index) => (
                            <button
                              ref={index === 0 ? firstBtnRef : null}
                              key={index}
                              onClick={() => setSelectedTab(index)}
                              className={`outline-none rounded-[30px] border-2 dark:border-white border-[rgba(6, 30, 44, 0.07)]  dark:border-opacity-[0.08] py-[14.5px] px-[26px] text-[16px] hover:text-white hover:bg-[#02111B] text-[#989CAA]  dark:text-white text-start focus:bg-[#02111B] focus:bg-[#02111B]-400 
                                            ${
                                              selectedTab === index
                                                ? "bg-[#02111B] text-white "
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
                              className={`outline-none rounded-[30px] border-2 dark:border-white border-[rgba(6, 30, 44, 0.07)]  dark:border-opacity-[0.08] py-[14.5px] px-[26px] text-[16px] hover:text-white hover:bg-[#02111B] text-[#989CAA]  dark:text-white text-start focus:bg-[#02111B] focus:bg-[#02111B]-400 
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
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
                  {filteredItems.slice(0, visibleItems).map((item, index) => (
                    <Link
                      href={`/${lang}/article/${item.para.replace(
                        /\s+/g,
                        "-"
                      )}`}
                      key={index}
                      className=" group cursor-pointer"
                    >
                      <div className="flex items-center gap-10">
                        <div className="relative pt-[80px]">
                          <Image
                            src={item.img}
                            width={700}
                            height={540}
                            alt="image"
                          />
                          <div className="absolute bottom-[-54px] pt-[80px] left-[50%] translate-x-[-50%] max-w-screen-xl mx-auto w-full">
                            <div className="flex items-center justify-center gap-5 max-sm:gap-2 max-lg:gap-2">
                              <div
                                style={background}
                                className="flex items-center justify-center w-[110px]  max-sm:w-[110px] h-[110px] max-sm:h-[90px]"
                              >
                                <p className="text-[#FFFFFF] text-center font-[500] text-[30px] max-sm:text-[16px] max-md:text-[15px] max-lg:text-[19px]  mb-0">
                                  {item.date}
                                  <br />
                                  13
                                </p>
                              </div>
                              <div className="flex items-center justify-center w-full sm:w-[430px] max-sm:w-[400px] h-[110px] max-sm:h-[90px]  text-white bg-[#02111B] p-5 px-[40px] rounded-[15px]">
                                <p className="text-[24px] max-sm:text-[14px] max-md:text-[15px] max-lg:text-[16px] text-[#FFFFFF] mb-0 ">
                                  {item?.para}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {remainingItems.length > 0 && (
                  <div className="flex mt-[100px] justify-center py-5 my-5">
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
              <div className="max-w-[900px] mx-auto mt-[90px]">
                <h2 className="text-center xl:text-[90px] font-[100] lg:text-[50px] text-[40px] dark:text-white text-[#061E2C] leading-[113%]">
                  <span className="font-[500]">
                    {" "}
                    {parent.contactUS?.footerHeading}
                  </span>
                  <span className="block font-[100]">
                    {" "}
                    {parent.contactUS?.footerHeading2}
                  </span>
                </h2>
                <div className="relative max-w-[440px] mt-[50px] mx-auto">
                  <input
                    dir={direction}
                    type="text"
                    className="placeholder:uppercase py-[27px] px-[35px] w-full appearance-none bg-[#DEE9EE] text-white dark:bg-[#FFFFFF14] rounded-[50px]"
                    placeholder={`${
                      direction == "ltr"
                        ? "Enter your email"
                        : "أدخل بريدك الإلكتروني"
                    }`}
                  />
                  <button
                    type="submit"
                    className={` absolute top-[50%] translate-y-[-50%] ${
                      direction == "ltr" ? "right-[35px]" : "left-[35px]"
                    } bg-[#197BFF] block h-[42px] w-[42px] flex items-center justify-center rounded-[50%]`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      className={`${direction == "ltr" ? "" : "rotate-180"} `}
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                    >
                      <path
                        d="M1.08268 8.04154H14.4014L10.9712 11.4717C10.5645 11.8785 10.5645 12.5379 10.9712 12.9447C11.1749 13.1483 11.441 13.2499 11.7077 13.2499C11.9743 13.2499 12.2405 13.1483 12.4441 12.9447L17.6525 7.73633C17.8478 7.54154 17.9577 7.27643 17.9577 6.99987C17.9577 6.72331 17.8478 6.45872 17.6525 6.26341L12.4441 1.05508C12.0374 0.648307 11.378 0.648307 10.9712 1.05508C10.5645 1.46185 10.5645 2.12122 10.9712 2.52799L14.4014 5.9582H1.08268C0.507683 5.9582 0.0410156 6.42487 0.0410156 6.99987C0.0410156 7.57487 0.507683 8.04154 1.08268 8.04154Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer
          parent={parent}
          direction={direction}
          lang={lang}
          welnote={false}
        />
      </div>
    </div>
  );
};
export default NavArticles;

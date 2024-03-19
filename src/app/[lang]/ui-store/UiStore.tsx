"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import uiImg from "../../../../public/uiImg.png";
import uiImg2 from "../../../../public/uiImg2.png";
import uiImg3 from "../../../../public/uiImg3.png";
import uiImg4 from "../../../../public/uiImg4.png";
import uiImg5 from "../../../../public/uiImg5.png";
import uiImg6 from "../../../../public/uiImg6.png";
import uiImg7 from "../../../../public/uiImg7.png";
import uiImg8 from "../../../../public/uiImg8.png";
import uiImg9 from "../../../../public/uiImg9.png";
import Footer from "@/components/common/Footer";
import Pagesheader from "@/components/common/Pagesheader";
import Link from "next/link";
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
const items = [
  {
    contentTitle: "Ui/UX Design",
    img: uiImg,
    para: `Task Management`,
    price: "$10",
    tag: "Paid",
  },
  {
    img: uiImg2,
    contentTitle: "Ui/UX Design",
    para: `Mobile Application Design`,
    price: "$50",
    tag: "Paid",
  },
  {
    title: "Branding",
    img: uiImg3,

    contentTitle: "Branding",
    para: `Creative Web Design`,
    price: "$99",
    tag: "Paid",
  },
  {
    img: uiImg4,
    contentTitle: "Graphic Design",
    para: `3D Illustration`,
    price: "$5",
    tag: "Paid",
  },
  {
    img: uiImg5,
    contentTitle: "Motion Graphic Design",
    para: `3D Illustration`,
    price: "$5",
    tag: "Paid",
  },
  {
    img: uiImg6,
    contentTitle: "Branding",
    para: `3D Illustration`,
    price: "$5",
    tag: "Paid",
  },

  {
    img: uiImg7,
    contentTitle: "Motion Graphic Design",
    para: `3D Illustration`,
    price: "free",
    tag: "Free",
  },
  {
    img: uiImg8,
    contentTitle: "Branding",
    para: `3D Illustration`,
    price: "free",
    tag: "Free",
  },
  {
    img: uiImg9,
    contentTitle: "Branding",
    para: `3D Illustration`,
    price: "free",
    tag: "Free",
  },
  {
    contentTitle: "Ui/UX Design",
    img: uiImg,
    para: `Task Management`,
    price: "free",
    tag: "Free",
  },
  {
    img: uiImg2,
    contentTitle: "Ui/UX Design",
    para: `Mobile Application Design`,
    price: "$50",
    tag: "Paid",
  },
  {
    title: "Branding",
    img: uiImg3,

    contentTitle: "Branding",
    para: `Creative Web Design`,
    price: "$99",
    tag: "Paid",
  },
];
const itemsArabic = [
  {
    contentTitle: "تصميم واجهة المستخدم / تجربة المستخدم",
    img: uiImg,
    para: "إدارة المهام",
    price: "$10",
    tag: "مدفوع",
  },
  {
    img: uiImg2,
    contentTitle: "تصميم واجهة المستخدم / تجربة المستخدم",
    para: "تصميم تطبيق الجوال",
    price: "$50",
    tag: "مدفوع",
  },
  {
    title: "العلامة التجارية",
    img: uiImg3,
    contentTitle: "العلامة التجارية",
    para: "تصميم الويب الإبداعي",
    price: "$99",
    tag: "مدفوع",
  },
  {
    img: uiImg4,
    contentTitle: "تصميم الجرافيك",
    para: "رسم ثلاثي الأبعاد",
    price: "$5",
    tag: "مدفوع",
  },
  {
    img: uiImg5,
    contentTitle: "تصميم الجرافيك المتحرك",
    para: "رسم ثلاثي الأبعاد",
    price: "$5",
    tag: "مدفوع",
  },
  {
    img: uiImg6,
    contentTitle: "العلامة التجارية",
    para: "رسم ثلاثي الأبعاد",
    price: "$5",
    tag: "مدفوع",
  },
  {
    img: uiImg7,
    contentTitle: "تصميم الجرافيك المتحرك",
    para: "رسم ثلاثي الأبعاد",
    price: "$5",
    tag: "مجاني",
  },
  {
    img: uiImg8,
    contentTitle: "العلامة التجارية",
    para: "رسم ثلاثي الأبعاد",
    price: "$5",
    tag: "مجاني",
  },
  {
    img: uiImg9,
    contentTitle: "العلامة التجارية",
    para: "رسم ثلاثي الأبعاد",
    price: "$5",
    tag: "مدفوع",
  },
  {
    contentTitle: "تصميم واجهة المستخدم / تجربة المستخدم",
    img: uiImg,
    para: "إدارة المهام",
    price: "$10",
    tag: "مدفوع",
  },
  {
    img: uiImg2,
    contentTitle: "تصميم واجهة المستخدم / تجربة المستخدم",
    para: "تصميم تطبيق الجوال",
    price: "$50",
    tag: "مدفوع",
  },
  {
    title: "العلامة التجارية",
    img: uiImg3,
    contentTitle: "العلامة التجارية",
    para: "تصميم الويب الإبداعي",
    price: "$99",
    tag: "مدفوع",
  },
];

const UiStore = ({ parent, lang }: any) => {
  const direction = lang == "en" ? "ltr" : "rtl";
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [visibleItems, setVisibleItems] = useState(9);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [dropValue, setDropValue] = useState("");
  const dropdownOptions = ["All", "Free", "Paid"];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);

    if (filter === "All") {
      setVisibleItems(9);
      setDropValue("All");
    } else {
      const filteredItems = items.filter((item) => item.tag === filter);
      setVisibleItems(filteredItems.length > 0 ? 4 : 0);
      setDropValue(filter);
    }
  };

  const firstBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filteredItems =
    selectedTab === 0
      ? lang === "en"
        ? items.filter(
            (item) => selectedFilter === "All" || item.tag === selectedFilter
          )
        : itemsArabic.filter(
            (item) => selectedFilter === "All" || item.tag === selectedFilter
          )
      : lang === "en"
      ? items.filter(
          (item) =>
            item.contentTitle === navItems[selectedTab]?.title &&
            (selectedFilter === "All" || item.tag === selectedFilter)
        )
      : itemsArabic.filter(
          (item) =>
            item.contentTitle === navItemsArabic[selectedTab]?.title &&
            (selectedFilter === "All" || item.tag === selectedFilter)
        );

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const remainingItems = filteredItems.slice(visibleItems, visibleItems + 4);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div dir={direction}>
        <Pagesheader
          lang={lang}
          parent={parent}
          direction={direction}
          txt1="UI"
          txt2="Store"
          img="/OBJECTS6.png"
        />
        <div className="dark:bg-[#061E2C] bg-[#F2F6F5] h-full pt-[80px] max-md:pt-[0px]">
          <div className="max-w-[1460px] mx-auto sm:h-auto">
            <div className="px-5 ">
              <div className="">
                <div className="flex flex-col gap-y-2 full">
                  <div className="bg-[#02111B]-400 ">
                    <div className="grid grid-cols-12 items-center   ">
                      <div
                        className="col-span-10  p-1   max-sm:justify-center 
                      max-md:justify-start max-lg:justify-start col-span-10
                      max-md:col-span-12  max-md:pt-[20px] max-lg:pt-[20px] max-lg:col-span-12  rounded-xl flex 
                       flex-wrap gap-5 font-[500] text-white"
                      >
                        {lang == "en"
                          ? navItems.map((item, index) => (
                              <button
                                ref={index === 0 ? firstBtnRef : null}
                                key={index}
                                onClick={() => setSelectedTab(index)}
                                className={`outline-none rounded-[30px] border-2 dark:border-white border-[rgba(6, 30, 44, 0.07)]  dark:border-opacity-[0.08]  py-[14.5px] px-[26px] text-[16px] hover:text-white hover:bg-[#02111B] text-[#989CAA]  dark:text-white text-start focus:bg-[#02111B] focus:bg-[#02111B]-400 
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
                                className={`outline-none rounded-[30px] border dark:border-white-opacity-08 border-[rgba(6, 30, 44, 0.07)]  py-[14.5px] px-[26px] text-[16px] hover:bg-[#02111B]  dark:text-white text-center text-[#02111B] hover:text-white focus:bg-[#02111B] focus:bg-[#02111B]-400 
                                          ${
                                            selectedTab === index
                                              ? "bg-[#02111B] text-[white]"
                                              : ""
                                          }`}
                              >
                                {item.title}
                              </button>
                            ))}
                      </div>

                      <div className="flex  max-sm:justify-center  justify-end max-lg:justify-start col-span-2 max-sm:col-span-12  max-sm:grid-cols-12 max-sm:pt-5 max-lg:pt-5  ">
                        <div className="relative" ref={dropdownRef}>
                          <button
                            onClick={toggleDropdown}
                            className="flex items-center p-[14px] justify-between w-48 py-3 px-5 border-dropdown rounded-full dark:bg-[#FFFFFF14] bg-[#DEE9EE] focus:outline-none"
                          >
                            <span className="dark:text-white text-[#434750]">
                              {dropValue ? dropValue : "Select Option"}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 dark:fill-white fill-[#434750]"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.8619 4.19525L7.99992 10.0573L2.13792 4.19525C1.87758 3.93492 1.45558 3.93492 1.19525 4.19525C0.934917 4.45558 0.934917 4.87758 1.19525 5.13792L7.52858 11.4713C7.65892 11.6016 7.82925 11.6666 7.99992 11.6666C8.17058 11.6666 8.34092 11.6016 8.47125 11.4713L14.8046 5.13792C15.0649 4.87758 15.0649 4.45558 14.8046 4.19525C14.5443 3.93492 14.1222 3.93492 13.8619 4.19525Z" />
                            </svg>
                          </button>

                          {isDropdownOpen && (
                            <div className="absolute z-10	 top-full left-0 mt-1 p-2 dark:bg-[rgb(26,48,61)] bg-[rgb(222,233,238)]  border-dropdown w-full !rounded-[10px]">
                              {dropdownOptions.map((option) => (
                                <button
                                  key={option}
                                  onClick={() => handleFilterChange(option)}
                                  className="block px-4 py-2 dark:text-white text-dark"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 max-md:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 pt-[80px] max-sm:pt-[100px] max-md:pt-[100px]  max-lg:pt-[100px]">
                    {filteredItems.slice(0, visibleItems).map((item, index) => (
                      <Link
                        href={"ui-store/ui-details"}
                        key={index}
                        className="mb-[20px] cursor-pointer"
                      >
                        <div className=" relative ">
                          <img
                            className="w-[100%] max-sm:justify-center object-cover h-[330px] custom-fade transform transition-transform  ease-in-out duration-100 h-auto object-cover rounded-[30px]"
                            src={item.img.src}
                            alt={item.title}
                          />
                        </div>

                        <div className="group mt-[30px]  transition-opacity duration-500 ease-in-out">
                          <h1 className="text-[16px] font-[500px] dark:text-[#DEE9EE] text-[#989CAA] uppercase tracking-[0.5px] leading-[120%] ">
                            {item.contentTitle}
                          </h1>
                          <div className="flex justify-between items-center">
                            <p className="text-[26px] max-sm:text-[20px] max-md:text-[20px] font-[500px] text-[#061E2C] dark:text-[#FFF] leading-[120%]  group-hover:text-[#20D091]">
                              {item.para}
                            </p>

                            <div className="pe-4">
                              <div
                                className={`p-[10px] !text-[16px] !font-[500]  uppercase  ${
                                  item.tag == "Free"
                                    ? "bg-[#EFCB1C] text-[#061E2C]"
                                    : "bg-[#197BFF]  text-[#fff]"
                                } rounded-[30px] ps-[30px] pe-[30px] text-center`}
                              >
                                {item?.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {remainingItems.length > 0 && (
                    <div className="flex justify-center mt-[80px]">
                      <button type="button" onClick={handleLoadMore}>
                        <p className=" relative z-20 uppercase text-[18px] font-[400] inline-flex items-center gap-4 group-hoverbtn dark:text-[#ffffff] text-[#061E2C]">
                          Load More
                          <span className="rounded-move1 z-[-1] rounded-full absolute top-0 left-0 w-[40px] h-[40px] dark:bg-[#FFFFFF14] bg-[#ECECEC]"></span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            className="Arrow-service dark:fill-white fill-[#061E2C]"
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
        <Footer
          parent={parent}
          lang={lang}
          direction={direction}
          welnote={true}
        />
      </div>
    </>
  );
};
export default UiStore;

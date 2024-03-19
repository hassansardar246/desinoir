"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ProjectDetail from "@/components/common/ProjectDetail";
import Footer from "@/components/common/Footer";
import Link from "next/link";

const customStyles = {
  content: {
    width: "100%",
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    position: "fixed",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};
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
    img: "/uiImg.png",
    para: `Task Management`,
    price: "$10",
    tag: "Paid",
  },
  {
    img: "/uiImg2.png",
    contentTitle: "Ui/UX Design",
    para: `Mobile Application Design`,
    price: "$50",
    tag: "Paid",
  },
  {
    title: "Branding",
    img: "/uiImg3.png",

    contentTitle: "Branding",
    para: `Creative Web Design`,
    price: "$99",
    tag: "Paid",
  },
];

const itemsArabic = [
  {
    contentTitle: "تصميم واجهة المستخدم/تجربة المستخدم",
    img: "/uiImg.png",
    para: `إدارة المهام`,
    price: "$10",
    tag: "مدفوع",
  },
  {
    img: "/uiImg2.png",
    contentTitle: "تصميم واجهة المستخدم/تجربة المستخدم",
    para: `تصميم تطبيق الجوال`,
    price: "$50",
    tag: "مدفوع",
  },
  {
    title: "العلامة التجارية",
    img: "/uiImg3.png",

    contentTitle: "العلامة التجارية",
    para: `تصميم الويب الإبداعي`,
    price: "$99",
    tag: "مدفوع",
  },
];

function UiStoreDetailNav({ parent, lang }: any) {
  const Pictures = [
    {
      id: "1",
      Image: "/dashbordimg.png",
    },
    {
      id: "2",
      Image: "/gallery1.png",
    },
    {
      id: "3",
      Image: "/gallery2.png",
    },
    {
      id: "4",
      Image: "/gallery3.png",
    },
    {
      id: "5",
      Image: "/dashbordimg.png",
    },
    {
      id: "6",
      Image: "/dashbordimg.png",
    },
    {
      id: "7",
      Image: "/dashbordimg.png",
    },
    {
      id: "8",
      Image: "/gallery3.png",
    },
    {
      id: "9",
      Image: "/dashbordimg.png",
    },
    {
      id: "10",
      Image: "/gallery3.png",
    },
    {
      id: "11",
      Image: "/dashbordimg.png",
    },
    {
      id: "12",
      Image: "/gallery3.png",
    },
    {
      id: "13",
      Image: "/dashbordimg.png",
    },
    {
      id: "14",
      Image: "/gallery3.png",
    },
  ];

  const renderImage = (item: any, index: any) => {
    if (index === 0) {
      return (
        <div className="flex sm:items-center justify-center" key={item.id}>
          <img
            src={item.Image}
            className="w-[840px] lg:w-[875px] h-[210px] md:h-[530px] lg:h-[530px] rounded-[30px]"
          />
        </div>
      );
    } else if (index === 1) {
      return (
        <div
          className=" flex flex-col md:flex-col lg:flex-row gap-10 justify-between items-center"
          key={item.id}
        >
          {Pictures.slice(1, 3).map((item) => (
            <div key={item.id} className="w-[68%] lg:w-[30%]">
              <img
                src={item.Image}
                alt="Project"
                className="w-full h-auto rounded-[30px]"
              />
            </div>
          ))}
          {totalPictures > 3 && (
            <div
              className="w-full lg:w-[30%] rounded-[30px] relative flex justify-center items-center"
              onClick={handleClick}
            >
              <div
                className={`text-center absolute w-[100%] lg:w-[100%] h-[100%] bg-[#00000069] rounded-[30px] flex justify-center items-center cursor-pointer`}
                style={{
                  backgroundImage: `url('path/to/your/image.jpg')`,
                  backgroundSize: "cover",
                }}
              >
                <p className="text-[34px] text-[#fff]  top-[50%] font-normal leading-normal py-[34%]">
                  + {totalPictures - 4} More
                </p>
              </div>
              {Pictures.slice(1, 3).map((item) => (
                <div className="w-[68%] md:w-[840px] lg:w-[100%]" key={item.id}>
                  <img
                    src={item.Image}
                    alt="Project"
                    className="w-[100%] md:w-[840px] lg:w-full rounded-[30px] h-[210px] md:h-[530px] lg:h-[196px]"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    } else if (index === 3) {
      return (
        <div
          className="w-[68%] md:w-[400px] lg:w-[30%] rounded-[30px] relative flex justify-center items-center"
          key={item.id}
          onClick={handleClick}
        ></div>
      );
    } else {
      return null;
    }
  };
  const mappedPictures = Pictures.map((item) => ({
    src: item.Image,
    id: item.id,
  }));

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(true);
    setSelectedImages(Pictures);
  };
  const totalPictures = Pictures.length;
  const [selectedImages, setSelectedImages] = useState<any>([]);

  const data = parent?.uiStoreDetails;
  const direction = lang == "en" ? "ltr" : "rtl";
  return (
    <>
      <div dir={direction} className="bg-[#F2F6F5] dark:bg-[#061E2C]">
        <ProjectDetail
          parent={parent}
          lang={lang}
          direction={direction}
          txt1={data.mainHeading}
          txt2={data.mainHeading2}
        />
        <div className="max-w-[1460px] mx-auto px-5 pt-[80px]">
          <div className="flex  flex-col md:flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-10 sm:w-[100%] md:w-[100%] lg:w-[60%]">
              {Pictures.map((item, index) => renderImage(item, index))}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={`fixed top-0 left-0 right-0 bottom-0 w-full bg-black z-999`}
                contentLabel="Image Modal"
              >
                <div
                  onClick={closeModal}
                  className="absolute z-10 flex justify-end w-full p-[20px]"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-[#fff] text-[26px] hover:text-[red] cursor-pointer"
                  />
                </div>
                <Carousel
                  // swipeRollBackSpeed={0.9}
                  transitionSpeed={4}
                  objectFit="contain"
                  hasSizeButton={false}
                  hasMediaButton={false}
                  images={selectedImages.map((item: any) => ({
                    src: item.Image,
                    id: item.id,
                  }))}
                  hasIndexBoard={false}
                  style={{ height: "100vh", width: "100%", objectFit: "cover" }}
                  index={3}
                />
              </Modal>
            </div>
            <div className="sm:w-[100%] md:w-[100%] lg:w-[30%] pt-[29px] flex flex-col gap-[15px]">
              <div>
                <p className="text-[#434750] dark:text-[#989CAA] text-[18px]  font-normal leading-[25px] ">
                  {data.description}
                </p>
              </div>
              <div className="flex">
                <div>
                  <p className="text-[#434750] dark:text-[#989CAA] dark:text-[#ff]  leading-normal font-medium text-[20px]">
                    {data.categoryText}:
                  </p>
                </div>
                <div>
                  <p className="text-[#989CAA]  leading-normal font-normal text-[20px]">
                    {data.categoryDescription}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div>
                  <div className="bg-[#DEE9EE] dark:bg-[#1A303D] font-[600] text-[#000] dark:text-[#fff]  py-[16px] px-[40px] rounded-[30px] ">
                    $10
                  </div>
                </div>
                <div>
                  <button className="bg-[#197BFF] dark:bg[#197BFF] text-[#fff] py-[16px] px-[40px] rounded-[30px] ">
                    {data.buyBtnTxt}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[20px] pt-[40px]">
              <div>
                <p className="text-[35px] md:text-[35px] text-[#061E2C] dark:text-[#F2F6F5]  font-medium lg:text-[50px] leading-normal ">
                  🎯 {data.heading1}
                </p>
              </div>
              <div>
                <ol className="list-decimal ps-[17px] md:ps-[17px] lg:ps-[17px]">
                  <li className="text-[#434750] dark:text-[#989CAA] text-[16px] leading-[35px] font-normal ">
                    <span className="text-[#061E2C] dark:text-[#F2F6F5]  text-[16px] font-medium ">
                      {data.category1}
                    </span>{" "}
                    - {data.category1Description}
                  </li>
                  <li className="text-[#434750] dark:text-[#989CAA] text-[16px] leading-[35px] font-normal ">
                    <span className=" text-[#061E2C] dark:text-[#F2F6F5] text-[16px] font-medium ">
                      {data.category2}
                    </span>{" "}
                    - {data.category2Description}
                  </li>
                  <li className="text-[#434750] dark:text-[#989CAA] text-[16px] leading-[35px] font-normal ">
                    <span className="text-[#061E2C] dark:text-[#F2F6F5] text-[16px] font-medium ">
                      {data.category3}
                    </span>
                    - {data.category3Description}
                  </li>
                  <li className="text-[#434750] dark:text-[#989CAA] text-[16px] leading-[35px] font-normal ">
                    <span className="text-[#061E2C] dark:text-[#F2F6F5]  text-[16px] font-medium ">
                      {data.category4}
                    </span>
                    - {data.category4Description}
                  </li>
                  <li className="text-[#434750] dark:text-[#989CAA] text-[16px] leading-[35px] font-normal ">
                    <span className="text-[#061E2C] dark:text-[#F2F6F5]  text-[16px] font-medium ">
                      {" "}
                      {data.category5}
                    </span>
                    - {data.category5Description}
                  </li>
                  <li className="text-[#434750] dark:text-[#989CAA] text-[16px] leading-[35px] font-normal ">
                    <span className="text-[#061E2C] dark:text-[#F2F6F5]  text-[16px] font-medium ">
                      {data.category6}
                    </span>
                    - {data.category6Description}
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#061E2C] dark:text-[#F2F6F5]  font-medium text-[35px] md:text-[35px] lg:text-[50px] leading-normal ">
                  {data.heading2}
                </p>
              </div>
              <div>
                <div className=" flex flex-col gap-[15px] icon-style mt-[20px]">
                  <div className="flex gap-[10px]  ">
                    <div className="">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-[#434750] dark:text-[#989CAA]"
                      />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#434750] dark:text-[#989CAA] leading-normal font-normal">
                        {data.option1}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[10px]  ">
                    <div className="">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-[#434750] dark:text-[#989CAA]"
                      />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#434750] dark:text-[#989CAA] leading-normal font-normal">
                        {data.option2}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[10px]  ">
                    <div className="">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-[#434750] dark:text-[#989CAA]"
                      />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#434750] dark:text-[#989CAA] leading-normal font-normal">
                        {data.option3}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[10px]  ">
                    <div className="">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-[#434750] dark:text-[#989CAA]"
                      />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#434750] dark:text-[#989CAA] leading-normal font-normal">
                        {data.option4}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[10px] ">
                    <div className="">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-[#434750] dark:text-[#989CAA]"
                      />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#434750] dark:text-[#989CAA] leading-normal font-normal">
                        {data.option5}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[10px]  ">
                    <div className="">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-[#434750] dark:text-[#989CAA]"
                      />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#434750] dark:text-[#989CAA] leading-normal font-normal">
                        {data.option6}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#061E2C] dark:text-[#FFF] font-medium text-[35px] md:text-[35px] lg:text-[50px] leading-normal ">
                  {data.heading3}
                </p>
              </div>
              <div className="mt-[20px]">
                <p className="text-[#061E2C] dark:text-[#F2F6F5] text-[16px] font-medium ">
                  {data.subHeading}
                </p>
                <p className="text-[#434750] leading-[150%] dark:text-[#989CAA] text-[16px] font-normal ">
                  {data.subHeadingOption1}
                </p>
                <p className="text-[#434750] leading-[150%] dark:text-[#989CAA] text-[16px] font-normal ">
                  {data.subHeadingOption2}
                </p>
              </div>
            </div>
          </div>
          <h3 className="font-[500] pt-[130px] text-[50px] dark:text-white text-[#061E2C]">
            {data.relatedProducts}
          </h3>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 pt-[30px] max-lg:pt-[100px]">
            {lang == "en"
              ? items.map((item, index) => (
                  <Link
                    href={"ui-store/ui-details"}
                    key={index}
                    className=" group cursor-pointer"
                  >
                    <div className=" relative ">
                      <img
                        className="w-[100%] max-sm:justify-center object-cover h-[330px] custom-fade transform transition-transform  ease-in-out duration-100 h-auto object-cover rounded-[30px]"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>

                    <div className="mt-[30px] transition-opacity duration-500 ease-in-out">
                      <h1 className="text-[16px] font-[500px] dark:text-[#DEE9EE] text-[#989CAA] uppercase tracking-[0.5px] leading-[120%] ">
                        {item.contentTitle}
                      </h1>
                      <div className="flex justify-between items-center">
                        <p className="text-[26px] max-sm:text-[20px] max-md:text-[20px] font-[500px] text-[#061E2C] dark:text-[#FFF] leading-[120%]  group-hover:text-[#20D091]">
                          {item.para}
                        </p>

                        <div className="pe-4">
                          <div
                            className={`p-[10px] !text-[16px] !font-[500]    ${
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
                ))
              : itemsArabic.map((item, index) => (
                  <Link
                    href={"ui-store/ui-details"}
                    key={index}
                    className=" group cursor-pointer"
                  >
                    <div className=" relative ">
                      <img
                        className="w-[100%] max-sm:justify-center object-cover h-[330px] custom-fade transform transition-transform  ease-in-out duration-100 h-auto object-cover rounded-[30px]"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>

                    <div className="mt-[30px] mb-[60px] transition-opacity duration-500 ease-in-out">
                      <h1 className="text-[16px] font-[500px] dark:text-[#DEE9EE] text-[#989CAA] uppercase tracking-[0.5px] leading-[120%] ">
                        {item.contentTitle}
                      </h1>
                      <div className="flex justify-between items-center">
                        <p className="text-[26px] max-sm:text-[20px] max-md:text-[20px] font-[500px] text-[#061E2C] dark:text-[#FFF] leading-[120%]  group-hover:text-[#20D091]">
                          {item.para}
                        </p>

                        <div className="pe-4">
                          <div
                            className={`p-[10px] !text-[16px] !font-[500]    ${
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
        </div>

        <Footer
          direction={direction}
          parent={parent}
          lang={lang}
          welnote={true}
        />
      </div>
    </>
  );
}

export default UiStoreDetailNav;

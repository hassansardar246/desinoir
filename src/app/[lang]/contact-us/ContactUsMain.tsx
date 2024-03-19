"use client";
import FeatureProject from "@/components/FeatureProject";
import Footer from "@/components/common/Footer";
import Pagesheader from "@/components/common/Pagesheader";
import ProjectDetail from "@/components/common/ProjectDetail";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function ContactUsMain({ parent, direction, lang }: any) {
  const { theme, setTheme } = useTheme();
  const dataMap = [
    { id: 1, label: "Less than 15" },
    { id: 2, label: "15-30" },
    { id: 3, label: "30-45" },
    { id: 4, label: "45-60" },
    { id: 5, label: "More than 60" },
  ];
  const data = [
    { id: 1, label: "UI/UX Designing" },
    { id: 2, label: "Branding" },
    { id: 3, label: "Graphic Designing" },
    { id: 4, label: "Motion Graphic Designing" },
    { id: 5, label: "Others" },
  ];
  const NewDAta = [
    { id: 1, label: "Less than 1k" },
    { id: 2, label: "1k-5k" },
    { id: 3, label: "5k-8k" },
    { id: 4, label: "8k-15k" },
    { id: 5, label: "More than 15k" },
  ];

  const dataMapArabic = [
    { id: 1, label: "أقل من 15" },
    { id: 2, label: "15-30" },
    { id: 3, label: "30-45" },
    { id: 4, label: "45-60" },
    { id: 5, label: "أكثر من 60" },
  ];

  const dataArabic = [
    { id: 1, label: "تصميم واجهة المستخدم/تجربة المستخدم" },
    { id: 2, label: "العلامة التجارية" },
    { id: 3, label: "تصميم الجرافيك" },
    { id: 4, label: "تصميم الجرافيك المتحرك" },
    { id: 5, label: "آخرون" },
  ];

  const newDataArabic = [
    { id: 1, label: "أقل من 1 ألف" },
    { id: 2, label: "1 ألف - 5 ألف" },
    { id: 3, label: "5 ألف - 8 ألف" },
    { id: 4, label: "8 ألف - 15 ألف" },
    { id: 5, label: "أكثر من 15 ألف" },
  ];

  const [singleSelect, setSingleSelect] = useState(null);
  const [multiSelect, setMultiSelect] = useState<any[]>([]);
  const [singleSelectNewData, setSingleSelectNewData] = useState(null);

  const handleSingleSelect = (item: any) => {
    setSingleSelect(item.id);
  };

  const handleMultiSelect = (id: any, label: any) => {
    if (multiSelect.includes(id)) {
      setMultiSelect(multiSelect.filter((item) => item !== id));
    } else {
      setMultiSelect([...multiSelect, id]);
      setSingleSelect(null);
      setSingleSelectNewData(null);
    }
  };
  const handleSingleSelectNewData = (id: any) => {
    setSingleSelectNewData(id);
  };

  const langData = parent.contactUS;
  return (
    <>
      <div dir={direction} className="bg-[#ffffff]  dark:bg-[#061E2C] h-full ">
        {/* <ProjectDetail
          showbtn={false}
          parent={parent}
          lang={lang}
          direction={direction}
          txt1={langData.mainHeading}
          txt2={langData.mainHeading2}
          img="/contact.png"
        /> */}
        <Pagesheader
          showbtn={false}
          parent={parent}
          lang={lang}
          direction={direction}
          txt1={langData.mainHeading}
          txt2={langData.mainHeading2}
          img="/contact.png"
        />

        <div className="max-w-[1460px] w-11/12 xl:w-10/12 mx-auto pt-[30px] lg:pt-[80px]  dark:bg-[#061E2C] sm:h-auto">
          <div className="">
            <main className="back">
              <div className="">
                <div className="block lg:flex justify-between	 items-center ">
                  <div className="text-[#061E2C] dark:text-white lg:text-[50px] tracking-wide lg:mr-2 max-sm:w-[100%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[48%] xl:w-[48%] 2xl:w-[35%] leading-normal">
                    {langData.heading}
                  </div>

                  <div
                    className="max-sm:w-[100%] max-md:w-[100%] max-lg:w-[100%] max-xl:w-[35%] xl:w-[48%] 2xl:w-[35%] text-[#434750]
                                dark:text-gray-400 sm:text-xl md:text-xl lg:text-2xl font-normal  leading-[33.60px]"
                  >
                    {langData.description}
                  </div>
                </div>
              </div>

              <div className="mt-[60px]">
                <div className="border  border-[#061E2C26] dark:border-[#FFFFFF40] p-[20px] pb-0 xl:p-[50px] rounded-[30px] gap-[50px]">
                  <div className=" block lg:flex gap-[50px]">
                    <div className="  border-right">
                      <div className="width-40">
                        <div className="my-[40px]">
                          <span className="text-[#061E2C] dark:text-white sm:text-xl md:text-xl lg:text-2xl font-medium  tracking-wide ">
                            {langData.selectServices}{" "}
                          </span>
                          <span className="text-[#434750] dark:text-gray-400 text-lg font-normal  tracking-wide">
                            ({langData.option})
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-5 max-sm:w-[100%] md:w-[100%] lg:w-[90%]">
                          {lang == "en"
                            ? data.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() =>
                                    handleMultiSelect(item.id, item.label)
                                  }
                                  className={`${
                                    multiSelect.includes(item.id)
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px] rounded-[30px] border border-[#061E2C26] dark:border-[#FFFFFF40] justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-wide">
                                    {item.label}
                                  </div>
                                </div>
                              ))
                            : dataArabic.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() =>
                                    handleMultiSelect(item.id, item.label)
                                  }
                                  className={`${
                                    multiSelect.includes(item.id)
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px] rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40]  justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-wide">
                                    {item.label}
                                  </div>
                                </div>
                              ))}
                        </div>

                        <div className="my-[40px]">
                          <span className="text-[#061E2C] dark:text-white sm:text-xl md:text-xl lg:text-2xl font-medium  tracking-wide my-4">
                            {langData.yourBudget}{" "}
                          </span>
                          <span className="text-[#434750] dark:text-gray-400 text-lg font-medium  tracking-wide">
                            ({langData.usd})
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-5 max-sm:w-[100%] md:w-[100%] lg:w-[80%] min-[1600px]:w-[60%]">
                          {lang == "en"
                            ? NewDAta.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() => handleSingleSelect(item)}
                                  className={`${
                                    singleSelect === item.id
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px]  rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40] border-opacity-25 justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-wide">
                                    {item.label}
                                  </div>
                                </div>
                              ))
                            : newDataArabic.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() => handleSingleSelect(item)}
                                  className={`${
                                    singleSelect === item.id
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px]  rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40] border-opacity-25 justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-wide">
                                    {item.label}
                                  </div>
                                </div>
                              ))}
                        </div>

                        <div className="my-[40px]">
                          <span className="text-[#061E2C] dark:text-white sm:text-xl md:text-xl lg:text-2xl font-medium  tracking-wide my-4">
                            {langData.deliveryTime}{" "}
                          </span>
                          <span className="text-[#434750] dark:text-gray-400  text-lg font-medium  tracking-wide">
                            ({langData.usd})
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-5 sm:w-[100%] md:w-[100%] lg:w-[80%] min-[1600px]:w-[60%]">
                          {lang == "en"
                            ? dataMap.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() =>
                                    handleSingleSelectNewData(item.id)
                                  }
                                  className={`${
                                    singleSelectNewData === item.id
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[10px]  rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40] border-opacity-25 justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-wide">
                                    {item.label}
                                  </div>
                                </div>
                              ))
                            : dataMapArabic.map((item, index) => (
                                <div
                                  key={index}
                                  onClick={() =>
                                    handleSingleSelectNewData(item.id)
                                  }
                                  className={`${
                                    singleSelectNewData === item.id
                                      ? "bg-[#434750] dark:bg-[#DEE9EE] text-[#fff] dark:text-[#061E2C]"
                                      : "dark:bg-[transparent] text-[#434750] dark:text-[#989CAA]"
                                  } cursor-pointer px-4 py-[13px]  rounded-[30px] border border-[#061e2c26] dark:border-[#FFFFFF40] border-opacity-25 justify-center items-center gap-0.5 flex`}
                                >
                                  <div className="text-base font-[16px]  tracking-wide">
                                    {item.label}
                                  </div>
                                </div>
                              ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-[66px] hidden lg:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="518"
                        viewBox="0 0 2 518"
                        fill="none"
                      >
                        <path
                          d="M1 1L0.999977 517"
                          stroke={`${theme == "dark" ? "#ffffff" : "#061E2C"} `}
                          stroke-opacity="0.07"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>

                    <div className=" ">
                      <div className="text-[#061E2C] dark:text-white text-2xl font-medium  tracking-wide my-[40px]">
                        {langData.contactDetails}
                      </div>
                      <div className="">
                        <div className="block lg:flex items-center">
                          <div className="name-max h-[61px] px-[30px] py-[20px] bg-[#DEE9EE] dark:bg-white dark:bg-opacity-10 rounded-[50px] justify-start items-center gap-2.5 inline-flex sm:my-[10px] lg:mr-2 w-[100%] md:w-[100%] lg:w-[50%] my-[20px]">
                            <input
                              type="text"
                              placeholder={`${langData.fullname}`}
                              className="text-gray-400 text-lg font-normal  uppercase tracking-wide bg-transparent border-none outline-none w-full"
                            />
                          </div>

                          <div className="name-max h-[61px] px-[30px] py-[20px] sm:my-[10px] bg-[#DEE9EE] dark:bg-white dark:bg-opacity-10 rounded-[50px] justify-start items-center gap-2.5 inline-flex lg:mr-2 w-[100%] md:w-[100%] lg:w-[50%]">
                            <input
                              type="text"
                              placeholder={`${langData.email}`}
                              className="text-gray-400 text-lg font-normal  uppercase tracking-wide bg-transparent border-none outline-none w-full"
                            />
                          </div>
                        </div>
                        <div className="name-max  h-[61px] px-[30px] py-[19px] bg-[#DEE9EE] dark:bg-white dark:bg-opacity-10 rounded-[50px] justify-start items-center gap-2.5 inline-flex w-[100%] my-[20px]">
                          <input
                            type="text"
                            placeholder={`${langData.whatsApp} (${langData.Optional})`}
                            className="text-gray-400 text-[12px] sm:text-lg font-normal tracking-wide bg-transparent border-none outline-none w-full"
                          />
                        </div>

                        <div className="name-max h-[293px] px-[30px] py-[22px]  bg-[#DEE9EE] dark:bg-white dark:bg-opacity-10 rounded-[25px] justify-start items-start gap-2.5 inline-flex w-[100%]">
                          <textarea
                            id="projectDetails"
                            placeholder={`${langData.projectDetails} (${langData.Optional})`}
                            className="text-gray-400 font-normal h-full tracking-wide bg-transparent border-none outline-none w-full resize-none text-lg"
                          ></textarea>
                        </div>

                        <button className="name-max h-[61px] px-[30px] py-[19px] bg-blue-600 rounded-[50px] justify-center items-center gap-2.5 inline-flex w-[100%] my-[20px]">
                          <span className="text-white text-lg font-normal  uppercase tracking-wide">
                            {langData.sendQuery}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="margin-class pt-[70px]">
                    <span className=" text-[#434750] dark:text-white text-2xl font-normal  tracking-wide">
                      {langData.suggession}{" "}
                    </span>
                    <span className="text-[#434750] dark:text-white text-2xl font-normal  underline tracking-wide">
                      {langData.suggessionII}
                    </span>
                    <span className="text-[#434750] dark:text-white text-2xl font-normal  tracking-wide">
                      {" "}
                      {langData.suggessionIII}
                    </span>
                  </div>
                </div>
              </div>

              <div className=" pt-[130px]">
                <div>
                  <p className="max-sm:text-3xl md:text-5xl lg:text-[50px] font-[500] text-[#061E2C] dark:text-[#fff]">
                    {langData.followCreativity}
                  </p>
                </div>

                <div className="flex lg:flex-row md:flex-col max-sm:flex-col gap-[50px] justify-center py-[60px]">
                  <div className="flex flex-col sm:w-[100%] lg:w-[705px] gap-[50px]">
                    <div className="w-[100%] max-sm:py-[50px] sm:h-[479px] lg:h-[400px] flex flex-col items-center bg-[#197BFF1A] dark:[#197bff1a] rounded-[50px] justify-center	">
                      <div>
                        <img src={"/facebok.png"} alt="facebook" />
                      </div>
                      <div>
                        <p className="text-[#434750] dark:text-[#fff] text-[25px] md:text-[28px] lg:text-[30px] font-[500] ">
                          {langData.facebook}
                        </p>
                      </div>
                    </div>
                    <div className="w-[100%] max-sm:py-[50px] sm:h-[479px] lg:h-[479px] flex flex-col items-center bg-[#1DE2CF1A] dark:bg-[#1de2cf1a] rounded-[50px] justify-center	">
                      <div>
                        <img src={"/linkedin.png"} alt="" />
                      </div>
                      <div>
                        <p className="text-[#434750] dark:text-[#fff] text-[25px] md:text-[28px] lg:text-[30px] font-[500] ">
                          {langData.linkedin}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:w-[100%] lg:w-[705px] gap-[50px]">
                    <div className="w-[100%] max-sm:py-[50px] sm:h-[479px] lg:h-[479px] flex flex-col items-center bg-[#5458b11a] dark:bg-[#5458b11a] rounded-[50px] justify-center	">
                      <div>
                        <img src={"/instagram.png"} alt="" />
                      </div>
                      <div>
                        <p className="text-[#434750] dark:text-[#fff] text-[25px] md:text-[28px] lg:text-[30px] font-[500] ">
                          {langData.instagram}
                        </p>
                      </div>
                    </div>
                    <div className="w-[100%] max-sm:py-[50px] m:h-[4079x] lg:h-[400px] flex flex-col items-center bg-[#fd346e1a] dark:bg-[#fd346e1a] rounded-[50px] justify-center	 ">
                      <div>
                        <img src={"/dribble.png"} alt="" />
                      </div>
                      <div>
                        <p className="text-[#434750] dark:text-[#fff] text-[25px] md:text-[28px] lg:text-[30px] font-[500] ">
                          {langData.dribbble}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <FeatureProject parent={parent} lang={lang} direction={direction} />
        <div className="max-w-[900px] mx-auto">
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
        <Footer
          parent={parent}
          lang={lang}
          direction={direction}
          welnote={false}
        />
      </div>
    </>
  );
}

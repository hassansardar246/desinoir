import React from "react";
import img1 from "/public/img1.png";
import img2 from "/public/img2.png";
import men from "/public/men.png";
import Screen1 from "/public/Screen1.png";
import Screen2 from "/public/Screen2.png";
import Screen3 from "/public/Screen3.png";
import Screen4 from "/public/Screen4.png";
import Screen5 from "/public/Screen5.png";
import Screen6 from "/public/Screen6.png";
import "../project.css";
import ProjectDetail from "@/components/common/ProjectDetail";
import Footer from "@/components/common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const ProjectDetailsNav = ({ parent, lang, direction }: any) => {
  const data = parent.projectDetails;
  return (
    <div dir={direction} className="dark:bg-[#061E2C] bg-[#F2F6F5]">
      <ProjectDetail
        parent={parent}
        lang={lang}
        showbtn={true}
        direction={direction}
        txt1={data.mainHeading}
        txt2={data.mainHeading2}
      />
      <div className="max-w-[1460px] w-10/12 mx-auto sm:h-auto">
        <div className="max-lg:px-5">
          <div className="">
            <p className="font-[400] text-[16px] leading-6 dark:text-[#989CAA] light:text-[#434750] py-[80px]">
              {data.description}
            </p>

            <div className="flex flex-col md:flex-row  md:items-start gap-10">
              <div className="w-full md:w-[58%] lg:w-[972px]">
                <img src={img1.src} alt="Project" className="w-full h-auto " />
              </div>
              <div className="w-[270px]  h-[200px] sm:h-[200px] lg:h-[254px]">
                <p className="text-[#989CAA] text-[16px] pt-4 leading-[22px] font-normal">
                  {data.category}
                </p>
                <p className="text-[#061E2C] dark:text-[#fff] text-[24px] pb-4 leading-[22px] font-medium">
                  {data.UIUXDesign}
                </p>
                <p className="text-[#989CAA] text-[16px] font-normal">
                  {data.client}
                </p>
                <p className="text-[#061E2C] dark:text-[#fff] text-[24px] pb-4 pt-[5px] leading-[22px] font-medium">
                  {data.mainHeading}
                </p>
                <p className="text-[#989CAA] text-[16px] font-normal">
                  {data.Date}
                </p>
                <p className="text-[#061E2C] dark:text-[#fff] text-[24px] pb-4 pt-[5px] leading-[22px] font-medium">
                  {data.dateDisplay}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-start lg:py-[80px] sm-my[30px]">
              <div className="w-full md:w-[38%]">
                <p className="text-[29px] sm:text-[29px] lg:text-[50px]  text-[#061E2C] dark:text-[#fff] font-medium max-lg:py-[20px]">
                  {data.heading1}
                </p>
              </div>
              <div className="w-full md:w-[58%]">
                <p className="text-[16px] text-[#434750] dark:text-[#989CAA]   leading-6 pb-5 font-normal">
                  {data.description1}
                </p>
                <p className="text-[16px] text-[#434750] dark:text-[#989CAA]  leading-6 pt-2 font-normal">
                  {data.description1partII}
                </p>
              </div>
            </div>
            <div className="py-[20px] sm:py-[20px] lg:py-0">
              <img src={men.src} alt="men" className="w-full h-auto " />
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:justify-between !items-start md:items-start lg:pt-[80px]">
              <div className="w-full md:w-[35%]">
                <p className="text-[34px] sm:text-[34px] lg:text-[50px] text-[#061E2C] dark:text-[#fff] font-medium">
                  {data.heading2}
                </p>
              </div>

              <div className="w-full md:w-[58%]">
                <p className="text-[16px] text-[#434750]  dark:text-[#989CAA]  leading-6 pb-5 font-normal">
                  {data.description2}
                </p>
                <p className="text-[16px] text-[#434750]  dark:text-[#989CAA] leading-6 py-5 font-normal">
                  {data.description2partII}
                </p>

                <div>
                  <div className=" flex flex-col gap-[15px] icon-style mt-[20px]">
                    <div className="flex gap-[10px]  ">
                      <div className="flex items-center justify-center">
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
                      <div className="flex items-center justify-center">
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
                      <div className="flex items-center justify-center">
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
                      <div className="flex items-center justify-center">
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
                      <div className="flex items-center justify-center">
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
                      <div className="flex items-center justify-center">
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

                <div className="py-[20px] sm:py-[20px]  lg:py-[80px] w-full h-auto">
                  <img src={img2.src} alt="img2" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:justify-between lg:pb-[80px] sm-my[30px]">
              <div className="w-full md:w-[35%]">
                <p className="text-[34px] sm:text-[34px]  lg:text-[50px] text-[#061E2C] dark:text-[#fff] font-medium sm:py-[20px]">
                  {data.heading3}
                </p>
              </div>
              <div className="w-full md:w-[58%]">
                <p className="text-[16px] text-[#434750]  dark:text-[#989CAA]  leading-6 pb-5 font-normal">
                  {data.description3}
                </p>
                <p className="text-[16px] text-[#434750]  dark:text-[#989CAA] leading-6 pt-2 font-normal">
                  {data.description3partII}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[34px] sm:text-[34px] lg:text-[50px] text-[#061E2C] dark:text-[#fff] font-medium py-[20px] sm:py-[20px] lg:py-0">
                {data.majorScreens}
              </p>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10 lg:pt-[80px]">
                <div className="w-full md:w-[50%] lg:w-[30%] xl:w-[30%] flex flex-col  gap-[40px]">
                  <img
                    src={Screen1.src}
                    alt="Screen 1"
                    className="w-full h-[300] md:h-[300] lg:h-[300] xl:h-[300]"
                  />
                  <img
                    src={Screen4.src}
                    alt="Screen 4"
                    className="w-full h-[300] md:h-[300] lg:h-[300] xl:h-[300]"
                  />
                </div>
                <div className="w-full md:w-[50%] lg:w-[30%] xl:w-[30%] flex flex-col  gap-[40px]">
                  <img
                    src={Screen2.src}
                    alt="Screen 2"
                    className="w-full h-[300] md:h-[300] lg:h-[300] xl:h-[300]"
                  />
                  <img
                    src={Screen5.src}
                    alt="Screen 5"
                    className="w-full h-[300] md:h-[300] lg:h-[300] xl:h-[300]"
                  />
                </div>
                <div className="w-full md:w-[50%] lg:w-[30%] xl:w-[30%] flex flex-col  gap-[40px]">
                  <img
                    src={Screen3.src}
                    alt="Screen 3"
                    className="w-full h-[300] md:h-[300] lg:h-[300] xl:h-[300]"
                  />
                  <img
                    src={Screen6.src}
                    alt="Screen 6"
                    className="w-full h-[300] md:h-[300] lg:h-[300] xl:h-[300]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        parent={parent}
        direction={direction}
        lang={lang}
        welnote={true}
      />
    </div>
  );
};
export default ProjectDetailsNav;

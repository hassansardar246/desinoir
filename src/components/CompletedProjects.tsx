"use client";
import React from "react";
import CountUp from "react-countup";
function CompletedProjects() {
  return (
    <div>
      <div className="dark:bg-[#061E2C] bg-[#F2F6F5] py-[130px]">
        <div className="flex justify-center items-center h-[410px] lg:h-[610px] w-full relative max-w-[1460px] w-10/12 mx-auto">
          <div className="flex items-center justify-center w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[360px] lg:h-[360px] dark:bg-[#061E2C]  absolute top-20 lg:top-50 left-5 border border-[#061E2C26] dark:border-[#FFFFFF40] rounded-[360px]">
            <div className="text-center">
              <h3 className="dark:text-white text-[#061E2C] mb-0 text-[40px] lg:text-[74px] font-[500] leading-[80px]">
                <CountUp enableScrollSpy={true} end={1274} />+
              </h3>
              <p className="font-[400] text-[#989CAA] dark:text-[#989CAA] md:text-[18px] text-[14px]">
                Completed Projects
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-[160px] h-[160px] md:w-[240px] md:h-[240px] lg:w-[424px] z-30 lg:h-[424px] dark:bg-[#02111B] bg-[#DEE9EE] absolute left-[7%] md:left-[20%] bottom-5 border border-[#061E2C26]  dark:border-[#FFFFFF40] rounded-[390px]">
            <div className="text-center">
              <h3 className="dark:text-white text-[#061E2C] mb-0 text-[30px] md:text-[40px] lg:text-[74px] font-[500] md:leading-normal leading-[50px]">
                <CountUp enableScrollSpy={true} end={1029} />+
              </h3>
              <p className="font-[400] text-[#989CAA] md:text-[18px] text-[14px]">
                Happy Clients
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[390px] lg:h-[390px] dark:bg-[#061E2C] absolute top-0 left-[43%] border border-[#061E2C26]  dark:border-[#FFFFFF40] rounded-[390px]">
            <div className="text-center">
              <h3 className="dark:text-white text-[#061E2C] mb-0 md:text-[40px] text-[30px] lg:text-[74px] font-[500] md:leading-normal leading-[50px]">
                <CountUp enableScrollSpy={true} end={98} />%
              </h3>
              <p className="font-[400] text-[#989CAA] md:text-[18px] text-[14px]">
                Positive Rating
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center  w-[160px] h-[160px] md:w-[240px] md:h-[240px] lg:w-[498px] lg:h-[498px] dark:bg-[#02111B] bg-[#DEE9EE] absolute bottom-0 right-5 border border-[#061E2C26]  dark:border-[#FFFFFF40] rounded-[390px]">
            <div className="text-center">
              <h3 className="text-[#20D091] md:text-[50px] text-[30px] mb-0 lg:text-[112px] font-[500] md:leading-normal leading-[50px]">
                <CountUp enableScrollSpy={true} end={13} />+
              </h3>
              <p className="font-[400] text-[#989CAA] md:text-[18px] text-[14px] uppercase">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedProjects;

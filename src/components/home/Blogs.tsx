import Image from "next/image";
import Link from "next/link";
import React from "react";

function Blogs({ parent, lang, bgchange }: any) {
  const background = {
    background: "linear-gradient(133deg, #197BFF 11.04%, #20D091 100%)",
    borderRadius: "15px",
  };
  return (
    <div
      className={` ${
        bgchange
          ? "dark:bg-[#061E2C] bg-[#F2F6F5]"
          : "bg-[#061E2C] dark:bg-[#02111B]"
      } pt-[50px] lg:pt-[70px] pb-[50px] lg:pb-[150px]`}
    >
      <div className="max-w-[1460px] w-10/12 mx-auto">
        {bgchange ? (
          <div className="text-[50px] font-[500] text-[#061E2C] dark:text-white mb-[40px]">
            <h3>More Articles</h3>
          </div>
        ) : (
          <div className="mb-[80px] text-center">
            <p className="uppercase text-[#EFCB1C] text-[20px]">
              {parent?.BlogsSection?.title}
            </p>
            <h3 className="lg:text-[50px] text-[30px] font-[500] leading-normal text-white">
              {parent?.BlogsSection?.heading}
            </h3>
          </div>
        )}

        <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-10">
          <div className="relative w-full">
            <Link
              className="block"
              href={`/${lang}/article/Design Systems: Empowering`}
            >
              <Image
                src="/assets/home/stats1.png"
                width={700}
                className="w-full lg:max-w-[700px] h-auto"
                height={540}
                alt="image"
              />
              <div className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] w-[90%] sm:w-[550px] lg:w-[90%]">
                <div className="flex items-center justify-center gap-2 lg:gap-5">
                  <div
                    style={background}
                    className="flex items-center  justify-center w-[70px] h-[50px] p-2 lg:p-2 sm:w-[110px] h-auto xl:h-[110px]"
                  >
                    <p className="text-[#FFFFFF] font-[500]  max-w-[50px] text-center leading-normal text-[14px] sm:text-[30px] lg:text-[20px] xl:text-[30px] mb-0">
                      {parent?.BlogsSection?.date}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-3/3 lg:w-[430px] sm:h-[110px] text-white bg-[#061E2C] p-3 lg:px-[40px] rounded-[15px]">
                    <p className="text-[#FFFFFF] text-[14px] sm:text-[24px] mb-0">
                      {`${parent?.BlogsSection?.description
                        .split(" ")
                        .slice(0, 4)
                        .join(" ")}...`}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative w-full max-lg:mt-[20px]">
            <Link href={`/${lang}/article/Responsive web design`}>
              <Image
                src="/assets/home/stats2.png"
                width={700}
                className="w-full lg:max-w-[700px] h-auto"
                height={540}
                alt="image"
              />
              <div className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] w-[90%] sm:w-[550px] lg:w-[90%]">
                <div className="flex items-center justify-center gap-2 lg:gap-5">
                  <div
                    style={background}
                    className="flex items-center  justify-center w-[70px] h-[50px] p-2 lg:p-2 sm:w-[110px] h-auto xl:h-[110px]"
                  >
                    <p className="text-[#FFFFFF] font-[500]  max-w-[50px] text-center leading-normal text-[14px] sm:text-[30px] lg:text-[20px] xl:text-[30px] mb-0">
                      {parent?.BlogsSection?.date2}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-3/3 lg:w-[430px] sm:h-[110px] text-white bg-[#061E2C] p-3 lg:px-[40px] rounded-[15px]">
                    <p className="text-[#FFFFFF] text-[14px] sm:text-[24px] mb-0">
                      {`${parent?.BlogsSection?.description2
                        .split(" ")
                        .slice(0, 7)
                        .join(" ")}...`}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

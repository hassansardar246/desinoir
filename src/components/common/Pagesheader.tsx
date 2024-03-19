import Image from "next/image";
import React from "react";
import Index from "../header/Index";

function Pagesheader({
  lang,
  parent,
  textSize,
  direction,
  txt1,
  txt2,
  img,
}: any) {
  return (
    <div>
      <div className=" dark:bg-[#02111B] bg-[#061E2C] max-h-[610px] h-[310px] lg:h-[610px] w-full">
        <Index lang={lang} parent={parent} direction={direction} />

        <div className="flex lg:pt-[140px] pt-[50px] justify-between items-center max-w-[1460px] w-10/12 mx-auto">
          <div className="xl:max-w-[90%]">
            <h1
              className={`${
                textSize
                  ? "text-[30px] lg:text-[54px] "
                  : "lg:text-[90px] md:text-[70px] text-[30px]"
              } text-white font-[500] `}
            >
              {txt1} <span className="font-[100]">{txt2}</span>
            </h1>
          </div>
          {img ? (
            <div>
              <Image
                className="lg:w-[280px] w-[150px] h-auto"
                src={img}
                alt="image"
                width={280}
                height={280}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Pagesheader;

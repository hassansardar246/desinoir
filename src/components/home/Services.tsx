import { Bai_Jamjuree } from "next/font/google";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });
import Image from "next/image";
import Link from "next/link";
import React from "react";

const servicesData = [
  {
    id: 1,
    viewmore: "VIEW MORE",
    icon: "/assets/home/view_quilt.svg",
    title: "UI/UX Designing",
    expertise: "User Interface Design",
    expertise2: "User Experience Design",
    link: "/service-details",

    description:
      "We create intuitive and engaging digital experiences for your target audience. Our UI/UX design services include web and mobile app design, user interface and experience design, interaction design, and more.",
  },
  {
    id: 2,
    viewmore: "VIEW MORE",
    icon: "/assets/home/branding.svg",
    title: "Branding",
    expertise: "Brand Strategy",
    expertise2: "Brand Identity",
    link: "/service-details",

    description:
      "We help businesses establish a strong visual representation through creative identity systems. Our branding services include strategy and positioning, logo and identity design, brand guidelines, and more.",
  },

  {
    id: 3,
    viewmore: "VIEW MORE",
    icon: "/assets/home/create_icon.svg",
    title: "Graphic Designing",
    expertise: "Digital Design",
    expertise2: "Print Design",
    link: "/service-details",
    description:
      "We create intuitive and engaging digital experiences for your target audience. Our UI/UX design services include web and mobile app design, user interface and experience design, interaction design, and more.",
  },
  {
    id: 4,
    viewmore: "VIEW MORE",
    icon: "/assets/home/cinema_film_play.svg",
    title: "Motion Graphic Designing",
    expertise: "Infographics",
    expertise2: "Social Media Videos",
    link: "/service-details",
    description:
      "We help businesses establish a strong visual representation through creative identity systems. Our branding services include strategy and positioning, logo and identity design, brand guidelines, and more.",
  },
];

const servicesDataArabic = [
  {
    id: 1,
    viewmore: "عرض المزيد",
    icon: "/assets/home/view_quilt.svg",
    title: "تصميم واجهة المستخدم/تجربة المستخدم",
    expertise: "تصميم واجهة المستخدم",
    expertise2: "تصميم تجربة المستخدم",
    link: "/service-details",
    description:
      "نقوم بخلق تجارب رقمية بديهية وجذابة لجمهورك المستهدف. تتضمن خدمات تصميم واجهة المستخدم/تجربة المستخدم تصميم واجهة تطبيقات الويب والهواتف المحمولة، تصميم واجهة المستخدم وتصميم تجربة المستخدم، تصميم التفاعل، وأكثر من ذلك.",
  },
  {
    id: 2,
    viewmore: "عرض المزيد",
    icon: "/assets/home/branding.svg",
    title: "العلامة التجارية",
    expertise: "استراتيجية العلامة التجارية",
    expertise2: "هوية العلامة التجارية",
    link: "/service-details",
    description:
      "نساعد الشركات على إقامة تمثيل بصري قوي من خلال أنظمة الهوية الإبداعية. تتضمن خدمات العلامة التجارية لدينا استراتيجية وتموضعًا، تصميم الشعار والهوية، إرشادات العلامة التجارية، وأكثر من ذلك.",
  },
  {
    id: 3,
    viewmore: "عرض المزيد",
    icon: "/assets/home/create_icon.svg",
    title: "تصميم واجهة المستخدم/تجربة المستخدم",
    expertise: "تصميم رقمي",
    expertise2: "تصميم الطباعة",
    link: "/service-details",
    description:
      "نقوم بخلق تجارب رقمية بديهية وجذابة لجمهورك المستهدف. تتضمن خدمات تصميم واجهة المستخدم/تجربة المستخدم تصميم واجهة تطبيقات الويب والهواتف المحمولة، تصميم واجهة المستخدم وتصميم تجربة المستخدم، تصميم التفاعل، وأكثر من ذلك.",
  },
  {
    id: 4,
    viewmore: "عرض المزيد",
    icon: "/assets/home/cinema_film_play.svg",
    title: "العلامة التجارية",
    expertise: "إنفوجرافيك",
    link: "/service-details",
    expertise2: "مقاطع الفيديو على وسائل التواصل الاجتماعي",
    description:
      "نساعد الشركات على إقامة تمثيل بصري قوي من خلال أنظمة الهوية الإبداعية. تتضمن خدمات العلامة التجارية لدينا استراتيجية وتموضعًا، تصميم الشعار والهوية، إرشادات العلامة التجارية، وأكثر من ذلك.",
  },
];

function ServiceItem({
  icon,
  title,
  expertise,
  link,
  lang,
  bgchange,
  viewmore,
  direction,
  expertise2,
  description,
  index,
}: any) {
  return (
    <div
      dir={direction}
      className={`border-b-[1px] ${
        bgchange
          ? "border-[#FFFFFF14]"
          : "border-[#00000013] dark:border-[#FFFFFF14]"
      } border-t-[1px] py-[50px]`}
    >
      <div className="flex  items-start flex-wrap px-5 md:justify-between">
        <div className="w-2/12 sm:w-1/12">
          <Image src={icon} width={80} height={80} alt="image" />
        </div>
        <div className="ms-5 md:ms-0 w-8/12 md:w-3/12">
          <h3
            className={`font-[500] ${
              bgchange ? "text-[#ffffff]" : "dark:text-white text-[#061E2C]"
            } tracking-[-0.5px] text-[30px]  mb-0 `}
          >
            {title}
          </h3>
          <h4
            className={`${inter.className} ${
              bgchange ? "text-[#ffffff]" : "dark:text-white text-[#061E2C]"
            } outlinee-bg leading-normal text-[100px] mb-0 opacity-[.4]`}
          >
            0{index + 1}
          </h4>
        </div>
        <div className="w-full md:w-5/12 md:px-5">
          <p
            className={`mb-0 text-[16px] font-[400] ${
              bgchange ? "text-[#989CAA]" : "text-[#989CAA]"
            } `}
          >
            {description}
          </p>
          <ul className="text-[16px] font-[400] text-[#989CAA] mt-[20px]">
            <li className="flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M16.9003 0.742062C16.6838 0.748512 16.4783 0.838995 16.3273 0.99434L6.0832 11.2385L1.67239 6.82767C1.5956 6.7477 1.50363 6.68384 1.40186 6.63986C1.30008 6.59587 1.19055 6.57263 1.07969 6.5715C0.968821 6.57037 0.858843 6.59138 0.756196 6.63329C0.653548 6.67519 0.560294 6.73716 0.481895 6.81556C0.403496 6.89396 0.341528 6.98721 0.299621 7.08986C0.257713 7.19251 0.236708 7.30249 0.237836 7.41335C0.238964 7.52422 0.262202 7.63375 0.306189 7.73552C0.350176 7.8373 0.414029 7.92927 0.494006 8.00606L5.49401 13.0061C5.65029 13.1623 5.86222 13.25 6.0832 13.25C6.30417 13.25 6.51611 13.1623 6.67239 13.0061L17.5057 2.17273C17.6261 2.05567 17.7084 1.90497 17.7417 1.74037C17.775 1.57577 17.7578 1.40495 17.6923 1.2503C17.6269 1.09564 17.5162 0.964369 17.3749 0.873678C17.2336 0.782988 17.0681 0.737111 16.9003 0.742062Z"
                  fill="#989CAA"
                />
              </svg>{" "}
              <span className="text-[#989CAA]">{expertise}</span>
            </li>
            <li className="flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M16.9003 0.742062C16.6838 0.748512 16.4783 0.838995 16.3273 0.99434L6.0832 11.2385L1.67239 6.82767C1.5956 6.7477 1.50363 6.68384 1.40186 6.63986C1.30008 6.59587 1.19055 6.57263 1.07969 6.5715C0.968821 6.57037 0.858843 6.59138 0.756196 6.63329C0.653548 6.67519 0.560294 6.73716 0.481895 6.81556C0.403496 6.89396 0.341528 6.98721 0.299621 7.08986C0.257713 7.19251 0.236708 7.30249 0.237836 7.41335C0.238964 7.52422 0.262202 7.63375 0.306189 7.73552C0.350176 7.8373 0.414029 7.92927 0.494006 8.00606L5.49401 13.0061C5.65029 13.1623 5.86222 13.25 6.0832 13.25C6.30417 13.25 6.51611 13.1623 6.67239 13.0061L17.5057 2.17273C17.6261 2.05567 17.7084 1.90497 17.7417 1.74037C17.775 1.57577 17.7578 1.40495 17.6923 1.2503C17.6269 1.09564 17.5162 0.964369 17.3749 0.873678C17.2336 0.782988 17.0681 0.737111 16.9003 0.742062Z"
                  fill="#989CAA"
                />
              </svg>{" "}
              <span className="text-[#989CAA]">{expertise2}</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/12 my-auto relative flex px-5 md:px-0 max-md:mt-10 md:justify-center">
          <Link href={`/${lang}${link}`}>
            <p
              className={`relative z-20 uppercase text-[18px] ${
                bgchange
                  ? "text-[#ffffff]"
                  : "dark:text-[#ffffff] text-[#061E2C]"
              } font-[400] inline-flex items-center gap-4 group `}
            >
              {viewmore}
              <span
                className={`${
                  direction == "ltr"
                    ? "group-hover:translate-x-[120px] left-[-10px]"
                    : "group-hover:translate-x-[-92px] right-[-10px]"
                } z-[-1] ${
                  bgchange
                    ? "bg-[#FFFFFF14]"
                    : "dark:bg-[#FFFFFF14] bg-[#ECECEC]"
                } rounded-full absolute w-[40px] h-[40px] transition-all duration-1000 `}
              ></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                className={`${direction == "ltr" ? "" : "rotate-[180deg]"} ${
                  bgchange ? "fill-[#ffffff]" : "dark:fill-white fill-[#061E2C]"
                } opacity-0 group-hover:opacity-100 transition-all duration-1000`}
              >
                <path d="M1.08317 8.04154H14.4019L10.9717 11.4717C10.5649 11.8785 10.5649 12.5379 10.9717 12.9447C11.1754 13.1483 11.4415 13.2499 11.7082 13.2499C11.9748 13.2499 12.241 13.1483 12.4446 12.9447L17.653 7.73633C17.8483 7.54154 17.9582 7.27643 17.9582 6.99987C17.9582 6.72331 17.8483 6.45872 17.653 6.26341L12.4446 1.05508C12.0379 0.648307 11.3785 0.648307 10.9717 1.05508C10.5649 1.46185 10.5649 2.12122 10.9717 2.52799L14.4019 5.9582H1.08317C0.508171 5.9582 0.0415039 6.42487 0.0415039 6.99987C0.0415039 7.57487 0.508171 8.04154 1.08317 8.04154Z" />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Services({ bgchange, parent, direction, lang }: any) {
  return (
    <section
      dir={`${direction}`}
      className={`${
        bgchange
          ? "dark:bg-[#02111B] bg-[#061E2C]"
          : "dark:bg-[#061E2C] bg-[#F2F6F5]"
      } pt-[50px] lg:pt-[100px] pb-[20px] lg:pb-[50px]`}
    >
      <div className="max-w-[1460px] lg:w-10/12 mx-auto">
        <div className="w-full  px-5 md:px-0 md:w-1/2 mb-[40px]">
          <p className="uppercase dark:text-[#EFCB1C] text-[#FF895B] text-[20px]">
            {parent?.offerSection?.Servicesweoffer}
          </p>
          <h3
            className={`text-[30px] md:text-[50px] mb-0 font-[500] ${
              bgchange ? "text-[#ffffff]" : "dark:text-[#ffffff] text-[#061E2C]"
            }  leading-normal max-md:leading-[60px]`}
          >
            <span className={`block`}>
              {parent?.offerSection?.TurnInformation}
            </span>
            <span className={`block`}>
              {parent?.offerSection?.TurnInformation2}
            </span>
          </h3>
        </div>
        {direction === "ltr"
          ? servicesData.map((service, index) => (
              <ServiceItem
                index={index}
                direction={direction}
                lang={lang}
                bgchange={bgchange}
                key={service.id}
                {...service}
              />
            ))
          : servicesDataArabic.map((service, index) => (
              <ServiceItem
                index={index}
                direction={direction}
                lang={lang}
                bgchange={bgchange}
                key={service.id}
                {...service}
              />
            ))}
      </div>
    </section>
  );
}

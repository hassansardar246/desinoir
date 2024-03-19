"use client";
import BrandDesigns from "@/components/common/BrandDesigns";
import Footer from "@/components/common/Footer";
import Pagesheader from "@/components/common/Pagesheader";
import Team from "@/components/home/Team";
import React from "react";
const Teams = [
  {
    id: 1,
    img: "/assets/about/shehzad.png",
    img2: "/assets/about/shehzad.color.png",
    name: "Shahzad Jameel",
    role: "Founder",
  },
  {
    id: 2,
    img: "/assets/about/umar.png",
    img2: "/assets/about/umar.color.png",
    name: "Muhammad Umer",
    role: "CEO",
  },
  {
    id: 3,
    img: "/assets/about/umar.J.png",
    img2: "/assets/about/umar.jcolor.png",
    name: "Umer Maqsood",
    role: "Ui/Ux Expert",
  },
  {
    id: 4,
    img: "/assets/about/farhan.png",
    img2: "/assets/about/farhancolor.png",
    name: "Farhan Ali",
    role: "QA Expert",
  },
  {
    id: 5,
    img: "/assets/about/usman.png",
    img2: "/assets/about/usmancolor.png",
    name: "Usman Saeed",
    role: "Project Manager",
  },
  {
    id: 6,
    img: "/assets/about/maaz.png",
    img2: "/assets/about/maazcolor.png",
    name: "Muhammad Maaz",
    role: "Content Writer",
  },
  {
    id: 7,
    img: "/assets/about/sheroz.png",
    img2: "/assets/about/shehrozcolor.png",
    name: "Shahroz Shakeel",
    role: "Creative Director",
  },
  {
    id: 8,
    img: "/assets/about/tayyab.png",
    img2: "/assets/about/tayyabcolor.png",
    name: "Tayyab Ali",
    role: "Motion Graphics Expert",
  },
  {
    id: 9,
    img: "/assets/about/amir.png",
    img2: "/assets/about/Amircolor.png",
    name: "Amir Nazir",
    role: "UI/UX Expert",
  },
];
function TeamPage({ parent, direction, lang }: any) {
  return (
    <div>
      <Pagesheader
        parent={parent}
        direction={direction}
        lang={lang}
        txt1="Our"
        txt2="Creative Crew"
        img="/assets/OBJECTS2.png"
      />
      <Team bgchange={true} TeamMemnbers={Teams} btn={false} />
      <div className="bg-[#F2F6F5] px-5 dark:bg-[#061E2C] pt-[70px] text-center">
        <h3 className="text-[47px] font-[500] leading-normal dark:text-white text-[#061E2C]">
          We Strive to Innovate
        </h3>
        <p className="text-[#989CAA] font-[400] text-[16px] max-w-[768px] pb-[80px] mx-auto">
          Desinior is a design agency that specialized in Product, UI/UX,
          Graphic Designing and Branding. We collaborate with startups and
          leading brands to create premium web, mobile App, Saas and Digital
          products. We help them successfully build strong brands, leverage
          their story telling channels.
        </p>
        <BrandDesigns />
        <Footer
          parent={parent}
          direction={direction}
          lang={lang}
          welnote={true}
        />
      </div>
    </div>
  );
}
Pagesheader;
export default TeamPage;

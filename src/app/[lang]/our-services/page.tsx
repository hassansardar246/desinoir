import Branding from "@/components/About/Branding";
import ChooseUs from "@/components/About/ChooseUs";
import Footer from "@/components/common/Footer";
import Pagesheader from "@/components/common/Pagesheader";
import Testimonial from "@/components/common/Testimonials";
import Experties from "@/components/home/Experties";
import Services from "@/components/home/Services";
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Our Services - Desinoir - Designing Agency",
  description: "Generated by create next app",
};
async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const direction = lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(lang);
  return (
    <div>
      <Pagesheader
        txt1="Our"
        txt2="Services"
        img="/assets/about/OBJECTS3.png"
        parent={parent}
        lang={lang}
        direction={direction}
      />
      <ChooseUs parent={parent} />
      <Services
        parent={parent}
        direction={direction}
        lang={lang}
        bgchange={true}
      />
      <Testimonial parent={parent} brandshow={false} />
      <Experties parent={parent} direction={direction} />
      <Branding />
      <Footer parent={parent} direction={direction} welnote={true} />
    </div>
  );
}

export default Page;

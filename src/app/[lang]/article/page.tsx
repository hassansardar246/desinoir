import React, { useEffect, useState } from "react";
// import '../../globals.css';
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/dictionary";
import NavArticles from "./NavArticles";
import Pagesheader from "@/components/common/Pagesheader";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Articles - Desinoir - Designing Agency",
  description: "Generated by create next app",
};
async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const direction = lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(lang);
  return (
    <div dir={direction}>
      <Pagesheader
        lang={lang}
        direction={direction}
        parent={parent}
        txt1={parent?.page?.Article}
        txt2=""
        img="/OBJECTS5.png"
      />
      <NavArticles lang={lang} parent={parent} direction={direction} />
    </div>
  );
}

export default Page;

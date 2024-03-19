import React, { useEffect, useState } from "react";
// import '../../globals.css';
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import ProjectDetailsNav from "./ProjectDetailsNav";

async function Page({ params }: { params: { lang: Locale } }) {
  const direction = params.lang == "en" ? "ltr" : "rtl";
  const { parent }: any = await getDictionary(params.lang);

  return (
    <>
      <ProjectDetailsNav
        parent={parent}
        direction={direction}
        lang={params.lang}
      />
    </>
  );
}

export default Page;

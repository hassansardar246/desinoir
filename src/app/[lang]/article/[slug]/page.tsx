import React, { useEffect, useState } from "react";
// import '../../globals.css';
import { getDictionary } from "@/dictionary";
import { Locale } from "@/i18n.config";
import ArticleDetailsNav from "./ArticleDetailsNav";

async function Page({ params }: { params: { lang: Locale; slug: string } }) {
  const { parent }: any = await getDictionary(params.lang);
  const article = decodeURIComponent(params.slug).replace(/-/g, " ");

  return (
    <>
      <ArticleDetailsNav slug={article} parent={parent} lang={params.lang} />
    </>
  );
}

export default Page;

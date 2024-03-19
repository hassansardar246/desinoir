"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale, i18n } from "@/i18n.config";
import Image from "next/image";

export default function LocaleSwitcher2({ lang }: { lang: Locale }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  let direction: string;
  if (lang === "en") {
    direction = "ltr";
  } else if (lang === "ar") {
    direction = "rtl";
  }

  return (
    <div className="flex items-center justify-start gap-5 lg:mt-[40px] my-[20px]">
      <div className={`relative flex items-center justify-between`}>
        <Link
          href={redirectedPathName("en")}
          className={`z-30 w-[130px] flex items-center justify-center cursor-pointer border border-[#1DE2CF26] ${
            lang === "en" ? "bg-[#061E2C]" : ""
          } rounded-3xl px-[5px] py-[11px]`}
        >
          <Image
            src="/assets/home/usa.svg"
            alt="search"
            width={20}
            height={20}
          />
          <p className="text-[16px] font-regular text-white">English</p>
        </Link>
      </div>
      <div className={`relative flex items-center justify-between `}>
        <Link
          href={redirectedPathName("ar")}
          className={`z-30 w-[130px] flex items-center justify-center cursor-pointer border border-[#1DE2CF26] ${
            lang === "ar" ? "bg-[#061E2C]" : ""
          } rounded-3xl px-[5px] py-[11px]`}
        >
          <Image
            src="/assets/home/arabic.svg"
            alt="search"
            width={20}
            height={20}
          />
          <p className="text-[16px] font-regular text-white">Arabic</p>
        </Link>
      </div>
    </div>
  );
}

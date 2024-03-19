"use client";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../Themes/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import MegaMenu from "../MegaMenu";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";
import { useTheme } from "next-themes";
import LocaleSwitcher from "../common/LanguageSwitcher";

function Index({
  lang,
  parent,
  direction,
}: {
  lang: Locale;
  parent: any;
  direction: string;
}) {
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();
  const [changesmall, setchnagesmallBg] = useState(false);
  const [menu, setMegamenu] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (menu) {
        document.body.style.position = "fixed";
        document.body.style.top = "0";
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.bottom = "0";
      } else {
        document.body.style.position = "";
      }
    }, 800);
    return () => {
      document.body.style.position = "";
    };
  }, [menu]);
  return (
    <div dir={`${direction}`}>
      {menu && (
        <MegaMenu
          parent={parent}
          lang={lang}
          menu={menu}
          setMegamenu={setMegamenu}
        />
      )}
      <div>
        <div className=" mx-auto">
          <section className="relative mx-auto max-w-[1460px] px-5 2xl:px-0 md:w-10/12">
            <nav className="flex justify-between text-white">
              <div className=" pt-[20px] md:pt-[50px] flex w-full justify-between items-center">
                <Link
                  className="text-3xl font-bold font-heading"
                  href={`/${lang}`}
                >
                  <Image
                    className="md:w-[220px] w-[160px] h-auto"
                    src="/assets/home/logo-main.svg"
                    alt="logo"
                    width={100}
                    height={54}
                  />
                </Link>
                <ul
                  dir={`${direction}`}
                  className=" hidden min-[1230px]:flex items-center justify-between mx-auto font-regular "
                >
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[18px] hover:text-[#20D091]`}
                      href={`/${lang}`}
                    >
                      {parent?.page?.Home}
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}/about`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[18px] hover:text-[#20D091]`}
                      href={`/${lang}/about`}
                    >
                      {parent?.page?.AboutUs}
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}/projects`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[18px] hover:text-[#20D091]`}
                      href={`/${lang}/projects`}
                    >
                      {parent?.page?.OurProjectsnav}
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}/article`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[18px] hover:text-[#20D091]`}
                      href={`/${lang}/article`}
                    >
                      {parent?.page?.Article}
                    </Link>
                  </li>
                  <li className="px-4">
                    <Link
                      className={`${
                        pathName === `/${lang}/ui-store`
                          ? "text-[#20D091]"
                          : "text-white"
                      } text-[18px] hover:text-[#20D091]`}
                      href={`/${lang}/ui-store`}
                    >
                      {parent?.page?.UIStorenav}
                    </Link>
                  </li>
                </ul>
                <div className="flex items-center sm:space-x-5 items-center">
                  <Link href={`/${lang}/contact-us`}>
                    <div
                      dir={`${direction}`}
                      className="w-[50px] md:w-[130px] flex items-center justify-center cursor-pointer"
                    >
                      <Image
                        className={`${lang === "ar" ? "" : ""}
                        wave
                      w-[30px] h-[30px]`}
                        src="/assets/home/handbye.svg"
                        alt="search"
                        width={10}
                        height={10}
                      />

                      <p className="text-[14px] max-md:hidden sm:text-[20px] text-white font-[500]">
                        {parent?.page?.SayHello}
                      </p>
                    </div>
                  </Link>
                  <LocaleSwitcher lang={lang} />
                  <div className="flex items-center space-x-3 md:space-x-5">
                    <ThemeSwitcher lang={lang} />
                    <div
                      className="cursor-pointer"
                      onClick={() => setMegamenu(true)}
                    >
                      <Image
                        className={`${
                          lang == "ar" ? "!rotate-180 ms-2" : ""
                        } sm:w-[40px] sm:h-[40px]`}
                        src="/assets/home/hamburger.svg"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Index;

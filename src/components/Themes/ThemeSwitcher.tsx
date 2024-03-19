"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = ({ lang }: any) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${lang == "ar" ? "pe-[15px]" : ""}`}>
      {theme === "dark" ? (
        <div
          onClick={() => {
            setTheme("light");
          }}
          className="md:w-[40px] cursor-pointer md:h-[40px] w-[50px] h-[50px] flex items-center justify-center md:border md:border-[#1DE2CF26] md:bg-[#061E2C] md:rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            className="w-[30px] h-[30px] md:w-[22px] md:h-[22px]"
            fill="none"
          >
            <path
              opacity="0.35"
              d="M14.8745 13.5897C11.6414 12.9535 9.04632 10.3584 8.41015 7.12536C8.21123 6.11794 8.2039 5.13894 8.35148 4.21311C8.50732 3.24144 7.48982 2.47878 6.62448 2.94903C3.34924 4.73011 1.28032 8.4472 1.96323 12.5676C2.59115 16.3553 5.64457 19.4087 9.43132 20.0366C13.5517 20.7195 17.2697 18.6506 19.0508 15.3744C19.5211 14.5091 18.7593 13.4925 17.7867 13.6474C16.8609 13.7959 15.8819 13.7886 14.8745 13.5897Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8947 1.47663C13.0038 1.23371 13.2448 1.07788 13.5107 1.07788C13.7765 1.07788 14.0176 1.23371 14.1267 1.47663L14.6336 2.60871C14.6428 2.6298 14.6565 2.64905 14.673 2.66555C14.6895 2.68205 14.7088 2.69488 14.7298 2.70496L15.8619 3.21188C16.1049 3.32096 16.2607 3.56205 16.2607 3.82788C16.2607 4.09371 16.1049 4.3348 15.8619 4.44388L14.7298 4.9508C14.7088 4.95996 14.6895 4.97371 14.673 4.99021C14.6565 5.00671 14.6437 5.02596 14.6336 5.04705L14.1258 6.17913C14.0167 6.42205 13.7756 6.57788 13.5098 6.57788C13.2439 6.57788 13.0028 6.42205 12.8938 6.17913L12.3868 5.04705C12.3777 5.02596 12.3639 5.00671 12.3474 4.99021C12.3309 4.97371 12.3117 4.96088 12.2906 4.9508L11.1585 4.44388C10.9156 4.3348 10.7598 4.09371 10.7598 3.82788C10.7598 3.56205 10.9156 3.32096 11.1585 3.21188L12.2906 2.70496C12.3117 2.6958 12.3309 2.68205 12.3474 2.66555C12.3639 2.64905 12.3768 2.6298 12.3868 2.60871L12.8947 1.47663Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.0057 7.59909C17.0781 7.43775 17.2394 7.33325 17.4163 7.33325C17.5933 7.33325 17.7546 7.43775 17.827 7.59909L18.1653 8.35442C18.1717 8.36817 18.1799 8.381 18.1909 8.392C18.2019 8.403 18.2148 8.41217 18.2285 8.41767L18.9838 8.75592C19.1452 8.82834 19.2497 8.98967 19.2497 9.16659C19.2497 9.3435 19.1452 9.50484 18.9838 9.57725L18.2285 9.9155C18.2148 9.92192 18.2019 9.93017 18.1909 9.94117C18.1799 9.95217 18.1708 9.965 18.1653 9.97875L17.827 10.7341C17.7546 10.8954 17.5933 10.9999 17.4163 10.9999C17.2394 10.9999 17.0781 10.8954 17.0057 10.7341L16.6674 9.97875C16.661 9.965 16.6528 9.95217 16.6418 9.94117C16.6308 9.93017 16.6179 9.921 16.6042 9.9155L15.8488 9.57725C15.6875 9.50484 15.583 9.3435 15.583 9.16659C15.583 8.98967 15.6875 8.82834 15.8488 8.75592L16.6042 8.41767C16.6179 8.41125 16.6308 8.403 16.6418 8.392C16.6528 8.381 16.6619 8.36817 16.6674 8.35442L17.0057 7.59909Z"
              fill="white"
            />
          </svg>
        </div>
      ) : (
        <div
          onClick={() => {
            setTheme("dark");
          }}
          className="md:w-[40px] cursor-pointer md:h-[40px] w-[50px] h-[50px] flex items-center justify-center md:border md:border-[#1DE2CF26] md:bg-[#061E2C] md:rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            className="w-[30px] h-[30px] md:w-[22px] md:h-[22px]"
            fill="none"
          >
            <g clip-path="url(#clip0_653_8846)">
              <path
                opacity="0.35"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0143 1.0935C10.1893 0.706669 10.5753 0.458252 10.9997 0.458252C11.4241 0.458252 11.81 0.706669 11.9851 1.0935L13.0548 3.45667C13.2061 3.79125 13.4793 4.05525 13.8184 4.1955C14.1576 4.33575 14.5371 4.34217 14.8808 4.21292L17.3082 3.299C17.706 3.14959 18.1543 3.24584 18.454 3.5465C18.7547 3.84717 18.8509 4.29542 18.7015 4.69234L17.7876 7.11967C17.6583 7.46342 17.6648 7.84292 17.805 8.18209C17.9453 8.52125 18.2093 8.7935 18.5438 8.94567L20.907 10.0154C21.2929 10.1896 21.5413 10.5755 21.5413 10.9999C21.5413 11.4243 21.2929 11.8103 20.9061 11.9853L18.5429 13.0551C18.2083 13.2063 17.9443 13.4795 17.8041 13.8187C17.6638 14.1578 17.6574 14.5373 17.7867 14.8811L18.7006 17.3084C18.85 17.7063 18.7538 18.1545 18.4531 18.4543C18.1524 18.7549 17.7042 18.8512 17.3073 18.7018L14.8799 17.7878C14.5362 17.6586 14.1567 17.665 13.8175 17.8053C13.4783 17.9455 13.2061 18.2095 13.0539 18.5441L11.9842 20.9073C11.81 21.2932 11.4241 21.5416 10.9997 21.5416C10.5753 21.5416 10.1893 21.2932 10.0143 20.9063L8.94451 18.5432C8.79326 18.2086 8.52009 17.9446 8.18092 17.8043C7.84176 17.6641 7.46226 17.6577 7.11851 17.7869L4.69117 18.7008C4.29334 18.8503 3.84509 18.754 3.54534 18.4533C3.24559 18.1527 3.14842 17.7044 3.29784 17.3075L4.21176 14.8802C4.34101 14.5364 4.33459 14.1569 4.19434 13.8178C4.05409 13.4786 3.79009 13.2063 3.45551 13.0542L1.09234 11.9844C0.706425 11.8103 0.458008 11.4243 0.458008 10.9999C0.458008 10.5755 0.706424 10.1896 1.09326 10.0145L3.45642 8.94475C3.79101 8.7935 4.05501 8.52034 4.19526 8.18117C4.33551 7.842 4.34192 7.4625 4.21267 7.11875L3.29784 4.69142C3.14842 4.29359 3.24467 3.84534 3.54534 3.54559C3.84601 3.24492 4.29426 3.14867 4.69117 3.29809L7.11851 4.212C7.46226 4.34217 7.84176 4.33575 8.18092 4.1955C8.52009 4.05525 8.79234 3.79125 8.94451 3.45667L10.0143 1.0935Z"
                fill="white"
              />
              <path
                d="M15.5885 11.0074C15.5885 13.5383 13.5361 15.5907 11.0052 15.5907C8.47429 15.5907 6.42188 13.5383 6.42188 11.0074C6.42188 8.47649 8.47429 6.42407 11.0052 6.42407C13.5361 6.42407 15.5885 8.47741 15.5885 11.0074Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_653_8846">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

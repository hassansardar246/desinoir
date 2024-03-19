import Image from "next/image";
import React from "react";

function ServiceDetails({ data }: any) {
  return (
    <div className="relative bg-[#F2F6F5] dark:bg-[#061E2C]">
      <div className="max-w-[1460px] mx-auto w-10/12 pb-[80px] min-[1100px]:pb-[130px]">
        <div className="mt-10">
          <p className="uppercase dark:text-[#EFCB1C] text[20px] text-[#FF895B]">
            {data.title2}
          </p>
          <h3 className="lg:text-[47px] text-[30px] font-[500] leading-normal dark:text-white text-[#061E2C]">
            {data?.heading2}
          </h3>
          <p className="text-[#989CAA] font-[400] text-[16px]">
            {data.description2}
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-10 justify-center max-[1160px]:border-none border-b border-dashed lg:justify-between pt-[80px]">
          <div className="text-center relative min-[1100px]:pb-[50px]">
            <div className="w-[160px] h-[160px] bg-[#DEE9EE] dark:bg-[#FFFFFF14] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
              >
                <path
                  opacity="0.35"
                  d="M14.334 68.0837V17.917C14.334 11.9794 19.1464 7.16699 25.084 7.16699H50.1673L71.6673 28.667V68.0837C71.6673 74.0212 66.8549 78.8337 60.9173 78.8337H25.084C19.1464 78.8337 14.334 74.0212 14.334 68.0837Z"
                  fill="#434750"
                />
                <path
                  d="M50.166 21.5003V7.16699L71.666 28.667H57.3327C53.3731 28.667 50.166 25.4599 50.166 21.5003Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  d="M53.7493 46.5837H32.2493C30.2678 46.5837 28.666 44.9783 28.666 43.0003C28.666 41.0223 30.2678 39.417 32.2493 39.417H53.7493C55.7309 39.417 57.3327 41.0223 57.3327 43.0003C57.3327 44.9783 55.7309 46.5837 53.7493 46.5837Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  d="M46.5827 60.9167H32.2493C30.2678 60.9167 28.666 59.3113 28.666 57.3333C28.666 55.3553 30.2678 53.75 32.2493 53.75H46.5827C48.5643 53.75 50.166 55.3553 50.166 57.3333C50.166 59.3113 48.5643 60.9167 46.5827 60.9167Z"
                  className="fill-[#434750] dark:fill-white"
                />
              </svg>
            </div>
            <p className="font-[500] leading-normal text-[22px] text-[#061E2C] dark:text-white">
              {" "}
              {data.plan1}
            </p>
            <p className="font-[500] leading-[22px] text-[22px] text-[#061E2C] dark:text-white">
              {" "}
              {data.plan1II}
            </p>
            <div className="absolute max-[1160px]:hidden bottom-[-10px] left-[50%] translate-x-[-50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="6" fill="#20D091" />
                <circle
                  cx="9"
                  cy="9"
                  r="8.5"
                  stroke="#989CAA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="3 3"
                />
              </svg>
            </div>
          </div>
          <div className="text-center relative min-[1100px]:pb-[50px]">
            <div className="w-[160px] h-[160px] bg-[#DEE9EE] dark:bg-[#FFFFFF14]  rounded-full flex items-center justify-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
              >
                <path
                  opacity="0.35"
                  d="M59.7241 55.5019C66.9481 50.2953 71.6673 41.8351 71.6673 32.2497C71.6673 16.4185 58.8318 3.58301 43.0007 3.58301C27.1695 3.58301 14.334 16.4185 14.334 32.2497C14.334 41.8351 19.0532 50.2953 26.2772 55.5019L28.5813 64.4997H57.42L59.7241 55.5019Z"
                  fill="#434750"
                />
                <path
                  d="M55.817 70.7493L57.4187 64.5H28.5801L30.1782 70.7493C31.3966 75.5044 35.6822 78.8333 40.5914 78.8333H45.4038C50.3166 78.8333 54.6022 75.5044 55.817 70.7493Z"
                  className="fill-[#434750] dark:fill-white"
                />
              </svg>
            </div>
            <p className="font-[500] leading-normal text-[22px] text-[#061E2C] dark:text-white">
              {" "}
              {data.plan2}
            </p>
            <p className="font-[500] leading-[22px] text-[22px] text-[#061E2C] dark:text-white">
              {" "}
              {data.plan21I}
            </p>
            <div className="absolute max-[1160px]:hidden bottom-[-10px] left-[50%] translate-x-[-50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="6" fill="#20D091" />
                <circle
                  cx="9"
                  cy="9"
                  r="8.5"
                  stroke="#989CAA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="3 3"
                />
              </svg>
            </div>
          </div>

          <div className="text-center relative min-[1100px]:pb-[50px]">
            <div className="w-[160px] h-[160px] bg-[#DEE9EE] dark:bg-[#FFFFFF14]  rounded-full flex items-center justify-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="86"
                viewBox="0 0 86 86"
                className="fill-[#434750] dark:fill-white"
              >
                <path
                  d="M69.8743 14.333C68.4912 14.333 46.1742 14.333 44.791 14.333C41.824 14.333 39.416 16.741 39.416 19.708C39.416 22.675 41.824 25.083 44.791 25.083C46.1742 25.083 68.4912 25.083 69.8743 25.083C72.8413 25.083 75.2493 22.675 75.2493 19.708C75.2493 16.741 72.8413 14.333 69.8743 14.333Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  d="M69.8743 39.417C68.4912 39.417 46.1742 39.417 44.791 39.417C41.824 39.417 39.416 41.825 39.416 44.792C39.416 47.759 41.824 50.167 44.791 50.167C46.1742 50.167 68.4912 50.167 69.8743 50.167C72.8413 50.167 75.2493 47.759 75.2493 44.792C75.2493 41.825 72.8413 39.417 69.8743 39.417Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  opacity="0.35"
                  d="M69.8743 64.5C68.4912 64.5 46.1742 64.5 44.791 64.5C41.824 64.5 39.416 66.908 39.416 69.875C39.416 72.842 41.824 75.25 44.791 75.25C46.1742 75.25 68.4912 75.25 69.8743 75.25C72.8413 75.25 75.2493 72.842 75.2493 69.875C75.2493 66.908 72.8413 64.5 69.8743 64.5Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  d="M21.5 53.7497H17.9167C13.9571 53.7497 10.75 50.5426 10.75 46.583V42.9997C10.75 39.0401 13.9571 35.833 17.9167 35.833H21.5C25.4596 35.833 28.6667 39.0401 28.6667 42.9997V46.583C28.6667 50.5426 25.4596 53.7497 21.5 53.7497Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  d="M21.5 28.6667H17.9167C13.9571 28.6667 10.75 25.4596 10.75 21.5V17.9167C10.75 13.9571 13.9571 10.75 17.9167 10.75H21.5C25.4596 10.75 28.6667 13.9571 28.6667 17.9167V21.5C28.6667 25.4596 25.4596 28.6667 21.5 28.6667Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  opacity="0.35"
                  d="M21.5 78.8346H17.9167C13.9571 78.8346 10.75 75.6276 10.75 71.668V68.0846C10.75 64.1251 13.9571 60.918 17.9167 60.918H21.5C25.4596 60.918 28.6667 64.1251 28.6667 68.0846V71.668C28.6667 75.6276 25.4596 78.8346 21.5 78.8346Z"
                  fill="#434750"
                />
              </svg>
            </div>
            <p className="font-[500] leading-normal text-[22px] text-[#061E2C] dark:text-white">
              {" "}
              {data.plan3}
            </p>
            <p className="font-[500] leading-[22px] text-[22px] text-[#061E2C] dark:text-white">
              {" "}
              {data.plan3II}
            </p>
            <div className="absolute max-[1160px]:hidden bottom-[-10px] left-[50%] translate-x-[-50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="6" fill="#20D091" />
                <circle
                  cx="9"
                  cy="9"
                  r="8.5"
                  stroke="#989CAA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="3 3"
                />
              </svg>
            </div>
          </div>

          <div className="text-center relative min-[1100px]:pb-[50px]">
            <div className="w-[160px] h-[160px] bg-[#DEE9EE] dark:bg-[#FFFFFF14]  rounded-full flex items-center justify-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M81.2981 63.383L69.3799 51.4648C70.007 55.0303 68.8102 59.2156 65.8038 62.222C62.4426 65.5832 57.6015 66.7012 53.8067 65.5115C53.1438 66.78 52.162 67.9303 50.9688 68.887L63.3814 81.2997C65.4741 83.3923 69.0538 82.4033 69.7741 79.5295L70.9136 74.9679C71.4117 72.972 72.9704 71.4133 74.9663 70.9152L79.5279 69.7757C82.4018 69.0554 83.3907 65.4757 81.2981 63.383Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.70199 63.383L16.6202 51.4648C15.9931 55.0303 17.1899 59.2156 20.1963 62.222C23.5575 65.5832 28.3986 66.7012 32.1933 65.5115C32.8562 66.78 33.8381 67.9303 35.0313 68.887L22.6187 81.2997C20.526 83.3923 16.9462 82.4033 16.226 79.5295L15.0865 74.9679C14.5884 72.972 13.0297 71.4133 11.0337 70.9152L6.47216 69.7757C3.59832 69.0554 2.60932 65.4757 4.70199 63.383Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  opacity="0.35"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.1927 13.3232C34.0345 9.80074 38.2485 7.16699 43 7.16699C47.7515 7.16699 51.9655 9.80074 53.8073 13.3232C57.5985 12.1335 62.4432 13.2515 65.8043 16.6127C69.1655 19.9738 70.2835 24.8149 69.0938 28.6097C72.6162 30.4515 75.25 34.6655 75.25 39.417C75.25 44.1685 72.6162 48.3825 69.0938 50.2243C70.2835 54.0155 69.1655 58.8602 65.8043 62.2213C62.4432 65.5825 57.6021 66.7005 53.8073 65.5108C51.9655 69.0332 47.7515 71.667 43 71.667C38.2485 71.667 34.0345 69.0332 32.1927 65.5108C28.4015 66.7005 23.5568 65.5825 20.1957 62.2213C16.8345 58.8602 15.7165 54.0191 16.9062 50.2243C13.3837 48.3825 10.75 44.1685 10.75 39.417C10.75 34.6655 13.3837 30.4515 16.9062 28.6097C15.7165 24.8185 16.8345 19.9738 20.1957 16.6127C23.5568 13.2515 28.3979 12.1335 32.1927 13.3232Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  d="M39.4163 53.7502C38.4989 53.7502 37.5816 53.3991 36.8828 52.7003L26.1328 41.9503C24.7318 40.5492 24.7318 38.2846 26.1328 36.8835C27.5339 35.4824 29.7986 35.4824 31.1997 36.8835L39.4163 45.1001L54.7995 29.7168C56.2006 28.3157 58.4653 28.3157 59.8663 29.7168C61.2674 31.1179 61.2674 33.3826 59.8663 34.7837L41.9497 52.7003C41.2509 53.3991 40.3336 53.7502 39.4163 53.7502Z"
                  className="fill-[#434750] dark:fill-white"
                />
              </svg>
            </div>
            <p className="font-[500] leading-normal text-[22px] text-[#061E2C] dark:text-white">
              {data.plan4}
            </p>
            <p className="font-[500] leading-[22px] text-[22px] text-[#061E2C] dark:text-white">
              {data.plan4II}
            </p>
            <div className="absolute max-[1160px]:hidden bottom-[-10px] left-[50%] translate-x-[-50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="6" fill="#20D091" />
                <circle
                  cx="9"
                  cy="9"
                  r="8.5"
                  stroke="#989CAA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="3 3"
                />
              </svg>
            </div>
          </div>

          <div className="text-center relative min-[1100px]:pb-[50px]">
            <div className="w-[160px] h-[160px] bg-[#DEE9EE] dark:bg-[#FFFFFF14]  rounded-full flex items-center justify-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
              >
                <path
                  opacity="0.35"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M58.7803 19.9272L65.3128 31.8705C65.9721 33.0745 66.9575 34.0599 68.1615 34.7192L80.1048 41.2517C82.7851 42.7172 82.7851 46.5657 80.1048 48.0313L68.1615 54.5637C66.9575 55.2231 65.9721 56.2085 65.3128 57.4125L58.7803 69.3557C57.3148 72.0361 53.4663 72.0361 52.0007 69.3557L45.4683 57.4125C44.8089 56.2085 43.8235 55.2231 42.6195 54.5637L30.6763 48.0313C27.9959 46.5657 27.9959 42.7172 30.6763 41.2517L42.6195 34.7192C43.8235 34.0599 44.8089 33.0745 45.4683 31.8705L52.0007 19.9272C53.4663 17.2469 57.3148 17.2469 58.7803 19.9272Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.4386 9.09833L26.7892 14.5414C27.1117 15.2903 27.7102 15.8887 28.4591 16.2112L33.9022 18.5619C36.4786 19.6727 36.4786 23.3277 33.9022 24.4422L28.4591 26.7892C27.7102 27.1117 27.1117 27.7102 26.7892 28.4591L24.4386 33.9022C23.3277 36.4786 19.6727 36.4786 18.5583 33.9022L16.2112 28.4591C15.8887 27.7102 15.2903 27.1117 14.5414 26.7892L9.09833 24.4386C6.52191 23.3277 6.52191 19.6727 9.09833 18.5583L14.5414 16.2077C15.2903 15.8852 15.8887 15.2867 16.2112 14.5378L18.5619 9.09833C19.6727 6.52191 23.3277 6.52191 24.4386 9.09833Z"
                  className="fill-[#434750] dark:fill-white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5367 55.1986L18.2997 59.28C18.5433 59.8426 18.9913 60.2905 19.5538 60.5341L23.6353 62.2971C25.5667 63.1321 25.5667 65.8733 23.6353 66.7046L19.5538 68.4676C18.9913 68.7113 18.5433 69.1592 18.2997 69.7218L16.5367 73.8032C15.7018 75.7346 12.9605 75.7346 12.1292 73.8032L10.3662 69.7218C10.1225 69.1592 9.67459 68.7113 9.11201 68.4676L5.03059 66.7046C3.09918 65.8697 3.09918 63.1285 5.03059 62.2971L9.11201 60.5341C9.67459 60.2905 10.1225 59.8426 10.3662 59.28L12.1292 55.1986C12.9641 53.2671 15.7018 53.2671 16.5367 55.1986Z"
                  className="fill-[#434750] dark:fill-white"
                />
              </svg>
            </div>
            <p className="font-[500] leading-normal text-[22px] text-[#061E2C] dark:text-white">
              {data.plan5}
            </p>
            <p className="font-[500] leading-[22px] text-[22px] text-[#061E2C] dark:text-white">
              {data.plan5II}
            </p>
            <div className="absolute max-[1160px]:hidden bottom-[-10px] left-[50%] translate-x-[-50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="6" fill="#20D091" />
                <circle
                  cx="9"
                  cy="9"
                  r="8.5"
                  stroke="#989CAA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="3 3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;

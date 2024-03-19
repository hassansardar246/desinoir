"use client";
import { useState, useEffect } from "react";
import { Bai_Jamjuree } from "next/font/google";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const totalSteps = 72;
    const intervalDuration = 1000 / totalSteps;
    const updateCount = () => {
      setCount((prevCount) => {
        const newCount = (prevCount + 14) % 1274;
        if (newCount === 0) {
          setCount(1274);
          clearInterval(interval);
        }
        return newCount;
      });
    };
    const interval = setInterval(updateCount, intervalDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p
        className={`${inter.className} outlinee-bg leading-normal text-[100px]`}
      >
        {count.toLocaleString()}+
      </p>
    </div>
  );
};

export default Counter;

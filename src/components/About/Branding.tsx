import React from "react";
import BrandSlider from "../common/Slider";

function Branding() {
  const background = {
    background: "linear-gradient(90deg, #20D091 0%, #197BFF 100%)",
  };
  return (
    <div>
      <div
        className="lg:h-[410px] h-[200px] flex justify-center items-center"
        style={background}
      >
        <BrandSlider chnaged={false} />
      </div>
    </div>
  );
}

export default Branding;

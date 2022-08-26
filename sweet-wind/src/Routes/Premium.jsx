import React from "react";
import PremiumSection1 from "../Components/PremiumSection1";

function Premium() {
  const bgColor = {
    backgroundColor: "white",
    padding: "50px",
    color: "#333333",
    borderRadius: "0px 0px 0px 200px",
  };
  return (
    <div>
      <PremiumSection1
        bgColor={bgColor}
        para="The Power of Premium"
        heading1="Premium Members Report 3x The Results"
        heading3="Get even more support for your low-carb lifestyle."
        src="https://images.prismic.io/cm-website/66210043-cb59-43f1-9163-678a14300f3a_hero-img%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
      />
    </div>
  );
}

export default Premium;

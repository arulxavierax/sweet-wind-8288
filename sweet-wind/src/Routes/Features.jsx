import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Section1 from "../Components/Section1";
import Section9 from "../Components/Section9";

function Features() {
  const bgColor = {
    backgroundColor: "#6c88f9",
    padding: "50px",
    color: "white",
    borderRadius: "0px 0px 0px 200px",
  };
  return (
    <div>
      <div>
        <Section1
          bgColor={bgColor}
          heading1="The #1 Keto Diet App Since 2010"
          heading2="Learn. Cook. Track. Connect."
          heading3="Explore our industry-leading suite of features that make Keto life easy."
          src="https://www.carbmanager.com/_nuxt/img/65fd85f.png"
        />
      </div>
      <div style={{ margin: "100px" }}>
        <Box>
          <Text fontWeight={"bold"} color="#333333" fontSize={"5xl"}>
            The Most Advanced Set of Tools to Make <br /> Your Keto Lifestyle
            Easy
          </Text>
        </Box>
      </div>

      <div style={{ margin: "200px 0px 200px 0px" }}>
        <Section9 />
      </div>
    </div>
  );
}

export default Features;

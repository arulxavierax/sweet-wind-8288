import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

function FeatureSection1({ src, title, content }) {
  return (
    <div>
      <GridItem
        borderRadius={10}
        padding="10px"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
      >
        <Box>
          <Image margin={5} width={100} src={src} />
        </Box>
        <Box>
          <Text
            margin={5}
            fontWeight={"bold"}
            textAlign="left"
            fontSize={"1xl"}
            color={"#333333"}
          >
            {title}
          </Text>
        </Box>
        <Box>
          <Text color={"#6f737a"} margin={5} textAlign={"left"}>
            {content}
          </Text>
        </Box>
        <Box>
          <Text margin={5} textAlign={"left"} color={"#3177bb"}>
            Learn More ->
          </Text>
        </Box>
      </GridItem>
    </div>
  );
}

export default FeatureSection1;

import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

function PremiumSection2({ src, title, content }) {
  return (
    <div>
      <GridItem
        borderRadius={10}
        padding="10px"
      >
        <Box>
          <Image margin={'auto'} display='block' width={100} src={src} />
        </Box>
        <Box>
          <Text
            margin={5}
            fontWeight={"bold"}
            textAlign="center"
            fontSize={"1xl"}
            color={"#333333"}
          >
            {title}
          </Text>
        </Box>
        <Box>
          <Text color={"#6f737a"} margin={5} textAlign={"center"}>
            {content}
          </Text>
        </Box>
      </GridItem>
    </div>
  );
}

export default PremiumSection2;

import React from "react";
import {
  Box,
  Button,
  color,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

function PremiumSection1({ para, bgColor, heading1, heading3, src }) {
  return (
    <div>
      <div style={bgColor}>
        <div
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "50%", textAlign: "left", marginTop: "50px" }}>
            <Box>
              <Text margin={5} fontSize={"2xl"}>
                {para}
              </Text>
            </Box>
            <Box margin={5}>
              <Heading fontSize={"6xl"}>{heading1}</Heading>
            </Box>
            <Box margin={5}>
              <Text>{heading3}</Text>
            </Box>
            <Box margin={5}>
              <Button
                color={"white"}
                borderRadius={50}
                size={"lg"}
                bg={"#1bc98e"}
              >
                Get Premium Now
              </Button>
            </Box>
          </div>
          <div style={{ width: "50%" }}>
            <Image width={"50%"} display="block" margin="auto" src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumSection1;

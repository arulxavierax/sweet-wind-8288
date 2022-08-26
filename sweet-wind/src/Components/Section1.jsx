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

function Section1({ para, bgColor, heading1, heading2, heading3, src }) {
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
              <Text>{para}</Text>
            </Box>
            <Box margin={5}>
              <Heading fontSize={"6xl"}>{heading1}</Heading>
            </Box>
            <Box margin={5}>
              <Text fontSize={"3xl"}> {heading2}</Text>
            </Box>
            <Box margin={5}>
              <Text>{heading3}</Text>
            </Box>
            <Box margin={5} style={{ display: "flex" }}>
              <input
                style={{ padding: "10px", borderRadius: "50px 0px 0px 50px" }}
                bg={"white"}
                placeholder="Enter email address"
              />
              <Button
                size={"lg"}
                style={{ borderRadius: "0px 50px 50px 0px" }}
                bg={"#f94642"}
              >
                Create Free Account
              </Button>
            </Box>
            <Flex margin={50} width="50%" justify={"space-between"}>
              <div>
                <Image
                  display={"block"}
                  width={150}
                  src="https://www.carbmanager.com/_nuxt/img/cd5b00b.png"
                />
              </div>
              <div>
                <Image
                  display={"block"}
                  width={150}
                  src="https://www.carbmanager.com/_nuxt/img/189f2dc.png"
                />
              </div>
            </Flex>
          </div>
          <div style={{ width: "40%" }}>
            <Image width={"50%"} display="block" margin="auto" src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;

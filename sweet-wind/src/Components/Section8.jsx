import { Box, GridItem, Highlight, Image, Text } from "@chakra-ui/react";
import React from "react";

function Section8({ q, text, src }) {
  return (
    <div>
      <GridItem>
        <Box>
          <Image src={src} />
        </Box>
        <Box>
          <Text fontSize={'3xl'} color="#333333">
            <Highlight query={q} styles={{ fontWeight: "bold" }}>
              {text}
            </Highlight>
          </Text>
        </Box>
      </GridItem>
    </div>
  );
}

export default Section8;

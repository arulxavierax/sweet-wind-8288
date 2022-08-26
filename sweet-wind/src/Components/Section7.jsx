import {
  Box,
  GridItem,
  Heading,
  Highlight,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Section7({ q, src, heading, content }) {
  return (
    <GridItem>
      <Box>
        <Image display={"block"} margin="auto" width={100} src={src} />
      </Box>
      <Box>
        <Heading>{heading}+</Heading>
      </Box>
      <Box>
        <Text color="#333333">
          <Highlight query={q} styles={{ fontWeight: "bold" }}>
            {content}
          </Highlight>
        </Text>
      </Box>
    </GridItem>
  );
}

export default Section7;

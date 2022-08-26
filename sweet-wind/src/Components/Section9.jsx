import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Section9() {
  return (
    <div style={{ backgroundColor: "#1ca677" , padding:"70px" }}>
      <div>
        <Box>
          <Heading color={'white'} >Looking for Premium?</Heading>
        </Box>
        <Box margin={5}>
          <Text color={'white'} >
            Unlock all of Carb Manager's cutting-edge features with a Premium
            Membership.
          </Text>
        </Box>
        <Box>
          <Button borderRadius={50} color={'white'} bg="#F94642" >Get Premium</Button>
        </Box>
      </div>
    </div>
  );
}

export default Section9;

import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

function Home() {
  return (
    <div style={{ border: "1px solid" }}>
      <Flex width={"80%"} bg="green" color={"white"}>
        <Heading>Keto & Low-Carb Made Easy</Heading>
        <Text>The #1 Low-Carb and Keto Diet App</Text>
        <Text>For healthy & sustainable low-carb living</Text>
        <Flex>
          <Input
            size="md"
            color={"black"}
            bg={"white"}
            placeholder="Enter email address"
          />
          <Button width="300px" size="md" bg={"red"}>
            {" "}
            Create Free Account{" "}
          </Button>
        </Flex>
        <Spacer />
        <div>
          <Box boxSize="sm">
            <Image
              display={"block"}
              boxSize={"auto"}
              src="https://www.carbmanager.com/_nuxt/img/9bfac4e.png"
            />
          </Box>
        </div>
      </Flex>
    </div>
  );
}

export default Home;

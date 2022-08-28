import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Box marginLeft={"10%"}>
        <Image
          width={"30%"}
          display="block"
          margin={"auto"}
          src="https://d33wubrfki0l68.cloudfront.net/89e1f65eb1658d9a4bbd01d61dbc64d3b2dd7b65/bd84f/_nuxt/img/6d25ed0.svg"
        />
      </Box>
      <Box margin="50px">
        <Flex
          color={"#333333"}
          fontWeight={"bold"}
          justify={"space-between"}
          width="60%"
          margin={"auto"}
        >
          <Box>
            <Text>
              <Link to={"/features"}>Features</Link>
            </Text>
          </Box>
          <Box>
            <Text>
              <Link to={"/premium"}>Premium</Link>
            </Text>
          </Box>
          <Box>
            <Text>Keto Recipes</Text>
          </Box>
          <Box>
            <Text>Keto Cookbook</Text>
          </Box>
          <Box>
            <Text>Articles</Text>
          </Box>
          <Box>
            <Text>About Us</Text>
          </Box>
          <Box>
            <Text>Foods</Text>
          </Box>
          <Box>
            <Text>Support</Text>
          </Box>
          <Box>
            <Text>Log In</Text>
          </Box>
          <Box>
            <Text>Join For Free</Text>
          </Box>
        </Flex>
      </Box>
      <Box margin={"50px"}>
        <Flex
          color={"#6f737a"}
          justify={"space-between"}
          width="50%"
          margin={"auto"}
        >
          <Box>
            <Text>Gift Cards</Text>
          </Box>
          <Box>
            <Text>Support Center</Text>
          </Box>
          <Box>
            <Text>Forums</Text>
          </Box>
          <Box>
            <Text>Terms Of Service</Text>
          </Box>
          <Box>
            <Text>Privacy Policy</Text>
          </Box>
          <Box>
            <Text>Contact</Text>
          </Box>
          <Box>
            <Text>System Status</Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Divider />
      </Box>
      <Box margin={"50px"}>
        <Text color="#333">
          © 2010-2022 Wombat Apps LLC. All Rights Reserved.
        </Text>
      </Box>
      <Box>
        <Text color={"#6f737a"}>
          Carb Manager's content is for informational and educational purposes
          only. Our website is not intended to be a substitute for professional{" "}
          <br /> medical advice, diagnosis, or treatment.
        </Text>
      </Box>
    </div>
  );
}

export default Footer;

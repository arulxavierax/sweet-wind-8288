import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
} from "@chakra-ui/react";

function FeatureSection2({
  imgSrc,
  subimg,
  heading,
  content,
  point1,
  point2,
  point3,
  pointcontent1,
  pointcontent2,
  pointcontent3,
}) {
  return (
    <div>
      <Box>
        <Flex textAlign={"left"}>
          <Box width="60%">
            <Box>
              <Image width={100} src={subimg} />
            </Box>
            <Box>
              {" "}
              <Heading padding={5} color={"#333333"}>
                {heading}
              </Heading>{" "}
            </Box>
            <Box>
              <Text padding={3} color={"#333333CC"}>
                {content}
              </Text>
            </Box>
            <Box>
              <li style={{ color: "#6f737a", fontSize: "18px" }}> {point1}</li>
            </Box>
            <Box>
              <Text padding={3} color={"#333333CC"}>
                {pointcontent1}
              </Text>
            </Box>
            <Box>
              <li style={{ color: "#6f737a", fontSize: "18px" }}> {point2}</li>
            </Box>
            <Box>
              <Text padding={3} color={"#333333CC"}>
                {pointcontent2}
              </Text>
            </Box>
            <Box>
              <li style={{ color: "#6f737a", fontSize: "18px" }}>{point3}</li>
            </Box>
            <Box>
              <Text padding={3} color={"#333333CC"}>
                {pointcontent3}
              </Text>
            </Box>
          </Box>
          <Box width="60%">
            <Image display={"block"} margin="auto" src={imgSrc} />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default FeatureSection2;

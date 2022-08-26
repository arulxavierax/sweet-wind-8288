import {
  Box,
  Flex,
  Heading,
  Highlight,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function Section3({
  q,
  imageSrc,
  heading,
  content,
  point1Src,
  point2Src,
  point3Src,
  point1,
  point2,
  point3,
}) {
  return (
    <div style={{ margin: "150px" }}>
      <Flex
        textAlign={"left"}
        width={"80%"}
        margin="auto"
        justify="space-between"
      >
        <div style={{ width: "100%" }}>
          <Box>
            <Text color="#333333" fontSize={"3xl"}>
              <Highlight query={q} styles={{ fontWeight: "bold" }}>
                {heading}
              </Highlight>
            </Text>
          </Box>
          <Box>
            <Text fontSize={"16px"} style={{ margin: 10 }}>
              {content}
            </Text>
          </Box>
          <div>
            <SimpleGrid style={{ margin: 10 }} columns={1} spacing={10}>
              <Flex>
                <Box>
                  <Image
                    style={{ marginRight: 10 }}
                    width={30}
                    src={point1Src}
                  />
                </Box>
                <Box>
                  <Text>{point1}</Text>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <Image
                    style={{ marginRight: 10 }}
                    width={30}
                    src={point2Src}
                  />
                </Box>
                <Box>
                  <Text>{point2}</Text>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <Image
                    style={{ marginRight: 15 }}
                    width={30}
                    src={point3Src}
                  />
                </Box>
                <Box>
                  <Text>{point3}</Text>
                </Box>
              </Flex>
            </SimpleGrid>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <Image
            display={"block"}
            margin={"auto"}
            borderRadius="10px 10px 100px 10px"
            src={imageSrc}
          />
        </div>
      </Flex>
    </div>
  );
}

export default Section3;

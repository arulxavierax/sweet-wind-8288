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

function Section2({
  q,
  imageSrc,
  heading,
  content,
  pointSrc,
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
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
          <Image
            display={"block"}
            margin={"auto"}
            borderRadius="100px 10px 10px 10px"
            src={imageSrc}
          />
        </div>
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
            <SimpleGrid style={{ margin: 10 }} columns={2} spacing={10}>
              <Flex>
                <Box>
                  <Image
                    style={{ marginRight: 10 }}
                    width={30}
                    src={pointSrc}
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
                    src={pointSrc}
                  />
                </Box>
                <Box>
                  <Text>{point2}</Text>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <Image
                    style={{ marginRight: 10 }}
                    width={30}
                    src={pointSrc}
                  />
                </Box>
                <Box>
                  <Text>{point3}</Text>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <Image
                    style={{ marginRight: 10 }}
                    width={30}
                    src={pointSrc}
                  />
                </Box>
                <Box>
                  <Text>{point4}</Text>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <Image
                    style={{ marginRight: 10 }}
                    width={30}
                    src={pointSrc}
                  />
                </Box>
                <Box>
                  <Text>{point5}</Text>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <Image
                    style={{ marginRight: 10 }}
                    width={30}
                    src={pointSrc}
                  />
                </Box>
                <Box>
                  <Text>{point6}</Text>
                </Box>
              </Flex>
            </SimpleGrid>
          </div>
        </div>
      </Flex>
    </div>
  );
}

export default Section2;

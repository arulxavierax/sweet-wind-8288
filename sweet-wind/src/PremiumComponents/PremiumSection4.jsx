import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Highlight,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

function PremiumSection4({
  color,
  imgSrc,
  heading,
  content,
  q,
  point1,
  point2,
  point3,
}) {
  return (
    <Box>
      <Flex textAlign={"left"} justify={"space-between"}>
        <Box width={"40%"}>
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
                      src={
                        "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiMxQkM5OEUiLz48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNy41IiBzdHJva2U9IiMxQkM5OEUiLz48L3N2Zz4="
                      }
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
                      src={
                        "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiMxQkM5OEUiLz48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNy41IiBzdHJva2U9IiMxQkM5OEUiLz48L3N2Zz4="
                      }
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
                      src={
                        "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiMxQkM5OEUiLz48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNy41IiBzdHJva2U9IiMxQkM5OEUiLz48L3N2Zz4="
                      }
                    />
                  </Box>
                  <Box>
                    <Text>{point3}</Text>
                  </Box>
                </Flex>
              </SimpleGrid>
            </div>
          </div>
        </Box>
        <Box width={"40%"}>
          <Box
            bg={color}
            padding="30px 10px 30px 10px"
            borderRadius="100px 10px"
          >
            <Image width={"50%"} margin="auto" src={imgSrc} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default PremiumSection4;

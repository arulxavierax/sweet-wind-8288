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

function Section6({ q, src, title, content }) {
  return (
    <div>
      <Box>
        <Image
          width={100}
          src={src}
        />
      </Box>
      <Box>
        <Text>{title}</Text>
      </Box>
      <Box>
        <Text color="#333333">
          <Highlight
            query={q}
            styles={{ fontWeight: "bold", color: "#1CA677" }}
          >
            {content}
          </Highlight>
        </Text>
      </Box>
    </div>
  );
}

export default Section6;

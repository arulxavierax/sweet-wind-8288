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
import React from "react";
import Footer from "../Components/Footer";
import PremiumSection1 from "../PremiumComponents/PremiumSection1";
import PremiumSection2 from "../PremiumComponents/PremiumSection2";
import PremiumSection3 from "../PremiumComponents/PremiumSection3";
import PremiumSection4 from "../PremiumComponents/PremiumSection4";
import PremiumSection5 from "../PremiumComponents/PremiumSection5";

function Premium() {
  const bgColor = {
    backgroundColor: "white",
    padding: "50px",
    color: "#333333",
    borderRadius: "0px 0px 0px 200px",
  };
  return (
    <div>
      <div>
        <PremiumSection1
          bgColor={bgColor}
          para="The Power of Premium"
          heading1="Premium Members Report 3x The Results"
          heading3="Get even more support for your low-carb lifestyle."
          src="https://images.prismic.io/cm-website/66210043-cb59-43f1-9163-678a14300f3a_hero-img%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
        />
      </div>

      <div style={{ margin: "100px" }}>
        <Box>
          <Text fontWeight={"bold"} color="#333333" fontSize={"5xl"}>
            With Premium You Can Easy
          </Text>
        </Box>
      </div>

      <div>
        <Box width={"60%"} margin="auto">
          <Grid templateColumns="repeat(4,1fr)" gap={6}>
            <PremiumSection2
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5LjUgMzVjMCAxOS4wNTQtMTUuNDQ2IDM0LjUtMzQuNSAzNC41QzE1Ljk0NiA2OS41LjUgNTQuMDU0LjUgMzUgLjUgMTUuOTQ2IDE1Ljk0Ni41IDM1IC41IDU0LjA1NC41IDY5LjUgMTUuOTQ2IDY5LjUgMzV6IiBzdHJva2U9IiNFQkVGRjQiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTM1LjIgMjMuMjdsLTcuMDU0IDguNDY0YTEuNjY3IDEuNjY3IDAgMDEtMi41Ni0yLjEzNGw4LjMzNC0xMGMuNjY2LS44IDEuODkzLS44IDIuNTYgMGw4LjMzNCAxMGExLjY2NyAxLjY2NyAwIDExLTIuNTYgMi4xMzRMMzUuMiAyMy4yN3oiIGZpbGw9IiMxQ0E2NzciLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjY2NyAzMC42NjdoMjkuMDY0YTEuNjY2IDEuNjY2IDAgMDExLjYxNyAyLjA3TDQ3LjgxMiA0Ni44OGE1IDUgMCAwMS00Ljg0OSAzLjc4N0gyNy40MzZhNSA1IDAgMDEtNC44NS0zLjc4N0wxOS4wNSAzMi43MzdhMS42NjcgMS42NjcgMCAwMTEuNjE4LTIuMDd6bTE0LjUzMiA1Yy0uOTIgMC0xLjY2Ny43NDYtMS42NjcgMS42NjdWNDRhMS42NjggMS42NjggMCAwMDMuMzM0IDB2LTYuNjY2YzAtLjkyLS43NDctMS42NjctMS42NjctMS42Njd6bS04LjM5Mi4yMjdhMS42NjcgMS42NjcgMCAwMC0xLjE3OSAyLjA0MWwxLjcyNiA2LjQ0YTEuNjY3IDEuNjY3IDAgMDAzLjIyLS44NjNsLTEuNzI2LTYuNDRhMS42NjcgMS42NjcgMCAwMC0yLjA0LTEuMTc4em0xNi43ODQgMGExLjY2NyAxLjY2NyAwIDAwLTIuMDQgMS4xNzlsLTEuNzI3IDYuNDRhMS42NjcgMS42NjcgMCAxMDMuMjIuODYybDEuNzI2LTYuNDRhMS42NjcgMS42NjcgMCAwMC0xLjE3OS0yLjA0di0uMDAxeiIgZmlsbD0iIzFDQTY3NyIvPjwvc3ZnPg=="
              title="Generate"
              content="Personalized meal plans and shopping lists"
            />
            <PremiumSection2
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5LjUgMzVjMCAxOS4wNTQtMTUuNDQ2IDM0LjUtMzQuNSAzNC41QzE1Ljk0NiA2OS41LjUgNTQuMDU0LjUgMzUgLjUgMTUuOTQ2IDE1Ljk0Ni41IDM1IC41IDU0LjA1NC41IDY5LjUgMTUuOTQ2IDY5LjUgMzV6IiBzdHJva2U9IiNFQkVGRjQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjk1MiAyMGwxMS43ODUgMTEuNzg1LTQuNzE0IDQuNzE1LTcuMDctNy4wN2E2LjY2NiA2LjY2NiAwIDAxMC05LjQyOVYyMGgtLjAwMXptMjIuOTQzIDEuNDEybC00Ljc3NiA1LjgzN2EuOTIuOTIgMCAwMDEuMjk2IDEuMjk1bDUuODM3LTQuNzc1IDEuMTc4IDEuMTc4LTQuNzc1IDUuODM3YS45Mi45MiAwIDAwMS4yOTYgMS4yOTZsNS44MzYtNC43NzYgMS4xOCAxLjE3OS01LjMwNCA1LjMwM2E1LjgzNCA1LjgzNCAwIDAxLTguMjUtOC4yNWw1LjMwMy01LjMwMiAxLjE4IDEuMTc5di0uMDAxaC0uMDAxeiIgZmlsbD0iI0Y5NDY0MiIvPjxwYXRoIG9wYWNpdHk9Ii4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjc2NSAzOC4xMDhjLjY2LjY2LjY4NiAxLjcyMi4wNiAyLjQxNWwtOC4yODQgOS4xNjRhMi4zNzcgMi4zNzcgMCAxMS0zLjM1Ni0zLjM1N2w5LjE2NS04LjI4M2ExLjc1NCAxLjc1NCAwIDAxMi40MTUuMDZ2LjAwMXptMy4zMzIgMGExLjc1NCAxLjc1NCAwIDAxMi40MTUtLjA2MWw5LjE2NSA4LjI4M2EyLjM3OCAyLjM3OCAwIDExLTMuMzU3IDMuMzU3bC04LjI4NC05LjE2NGExLjc1MyAxLjc1MyAwIDAxLjA2LTIuNDE1eiIgZmlsbD0iI0Y5NDY0MiIvPjwvc3ZnPg=="
              title="Unlock"
              content="State-of-the-art food logging features"
            />
            <PremiumSection2
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5LjUgMzVjMCAxOS4wNTQtMTUuNDQ2IDM0LjUtMzQuNSAzNC41QzE1Ljk0NiA2OS41LjUgNTQuMDU0LjUgMzUgLjUgMTUuOTQ2IDE1Ljk0Ni41IDM1IC41IDU0LjA1NC41IDY5LjUgMTUuOTQ2IDY5LjUgMzV6IiBzdHJva2U9IiNFQkVGRjQiLz48cGF0aCBvcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01MC4zMzQgMzIuMTA1VjQ2QTMuMzMzIDMuMzMzIDAgMDE0NyA0OS4zMzNIMzAuMzM0QTMuMzMzIDMuMzMzIDAgMDEyNyA0NlYzMi4xMDVBNS44MzQgNS44MzQgMCAwMTI5LjUgMjFoMTguMzMzYTUuODM0IDUuODM0IDAgMDEyLjUgMTEuMTA1eiIgZmlsbD0iI0Q1NzQxMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDMuNjY3IDMyLjEwNVY0NmEzLjMzMyAzLjMzMyAwIDAxLTMuMzMzIDMuMzMzSDIzLjY2N0EzLjMzMyAzLjMzMyAwIDAxMjAuMzM0IDQ2VjMyLjEwNUE1LjgzNCA1LjgzNCAwIDAxMjIuODM0IDIxaDE4LjMzM2E1LjgzNCA1LjgzNCAwIDAxMi41IDExLjEwNXoiIGZpbGw9IiNENTc0MTAiLz48L3N2Zz4="
              title="Implement"
              content="Carb Cycling by customizing your daily goals"
            />
            <PremiumSection2
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5LjUgMzVjMCAxOS4wNTQtMTUuNDQ2IDM0LjUtMzQuNSAzNC41QzE1Ljk0NiA2OS41LjUgNTQuMDU0LjUgMzUgLjUgMTUuOTQ2IDE1Ljk0Ni41IDM1IC41IDU0LjA1NC41IDY5LjUgMTUuOTQ2IDY5LjUgMzV6IiBzdHJva2U9IiNFQkVGRjQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM1LjIwMyA0OC4wMmw5Ljc0OC0xNC42MjJhMS4yNSAxLjI1IDAgMDAtMS4wNC0xLjk0M2gtNy42NjR2LTkuMjA0YTEuMjUgMS4yNSAwIDAwLTIuMjktLjY5NUwyNC4yMSAzNi4xNzhhMS4yNSAxLjI1IDAgMDAxLjA0IDEuOTQ0aDcuNjY0djkuMjA1YTEuMjUgMS4yNSAwIDAwMi4yOS42OTRoLS4wMDF6IiBmaWxsPSIjNkM4OEY5Ii8+PC9zdmc+"
              title="Learn"
              content="About Keto with our exclusive video jumpstart course"
            />
            <PremiumSection2
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5LjUgMzVjMCAxOS4wNTQtMTUuNDQ2IDM0LjUtMzQuNSAzNC41QzE1Ljk0NiA2OS41LjUgNTQuMDU0LjUgMzUgLjUgMTUuOTQ2IDE1Ljk0Ni41IDM1IC41IDU0LjA1NC41IDY5LjUgMTUuOTQ2IDY5LjUgMzV6IiBzdHJva2U9IiNFQkVGRjQiLz48cGF0aCBkPSJNMzAgMjhjLS45MiAwLTEuNjY3Ljc0Ni0xLjY2NyAxLjY2N3YxMGMwIC45Mi43NDcgMS42NjcgMS42NjcgMS42NjdoMTBjLjkyIDAgMS42NjctLjc0NyAxLjY2Ny0xLjY2N3YtMTBjMC0uOTItLjc0Ny0xLjY2Ny0xLjY2Ny0xLjY2N0gzMHptMC0zLjMzM2gxMGE1IDUgMCAwMTUgNXYxMGE1IDUgMCAwMS01IDVIMzBhNSA1IDAgMDEtNS01di0xMGE1IDUgMCAwMTUtNXoiIGZpbGw9IiM2Qzg4RjkiLz48cGF0aCBvcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMCAyOGMtLjkyIDAtMS42NjcuNzQ3LTEuNjY3IDEuNjY3djEwYzAgLjkyLjc0NyAxLjY2NyAxLjY2NyAxLjY2N2gxMGMuOTIgMCAxLjY2Ny0uNzQ3IDEuNjY3LTEuNjY3di0xMGMwLS45Mi0uNzQ3LTEuNjY3LTEuNjY3LTEuNjY3SDMwem0wIDE2LjY2N2gxMHY0LjE2N2EyLjUgMi41IDAgMDEtMi41IDIuNWgtNWEyLjUgMi41IDAgMDEtMi41LTIuNXYtNC4xNjd6TTMyLjUgMThoNWEyLjUgMi41IDAgMDEyLjUgMi41djQuMTY3SDMwVjIwLjVhMi41IDIuNSAwIDAxMi41LTIuNXoiIGZpbGw9IiM2Qzg4RjkiLz48L3N2Zz4="
              title="Integrate"
              content="Your FitBit, Garmin, or other fitness device or app"
            />
            <PremiumSection2
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5LjUgMzVjMCAxOS4wNTQtMTUuNDQ2IDM0LjUtMzQuNSAzNC41QzE1Ljk0NiA2OS41LjUgNTQuMDU0LjUgMzUgLjUgMTUuOTQ2IDE1Ljk0Ni41IDM1IC41IDU0LjA1NC41IDY5LjUgMTUuOTQ2IDY5LjUgMzV6IiBzdHJva2U9IiNFQkVGRjQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4IDM4LjE4NmgzMy4zMzRjMCA4LjI4NS02LjcxNiAxNS0xNSAxNUgzM2MtOC4yODQgMC0xNS02LjcxNS0xNS0xNXoiIGZpbGw9IiNGREExMjAiLz48cGF0aCBvcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi41MzkgMTcuMjE2YTEuNjA2IDEuNjA2IDAgMDEuNTU4IDIuMjQ1TDMyLjIzIDM2Ljc5OWEuODY1Ljg2NSAwIDAxLTEuNDk1LS44NjRsOS41OC0xOC4wOGExLjYwNyAxLjYwNyAwIDAxMi4yMjQtLjY0di4wMDF6bTguNTkgNC42NjVhMS42MDYgMS42MDYgMCAwMS0uMTY0IDIuMzA4bC0xNS42OTMgMTMuMTNhLjg2NC44NjQgMCAwMS0xLjE1NS0xLjI4M2wxNC42OTktMTQuMjM0YTEuNjA2IDEuNjA2IDAgMDEyLjMxMy4wNzl6IiBmaWxsPSIjRkRBMTIwIi8+PC9zdmc+"
              title="Access"
              content="Our delicious Premium recipes"
            />
            <PremiumSection2
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5LjUgNDRjMCAxOS4wNTQtMTUuNDQ2IDM0LjUtMzQuNSAzNC41QzE1Ljk0NiA3OC41LjUgNjMuMDU0LjUgNDQgLjUgMjQuOTQ2IDE1Ljk0NiA5LjUgMzUgOS41YzE5LjA1NCAwIDM0LjUgMTUuNDQ2IDM0LjUgMzQuNXoiIHN0cm9rZT0iI0VCRUZGNCIvPjxwYXRoIGQ9Ik0yMy4zMzQgNTUuNzA4aDI1YTEuNjY4IDEuNjY4IDAgMTEwIDMuMzMzSDIxLjY2NmMtLjkyIDAtMS42NjctLjc0Ni0xLjY2Ny0xLjY2N1YzMC43MDhhMS42NjcgMS42NjcgMCAxMTMuMzM0IDB2MjV6IiBmaWxsPSIjRjk0NjQyIi8+PHBhdGggb3BhY2l0eT0iLjMiIGQ9Ik0yOS41NSA0OC41MTRhMS42NjggMS42NjggMCAwMS0yLjQzMy0yLjI4bDYuMjUtNi42NjZhMS42NjYgMS42NjYgMCAwMTIuMjk5LS4xMjhsNC45MzMgNC4yMSA2LjQyNy04LjE0MmExLjY3IDEuNjcgMCAwMTIuODEyLjE4MiAxLjY2NiAxLjY2NiAwIDAxLS4xOTcgMS44ODRsLTcuNSA5LjVhMS42NyAxLjY3IDAgMDEtMi4zOS4yMzVsLTUuMDQtNC4zMDEtNS4xNjIgNS41MDZoLjAwMnoiIGZpbGw9IiNGOTQ2NDIiLz48L3N2Zz4="
              title="Use"
              content="Advanced analysis tools to contour your diet and goals"
            />
            <PremiumSection2
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY5LjUgMzVjMCAxOS4wNTQtMTUuNDQ2IDM0LjUtMzQuNSAzNC41QzE1Ljk0NiA2OS41LjUgNTQuMDU0LjUgMzUgLjUgMTUuOTQ2IDE1Ljk0Ni41IDM1IC41IDU0LjA1NC41IDY5LjUgMTUuOTQ2IDY5LjUgMzV6IiBzdHJva2U9IiNFQkVGRjQiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTM5IDMyLjU0N2ExLjY2NyAxLjY2NyAwIDAwLTIuNzk1LTEuODE2bC01LjEyOSA3Ljg5OGExLjY2NyAxLjY2NyAwIDAwMi43OTYgMS44MTZMMzkgMzIuNTQ3eiIgZmlsbD0iIzFDQTY3NyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuNSAyMWgxNWE3LjUgNy41IDAgMDE3LjUgNy41djEzLjMzM2E3LjUgNy41IDAgMDEtNy41IDcuNWgtMTVhNy41IDcuNSAwIDAxLTcuNS03LjVWMjguNWE3LjUgNy41IDAgMDE3LjUtNy41ek0yNSAyOS4xMzdMMjkuMjg2IDM2aDExLjQyOEw0NSAyOS4xMzdjLTEuNjY3LTMuMjAyLTUtNC44MDQtMTAtNC44MDRzLTguMzMzIDEuNjAyLTEwIDQuODA0eiIgZmlsbD0iIzFDQTY3NyIvPjwvc3ZnPg=="
              title="Predict"
              content="Your weight change based on your specific profile"
            />
          </Grid>
        </Box>
      </div>

      <div>
        <Image
          style={{ marginLeft: "-5%" }}
          src="https://www.carbmanager.com/_nuxt/img/f3c99e4.png"
        />
      </div>

      <div style={{ margin: "100px" }}>
        <Box>
          <Text fontWeight={"bold"} color="#333333" fontSize={"5xl"}>
            Premium Features That Make a <br /> Difference
          </Text>
        </Box>
      </div>

      <div
        style={{
          width: "70%",
          margin: "auto",
          marginTop: "200px",
          marginBottom: "200px",
        }}
      >
        <Tabs variant={"unstyled"}>
          <TabList margin={10} justifyContent="space-evenly">
            <Tab _selected={{ color: "white", bg: "#1bc98e" }}>Made Simple</Tab>
            <Tab _selected={{ color: "white", bg: "#6c88f9" }}>
              Made Convenient
            </Tab>
            <Tab _selected={{ color: "white", bg: "#3177bb" }}>Made Fast</Tab>
            <Tab _selected={{ color: "white", bg: "#fda120" }}>
              Made Delicious
            </Tab>
            <Tab _selected={{ color: "white", bg: "#f94642" }}>Made Smart</Tab>
          </TabList>
          <Divider />
          <TabPanels>
            <TabPanel>
              <PremiumSection3
                color="#1bc98e"
                imgSrc="https://images.prismic.io/cm-website/5127c5e2-fbf4-4e64-b1c0-ff5326d27265_screen-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
                heading="Keto made simple ."
                content="Our Premium Keto Academy breaks down the basics of a low-carb lifestyle so you get all the details you need to start strong. Here’s a look at what you’ll discover:"
                q="simple ."
                point1="What’s the difference between total and net carbs?"
                point2="How much water should I drink?"
                point3="How can I schedule a cheat day?"
              />
            </TabPanel>
            <TabPanel>
              <PremiumSection4
                color="#6c88f9"
                imgSrc="https://images.prismic.io/cm-website/8cbe5fef-bcff-4411-93a4-0016278bed73_screen-2%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
                heading="Keto made convenient."
                content="Unlike other diet tracker apps, we make things personal. Fully customize your Carb Manager app for a unique low-carb experience and a hassle-free Keto lifestyle."
                q="convenient ."
                point1="Curate meals to accomodate dietary restrictions and the picky eaters in your family."
                point2="Generate Keto meal plans and grocery lists to save you extra trips to the store."
                point3="Get seamless integration with FitBit, Garmin, and hundreds of other fitness apps and devices so you can track your holistic health progress in one convenient place."
              />
            </TabPanel>
            <TabPanel>
              <PremiumSection3
                color="#3177bb"
                imgSrc="https://images.prismic.io/cm-website/5127c5e2-fbf4-4e64-b1c0-ff5326d27265_screen-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
                heading="Keto made fast ."
                content="Taking too long to search for a food? Save time with our state-of-the-art food logging features."
                q="fast ."
                point1="Our popular Snap Foods feature uses photo recognition, so it’s literally a snap."
                point2="Scan the barcode of almost any food to find macros and micros in seconds."
                point3="Just say it using our voice-logging feature to keep track of carbs and exercises on the go."
              />
            </TabPanel>
            <TabPanel>
              <PremiumSection4
                color="#fda120"
                imgSrc="https://images.prismic.io/cm-website/e44f824e-dc34-4d14-b9c7-dbc3aea5bece_screen-4%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
                heading="Keto made delicious ."
                content="In addition to using Carb Manager’s 50,000+ low-carb recipe database, Premium members get to:"
                q="delicious ."
                point1="Access our exclusive Premium recipes straight from the Carb Manager test kitchens."
                point2="Import recipes from the web right into the app, so you can easily save and organize your favorite ones."
                point3="Build “cheat days” into your daily meal goal plan for special occasions."
              />
            </TabPanel>
            <TabPanel>
              <PremiumSection5
                color="#f94642"
                imgSrc="https://images.prismic.io/cm-website/c22aeaa6-6b38-41ed-af47-4d9acc79aac3_screen-5%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
                heading="Keto made smart ."
                content="Want to unlock the real genius of going low-carb? Check out these other amazing features."
                q="smart ."
                point1="Advanced insights & reporting on your daily nutrition to understand specifically where you can improve."
                point2="Weight change predictions based on your profile and net calorie target."
                point3="Targeted carb cycling support according to your predetermined goals for different days."
                point4="Meal analysis to discover better ways to boost your metabolism and reduce hunger."
                point5="Correlations to plot your nutrition, sleep, exercise, and other variables against vital health readings."
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Premium;

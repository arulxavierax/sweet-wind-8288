import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  SimpleGrid,
  space,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";
import Section1 from "../Components/Section1";
import Section3 from "../Components/Section3";
import Section2 from "../Components/Section2";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import Section6 from "../Components/Section6";
import Section7 from "../Components/Section7";
import Section8 from "../Components/Section8";
import Section9 from "../Components/Section9";
import Footer from "../Components/Footer";

function Home() {
  const bgColor = {
    backgroundColor: "#1CA677",
    padding: "50px",
    color: "white",
    borderRadius: "0px 0px 0px 200px",
  };

  return (
    <div>
      <div>
        <Section1
          bgColor={bgColor}
          heading1="Keto & Low-Carb Made Easy"
          heading2="The #1 Low-Carb and Keto Diet App"
          heading3="For healthy & sustainable low-carb living"
          src="https://www.carbmanager.com/_nuxt/img/9bfac4e.png"
        />
      </div>

      <div style={{ margin: "100px" }}>
        <Section2
          q="you ."
          imageSrc="https://images.prismic.io/cm-website/030dabe6-7bc1-4df7-953f-4ddf8c3f7a97_article-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          heading="Keto for you ."
          content={
            "Personalize your low-carb journey and meet all your important health goals. We’re more than just a Keto calorie counter. Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to:"
          }
          pointSrc="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PGcgZmlsbD0iIzFDQTY3NyI+PHBhdGggb3BhY2l0eT0iLjE1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4IDM2YzkuOTQxIDAgMTgtOC4wNTkgMTgtMThTMjcuOTQxIDAgMTggMCAwIDguMDU5IDAgMThzOC4wNTkgMTggMTggMTh6Ii8+PHBhdGggZD0iTTE1LjU5OCAyMy43MzZsLTQuODkzLTQuODYzYS43MTQuNzE0IDAgMDEtLjIwNS0uNTI3YzAtLjIxNS4wNjgtLjM5LjIwNS0uNTI4bDEuMDg0LTEuMDU0YS42NTMuNjUzIDAgMDEuNTEzLS4yMzVjLjIwNSAwIC4zODYuMDc4LjU0Mi4yMzVsMy4yODEgMy4yOCA3LjAzMS03LjAzYS43NDQuNzQ0IDAgMDEuNTQyLS4yMzVjLjIwNSAwIC4zNzYuMDc4LjUxMy4yMzVsMS4wODQgMS4wNTRhLjcxNC43MTQgMCAwMS4yMDUuNTI4YzAgLjIxNC0uMDY4LjM5LS4yMDUuNTI3bC04LjY0MyA4LjYxM2EuNjY5LjY2OSAwIDAxLS41MjcuMjM1LjY2OS42NjkgMCAwMS0uNTI3LS4yMzV6Ii8+PC9nPjwvc3ZnPg=="
          point1="Lose weight quickly"
          point2="Reduce inflammation"
          point3="Optimize energy"
          point4="Gain mental clarity"
          point5="Restore balance"
          point6="Manage cravings"
        />
      </div>

      <div style={{ margin: "100px" }}>
        <Section3
          q="everyone ."
          imageSrc="https://images.prismic.io/cm-website/1b4d20a7-fd3b-42a0-ba35-cae306374b4a_article_2%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          heading="Keto for everyone ."
          content={
            "Keto isn’t just another diet. It’s a lifestyle. And Carb Manager isn’t just another Keto diet tracker. Our state-of-the-art features make it convenient and fun for everyone to join in."
          }
          point1Src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMSI+PGcgZmlsbD0iIzFDQTY3NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTYgMTlINGExIDEgMCAxMDAgMmgxMmExIDEgMCAxMDAtMnoiIG9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTMgMTEuODc0YTQuMDAyIDQuMDAyIDAgMDExLjMzNy03Ljg2IDYuMDAzIDYuMDAzIDAgMDExMS4zMjcgMEE0IDQgMCAwMTE3IDExLjg3NFYxNmExIDEgMCAwMS0xIDFINGExIDEgMCAwMS0xLTF2LTQuMTI2eiIvPjwvZz48L3N2Zz4="
          point2Src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTYgMjAiPjxkZWZzPjxwYXRoIGQ9Ik0xNiAxNkg0YTEgMSAwIDEwMCAyaDEydjFjMCAuNjI3LS4zNTggMS0xIDFIM2MtMS43NDYgMC0zLTEuMzA2LTMtM1YzYzAtMS42OTQgMS4yNTQtMyAzLTNoMTJjLjY0MiAwIDEgLjM3MyAxIDF2MTV6IiBpZD0iYSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxnIG1hc2s9InVybCgjYikiIGZpbGw9IiMxQ0E2NzciPjxwYXRoIGQ9Ik0xNiAxNkg0YTEgMSAwIDEwMCAyaDEydjFjMCAuNjI3LS4zNTggMS0xIDFIM2MtMS43NDYgMC0zLTEuMzA2LTMtM1YzYzAtMS42OTQgMS4yNTQtMyAzLTNoMTJjLjY0MiAwIDEgLjM3MyAxIDF2MTV6IiBvcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik01LjM1IDkuNTg4QzQuNTc0IDkuMzc4IDQgOC42NDIgNCA3Ljc2NWMwLTEuMDQuODA2LTEuODgzIDEuOC0xLjg4My4wNTEgMCAuMTAyLjAwMy4xNTEuMDA3QzYuMzIxIDQuNzg5IDcuMzIyIDQgOC41IDRzMi4xOC43ODkgMi41NDkgMS44ODljLjA1LS4wMDQuMS0uMDA3LjE1MS0uMDA3Ljk5NCAwIDEuOC44NDMgMS44IDEuODgzIDAgLjg3Ny0uNTc0IDEuNjE0LTEuMzUgMS44MjN2MS45NDFhLjQ2LjQ2IDAgMDEtLjQ1LjQ3MUg1LjhhLjQ2LjQ2IDAgMDEtLjQ1LS40N1Y5LjU4N3oiLz48L2c+PC9nPjwvc3ZnPg=="
          point3Src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOSI+PGcgZmlsbD0iIzFDQTY3NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMiA1aDE0YTIgMiAwIDAxMiAydjEwYTIgMiAwIDAxLTIgMkgyYTIgMiAwIDAxLTItMlY3YTIgMiAwIDAxMi0yem03IDEyQTUgNSAwIDEwOSA3YTUgNSAwIDAwMCAxMHptLS40MjctNi40MzhMOSA4bC40MjcgMi41NjJhMS41IDEuNSAwIDExLS44NTQgMHoiLz48cGF0aCBkPSJNMTEgM3YySDdWM0g0LjgwM0EzLjM2OSAzLjM2OSAwIDAxMiAxLjVMMS41MTguNzc3QS41LjUgMCAwMTEuOTM0IDBoMTQuMTMyYS41LjUgMCAwMS40MTYuNzc3TDE2IDEuNUEzLjM2OCAzLjM2OCAwIDAxMTMuMTk3IDNIMTF6IiBvcGFjaXR5PSIuMyIvPjwvZz48L3N2Zz4="
          point1="Save time with automatic meal plans and grocery lists
         tailored to specific food preferences and allergies"
          point2="Stay inspired by our database of thousands of Keto
        recipes"
          point3="Have fun tracking the macros and micros of over 1 million
        foods with cutting-edge features, like our popular Snap
        Foods feature that uses
        photo recognition technology"
        />
      </div>

      <div style={{ margin: "100px" }}>
        <Section4
          q="life ."
          imageSrc="https://images.prismic.io/cm-website/26adf515-88d3-46ff-b5c4-f73eb3c6c78f_article_3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          heading="Keto for life ."
          content={
            "Carb Manager is here to help you stick to your low-carb lifestyle."
          }
          pointSrc="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiMxQkM5OEUiLz48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNy41IiBzdHJva2U9IiMxQkM5OEUiLz48L3N2Zz4="
          point1="Worried about cravings?"
          point2="Want to know how your kids can do it too?"
          point3="Wonder how long before you see results?"
          bottomContent={
            "Our popular blog will keep you inspired and informed. And our active social media community lets you stay connected to other low-carb folks, so you’ll always get the support you need."
          }
        />
      </div>

      <div style={{ margin: "100px" }}>
        <Section5
          q="beyond ."
          imageSrc="https://images.prismic.io/cm-website/21877cf5-6425-41cf-b50d-41a16715d23b_article-4%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          heading="Keto beyond ."
          content={
            "We go way beyond the typical low-carb tracker to make sure you’re at your best. With Carb Manager, you can easily track your:"
          }
          pointSrc="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PGcgZmlsbD0iIzFDQTY3NyI+PHBhdGggb3BhY2l0eT0iLjE1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4IDM2YzkuOTQxIDAgMTgtOC4wNTkgMTgtMThTMjcuOTQxIDAgMTggMCAwIDguMDU5IDAgMThzOC4wNTkgMTggMTggMTh6Ii8+PHBhdGggZD0iTTE1LjU5OCAyMy43MzZsLTQuODkzLTQuODYzYS43MTQuNzE0IDAgMDEtLjIwNS0uNTI3YzAtLjIxNS4wNjgtLjM5LjIwNS0uNTI4bDEuMDg0LTEuMDU0YS42NTMuNjUzIDAgMDEuNTEzLS4yMzVjLjIwNSAwIC4zODYuMDc4LjU0Mi4yMzVsMy4yODEgMy4yOCA3LjAzMS03LjAzYS43NDQuNzQ0IDAgMDEuNTQyLS4yMzVjLjIwNSAwIC4zNzYuMDc4LjUxMy4yMzVsMS4wODQgMS4wNTRhLjcxNC43MTQgMCAwMS4yMDUuNTI4YzAgLjIxNC0uMDY4LjM5LS4yMDUuNTI3bC04LjY0MyA4LjYxM2EuNjY5LjY2OSAwIDAxLS41MjcuMjM1LjY2OS42NjkgMCAwMS0uNTI3LS4yMzV6Ii8+PC9nPjwvc3ZnPg=="
          point1="Ketones"
          point2="Blood glucose"
          point3="Insulin"
          point4="Intermittent fasting"
          point5="Glycemic load"
          point6="GKI and much more..."
        />
      </div>

      <div>
        <Image
          style={{ marginLeft: "-5%" }}
          src="https://d33wubrfki0l68.cloudfront.net/_nuxt/img/a8c2f42f65a0fca5d4453ba697a82809b02cea14/7e461cb.png"
        />
      </div>

      <div style={{ margin: "100px" }}>
        <Box>
          <Heading fontWeight={"bold"}>Get to Know Carb Manager</Heading>
        </Box>
        <Box style={{ marginBottom: "50px" }}>
          <Text color="#333333">
            <Highlight
              query={"best friend."}
              styles={{ fontWeight: "bold", color: "#1CA677" }}
            >
              The all-in-one Keto app. And your new best friend.
            </Highlight>
          </Text>
        </Box>
        <Box>
          <SimpleGrid
            style={{ textAlign: "left", width: "70%", margin: "auto" }}
            columns={3}
            spacing={5}
          >
            <Box>
              <Box>
                <Section6
                  q="#LikeMagic"
                  src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGOTQ2NDIiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI5LjMzNCAyMi42Njd2LjY2NmEyIDIgMCAwMDIgMkgzOGEyIDIgMCAwMDItMnYtLjY2NmgyLjY2N2EyLjY2NyAyLjY2NyAwIDAxMi42NjcgMi42Njd2MjEuMzMzYTIuNjY3IDIuNjY3IDAgMDEtMi42NjcgMi42NjZoLTE2QTIuNjY3IDIuNjY3IDAgMDEyNCA0Ni42NjdWMjUuMzMyYTIuNjY3IDIuNjY3IDAgMDEyLjY2Ny0yLjY2NWgyLjY2N3oiIGZpbGw9IiNGOTQ2NDIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzLjE2NyAzOS42NjdhMS4yNTUgMS4yNTUgMCAwMS0uODk0LS4zODRsLTIuNTU2LTIuNTU2YTEuMjM1IDEuMjM1IDAgMDEwLTEuNzljLjUxMS0uNTEgMS4zNDItLjUxIDEuNzg5IDBsMS42NjEgMS42NjMgNC4yMTctNC4yMTZhMS4yMzUgMS4yMzUgMCAwMTEuNzg5IDAgMS4yMzQgMS4yMzQgMCAwMTAgMS43ODlsLTUuMTExIDUuMTFhMS4yNjEgMS4yNjEgMCAwMS0uODk1LjM4NHoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzLjMzNCAyMS4zMzNhMS4zMzMgMS4zMzMgMCAxMTIuNjY2IDBoMmMuMzY4IDAgLjY2Ny4yOTguNjY3LjY2NnYxLjMzNGEuNjY3LjY2NyAwIDAxLS42NjcuNjY4aC02LjY2NmEuNjY3LjY2NyAwIDAxLS42NjctLjY2OHYtMS4zMzJjMC0uMzcuMjk4LS42NjguNjY3LS42NjhoMnoiIGZpbGw9IiNGOTQ2NDIiLz48L3N2Zz4="
                  title="Track Every Bite"
                  content="Log food and meals in seconds with the industry’s most advanced food logger, featuring new carb counts, micros, and macronutrients. Our Premium version lets you log food by just snapping a picture!"
                />
              </Box>
              <Box>
                <Section6
                  q="#"
                  src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGREExMjAiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4LjY2NiAzNy4xMzJ2Ni43OEEyLjY2NyAyLjY2NyAwIDAxNDYgNDYuNThoLThhMi42NjcgMi42NjcgMCAwMC01LjMzNCAwaC04QTIuNjY3IDIuNjY3IDAgMDEyMiA0My45MTN2LTE2aDI2LjY2NnY1LjQ0NmExLjk5OCAxLjk5OCAwIDEwMCAzLjc3MnYuMDAxem0tMTcuMzMzIDQuMTE0YTUuMzM0IDUuMzM0IDAgMTAwLTEwLjY2OCA1LjMzNCA1LjMzNCAwIDAwMCAxMC42Njh6bTEyIDEuMzMzYTEuMzMzIDEuMzMzIDAgMTAwLTIuNjY3IDEuMzMzIDEuMzMzIDAgMDAwIDIuNjY3ek0yNiA0Ni41OGExLjMzMyAxLjMzMyAwIDEwMC0yLjY2NyAxLjMzMyAxLjMzMyAwIDAwMCAyLjY2N3oiIGZpbGw9IiNENTc0MTAiLz48cGF0aCBvcGFjaXR5PSIuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NS40NiAyNi4zNmwtMTkuOTgyLTIuMzVhMS4zMzQgMS4zMzQgMCAwMC0xLjI2NS41ODNMMjIgMjcuOTEzaDI2LjY2NmE1LjQzMiA1LjQzMiAwIDAwLTMuMjA2LTEuNTU0eiIgZmlsbD0iI0Q1NzQxMCIvPjwvc3ZnPg=="
                  title="Cook “Yum-Worthy” Keto Meals"
                  content="Who said low-carb was boring? Satisfy even the pickiest eaters in your family with our exclusive, premium database of delicious Keto recipes."
                />
              </Box>
            </Box>
            <Box>
              <Image
                width={"50%"}
                src="https://www.carbmanager.com/_nuxt/img/dd32400.png"
              />
            </Box>
            <Box>
              <Box>
                <Box>
                  <Section6
                    q="#"
                    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiMzMTc3QkIiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBvcGFjaXR5PSIuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS4yIDIzLjI3bC03LjA1MiA4LjQ2MmExLjY3IDEuNjcgMCAwMS0yLjU2Mi0yLjEzM2w4LjMzNi0xMGExLjY2NiAxLjY2NiAwIDAxMi41NTkgMGw4LjMzNSAxMGExLjY2MyAxLjY2MyAwIDAxLS43ODUgMi42NTcgMS42NjUgMS42NjUgMCAwMS0xLjc3OC0uNTI1TDM1LjIgMjMuMjd6IiBmaWxsPSIjMzE3N0JCIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC42NjcgMzAuNjY2aDI5LjA2OGExLjY2NiAxLjY2NiAwIDAxMS42MTUgMi4wNzFMNDcuODE2IDQ2Ljg4YTUgNSAwIDAxLTQuODUxIDMuNzg4SDI3LjQzOGE1LjAwMSA1LjAwMSAwIDAxLTQuODUtMy43ODhMMTkuMDUgMzIuNzM3YTEuNjY4IDEuNjY4IDAgMDExLjYxOS0yLjA3aC0uMDAzLjAwMXptMTQuNTMzIDVjLS45MTggMC0xLjY2NS43NDctMS42NjUgMS42NjdWNDRhMS42NjYgMS42NjYgMCAxMDMuMzMzIDB2LTYuNjY4YzAtLjkyLS43NDgtMS42NjctMS42NjgtMS42Njd6bS04LjM5MS4yMjhhMS42NjYgMS42NjYgMCAwMC0xLjE3OCAyLjA0MWwxLjcyNSA2LjQzOGExLjY2NiAxLjY2NiAwIDAwMy4yMi0uODYybC0xLjcyNi02LjQ0YTEuNjY1IDEuNjY1IDAgMDAtMi4wNDMtMS4xNzdoLjAwMnptMTYuNzg2IDBhMS42NjUgMS42NjUgMCAwMC0yLjA0MyAxLjE3OGwtMS43MjUgNi40NGExLjY2NiAxLjY2NiAwIDAwMy4yMTkuODYybDEuNzI1LTYuNDM5YTEuNjY0IDEuNjY0IDAgMDAtMS4xNzYtMi4wNDF6IiBmaWxsPSIjMzE3N0JCIi8+PC9zdmc+"
                    title="Simplify Grocery Runs"
                    content="Save time at the grocery store! Generate personalized meal plans and shopping lists based on your preferences and macros, or choose from one of our many curated meal plans for all diet types."
                  />
                </Box>
                <Box>
                  <Section6
                    q="#"
                    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiM2Qzg4RjkiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBvcGFjaXR5PSIuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOSAyNi4zMzRhMiAyIDAgMDAtNCAwdjEzLjMzM2EyIDIgMCAxMDQgMFYyNi4zMzN6TTMyLjMzMyAzM2EyIDIgMCAwMC00IDB2Ni42NjZhMiAyIDAgMTA0IDBWMzN6IiBmaWxsPSIjNkM4OEY5Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS42NjcgNDQuMzM0aDIwYTEuMzM0IDEuMzM0IDAgMDEwIDIuNjY2SDI0LjMzM0ExLjMzMyAxLjMzMyAwIDAxMjMgNDUuNjY4VjI0LjMzM2ExLjMzMyAxLjMzMyAwIDExMi42NjcgMHYyMHoiIGZpbGw9IiM2Qzg4RjkiLz48cGF0aCBvcGFjaXR5PSIuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NS42NjcgMzUuNjY2YTIgMiAwIDAwLTQgMHY0YTIgMiAwIDAwNCAwdi00eiIgZmlsbD0iIzZDODhGOSIvPjwvc3ZnPg=="
                    title="Analyze Advanced Health Metrics"
                    content="Go way beyond the typical calorie counter. Track ketones, blood glucose, insulin, diabetes carbs, intermittent fasting, glycemic load, GKI, and much much more."
                  />
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </div>

      <div style={{ margin: "100px" }}>
        <SimpleGrid
          style={{ width: "80%", margin: "auto" }}
          columns={3}
          spacing={10}
        >
          <Box>
            <Box marginBottom={100}>
              <Image
                margin="auto"
                display={"block"}
                src="https://images.prismic.io/cm-website/c681d51a-dc35-4f7d-aa85-0706abd8fb65_fitbit-ico%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
              />
            </Box>
            <Box>
              <Image
                margin="auto"
                display={"block"}
                src="https://images.prismic.io/cm-website/2b4ca79f-cd99-4a5e-94ca-dd658fd60dd6_healthkit-ios-ico%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
              />
            </Box>
          </Box>
          <Box>
            <Heading>Connect Apps & Devices</Heading>
            <Text>
              We integrate with Fitbit, Garmin and hundreds of other apps and
              devices via Apple Health and Google Fit. Connect your device and
              sync activity “automagically”.
            </Text>
          </Box>
          <Box>
            <Box marginBottom={100}>
              <Image
                display={"block"}
                src="https://images.prismic.io/cm-website/a43a6403-365f-4c92-83cd-7c261e2d2764_google-health-ico%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
              />
            </Box>
            <Box>
              <Image
                width={100}
                display={"block"}
                src="https://prismic-io.s3.amazonaws.com/cm-website/1b5a91f8-0249-467b-b255-98c41cb9c1e1_garmin-ico.svg"
              />
            </Box>
          </Box>
        </SimpleGrid>
      </div>

      <div style={{ margin: "100px", marginTop: "250px" }}>
        <Box>
          <Heading>Carb Manager by the Numbers</Heading>
        </Box>
        <Box>
          <Text>
            Join the millions who’ve discovered how easy it is to plan, track,{" "}
            <br />
            and manage a low-carb Keto diet with Carb Manager.
          </Text>
        </Box>
      </div>

      <div style={{ margin: "100px" }}>
        <Grid
          style={{ width: "80%", margin: "auto" }}
          templateColumns="repeat(4,1fr)"
          gap={6}
        >
          <Section7
            q="Exclusive Keto recipes"
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGOTQ2NDIiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4LjAxNCAyMS44NzNhOS44MDQgOS44MDQgMCAwMS0yLjM4MyAxNS42MTVsLTguNTEgNC40NTdhNi44IDYuOCAwIDAxLTkuMTgtOS4xOGw0LjQ1OC04LjUxYzIuNTEyLTQuNzk0IDguNDM2LTYuNjQ2IDEzLjIzMi00LjEzNGE5LjgwMiA5LjgwMiAwIDAxMi4zODMgMS43NTJ6IiBmaWxsPSIjRjk0NjQyIi8+PHBhdGggb3BhY2l0eT0iLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuNTc1IDQzLjc3NmwyLjQ1OC0yLjQ1NyAzLjUzNSAzLjUzNS0yLjQ1NyAyLjQ1OWEyLjUgMi41IDAgMTEtNC43NTMgMS4yMTcgMi41IDIuNSAwIDExMS4yMTctNC43NTN2LS4wMDF6IiBmaWxsPSIjRjk0NjQyIi8+PC9zdmc+"
            heading="3000+"
            content="Happy customers living a healthy, vibrant, low-carb lifestyle with the help of Carb Manager."
          />
          <Section7
            q="Happy customers"
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiMzMTc3QkIiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBvcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01MS4zMzQgMzQuNjY3QzUxLjMzNCAyNS40NjIgNDMuODcyIDE4IDM0LjY2NyAxOCAyNS40NjIgMTggMTggMjUuNDYyIDE4IDM0LjY2N2MwIDkuMjA1IDcuNDYyIDE2LjY2NyAxNi42NjcgMTYuNjY3IDkuMjA1IDAgMTYuNjY3LTcuNDYyIDE2LjY2Ny0xNi42Njd6IiBmaWxsPSIjMzE3N0JCIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC45NDcgMzguOTI1YTEuNjY1IDEuNjY1IDAgMDEyLjAyNi0yLjQ4MmMuMzA3LjEzMS41NjcuMzUxLjc0Ny42MzIgMS45MyAyLjg5MyA0LjIwNCA0LjI1OSA2Ljk0NyA0LjI1OSAyLjc0MyAwIDUuMDE4LTEuMzY2IDYuOTQ3LTQuMjU4YTEuNjY3IDEuNjY3IDAgMDEyLjc3MyAxLjg0OWMtMi41MTYgMy43NzQtNS43OTYgNS43NDItOS43MiA1Ljc0Mi0zLjkyNCAwLTcuMjA0LTEuOTY4LTkuNzItNS43NDJ6IiBmaWxsPSIjMzE3N0JCIi8+PC9zdmc+"
            heading="8M"
            content="Exclusive Keto recipes in our database. You’ll always have an answer when your family asks “Whats for dinner?”"
          />
          <Section7
            q="Average app store rating. "
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGREExMjAiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBvcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNC45MzYgMjIuMDAxYTEuNjY3IDEuNjY3IDAgMDExLjQ5NC45M2wzLjQwNCA2Ljg5NiA3LjYxMiAxLjEwNWExLjY2NiAxLjY2NiAwIDAxLjkyNCAyLjg0M2wtNS41MDggNS4zNjggMS4zIDcuNThhMS42NjUgMS42NjUgMCAwMS0yLjQxOCAxLjc1N2wtNi44MDgtMy41NzhWMjIuMDAxeiIgZmlsbD0iI0Q1NzQxMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzQuOTM2IDIyLjAwMXYyMi45MDFsLTYuODA3IDMuNTc5YTEuNjY3IDEuNjY3IDAgMDEtMi40MTgtMS43NTdsMS4zLTcuNTgtNS41MDgtNS4zNjhhMS42NjcgMS42NjcgMCAwMS45MjQtMi44NDNsNy42MS0xLjEwNiAzLjQwNC02Ljg5N2ExLjY3IDEuNjcgMCAwMTEuNDk1LS45M3YuMDAxeiIgZmlsbD0iI0Q1NzQxMCIvPjwvc3ZnPg=="
            heading="4.8"
            content="Average app store rating. People love us! Carb Manager is one of the highest rated health & fitness apps in both the iOS store and Google Play."
          />
          <Section7
            q="Avocados eaten"
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiMxQkM5OEUiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTM5IDMyLjU0N2ExLjY2NyAxLjY2NyAwIDAwLTIuNzk1LTEuODE2bC01LjEyOSA3Ljg5OGExLjY2NyAxLjY2NyAwIDAwMi43OTYgMS44MTZMMzkgMzIuNTQ3eiIgZmlsbD0iIzFDQTY3NyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuNSAyMWgxNWE3LjUgNy41IDAgMDE3LjUgNy41djEzLjMzM2E3LjUgNy41IDAgMDEtNy41IDcuNWgtMTVhNy41IDcuNSAwIDAxLTcuNS03LjVWMjguNWE3LjUgNy41IDAgMDE3LjUtNy41ek0yNSAyOS4xMzdMMjkuMjg2IDM2aDExLjQyOEw0NSAyOS4xMzdjLTEuNjY3LTMuMjAyLTUtNC44MDQtMTAtNC44MDRzLTguMzMzIDEuNjAyLTEwIDQuODA0eiIgZmlsbD0iIzFDQTY3NyIvPjwvc3ZnPg=="
            heading="84M"
            content="Avocados eaten by hungry Carb Manager users on low-carb health and wellness journeys."
          />
        </Grid>
      </div>

      <div style={{ margin: "100px" }}>
        <Center>
          <Grid
            style={{ width: "60%", margin: "auto", marginLeft: "30%" }}
            templateColumns="repeat(4,1fr)"
            gap={6}
          >
            <GridItem>
              <Image
                display={"block"}
                width={"50%"}
                src="https://www.carbmanager.com/_nuxt/img/cd5b00b.png"
              />
            </GridItem>
            <GridItem>
              <Image
                display={"block"}
                width={"50%"}
                src="https://www.carbmanager.com/_nuxt/img/189f2dc.png"
              />
            </GridItem>
            <GridItem>
              <Image
                display={"block"}
                width={"50%"}
                src="https://www.carbmanager.com/_nuxt/img/5665828.png"
              />
            </GridItem>
          </Grid>
        </Center>
      </div>

      <div style={{ margin: "200px" }}>
        <Box margin={"70px"}>
          <Heading>Explore More Recipes</Heading>
        </Box>
        <Box>
          <Grid textAlign={"left"} templateColumns="repeat(2,1fr)" gap={6}>
            <Section8
              q="Easy"
              text="Keto Easy Recipes"
              src="https://images.prismic.io/cm-website/151794ae-12c4-4742-9075-9111c0f224b7_recipes-cat-3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
            />
            <Section8
              q="Snack"
              text="Keto Snack Recipes"
              src="https://images.prismic.io/cm-website/4490a550-b77d-4765-ac5f-cc40e7d4a15b_recipes-cat-1%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
            />
            <Section8
              q="Breakfast"
              text="Keto Breakfast Recipes"
              src="https://images.prismic.io/cm-website/1626a4db-0c28-4f98-9253-de628c33ecce_recipes-cat-2%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
            />
            <Section8
              q="Smoothie"
              text="Keto Smoothie Recipes"
              src="https://images.prismic.io/cm-website/7f814fd7-94d1-424e-a8ba-1f3fab810c95_recipes-cat-4%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
            />
          </Grid>
        </Box>
        <Box margin={100}>
          <Button bg={"#1CA677"} color="white" borderRadius="50">
            View All Recipes
          </Button>
        </Box>
      </div>

      <div style={{ margin: "200px 0px 200px 0px" }}>
        <Section9 />
      </div>

      <div style={{ margin: "200px 0px 20px 0px" }}>
        <Footer />
      </div>

    </div>
  );
}

export default Home;

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
import React from "react";
import Footer from "../Components/Footer";
import Section1 from "../Components/Section1";
import Section9 from "../Components/Section9";
import FeatureSection1 from "../FeatureComponents/FeatureSection1";
import FeatureSection2 from "../FeatureComponents/FeatureSection2";
import FeatureSection3 from "../FeatureComponents/Featuresection3";

function Features() {
  const bgColor = {
    backgroundColor: "#6c88f9",
    padding: "50px",
    color: "white",
    borderRadius: "0px 0px 0px 200px",
  };
  return (
    <div>
      <div>
        <Section1
          bgColor={bgColor}
          heading1="The #1 Keto Diet App Since 2010"
          heading2="Learn. Cook. Track. Connect."
          heading3="Explore our industry-leading suite of features that make Keto life easy."
          src="https://www.carbmanager.com/_nuxt/img/65fd85f.png"
        />
      </div>
      <div style={{ margin: "100px" }}>
        <Box>
          <Text fontWeight={"bold"} color="#333333" fontSize={"5xl"}>
            The Most Advanced Set of Tools to Make <br /> Your Keto Lifestyle
            Easy
          </Text>
        </Box>
      </div>

      <div>
        <Box width={"60%"} margin="auto">
          <Grid templateColumns="repeat(4,1fr)" gap={6}>
            <FeatureSection1
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGOTQ2NDIiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNTEuMDA1IDMxLjQ1YS44NDguODQ4IDAgMDEtLjIxNy42MTcuODY2Ljg2NiAwIDAxLS42MTcuMjY3aC0xMi41VjE5Ljg2N2EuODY4Ljg2OCAwIDAxLjI2Ny0uNjE3LjgzMi44MzIgMCAwMS42MTctLjI1IDEzLjMzMyAxMy4zMzMgMCAwMTEyLjQ1IDEyLjQ1em0tNC4yIDQuMjE3SDM0LjMzOFYyMy4yYS44MzIuODMyIDAgMDAtLjg2Ny0uODMzIDEzLjMzMiAxMy4zMzIgMCAxMDE0LjE2NyAxNC4xNjcuODMyLjgzMiAwIDAwLS44MzMtLjg2N3oiIGZpbGw9IiNGOTQ2NDIiLz48L3N2Zz4="
              title=" Macros Tracker"
              content="With the best macro tracking app for the Keto diet, you’ll never be left wondering if you’re “doing Keto right.” Our macros tracker is simple, intuitive, and built to support your success."
            />
            <FeatureSection1
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiM2Qzg4RjkiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNDEuMzM0IDE3SDI4YTUgNSAwIDAwLTUgNXYyNi42NjdhNSA1IDAgMDA1IDVoMTMuMzM0YTUgNSAwIDAwNS01VjIyYTUgNSAwIDAwLTUtNXptMCAzMy4zMzNIMjhhMS42NjcgMS42NjcgMCAwMS0xLjY2Ni0xLjY2NlYyMmExLjY3IDEuNjcgMCAwMTIuODctMS4yMjVBMS42NjggMS42NjggMCAwMTI5LjY2OCAyMmExLjY2NyAxLjY2NyAwIDAwMS42NjcgMS42NjdIMzhBMS42NjcgMS42NjcgMCAwMDM5LjY2NyAyMmExLjY3IDEuNjcgMCAwMTIuODctMS4yMjVBMS42NjggMS42NjggMCAwMTQzIDIydjI2LjY2N2ExLjY2NyAxLjY2NyAwIDAxLTEuNjY2IDEuNjY2eiIgZmlsbD0iIzZDODhGOSIvPjxwYXRoIGQ9Ik0zOS4zMzQgMzQuOTk5di42NjdhLjMzMy4zMzMgMCAwMS0uMzM0LjMzM2gtMy42NjZ2My42NjdhLjMzMy4zMzMgMCAwMS0uMzM0LjMzM2gtLjY2NmEuMzM1LjMzNSAwIDAxLS4zMzQtLjMzM3YtMy42NjdoLTMuNjY2YS4zMzUuMzM1IDAgMDEtLjMzNC0uMzMzdi0uNjY3YS4zMzIuMzMyIDAgMDEuMzM0LS4zMzNIMzR2LTMuNjY3YS4zMzQuMzM0IDAgMDEuMzM0LS4zMzNIMzVhLjMzNC4zMzQgMCAwMS4zMzQuMzMzdjMuNjY3SDM5YS4zMzQuMzM0IDAgMDEuMzM0LjMzM3oiIGZpbGw9IiM2Qzg4RjkiLz48L3N2Zz4="
              title="Food Tracker"
              content="Keeping a food diary has never been easier. Scan, snap, and even speak to track and customize your favorite foods with the best free food tracking app around."
            />
            <FeatureSection1
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjMzNCAxOGgtMjBBMy4zMzQgMy4zMzQgMCAwMDE4IDIxLjMzM3YyNi42NjhhMy4zMzMgMy4zMzMgMCAwMDMuMzM0IDMuMzMyaDIwYTMuMzMzIDMuMzMzIDAgMDAzLjMzMy0zLjMzMlYyMS4zMzNBMy4zMzMgMy4zMzMgMCAwMDQxLjMzNCAxOHptLTEwIDE1LjgzM2EuODMzLjgzMyAwIDAxLTEuMy43TDI2LjggMzIuMzY4YS44NjYuODY2IDAgMDAtLjkzMyAwbC0zLjIzMyAyLjE2NWEuODM0LjgzNCAwIDAxLTEuMy0uN1YyMi4xNjlhLjgzNC44MzQgMCAwMS44MzMtLjgzNUgzMC41YS44MzQuODM0IDAgMDEuODM0LjgzNXYxMS42NjUtLjAwMXptMTguMzMzLTEyLjVINDh2MjYuNjY4aDEuNjY3YTEuNjY4IDEuNjY4IDAgMDAxLjY2Ny0xLjY2OFYyMy4wMDFhMS42NjcgMS42NjcgMCAwMC0xLjY2Ny0xLjY2OHoiIGZpbGw9IiNGREExMjAiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIzNSIgZmlsbD0iI0ZEQTEyMCIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvc3ZnPg=="
              title="Recipes Database"
              content="Get instant access to 50,000+ low-carb and Keto diet recipes crafted by our chefs and members, and you’ll never wonder what’s for breakfast, lunch, or dinner again."
            />
            <FeatureSection1
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiMxQkM5OEUiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNDYuNjY3IDIyLjMzNEg0NXYtMi41YS44MzQuODM0IDAgMDAtLjgzMy0uODM0SDQyLjVhLjgzMy44MzMgMCAwMC0uODMzLjgzM3YyLjVIMjguMzMzdi0yLjQ5OWEuODMzLjgzMyAwIDAwLS44MzMtLjgzM2gtMS42NjdhLjgzMy44MzMgMCAwMC0uODMzLjgzM3YyLjVoLTEuNjY3QTMuMzMzIDMuMzMzIDAgMDAyMCAyNS42Njh2MjEuNjY1YTMuMzM0IDMuMzM0IDAgMDAzLjMzMyAzLjMzNGgyMy4zMzRBMy4zMzMgMy4zMzMgMCAwMDUwIDQ3LjMzNFYyNS42NjdhMy4zMzQgMy4zMzQgMCAwMC0zLjMzMy0zLjMzNHYuMDAxem0wIDI1SDIzLjMzM1YyOC45OTloMjMuMzM0djE4LjMzNXptLTE0LjAxNy01LjI1YS44LjggMCAwMDEuMTY3IDBsNy4wODMtNy4wNjdhLjg1Ljg1IDAgMDAwLTEuMTgzbC0uOS0uODg0YS44NS44NSAwIDAwLTEuMTgzIDBsLTUuNiA1LjYtMi4wNS0yLjA2N2EuODUuODUgMCAwMC0xLjE4NCAwbC0uODgzLjg1YS44MzMuODMzIDAgMDAwIDEuMTY4bDMuNTUgMy41ODJ2LjAwMXoiIGZpbGw9IiMxQkM5OEUiLz48L3N2Zz4="
              title="Meal Planner"
              content="Make life simple with our weekly meal planning tools based on your macro targets, and tailored to your diet (Keto, paleo, vegetarian, food allergies, etc.) and preferences."
            />
            <FeatureSection1
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiMxQkM5OEUiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNTEuMzM0IDMxLjUzM3YxNy42MzRBLjgzMy44MzMgMCAwMTUwLjUgNTBoLTEuMjVhLjgzMy44MzMgMCAwMS0uODMzLS44MzNWMzQuMzMzbC0xMS45IDguNTY3Yy0uNDEyLjI4Mi0uOS40MzMtMS40LjQzM2gtLjljLS41IDAtLjk4OC0uMTUxLTEuNC0uNDMzbC0xNC40NS0xMC40MTdBLjgxNy44MTcgMCAwMTE4IDMxLjh2LS4yNjdhLjgxNS44MTUgMCAwMS4zNjctLjY4M2wxNC40NS0xMC40MTdjLjQxMi0uMjgyLjktLjQzMyAxLjQtLjQzM2guOWMuNSAwIC45ODguMTUxIDEuNC40MzNsMTQuNDUgMTAuNDE3YS44MTcuODE3IDAgMDEuMzY3LjY4M3pNMzUuMTE3IDQ2LjI1aC0uOWE1LjU1IDUuNTUgMCAwMS0zLjExNy0uOTgzbC02LjQzMy00LjY1djIuNzE2YzAgMy42ODQgNC40ODMgNi42NjcgMTAgNi42NjdzMTAtMi45ODMgMTAtNi42Njd2LTIuNzE2bC02LjUgNC42ODNhNS40MTcgNS40MTcgMCAwMS0zLjA1Ljk1eiIgZmlsbD0iIzFCQzk4RSIvPjwvc3ZnPg=="
              title=" Keto Academy"
              content="In Carb Manager’s Keto Academy you’ll learn to cook Keto and get all our best tips for low-carb health + weight-loss success, from beginner to advanced."
            />
            <FeatureSection1
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGREExMjAiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNDAuMzMzIDQwLjMzNEE2LjY2NiA2LjY2NiAwIDAwNDcgMzMuNjY3di0xMEE2LjY2NyA2LjY2NyAwIDAwNDAuMzMzIDE3SDIzLjY2NUE2LjY2NyA2LjY2NyAwIDAwMTcgMjMuNjY3djIwLjgzNGEuODMzLjgzMyAwIDAwLjgzMi44MzMuODEzLjgxMyAwIDAwLjU4My0uMjVsMy4zMzUtMy4zMzRhNC45OTggNC45OTggMCAwMTMuNTgzLTEuNDE1aDE1di0uMDAxem0tMy4zMzQtMTIuNWEuODMzLjgzMyAwIDAxLjgzNC0uODMzaDEuNjY2YS44MzQuODM0IDAgMDEuODM0LjgzM3YxLjY2N2EuODMzLjgzMyAwIDAxLS44MzQuODMzaC0xLjY2NmEuODM0LjgzNCAwIDAxLS44MzQtLjgzM3YtMS42Njd6bS02LjY2NiAwYS44MzQuODM0IDAgMDEuODMyLS44MzNoMS42NjhhLjgzMy44MzMgMCAwMS44MzIuODMzdjEuNjY3YS44MzMuODMzIDAgMDEtLjgzMi44MzNoLTEuNjY4YS44MzQuODM0IDAgMDEtLjgzMi0uODMzdi0xLjY2N3ptLTYuNjY3IDEuNjY3di0xLjY2N2EuODMzLjgzMyAwIDAxLjgzNC0uODMzaDEuNjY2YS44My44MyAwIDAxLjgzNC44MzN2MS42NjdhLjgzMy44MzMgMCAwMS0uODM0LjgzM0gyNC41YS44MzQuODM0IDAgMDEtLjgzNC0uODMzem0yNi42NjctNS44MzR2MTMuMzM0YTYuNjY2IDYuNjY2IDAgMDEtNi42NjggNi42NjZoLTIwQTMuMzM0IDMuMzM0IDAgMDAyNyA0Ny4wMDFoMTguMzMyYTUgNSAwIDAxMy41NSAxLjQ2NmwzLjMzNCAzLjMzM2EuODIuODIgMCAwMDEuMTcyLjAwNi44MzMuODMzIDAgMDAuMjQ0LS41ODlWMjcuMDAxYTMuMzM0IDMuMzM0IDAgMDAtMy4zLTMuMzM0aC4wMDF6IiBmaWxsPSIjRkRBMTIwIi8+PC9zdmc+"
              title=" Community"
              content="Join the most active Keto forum online for support, motivation and community on your Keto lifestyle journey. Explore Keto with friends and family."
            />
            <FeatureSection1
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiM2Qzg4RjkiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNDkuNTE3IDI3Ljg4M0ExLjY2MiAxLjY2MiAwIDAxNTAgMjkuMDY2djEuOTVhMS42NjcgMS42NjcgMCAwMS0uNDgzIDEuMTY3bC0yLjc2NyAyLjczM2ExLjY2NSAxLjY2NSAwIDAxLTEuMTgzLjQ4M2gtMS45NWExLjY2NyAxLjY2NyAwIDAxLTEuMTg0LS40ODNsLTIuNTUtMi41NS03LjQgNy40TDM1IDQyLjM0OWExLjY2NSAxLjY2NSAwIDAxLjQ4MyAxLjE4NHYxLjk1QTEuNjY0IDEuNjY0IDAgMDEzNSA0Ni42NjZsLTIuNzY3IDIuNzY3Yy0uMzEuMzA4LS43My40ODEtMS4xNjYuNDgzSDI5LjE1YTEuNjY4IDEuNjY4IDAgMDEtMS4xODMtLjQ4M0wyNS40IDQ2Ljg2NmwtMi44IDIuOGEuODMyLjgzMiAwIDAxLTEuMTgzIDBMMjAuMjUgNDguNWEuODMyLjgzMiAwIDAxMC0xLjE4NGwyLjgtMi44LTIuNTY3LTIuNTY3QTEuNjY2IDEuNjY2IDAgMDEyMCA0MC43NjZ2LTEuOTVjLjAwMi0uNDM3LjE3NS0uODU2LjQ4My0xLjE2NmwyLjg1LTIuNzM0YTEuNjY1IDEuNjY1IDAgMDExLjE4NC0uNDgzaDEuODY2YTEuNjY0IDEuNjY0IDAgMDExLjE4NC40ODNsMi41NSAyLjU1IDcuNC03LjRMMzUgMjcuNDgzYTEuNjcxIDEuNjcxIDAgMDEtLjQ4My0xLjE4M3YtMS45NWMuMDE4LS40MTQuMTktLjgwNy40ODMtMS4xbDIuNzY3LTIuNzY3Yy4zMS0uMzA4LjczLS40ODIgMS4xNjYtLjQ4M2gxLjk1YTEuNjY2IDEuNjY2IDAgMDExLjE4NC40ODNsMi41NjYgMi41NjcgMi44LTIuOGEuODM1LjgzNSAwIDAxMS4xODQgMGwxLjE2NiAxLjE2NmEuODMzLjgzMyAwIDAxMCAxLjE4NGwtMi44MzMgMi43MTYgMi41NjcgMi41Njd6IiBmaWxsPSIjNkM4OEY5Ii8+PC9zdmc+"
              title="Exercise Portal"
              content="Learn how to make the most of your Keto diet and exercise routine with our exercise tracker, activity log and library of exercise tutorials, + get credit for calories burned."
            />
            <FeatureSection1
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGOTQ2NDIiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMjEuMzM0IDQwLjMzM3YtMy4zMzRBMS42NjcgMS42NjcgMCAwMTIzIDM1LjMzM2gzLjMzNEExLjY2NyAxLjY2NyAwIDAxMjggMzYuOTk5djMuMzM0YTEuNjY2IDEuNjY2IDAgMDEtMS42NjYgMS42NjZIMjNhMS42NjcgMS42NjcgMCAwMS0xLjY2Ni0xLjY2NnpNMzMgNDEuOTk5aDMuMzM0QTEuNjY3IDEuNjY3IDAgMDAzOCA0MC4zMzNWMjMuNjY2QTEuNjY3IDEuNjY3IDAgMDAzNi4zMzQgMjJIMzNhMS42NjcgMS42NjcgMCAwMC0xLjY2NiAxLjY2NnYxNi42NjdBMS42NjcgMS42NjcgMCAwMDMzIDQxLjk5OXptMTAgMGgzLjMzNEExLjY2NyAxLjY2NyAwIDAwNDggNDAuMzMzdi0xMGExLjY2NyAxLjY2NyAwIDAwLTEuNjY2LTEuNjY3SDQzYTEuNjY3IDEuNjY3IDAgMDAtMS42NjYgMS42Njd2MTBBMS42NjcgMS42NjcgMCAwMDQzIDQxLjk5OXptNy41IDMuMzM0SDE4LjgzNGEuODM0LjgzNCAwIDAwLS44MzQuODMzdjEuNjY3YS44MzMuODMzIDAgMDAuODM0LjgzM0g1MC41YS44MzQuODM0IDAgMDAuODM0LS44MzN2LTEuNjY3YS44MzMuODMzIDAgMDAtLjgzNC0uODMzeiIgZmlsbD0iI0Y5NDY0MiIvPjwvc3ZnPg=="
              title=" Advanced Insights"
              content="Our advanced features take your health to the next level with insulin and glucose tracking, ketone tracking, and so much more. Get the best biohacker app available!"
            />
          </Grid>
        </Box>
      </div>

      <div>
        <Image
          style={{ marginLeft: "-5%" }}
          src="https://www.carbmanager.com/_nuxt/img/dc986f9.png"
        />
      </div>

      <div style={{ width: "60%", margin: "auto" }}>
        <FeatureSection2
          imgSrc="https://images.prismic.io/cm-website/8b635ad7-af80-445b-8b72-ea82917e968f_screen-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          subimg="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGOTQ2NDIiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNTEuMDA1IDMxLjQ1YS44NDguODQ4IDAgMDEtLjIxNy42MTcuODY2Ljg2NiAwIDAxLS42MTcuMjY3aC0xMi41VjE5Ljg2N2EuODY4Ljg2OCAwIDAxLjI2Ny0uNjE3LjgzMi44MzIgMCAwMS42MTctLjI1IDEzLjMzMyAxMy4zMzMgMCAwMTEyLjQ1IDEyLjQ1em0tNC4yIDQuMjE3SDM0LjMzOFYyMy4yYS44MzIuODMyIDAgMDAtLjg2Ny0uODMzIDEzLjMzMiAxMy4zMzIgMCAxMDE0LjE2NyAxNC4xNjcuODMyLjgzMiAwIDAwLS44MzMtLjg2N3oiIGZpbGw9IiNGOTQ2NDIiLz48L3N2Zz4="
          heading="Macros Tracker"
          content="Unlike other diets, with Keto you need to hit specific carb, fat, and protein goals to get the best results. Our intuitive, user-friendly macros tracker makes this a no-brainer for you."
          point1="Intuitive and User Friendly"
          point2="Easy and Quick Tracking"
          point3="Accurate Macros"
          pointcontent1="Take the guesswork out of how to track macros as the Carb Manager app guides you intuitively through the process."
          pointcontent2="Simply log your foods for the day, and our Macros Tracker lets you know where you’re at with calories, carbs, fat, and protein so you hit your goals faster."
          pointcontent3="With Carb Manager you’ll always know you’re getting the most out of your Keto diet with macros set for your specific goals, and adjusted for continued accuracy as you progress."
        />
      </div>

      <div style={{ margin: "50px" }}>
        <Image
          style={{ marginLeft: "90%" }}
          src="https://www.carbmanager.com/_nuxt/img/a9dcd64.png"
        />
      </div>

      <div style={{ width: "60%", margin: "auto" }}>
        <FeatureSection3
          imgSrc="https://images.prismic.io/cm-website/a164a9a4-3762-41b5-bf62-660c9c755090_screen-3%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          subimg="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiM2Qzg4RjkiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNDEuMzM0IDE3SDI4YTUgNSAwIDAwLTUgNXYyNi42NjdhNSA1IDAgMDA1IDVoMTMuMzM0YTUgNSAwIDAwNS01VjIyYTUgNSAwIDAwLTUtNXptMCAzMy4zMzNIMjhhMS42NjcgMS42NjcgMCAwMS0xLjY2Ni0xLjY2NlYyMmExLjY3IDEuNjcgMCAwMTIuODctMS4yMjVBMS42NjggMS42NjggMCAwMTI5LjY2OCAyMmExLjY2NyAxLjY2NyAwIDAwMS42NjcgMS42NjdIMzhBMS42NjcgMS42NjcgMCAwMDM5LjY2NyAyMmExLjY3IDEuNjcgMCAwMTIuODctMS4yMjVBMS42NjggMS42NjggMCAwMTQzIDIydjI2LjY2N2ExLjY2NyAxLjY2NyAwIDAxLTEuNjY2IDEuNjY2eiIgZmlsbD0iIzZDODhGOSIvPjxwYXRoIGQ9Ik0zOS4zMzQgMzQuOTk5di42NjdhLjMzMy4zMzMgMCAwMS0uMzM0LjMzM2gtMy42NjZ2My42NjdhLjMzMy4zMzMgMCAwMS0uMzM0LjMzM2gtLjY2NmEuMzM1LjMzNSAwIDAxLS4zMzQtLjMzM3YtMy42NjdoLTMuNjY2YS4zMzUuMzM1IDAgMDEtLjMzNC0uMzMzdi0uNjY3YS4zMzIuMzMyIDAgMDEuMzM0LS4zMzNIMzR2LTMuNjY3YS4zMzQuMzM0IDAgMDEuMzM0LS4zMzNIMzVhLjMzNC4zMzQgMCAwMS4zMzQuMzMzdjMuNjY3SDM5YS4zMzQuMzM0IDAgMDEuMzM0LjMzM3oiIGZpbGw9IiM2Qzg4RjkiLz48L3N2Zz4="
          heading="Food Tracker"
          content="Keeping a food diary has never been easier. Scan, track, and customize your favorite foods with the best free food tracking app designed to get you easy results."
          point1="Free Food Diary App"
          point2="Quickly “Scan” Foods"
          point3="Easy Voice Logging"
          pointcontent1="The fastest way to health + weight loss success is to know exactly what you’re eating to eliminate surprises. Our food tracker is always free, and easy to use."
          pointcontent2="One of our most popular features, simply scan the barcode of any food to quickly log it for the day or check just how “Keto-friendly” it really is."
          pointcontent3="Just say “hey Carb Manager,” and tell us what you ate to log your foods - just as easy as talking to a friend."
        />
      </div>

      <div style={{ width: "60%", margin: "auto" ,marginTop:"200px"}}>
        <FeatureSection2
          imgSrc="https://images.prismic.io/cm-website/91d0e671-dd14-4330-9082-e5ab18f4298d_screen-3%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          subimg="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjMzNCAxOGgtMjBBMy4zMzQgMy4zMzQgMCAwMDE4IDIxLjMzM3YyNi42NjhhMy4zMzMgMy4zMzMgMCAwMDMuMzM0IDMuMzMyaDIwYTMuMzMzIDMuMzMzIDAgMDAzLjMzMy0zLjMzMlYyMS4zMzNBMy4zMzMgMy4zMzMgMCAwMDQxLjMzNCAxOHptLTEwIDE1LjgzM2EuODMzLjgzMyAwIDAxLTEuMy43TDI2LjggMzIuMzY4YS44NjYuODY2IDAgMDAtLjkzMyAwbC0zLjIzMyAyLjE2NWEuODM0LjgzNCAwIDAxLTEuMy0uN1YyMi4xNjlhLjgzNC44MzQgMCAwMS44MzMtLjgzNUgzMC41YS44MzQuODM0IDAgMDEuODM0LjgzNXYxMS42NjUtLjAwMXptMTguMzMzLTEyLjVINDh2MjYuNjY4aDEuNjY3YTEuNjY4IDEuNjY4IDAgMDAxLjY2Ny0xLjY2OFYyMy4wMDFhMS42NjcgMS42NjcgMCAwMC0xLjY2Ny0xLjY2OHoiIGZpbGw9IiNGREExMjAiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIzNSIgZmlsbD0iI0ZEQTEyMCIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvc3ZnPg=="
          heading="Recipes Database"
          content="Keto is so much more than just meat and avocados. Our database of thousands of delicious recipes (including 3,000+ exclusive, chef-created premium Keto recipes) means you’ll never have to eat the same thing twice... although we wouldn’t blame you for bookmarking a few favorites!"
          point1="Keto Cooking Made Easy"
          point2="Tried + Tested Favorites"
          point3="Easy Recipe Tracking"
          pointcontent1="Follow along with our simple, image-based low-carb recipes and become a master Keto chef with time to spare."
          pointcontent2="Our free recipes in Basic have been submitted by other users, and vetted by the Carb Manager Community. The Premium recipe library has been curated from around the web, and crafted by the chefs in the Carb Manager test kitchens."
          pointcontent3="For all recipes in our database, simply add them to your daily food log with a tap of your finger and know you’re on track to your Keto health goals."
        />
      </div>

      <div>
        <Image
          style={{ marginLeft: "-5%" }}
          src="https://www.carbmanager.com/_nuxt/img/be7a421.png"
        />
      </div>

      <div style={{ width: "60%", margin: "auto"  }}>
        <FeatureSection3
          imgSrc="https://images.prismic.io/cm-website/dd5de16c-d2e9-4f6b-980d-bb0da72e8706_screen-4%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          subimg="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiMxQkM5OEUiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNDYuNjY3IDIyLjMzNEg0NXYtMi41YS44MzQuODM0IDAgMDAtLjgzMy0uODM0SDQyLjVhLjgzMy44MzMgMCAwMC0uODMzLjgzM3YyLjVIMjguMzMzdi0yLjQ5OWEuODMzLjgzMyAwIDAwLS44MzMtLjgzM2gtMS42NjdhLjgzMy44MzMgMCAwMC0uODMzLjgzM3YyLjVoLTEuNjY3QTMuMzMzIDMuMzMzIDAgMDAyMCAyNS42Njh2MjEuNjY1YTMuMzM0IDMuMzM0IDAgMDAzLjMzMyAzLjMzNGgyMy4zMzRBMy4zMzMgMy4zMzMgMCAwMDUwIDQ3LjMzNFYyNS42NjdhMy4zMzQgMy4zMzQgMCAwMC0zLjMzMy0zLjMzNHYuMDAxem0wIDI1SDIzLjMzM1YyOC45OTloMjMuMzM0djE4LjMzNXptLTE0LjAxNy01LjI1YS44LjggMCAwMDEuMTY3IDBsNy4wODMtNy4wNjdhLjg1Ljg1IDAgMDAwLTEuMTgzbC0uOS0uODg0YS44NS44NSAwIDAwLTEuMTgzIDBsLTUuNiA1LjYtMi4wNS0yLjA2N2EuODUuODUgMCAwMC0xLjE4NCAwbC0uODgzLjg1YS44MzMuODMzIDAgMDAwIDEuMTY4bDMuNTUgMy41ODJ2LjAwMXoiIGZpbGw9IiMxQkM5OEUiLz48L3N2Zz4="
          heading="Meal Planner"
          content="Make life simple with our weekly meal planner based on your specific carb, protein, fat, and calorie targets. Your plan is tailored to your individual diet (Keto, paleo, vegetarian, food allergies or intolerances) and preferences, so you always love what you’re eating."
          point1="Recommended Dishes"
          point2="Custom Grocery List"
          point3="Easy Meal Tracking"
          pointcontent1="Our weekly meal planner recommends dishes - you just select the ones you like, or replace ones you don’t like and we’ll add them to your meal plan calendar."
          pointcontent2="You’ll get a custom list based on your meal plan to take with you to the grocery store. No more guessing, forgetting items, or wondering what to buy (or if it’s Keto!)"
          pointcontent3="For each meal in your weekly plan, simply add the recipe to your daily food log with a tap of your finger and know you’re on track to your Keto health goals."
        />
      </div>

      <div style={{ width: "60%", margin: "auto" ,marginTop:"200px" }}>
        <FeatureSection2
          imgSrc="https://images.prismic.io/cm-website/d0a22666-a6a9-427c-81e3-11bab30baae8_screen-5%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          subimg="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiMxQkM5OEUiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNTEuMzM0IDMxLjUzM3YxNy42MzRBLjgzMy44MzMgMCAwMTUwLjUgNTBoLTEuMjVhLjgzMy44MzMgMCAwMS0uODMzLS44MzNWMzQuMzMzbC0xMS45IDguNTY3Yy0uNDEyLjI4Mi0uOS40MzMtMS40LjQzM2gtLjljLS41IDAtLjk4OC0uMTUxLTEuNC0uNDMzbC0xNC40NS0xMC40MTdBLjgxNy44MTcgMCAwMTE4IDMxLjh2LS4yNjdhLjgxNS44MTUgMCAwMS4zNjctLjY4M2wxNC40NS0xMC40MTdjLjQxMi0uMjgyLjktLjQzMyAxLjQtLjQzM2guOWMuNSAwIC45ODguMTUxIDEuNC40MzNsMTQuNDUgMTAuNDE3YS44MTcuODE3IDAgMDEuMzY3LjY4M3pNMzUuMTE3IDQ2LjI1aC0uOWE1LjU1IDUuNTUgMCAwMS0zLjExNy0uOTgzbC02LjQzMy00LjY1djIuNzE2YzAgMy42ODQgNC40ODMgNi42NjcgMTAgNi42NjdzMTAtMi45ODMgMTAtNi42Njd2LTIuNzE2bC02LjUgNC42ODNhNS40MTcgNS40MTcgMCAwMS0zLjA1Ljk1eiIgZmlsbD0iIzFCQzk4RSIvPjwvc3ZnPg=="
          heading="Keto Academy"
          content="Our premium Keto Academy breaks down the basics of a low-carb lifestyle and takes you from beginner to Keto pro in just a few quick, interactive video lessons. Here’s a look at what you’ll discover in our Keto online course:"
          point1="Keto Crash Course"
          point2="Keto Cooking Classes"
          point3="Advanced Keto Learning"
          pointcontent1="If you’re new to Keto, or want a quick refresher, our Keto Academy videos will have you feeling like an expert in no time."
          pointcontent2="Learn to cook Keto and low-carb recipes alongside our expert Keto chef Ben Richardson."
          pointcontent3="Go deeper with our experts to learn about supplements, fasting, different styles of Keto, and more in our Keto pro videos."
        />
      </div>

      <div>
        <Image
          style={{ marginLeft: "-5%" }}
          src="https://www.carbmanager.com/_nuxt/img/403c014.png"
        />
      </div>

      <div style={{ width: "60%", margin: "auto"}}>
        <FeatureSection3
          imgSrc="https://images.prismic.io/cm-website/bc2f1648-b742-41e6-a3f8-4278e52cadc7_screen-6%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          subimg="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGREExMjAiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNDAuMzMzIDQwLjMzNEE2LjY2NiA2LjY2NiAwIDAwNDcgMzMuNjY3di0xMEE2LjY2NyA2LjY2NyAwIDAwNDAuMzMzIDE3SDIzLjY2NUE2LjY2NyA2LjY2NyAwIDAwMTcgMjMuNjY3djIwLjgzNGEuODMzLjgzMyAwIDAwLjgzMi44MzMuODEzLjgxMyAwIDAwLjU4My0uMjVsMy4zMzUtMy4zMzRhNC45OTggNC45OTggMCAwMTMuNTgzLTEuNDE1aDE1di0uMDAxem0tMy4zMzQtMTIuNWEuODMzLjgzMyAwIDAxLjgzNC0uODMzaDEuNjY2YS44MzQuODM0IDAgMDEuODM0LjgzM3YxLjY2N2EuODMzLjgzMyAwIDAxLS44MzQuODMzaC0xLjY2NmEuODM0LjgzNCAwIDAxLS44MzQtLjgzM3YtMS42Njd6bS02LjY2NiAwYS44MzQuODM0IDAgMDEuODMyLS44MzNoMS42NjhhLjgzMy44MzMgMCAwMS44MzIuODMzdjEuNjY3YS44MzMuODMzIDAgMDEtLjgzMi44MzNoLTEuNjY4YS44MzQuODM0IDAgMDEtLjgzMi0uODMzdi0xLjY2N3ptLTYuNjY3IDEuNjY3di0xLjY2N2EuODMzLjgzMyAwIDAxLjgzNC0uODMzaDEuNjY2YS44My44MyAwIDAxLjgzNC44MzN2MS42NjdhLjgzMy44MzMgMCAwMS0uODM0LjgzM0gyNC41YS44MzQuODM0IDAgMDEtLjgzNC0uODMzem0yNi42NjctNS44MzR2MTMuMzM0YTYuNjY2IDYuNjY2IDAgMDEtNi42NjggNi42NjZoLTIwQTMuMzM0IDMuMzM0IDAgMDAyNyA0Ny4wMDFoMTguMzMyYTUgNSAwIDAxMy41NSAxLjQ2NmwzLjMzNCAzLjMzM2EuODIuODIgMCAwMDEuMTcyLjAwNi44MzMuODMzIDAgMDAuMjQ0LS41ODlWMjcuMDAxYTMuMzM0IDMuMzM0IDAgMDAtMy4zLTMuMzM0aC4wMDF6IiBmaWxsPSIjRkRBMTIwIi8+PC9zdmc+"
          heading="Community"
          content="Join tens of thousands of users on our active Keto forums for support, motivation and community on your Keto lifestyle journey. Go further together."
          point1="Motivation + Accountability"
          point2="Always-Active Keto Forums"
          point3="Connect With Experts"
          pointcontent1="If your friends and family aren’t on board, or you just need an extra boost, hop into our active Keto forums to connect with someone else on the same journey as you."
          pointcontent2="If you’ve used other diet apps, you’ve probably run across forums that felt like ghost towns. Carb Manager’s forums couldn’t be more different, with tens of thousands of active users sharing their experience and knowledge."
          pointcontent3="Many of our users are extremely knowledgeable and experienced in the Keto lifestyle, and will happily jump in to help you troubleshoot your Keto experience."
        />
      </div>

      <div style={{ width: "60%", margin: "auto" , marginTop:"200px" }}>
        <FeatureSection2
          imgSrc="https://images.prismic.io/cm-website/18029b65-d58c-4c2b-b98a-f6e4f4af404d_screen-7%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          subimg="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiM2Qzg4RjkiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNDkuNTE3IDI3Ljg4M0ExLjY2MiAxLjY2MiAwIDAxNTAgMjkuMDY2djEuOTVhMS42NjcgMS42NjcgMCAwMS0uNDgzIDEuMTY3bC0yLjc2NyAyLjczM2ExLjY2NSAxLjY2NSAwIDAxLTEuMTgzLjQ4M2gtMS45NWExLjY2NyAxLjY2NyAwIDAxLTEuMTg0LS40ODNsLTIuNTUtMi41NS03LjQgNy40TDM1IDQyLjM0OWExLjY2NSAxLjY2NSAwIDAxLjQ4MyAxLjE4NHYxLjk1QTEuNjY0IDEuNjY0IDAgMDEzNSA0Ni42NjZsLTIuNzY3IDIuNzY3Yy0uMzEuMzA4LS43My40ODEtMS4xNjYuNDgzSDI5LjE1YTEuNjY4IDEuNjY4IDAgMDEtMS4xODMtLjQ4M0wyNS40IDQ2Ljg2NmwtMi44IDIuOGEuODMyLjgzMiAwIDAxLTEuMTgzIDBMMjAuMjUgNDguNWEuODMyLjgzMiAwIDAxMC0xLjE4NGwyLjgtMi44LTIuNTY3LTIuNTY3QTEuNjY2IDEuNjY2IDAgMDEyMCA0MC43NjZ2LTEuOTVjLjAwMi0uNDM3LjE3NS0uODU2LjQ4My0xLjE2NmwyLjg1LTIuNzM0YTEuNjY1IDEuNjY1IDAgMDExLjE4NC0uNDgzaDEuODY2YTEuNjY0IDEuNjY0IDAgMDExLjE4NC40ODNsMi41NSAyLjU1IDcuNC03LjRMMzUgMjcuNDgzYTEuNjcxIDEuNjcxIDAgMDEtLjQ4My0xLjE4M3YtMS45NWMuMDE4LS40MTQuMTktLjgwNy40ODMtMS4xbDIuNzY3LTIuNzY3Yy4zMS0uMzA4LjczLS40ODIgMS4xNjYtLjQ4M2gxLjk1YTEuNjY2IDEuNjY2IDAgMDExLjE4NC40ODNsMi41NjYgMi41NjcgMi44LTIuOGEuODM1LjgzNSAwIDAxMS4xODQgMGwxLjE2NiAxLjE2NmEuODMzLjgzMyAwIDAxMCAxLjE4NGwtMi44MzMgMi43MTYgMi41NjcgMi41Njd6IiBmaWxsPSIjNkM4OEY5Ii8+PC9zdmc+"
          heading="Exercise Portal"
          content="With the Keto diet you’ve already got an edge on your health and weight loss goals. Take it to the next level with our exercise tracker, and make the most of your Keto journey."
          point1="Easy Exercise Tracking"
          point2="Daily Activity Tracker"
          point3="Custom Exercise"
          pointcontent1="Track daily workouts including weight training and cardio, or create your workouts in-app with our collection of exercise tutorials."
          pointcontent2="With our exercise tracker you can log more than your workouts. See how your household chores and hobbies contribute to your health too."
          pointcontent3="Easily log any activity, including ones that may not be in our database yet (hey, nobody’s perfect) so you can log them again with the tap of your finger."
        />
      </div>

      <div>
        <Image
          style={{ marginLeft: "-5%"  }}
          src="https://www.carbmanager.com/_nuxt/img/fe87b67.png"
        />
      </div>

      <div style={{ width: "60%", margin: "auto"   }}>
        <FeatureSection3
          imgSrc="https://images.prismic.io/cm-website/9067c099-bf2c-4cb5-9c19-119ae15a7620_screen-8%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          subimg="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMzUiIGZpbGw9IiNGOTQ2NDIiIGZpbGwtb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMjEuMzM0IDQwLjMzM3YtMy4zMzRBMS42NjcgMS42NjcgMCAwMTIzIDM1LjMzM2gzLjMzNEExLjY2NyAxLjY2NyAwIDAxMjggMzYuOTk5djMuMzM0YTEuNjY2IDEuNjY2IDAgMDEtMS42NjYgMS42NjZIMjNhMS42NjcgMS42NjcgMCAwMS0xLjY2Ni0xLjY2NnpNMzMgNDEuOTk5aDMuMzM0QTEuNjY3IDEuNjY3IDAgMDAzOCA0MC4zMzNWMjMuNjY2QTEuNjY3IDEuNjY3IDAgMDAzNi4zMzQgMjJIMzNhMS42NjcgMS42NjcgMCAwMC0xLjY2NiAxLjY2NnYxNi42NjdBMS42NjcgMS42NjcgMCAwMDMzIDQxLjk5OXptMTAgMGgzLjMzNEExLjY2NyAxLjY2NyAwIDAwNDggNDAuMzMzdi0xMGExLjY2NyAxLjY2NyAwIDAwLTEuNjY2LTEuNjY3SDQzYTEuNjY3IDEuNjY3IDAgMDAtMS42NjYgMS42Njd2MTBBMS42NjcgMS42NjcgMCAwMDQzIDQxLjk5OXptNy41IDMuMzM0SDE4LjgzNGEuODM0LjgzNCAwIDAwLS44MzQuODMzdjEuNjY3YS44MzMuODMzIDAgMDAuODM0LjgzM0g1MC41YS44MzQuODM0IDAgMDAuODM0LS44MzN2LTEuNjY3YS44MzMuODMzIDAgMDAtLjgzNC0uODMzeiIgZmlsbD0iI0Y5NDY0MiIvPjwvc3ZnPg=="
          heading="Advanced Insights"
          content="Our advanced features take your health to the next level with insulin tracking, ketone tracking, blood pressure tracking and so much more. Get the best Keto diet biohacker app when you sign up for Carb Manager."
          point1="Advanced Health Tracking"
          point2="Advanced Biohacking App"
          point3="Advanced Logging Features"
          pointcontent1="Manage your specific health condition by tracking metrics like insulin, blood pressure and more to see how your diet is working."
          pointcontent2="Ready to go beyond simply tracking calories, carb, protein, fat, and exercise metrics? Track 30+ health metrics and get detailed analytics + reporting with Premium."
          pointcontent3="Integrate fasting, carb cycling or other unique daily goals with our Premium tracking features to take your health to the next-next level."
        />
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

export default Features;

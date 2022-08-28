import {
  border,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Contex/AppContext";

function Navbar() {
  const { logoutUser, isAuth } = useContext(AppContext);

  const handleLogout = () => {
    if (isAuth) {
      logoutUser();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
        width: "80%",
        margin: "auto",
      }}
    >
      <div style={{ width: "20%" }}>
        <Link to={"/"}>
          <Image src="https://d33wubrfki0l68.cloudfront.net/89e1f65eb1658d9a4bbd01d61dbc64d3b2dd7b65/bd84f/_nuxt/img/6d25ed0.svg" />
        </Link>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link to={"/features"}>Features</Link>
        </div>
        <div>
          <Link to={"/premium"}>Premium</Link>
        </div>
        <div>
          <Link to={"/recipes"}>Recipes</Link>
        </div>
        <div>
          <Link to={"/articles"}>Articles</Link>
        </div>
        <div>
          <Link to={"/cookbook"}>Cookbook</Link>
        </div>
        <div>
          <Link to={"/support"}>Support</Link>
        </div>
      </div>
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link onClick={handleLogout} to={"/login"}>
            {isAuth ? "Log Out" : "Log In"}
          </Link>
        </div>
        <div
          style={{
            border: "1px solid",
            padding: "10px",
            borderRadius: "50px",
            backgroundColor: "white",
          }}
        >
          <Link style={{ color: "#1CA677" }} to={"/join"}>
            Join for Free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

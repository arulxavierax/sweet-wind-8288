import { Container, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <Link to={"/"}>
          <Image
            style={{ width: "226px", height: "53px", display: "block" }}
            src="https://d33wubrfki0l68.cloudfront.net/89e1f65eb1658d9a4bbd01d61dbc64d3b2dd7b65/bd84f/_nuxt/img/6d25ed0.svg"
          />
        </Link>
      </div>
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
      <div>
        <Link to={"/login"}>Log In</Link>
      </div>
      <div>
        <Link to={"/join"}>Join for Free</Link>
      </div>
    </div>
  );
}

export default Navbar;

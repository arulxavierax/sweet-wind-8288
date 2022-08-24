import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import login from "../api/api";
import { AppContext } from "../Contex/AppContext";

function Login() {
  const { isAuth, loginUser } = useContext(AppContext);

  const [show, setShow] = React.useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = value;
    setDetails({
      ...details,
      [name]: val,
    });
  };

  const handleSubmit = () => {
    login(details)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
        loginUser();
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(true);
      });
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {success && (
        <Alert status="error">
          <AlertIcon />
          Login Successfull
        </Alert>
      )}
      {error && (
        <Alert status="error">
          <AlertIcon />
          Missing email or password
        </Alert>
      )}

      <Container className="LoginBorder">
        <Center>
          <Stack spacing={10}>
            <Box>
              <Text fontSize={"4xl"}>Welcome Back</Text>
              <Text fontSize={"1xl"}>Please sign in below to get started</Text>
            </Box>
            <FormControl>
              <Input
                size="lg"
                onChange={handleChange}
                name="email"
                value={details.email}
                type="email"
                placeholder="Email Address"
              />
              <InputGroup size="lg">
                <Input
                  onChange={handleChange}
                  name="password"
                  value={details.password}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText color="#1bc98e">
                forget your password?
              </FormHelperText>
            </FormControl>
            <Box>
              <Stack>
                <Button
                  borderRadius={100}
                  size="lg"
                  onClick={handleSubmit}
                  bg="#1bc98e"
                  color={"#FFFFFF"}
                >
                  Continue
                </Button>
              </Stack>
            </Box>
            <Flex>
              <Divider orientation="horizontal" />
              <Text>OR</Text>
              <Divider orientation="horizontal" />
            </Flex>
            <Stack>
              <Button borderRadius={100} bg={"black"} color="white">
                Continue With Apple
              </Button>
              <Button borderRadius={100} bg={"#3b77b1"} color="white">
                Continue With Google
              </Button>
              <Text>
                Don't have an account?
                <Link style={{ color: "#1CA677" }} to="/join">
                  Sign up here
                </Link>
              </Text>
            </Stack>

            <Text fontSize={"xs"}>
              This site is protected by hCaptcha and their <br /> privacy policy
              and terms apply.
            </Text>
          </Stack>
        </Center>
      </Container>
    </div>
  );
}

export default Login;

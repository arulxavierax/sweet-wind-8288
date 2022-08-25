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
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { userRegister } from "../api/api";

function Join() {
  const [show, setShow] = React.useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    userRegister(formState)
      .then((res) => {
        setSuccess(true);
        setError(false);
      })
      .catch((err) => {
        setSuccess(false);
        setError(true);
      });
  };

  return (
    <div style={{marginTop:'50px'}} > 
      <Box>
        {success && (
          <Alert status="success">
            <AlertIcon />
            Account Created Successfully
          </Alert>
        )}
        {error && (
          <Alert status="error">
            <AlertIcon />
            Missing email or password
          </Alert>
        )}
      </Box>

      <Container className="LoginBorder">
        <Center>
          <Stack spacing={10}>
            <Box>
              <Text fontSize="2xl">Let's set up your account</Text>
            </Box>
            <Box>
              <FormControl>
                <Input
                  onChange={handleChange}
                  name="name"
                  value={formState.name}
                  type="text"
                  size={"lg"}
                  placeholder="First Name (optional)"
                />

                <Input
                  onChange={handleChange}
                  name="email"
                  value={formState.email}
                  type="email"
                  size={"lg"}
                  placeholder="Email Address"
                />

                <InputGroup size="lg">
                  <Input
                    onChange={handleChange}
                    name="password"
                    value={formState.password}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="md" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <FormHelperText>Enter a secure password</FormHelperText>
              </FormControl>
            </Box>
            <Box>
              <Stack>
                <Button
                  borderRadius={100}
                  size="lg"
                  onClick={handleSubmit}
                  bg="#1bc98e"
                  color={"#FFFFFF"}
                >
                  Create My Account{" "}
                </Button>
              </Stack>
            </Box>
            <Box>
              <Flex>
                <Divider orientation="horizontal" />
                <Text>OR</Text>
                <Divider orientation="horizontal" />
              </Flex>
            </Box>
            <Box>
              <Stack>
                <Button borderRadius={100} bg={"black"} color="white">
                  Continue With Apple
                </Button>
                <Button borderRadius={100} bg={"#3b77b1"} color="white">
                  Continue With Google
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Center>
      </Container>
    </div>
  );
}

export default Join;

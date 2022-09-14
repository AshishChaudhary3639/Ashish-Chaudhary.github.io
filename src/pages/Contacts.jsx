import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box h="100vh" bg="lightgray">
      <Heading>Contact</Heading>
      <Box
        w="60%"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        m="auto"
        p="10px"
        borderRadius={3}
      >
        <Input
          placeholder="Enter Name"
          w="70%"
          fontSize="20px"
          borderRadius={3}
        />
        <br />
        <br />
        <Input
          placeholder="Enter Phone"
          w="70%"
          fontSize="20px"
          borderRadius={3}
        />
        <br />
        <br />
        <Input
          placeholder="Enter Email"
          w="70%"
          fontSize="20px"
          borderRadius={3}
        />
        <br />
        <br />
        <Input
          placeholder="Enter password"
          w="70%"
          fontSize="20px"
          borderRadius={3}
        />
        <br />
        <br />
        <Button
          color="white"
          border="none"
          w="70%"
          fontSize="22px"
          bg="teal"
          _hover={{ cursor: "pointer", bg: "tomato", w: "71%" }}
          borderRadius={3}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;

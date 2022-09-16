import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <>
      <VStack
        h="auto"
        p={{
          base: "10px",
          sm: "15px",
          md: "2rem",
        }}
        w="90%"
        m="1rem auto"
        bg="whitesmoke"
      >
        <Heading>Contact</Heading>
        <Box
          w={{
            base: "80%",
            sm: "80%",
            md: "60%",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          m="auto"
          p="10px"
          borderRadius={3}
          textAlign="center"
          bg="white"
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
      </VStack>
    </>
  );
};

export default Contact;

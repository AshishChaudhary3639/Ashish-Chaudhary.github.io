import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Show,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" bg="teal.300">
      <Box
        p="2"
        visibility={{
          md: "hidden",
          lg: "visible",
        }}
      >
        <Heading size="md">Excuse Me</Heading>
      </Box>
      <Spacer />
      <Show above="sm">
        <ButtonGroup
          gap="6"
          display={{
            base: "none",
            sm: "none",
            md: "flex",
          }}
        >
            <Button colorScheme="teal" variant="outline">
              Home
            </Button>
            <Button colorScheme="teal" variant="outline">
              About
            </Button>
            <Button colorScheme="teal" variant="outline">
              Skills
            </Button>
            <Button colorScheme="teal" variant="outline">
              Projects
            </Button>
            <Button colorScheme="teal" variant="outline">
              Contacts
            </Button>
        </ButtonGroup>
      </Show>
      <Box
        display={{
          sm: "none",
          md: "none",
        }}
        pr="1rem"
      >
        {" "}
        <GiHamburgerMenu color="white" fontSize="25px" />
      </Box>
    </Flex>
  );
};

export default Navbar;

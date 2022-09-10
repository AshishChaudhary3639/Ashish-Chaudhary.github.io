import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdWavingHand } from "react-icons/md";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      bg="teal.400"
      gap="4rem"
      p="1rem"
      justifyContent="space-between"
      overflow="hiden"
      w="100%"
    >
      <Box>
        <Text
          colorScheme="white"
          as="b"
          color="white"
          display={{
            base: "none",
            sm: "none",
            md: "block",
          }}
        >
          Excuse<span><MdWavingHand color="yellow"/></span> Me
        </Text>
      </Box>
      <Flex
        gap="1rem"
        display={{
          base: "none",
          sm: "block",
        }}
        justifyContent={{
          sm: "center",
    
        }}
      >
        <Text colorScheme="white" as="b" color="white">
          Home
        </Text>
        <Text colorScheme="white" as="b" color="white">
          About
        </Text>
        <Text colorScheme="white" as="b" color="white">
          Skills
        </Text>
        <Text colorScheme="white" as="b" color="white">
          Projects
        </Text>
        <Text colorScheme="white" as="b" color="white">
          Contact
        </Text>
      </Flex>
      <Box
        display={{
          base: "block",
          sm: "none",
        }}
      >
        <Button colorScheme="blue" onClick={onOpen}>
          <Icon color="white" fontSize="2xl" as={GiHamburgerMenu} />
        </Button>
        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent textAlign="center" lineHeight="30px">
            <Text as="b" color="teal" bg="lightgray" w="100%">
              Home
            </Text>
            <Text as="b" color="teal" bg="lightgray" w="100%">
              About
            </Text>
            <Text as="b" color="teal" bg="lightgray" w="100%">
              Skills
            </Text>
            <Text as="b" color="teal" bg="lightgray" w="100%">
              Projects
            </Text>
            <Text as="b" color="teal" bg="lightgray" w="100%">
              Contact
            </Text>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Navbar;

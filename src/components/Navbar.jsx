import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Show,
  RadioGroup,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" bg="teal.300" h={{
      md:"4rem"
    }} 
    
    justifyContent={{
      sm:"center",
      md:"center"
    }}
    >
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
          <NavHashLink to="#home">
            <Button colorScheme="teal" variant="outline">
              Home
            </Button>
          </NavHashLink>

          <NavHashLink to="#skills">
            <Button colorScheme="teal" variant="outline">
              Skills
            </Button>
          </NavHashLink>
          <NavHashLink to="#projects">
            <Button colorScheme="teal" variant="outline">
              Projects
            </Button>
          </NavHashLink>
          <NavHashLink to="#contact">
            <Button colorScheme="teal" variant="outline">
              Contacts
            </Button>
          </NavHashLink>
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
        <RadioGroup
          defaultValue={placement}
          onChange={setPlacement}
        ></RadioGroup>
        <Button colorScheme="blue" onClick={onOpen}>
          <GiHamburgerMenu color="white" fontSize="25px" />
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent textAlign="center" >
            <NavHashLink to="#home" >
              <Button colorScheme="teal" variant="outline" w="100%">
                Home
              </Button>
            </NavHashLink>

            <NavHashLink to="#skills">
              <Button colorScheme="teal" variant="outline"w="100%">
                Skills
              </Button>
            </NavHashLink>

            <NavHashLink to="#projects">
              <Button colorScheme="teal" variant="outline"w="100%">
                Projects
              </Button>
            </NavHashLink>

            <NavHashLink to="#contact">
              <Button colorScheme="teal" variant="outline"w="100%">
                Contacts
              </Button>
            </NavHashLink>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Navbar;

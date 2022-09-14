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
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
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
        <RadioGroup
          defaultValue={placement}
          onChange={setPlacement}
        ></RadioGroup>
        <Button colorScheme="blue" onClick={onOpen}>
          <GiHamburgerMenu color="white" fontSize="25px" />
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Navbar;

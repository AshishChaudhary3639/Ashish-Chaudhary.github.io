import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <Box
      bg="lightgray"
      h={{
        base: "auto",
        sm: "auto",
        md: "100vh",
      }}
    >
      <Heading>Projects</Heading>
      <Flex
        gap="20px"
        pb={20}
        display={{
          base: "block",
          sm: "block",
          md: "flex",
        }}
      >
        <Box
          m="auto"
          bg="white"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          w="40%"
        >
          <Heading>Revv site</Heading>
          <Image src={process.env.PUBLIC_URL + "/revv.png"} w="240px" />

          <Text>Revv is A self drive rental car service </Text>
        </Box>

        <Box
          m="auto"
          bg="white"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          w="40%"
        >
          <Heading>Revv site</Heading>
          <Image src={process.env.PUBLIC_URL + "/revv.png"} w="240px" />

          <Text>Revv is A self drive rental car service </Text>
        </Box>
      </Flex>

      <Flex
        gap="20px"
        display={{
          base: "block",
          sm: "block",
          md: "flex",
        }}
        
      >
        <Box
          m="auto"
          bg="white"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          w="40%"
        >
          <Heading>Revv site</Heading>
          <Image src={process.env.PUBLIC_URL + "/revv.png"} w="240px" />

          <Text>Revv is A self drive rental car service </Text>
        </Box>
          
        <Box
          m="auto"
          bg="white"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          w="40%"
          mt="10px"
        >
          <Heading>Revv site</Heading>
          <Image src={process.env.PUBLIC_URL + "/revv.png"} w="240px" />

          <Text>Revv is A self drive rental car service </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;

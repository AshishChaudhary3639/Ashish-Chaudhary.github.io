import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { SiRedux, SiChakraui } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <VStack bg="whitesmoke" w="90%" m="auto" height="auto">
        <Heading>Projects</Heading>
        <Box w="80%" mt="2rem" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p="10px">
          <Flex justifyContent="space-between">
            <Text>TripVillas</Text>
            <Flex gap="10px">
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg="yellow"
              >
                <DiJavascript1 color="black" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                bg="#222222"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <DiReact color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiRedux color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiChakraui color="skyblue" />
              </Box>
            </Flex>
          </Flex>
          <Image src={process.env.PUBLIC_URL + "/tripvillas_img.PNG"} />
        <Flex gap="2rem" justifyContent="center">
          <Button
            leftIcon={<BsGithub />}
            colorScheme="lightgray"
            variant="outline"
          >
            Code
          </Button>
          <Button>Live</Button>
        </Flex>
        </Box>
      </VStack>
      <VStack bg="whitesmoke" w="90%" m="auto" h="auto">
        <Box w="80%" mt="2rem" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p="10px">
          <Flex justifyContent="space-between" mb="20px">
            <Text>TripVillas</Text>
            <Flex gap="10px">
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg="yellow"
              >
                <DiJavascript1 color="black" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                bg="#222222"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <DiReact color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiRedux color="skyblue" />
              </Box>
              <Box
                data-content="REACT"
                fontSize="30px"
                borderRadius="7px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <SiChakraui color="skyblue" />
              </Box>
            </Flex>
          </Flex>
          <Image src={process.env.PUBLIC_URL + "/tripvillas_img.PNG"} />
        <Flex gap="2rem" justifyContent="center">
          <Button
            leftIcon={<BsGithub />}
            colorScheme="lightgray"
            variant="outline"
          >
            Code
          </Button>
          <Button>Live</Button>
        </Flex>
        </Box>
      </VStack>
    </>
  );
};

export default Projects;

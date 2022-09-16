import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/bg.jpg"})`
      }}
    >
      <Flex
        alignItems="center"
        gap="10px"
        direction={["column", "row", "row"]}
        justifyContent="center"
        w="90%"
        m="auto"
      >
        <Box w="37%" objectFit="cover">
          <Image
            src={process.env.PUBLIC_URL + "/ashish.jpg"}
            w={{
              base: "100%",
              sm: "100%",
              md: "60%",
            }}
            h="20rem"
            pt="20px"
            borderRadius="50%"
            border="3px solid gray"
          />
        </Box>
        <Box
          w="60%"
          textAlign={{
            base: "center",
            sm: "center",
            md: "left",
          }}
        >
          <Box>
            <Heading>I am Ashish</Heading>
            <Heading>Full Stack Developer</Heading>
          </Box>
          <Button colorScheme="teal" variant="outline" mt="1rem">
            Resume <Icon as={DownloadIcon} ml="6px" />
          </Button>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;

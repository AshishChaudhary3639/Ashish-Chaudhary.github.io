import { Box, Flex, Heading, Icon, Spacer } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { SiRedux, SiChakraui } from "react-icons/si";
import { BsFillBootstrapFill, BsWordpress } from "react-icons/bs";

const Skills = () => {
  function Example() {
    return <Icon as={MdCheckCircle} />;
  }
  return (
    <Box
      h={{
        base: "auto",
        sm: "auto",
        md: "100vh",
      }}
      p="20px"
    >
      <Heading>Skills</Heading>
      <Flex
        justifyContent={{
          base: "center",
          sm: "center",
          md: "space-between",
        }}
        display={{
          base: "block",
          sm: "block",
          md: "flex",
        }}
      >
        <Box
          data-content="HTML"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <AiFillHtml5 color="orange" />
        </Box>

        <Box
          data-content="CSS"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <DiCss3 color="lightblue" />
        </Box>
        <Box
          data-content="JS"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <DiJavascript1 color="orangered" />
        </Box>
        <Box
          data-content="REACT"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <DiReact color="skyblue" />
        </Box>
      </Flex>

      <Flex
        justifyContent={{
          base: "center",
          sm: "center",
          md: "space-between",
        }}
        mt="40px"
        display={{
          base: "block",
          sm: "block",
          md: "flex",
        }}
      >
        <Box
          data-content="REDUX"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <SiRedux color="#764abc" />
        </Box>
        <Box
          data-content="CHAKRA"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <SiChakraui color="#6fcad0" />
        </Box>
        <Box
          data-content="CHAKRA"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <BsFillBootstrapFill color="#6fcad0" />
        </Box>
        <Box
          data-content="CHAKRA"
          fontSize="110px"
          borderRadius="7px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <BsWordpress color="#6fcad0" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;

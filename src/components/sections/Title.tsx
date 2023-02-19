import { useState } from "react";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Title({ title = "Title Here" }: { title: string }) {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 6 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify="center"
      >
        <Heading as={"h2"}>{title}</Heading>
      </Flex>
    </Box>
  );
}

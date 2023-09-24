"use client";

import React from "react";
import { chakra, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Experience
      </chakra.h1>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        🌟Worked as a Freelance Technical Content Writer: - Authored engaging
        and informative technical articles for clients. - Translated complex
        technical jargon into accessible content. - Collaborated with subject
        matter experts to ensure accuracy.
        <br />
        🌟Worked as a Freelance Article Writer and Fictional writer for children
        and Women's Magazines.
        <br />
        🌟Assisted companies in completing their pending writing projects.
        <br/>
        🌟 Etc...
      </Text>
      <Box textAlign={"center"}>
        {/* <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          mb={2}
        /> */}
      </Box>
    </Stack>
  );
}

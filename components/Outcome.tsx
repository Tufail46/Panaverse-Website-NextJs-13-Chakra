"use client";
import React from "react";
import { Button, Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
export default function Outcome() {
  return (
    <Box maxW={"7xl"} mx="auto">
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box maxW={"8xl"} p={"16px"}>
          <Image
            alt={"Login Image"}
            src={"/images/Outcome.jpeg"}
            width={2000}
            height={2000}
          />
        </Box>
        <Box maxW={"2xl"} mx="auto" p={"16px"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            color="#03071e"
            pb="36px"
          >
            The Outcome for Participants of the Program
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"#03071e"}>
            The graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) that are marketed
            globally by the Panaverse DAO and, if they like, will also be able
            to start off by offering services at a rate of $50 per hour ($96,000
            per year). This would give Pakistani professionals and students a
            fantastic opportunity to better their financial situation while also
            giving the economy a much-needed boost by expanding software
            exports.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

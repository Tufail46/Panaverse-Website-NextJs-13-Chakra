"use client";
import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
export default function CNHeader() {
  return (
    <Box maxW={"8xl"} mx="auto" my="56px">
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box maxW={"3xl"} p={"16px"}>
          <Image
            alt={"Login Image"}
            src={"/images/CN.jpeg"}
            width={2000}
            height={2000}
          />
        </Box>
        <Box maxW={"2xl"} mx="auto" p={"16px"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              fontSize="14px"
              color="#03071e"
            >
              Specialized Courses
            </Text>
            <br />{" "}
            <Text
              as={"span"}
              position={"relative"}
              fontSize="50px"
              color="#03071e"
            >
              Cloud-Native
            </Text>
            <br />{" "}
            <Text color={"#03071e"} as={"span"} fontSize="50px">
              Computing Specialization
            </Text>{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"#03071e"}
            pb="20px"
            pt="16px"
          >
            The Cloud-Native Computing Specialization focuses on Containers,
            Kubernetes, and CDK for Kubernetes.
          </Text>
          <Button
            as="a"
            rounded={"full"}
            bg={"#ffc300"}
            color={"#03071e"}
            href={"https://portal.piaic.org/signup"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

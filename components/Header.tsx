"use client";
import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Header() {
  return (
    <Box maxW={"8xl"} mx="auto" my="56px">
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box maxW={"2xl"} mx="auto" p={"16px"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} pb="36px">
            <Text
              as={"span"}
              position={"relative"}
              fontSize="14px"
              color="#03071e"
            >
              Presidential Initiative for Artificial Intelligence & Computing
              (PIAIC)
            </Text>
            <br />{" "}
            <Text
              as={"span"}
              position={"relative"}
              fontSize="50px"
              color="#03071e"
            >
              Certified Web 3.0 &
            </Text>
            <br />{" "}
            <Text color={"#03071e"} as={"span"} fontSize="50px">
              Metaverse Developer
            </Text>{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"#03071e"}
            pb="16px"
            pr="32px"
          >
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the programs beginning. It resembles a cross
            between a corporate venture and an educational project. This
            curriculum is intended for beginners who want to learn software
            development from the ground up.
          </Text>
          <Button
            as="a"
            rounded={"full"}
            bg={"#ffd60a"}
            color={"#03071e"}
            href={"https://portal.piaic.org/signup"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Apply Now
          </Button>
        </Box>
        <Box>
          <Box maxW={"8xl"} p={"16px"}>
            <Image
              alt={"Login Image"}
              src={"/images/young.jpg"}
              width={2000}
              height={2000}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

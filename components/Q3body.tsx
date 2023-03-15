"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
export default function Q3body() {
  return (
    <Box maxW="8xl" mx="auto" p={"16px"}>
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box mb="20px" maxW={"5xl"} mx="auto" p={"12px"}>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development
          </Text>
          <Text
            textAlign={"center"}
            color={"#03071e"}
            fontSize="40px"
            fontWeight={"bold"}
          >
            Quarter III
          </Text>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Duration: 13 Weeks
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Earn While You Learn Projects
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            A. Build Full-Stack Next.js 13 Jamstack Templates
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            You will be assigned to build a template which we will sell on Theme
            Forest and Panaverse DAO marketplace. The Panaverse DAO will receive
            25% share on the sale of the template which will be used to manage
            the platform. An additional 15% will be spent on marketing the
            template. 60% of the revenues will be distributed to the developer
            through the Panaverse DAO in the form of Panaverse tokens.
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={"https://github.com/panaverse/panaverse-template-standard"}
            >
              The Template Standard
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            B. Build QraphQL APIs
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            You will be assigned to build APIs for which you will sell
            subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO
            will receive 25% share on the sale of the template which will be
            used to manage the platform. An additional 15% will be spent on
            marketing the template. 60% of the revenues will be distributed to
            the developer through the Panaverse DAO in the form of Panaverse
            tokens.
          </Text>
        </Box>
        <Box
          p={"24px"}
          bg="#ffd60a"
          color="#03071e"
          maxW={"xl"}
          maxH={"3xl"}
          borderRadius="20px"
          mt={{ base: "auto", md: "auto", lg: "160px" }}
          mx={"auto"}
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
          overflow={"hidden"}
        >
          <Text fontSize={"30px"} pb="15px" fontWeight={"bold"}>
            Core Course
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/quarters/quarter1"> Quarter I </Link>
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/quarters/quarter2"> Quarter II </Link>
          </Text>
          <Box bg="#003566" color="white" borderRadius={"20px"}>
            <Text fontSize={"18px"} pl="40px" mb="15" py="15px">
              Quarter III
            </Text>
          </Box>
          <Text fontSize={"30px"} pb="15px" fontWeight={"bold"}>
            Specialized Course
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/availableprogram/web3">
              {" "}
              Web 3.0 (Blockchain) and Metaverse Specialization{" "}
            </Link>
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/availableprogram/ai">
              {" "}
              Artificial Intelligence (AI) and Deep Learning Specialization{" "}
            </Link>
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/availableprogram/ccs">
              {" "}
              Cloud-Native Computing Specialization{" "}
            </Link>
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/availableprogram/acis">
              {" "}
              Ambient Computing and IoT Specialization{" "}
            </Link>
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/availableprogram/gbs">
              {" "}
              Genomics and Bioinformatics Specialization{" "}
            </Link>
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/availableprogram/npas">
              {" "}
              Network Programmability and Automation Specialization{" "}
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

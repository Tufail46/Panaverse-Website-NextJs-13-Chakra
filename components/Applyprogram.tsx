"use client";
import React from "react";
import {
  Box,
  chakra,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Applyprogram() {
  return (
    <Box>
      <Box
        maxW="7xl"
        mx={"auto"}
        px={{ base: 2, sm: 12, md: 17 }}
        bg="white"
        borderRadius={"20px"}
        pb="40px"
        mb="20px"
      >
        <Text
          textAlign={"center"}
          fontSize={"58px"}
          fontWeight={"bold"}
          color="#03071e"
        >
          Core Courses
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"24px"}
          pb="10px"
          fontWeight={"bold"}
          color="#03071e"
        >
          Common in All Specializations
        </Text>
        <Text textAlign={"center"} fontSize={"18px"} pb="20px" color="#03071e">
          Every participant of the program will start by completing the
          following three core courses.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <Box
            bg="#ffd500"
            borderRadius={"12px"}
            p="20px"
            textAlign={"center"}
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow={"hidden"}
          >
            <Heading fontSize={"24px"} color="#03071e" pb="10px">
              Quarter I
            </Heading>
            <Text fontSize={"16px"} color="black" pb="10px">
              Object-Oriented Programming using TypeScript
            </Text>
            <Text
              fontSize={"16px"}
              fontStyle="oblique"
              color="#03071e"
              pb="10px"
            >
              <Link href={"/quarters/quarter1"}> Learn More </Link>
            </Text>
          </Box>
          <Box
            bg="#ffd500"
            borderRadius={"12px"}
            p="20px"
            textAlign={"center"}
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow={"hidden"}
          >
            <Heading fontSize={"24px"} color="#03071e" pb="10px">
              Quarter II
            </Heading>
            <Text fontSize={"16px"} color="#03071e" pb="10px">
              Developing Planet-Scale Web 2.0 Serverless Cloud
            </Text>
            <Text
              fontSize={"16px"}
              fontStyle="oblique"
              color="#03071e"
              pb="10px"
            >
              <Link href={"/quarters/quarter2"}> Learn More </Link>
            </Text>
          </Box>
          <Box
            bg="#ffd500"
            borderRadius={"12px"}
            p="20px"
            textAlign={"center"}
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow={"hidden"}
          >
            <Heading fontSize={"24px"} color="#03071e" pb="10px">
              Quarter III
            </Heading>
            <Text fontSize={"16px"} color="#03071e" pb="10px">
              Dollar Making Bootcamp
            </Text>
            <Text
              fontSize={"16px"}
              fontStyle="oblique"
              color="#03071e"
              pb="10px"
            >
              <Link href={"/quarters/quarter3"}> Learn More </Link>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        maxW="7xl"
        mx={"auto"}
        px={{ base: 2, sm: 12, md: 17 }}
        bg="white"
        borderRadius={"20px"}
        pb="10px"
        mb="50px"
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={"58px"}
          pb="20px"
          fontWeight={"bold"}
          color="#03071e"
        >
          Specialized Courses
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <Box
            bg="#ffd500"
            borderRadius={"12px"}
            p="20px"
            textAlign={"center"}
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow={"hidden"}
          >
            <Heading fontSize={"24px"} color="#03071e" pb="10px">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </Heading>
            <Text fontSize={"16px"} color="#03071e" pb="10px">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building
            </Text>
            <Text
              fontSize={"16px"}
              fontStyle="oblique"
              color="#03071e"
              pb="10px"
            >
              <Link href="/availableprogram/web3"> Learn More </Link>
            </Text>
          </Box>
          <Box
            bg="#ffd500"
            borderRadius={"12px"}
            p="20px"
            textAlign={"center"}
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow={"hidden"}
          >
            <Heading fontSize={"24px"} color="#03071e" pb="10px">
              Artificial Intelligence (AI) and Deep Learning Specialization
            </Heading>
            <Text fontSize={"16px"} color="#03071e" pb="10px">
              The AI and Deep Learning specialization focuses on building and
              deploying intelligent APIs using OpenAI models and building custom
              Deep Learning Tensorflow models.
            </Text>
            <Text
              fontSize={"16px"}
              fontStyle="oblique"
              color="#03071e"
              pb="10px"
            >
              <Link href="/availableprogram/ai"> Learn More </Link>
            </Text>
          </Box>
          <Box
            bg="#ffd500"
            borderRadius={"12px"}
            p="20px"
            textAlign={"center"}
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow={"hidden"}
          >
            <Heading fontSize={"24px"} color="#03071e" pb="10px">
              Cloud-Native Computing Specialization
            </Heading>
            <Text fontSize={"16px"} color="#03071e" pb="10px">
              The Cloud-Native Computing Specialization focuses on Containers,
              Kubernetes, and CDK for Kubernetes.
            </Text>
            <Text
              fontSize={"16px"}
              fontStyle="oblique"
              color="#03071e"
              pb="10px"
            >
              <Link href="/availableprogram/ccs"> Learn More </Link>
            </Text>
          </Box>
          <Box
            bg="#ffd500"
            borderRadius={"12px"}
            p="20px"
            textAlign={"center"}
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow={"hidden"}
          >
            <Heading fontSize={"24px"} color="#03071e" pb="10px">
              Ambient Computing and IoT Specialization
            </Heading>
            <Text fontSize={"16px"} color="#03071e" pb="10px">
              The Ambient Computing and IoT Specialization focuses on building
              Smart Homes, Offices, Factories, and Cities using Voice computing,
              Matter Protocol, and Embedded Devices.
            </Text>
            <Text
              fontSize={"16px"}
              fontStyle="oblique"
              color="#03071e"
              pb="10px"
            >
              <Link href="/availableprogram/acis"> Learn More </Link>
            </Text>
          </Box>
          <Box
            bg="#ffd500"
            borderRadius={"12px"}
            p="20px"
            textAlign={"center"}
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow={"hidden"}
          >
            <Heading fontSize={"24px"} color="#03071e" pb="10px">
              Genomics and Bioinformatics Specialization
            </Heading>
            <Text fontSize={"16px"} color="#03071e" pb="10px">
              Genomics is the study of the total genetic makeup of individual
              organisms, and how this genetic information is structured,
              functions, and has evolved; bioinformatics encompasses
            </Text>
            <Text
              fontSize={"16px"}
              fontStyle="oblique"
              color="#03071e"
              pb="10px"
            >
              <Link href="/availableprogram/gbs"> Learn More </Link>
            </Text>
          </Box>
          <Box
            bg="#ffd500"
            borderRadius={"12px"}
            p="20px"
            textAlign={"center"}
            boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            overflow={"hidden"}
          >
            <Heading fontSize={"24px"} color="#03071e" pb="10px">
              Network Programmability and Automation Specialization
            </Heading>
            <Text fontSize={"16px"} color="#03071e" pb="10px">
              More than ever, network engineers are finding it challenging to
              complete their duties entirely manually. Network automation is now
              crucial due to new protocols, technologies
            </Text>
            <Text
              fontSize={"16px"}
              fontStyle="oblique"
              color="#03071e"
              pb="10px"
            >
              <Link href="/availableprogram/npas"> Learn More </Link>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

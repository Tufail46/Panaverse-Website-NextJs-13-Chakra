"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Aibody() {
  return (
    <Box maxW="8xl" mx="auto" p={"16px"}>
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box mb="20px" maxW={"5xl"} mx="auto" p={"12px"}>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Artificial Intelligence (AI) and Deep Learning Specialization
          </Text>
          <Text
            textAlign={"center"}
            color={"#03071e"}
            fontSize="40px"
            fontWeight={"bold"}
          >
            Quarter IV
          </Text>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Duration: 13 Weeks
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Description:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            Artificial intelligence is the simulation of human intelligence
            processes by machines, especially computer systems. The AI and Deep
            Learning Specialization is a foundational program that will aid in
            your comprehension of deep learning potential, difficulties, and
            effects as well as equip you to take part in the creation of
            cutting-edge AI technology. We will start this course by
            understanding the fundamentals and use cases for AI and move on to
            building next-gen intelligent apps using OpenAI powerful models and
            Next.js 13. We will conclude the course by learning about basic
            programming concepts using Python, such as lists, dictionaries,
            classes, functions, and loops, and practice writing clean and
            readable code with exercises for each topic. We will also learn how
            to make your programs interactive and how to test your code safely
            before adding it to a project. It is a fast-paced, thorough
            introduction to programming with Python 3.10+ that will have you
            writing programs, solving problems, and making things that work in
            no time. In this quarter we will also learn Git, the distributed
            version control system. We will also review Git-based GitHub
            services.
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Outline:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            1. Introduction to Machine Learning, Data Science, and AI
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://www.coursera.org/learn/ai-for-everyone"}>
              AI for Everyone
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            2. Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models
            We will cover GPT-4, ChatGPT, etc. and Next.js 13
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://openai.com/api/"}>
              https://openai.com/api/
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45 "
              }
            >
              https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            3. Python Crash Course for TypeScript Developers
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5 "
              }
            >
              Python Crash Course, 2nd Edition: A Hands-On, Project-Based
              Introduction to Programming 2nd Edition
            </Link>
          </Text>

          <Text
            textAlign={"center"}
            color={"#03071e"}
            fontSize="40px"
            fontWeight={"bold"}
          >
            Quarter V
          </Text>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Duration: 13 Weeks
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Description:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            This course will help you understand the capabilities, challenges,
            and consequences of deep learning and prepare you to participate in
            the development of leading-edge AI technology. We will finish the
            program by learning how to envision, create, and maintain integrated
            systems that run constantly in production. Production systems must
            manage constantly changing data, in stark contrast to typical
            machine learning modeling. The production system must also operate
            continuously at the lowest possible cost while delivering the
            highest possible performance.
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Outline:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            1. Deep Learning with Tensorflow
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"
              }
            >
              Deep Learning with Python, Second Edition 2nd Edition
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            2. Machine Learning Engineering for Production (MLOps) using
            Terraform for CDK
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://openai.com/api/"}>
              https://openai.com/api/
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351 "
              }
            >
              A Comprehensive Guide to MLOps Terraform: Infrastructure As
              Code(IaC)
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce "
              }
            >
              MLOps leveraging AWS SageMaker and Terraform
            </Link>
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
          <Text fontSize={"18px"} pl="40px" py="5px" mb="15px">
            <Link href="/quarters/quarter1"> Quarter I </Link>
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/quarters/quarter2"> Quarter II </Link>
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/quarters/quarter3"> Quarter III </Link>
          </Text>
          <Text fontSize={"30px"} pb="15px" fontWeight={"bold"}>
            Specialized Course
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/availableprogram/web3">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </Link>
          </Text>
          <Box bg="#003566" color="white" borderRadius={"16px"}>
            <Text fontSize={"18px"} pl="40px" py="15px">
              Artificial Intelligence (AI) and Deep Learning Specialization{" "}
            </Text>
          </Box>
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

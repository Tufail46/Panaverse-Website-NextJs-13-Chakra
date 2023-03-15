"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function CNBody() {
  return (
    <Box maxW="8xl" mx="auto" p={"16px"}>
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box mb="20px" maxW={"5xl"} mx="auto" p={"12px"}>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Cloud-Native Computing Specialization
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
            Cloud-native architecture and technologies are an approach to
            designing, constructing, and operating workloads that are built in
            the cloud and take full advantage of the cloud computing model.
            Cloud-native technologies empower organizations to build and run
            scalable applications in modern, dynamic environments such as
            public, private, and hybrid clouds. Containers, service meshes,
            microservices, immutable infrastructure, and declarative APIs
            exemplify this approach. These techniques enable loosely coupled
            systems that are resilient, manageable, and observable. Combined
            with robust automation, they allow engineers to make high-impact
            changes frequently and predictably with minimal toil. Kubernetes is
            an open-source system for automating the deployment, scaling, and
            management of containerized applications. In this course, you will
            learn how to develop cloud applications using cloud-native
            technologies like Containers, Kubernetes, and CDK for Kubernetes.
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
            Terraform lets you use the same workflow to manage multiple
            providers and handle cross-cloud dependencies. This simplifies
            management and orchestration for large-scale, multi-cloud
            infrastructures. Cloud Development Kit for Terraform (CDKTF) allows
            you to use familiar programming languages to define and provision
            infrastructure. This gives you access to the entire Terraform
            ecosystem without learning HashiCorp Configuration Language (HCL)
            and lets you leverage the power of your existing toolchain for
            testing, dependency management, etc.
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
          <Text fontSize={"18px"} pl="40px" py="15px">
            <Link href="/availableprogram/ai">
              Artificial Intelligence (AI) and Deep Learning Specialization{" "}
            </Link>
          </Text>
          <Box bg="#003566" color="white" borderRadius={"16px"}>
            <Text fontSize={"18px"} pl="40px" py="15px">
              Cloud-Native Computing Specialization{" "}
            </Text>
          </Box>
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

"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Q2body() {
  return (
    <Box maxW="8xl" mx="auto" p={"16px"}>
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box mb="20px" maxW={"5xl"} mr="12px" p={"12px"}>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and
            APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
          </Text>
          <Text
            textAlign={"center"}
            color={"#03071e"}
            fontSize="40px"
            fontWeight={"bold"}
          >
            Quarter II
          </Text>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Duration: 13 Weeks
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Description:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            The objective of this course is to teach participants to develop
            customer-facing planet-scale Websites, Full-Stack Apps and
            templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of
            the quarter, the participants will be able to develop and deploy web
            platforms like Facebook, Shopify, etc. The technologies covered in
            this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI,
            tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
            Compatible), AWS Serverless Technologies, and Cloud Development Kit
            for Terraform (CDKTF).
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Outline:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            1. Next.js 13 Web Development
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://beta.nextjs.org/docs"}>
              Next 13 Official Documentation
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://beta.reactjs.org/learn "}>
              Latest Learn React Official Website
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://github.com/panaverse/learn-nextjs "}>
              Learn Next.js 13 Learning Repo
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            2. Next.js 13 using Chakra UI (Remote Zoom Class)
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
              }
            >
              CSS Flexbox Explained – Complete Guide to Flexible Containers and
              Flex Items
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://chakra-ui.com/getting-started"}>
              Chakra UI Docs
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            3. UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
            Class)
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa "
              }
            >
              Designing and Prototyping Interfaces with Figma: Learn essential
              UX/UI design principles by creating interactive prototypes for
              mobile, tablet, and desktop by Fabio Staiano
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={"https://www.figma.com/community/file/768809027799962739"}
            >
              Figma Design Kit for TailwindCSS
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={"https://www.figma.com/community/file/971408767069651759 "}
            >
              Chakra UI Figma Kit
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            4. API Routes with Next.js (Remote Zoom Class)
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://nextjs.org/docs/api-routes/introduction"}>
              API Routes
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            5. APIs with Next.js and tRPC (Remote Zoom Class)
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/ "
              }
            >
              Build a tRPC CRUD API Example with Next.js
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
              }
            >
              Stop building REST APIs for your Next.js apps, use tRPC instead
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            6. SQL and Prisma
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
              }
            >
              Start from scratch with relational databases
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://www.youtube.com/watch?v=5hzZtqCNQKk"}>
              SQL For Beginners Video Tutorial
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={"https://www.freecodecamp.org/news/dbms-and-sql-basics/"}
            >
              Database Management Systems and SQL – Tutorial for Beginners
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            7. Next.js 13 using TailwindCSS (Remote Zoom Class)
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
              }
            >
              Modern CSS with Tailwind, Second Edition by Noel Rappin
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            8. AWS Application Composer (Remote Zoom Class)
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://www.youtube.com/watch?v=BujE_tik5r8"}>
              What is AWS Application Composer?
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://www.youtube.com/watch?v=p411uh363jQ"}>
              Event-driven apps with AWS Application Composer
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://aws.amazon.com/application-composer/"}>
              Visually design and build serverless applications quickly
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            Must Have: Create Free AWS Account
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://aws.amazon.com/free/"}>AWS Free Tier</Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Note: For AWS Free Tier you will need a credit or debit card. The
            easiest way for Pakistani students is to open a bank account with
            Meezan Bank. Open a Meezan Aasan Account if you have no earning
            proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there
            is a requirement of Rs. 100 minimum deposit. The card will be
            delivered in a few weeks. Our students have reported that this Debit
            card works with AWS. Now you can create a virtual VISA Debit card
            through the NayaPay app.
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://www.nayapay.com/"}>
              https://www.nayapay.com/
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Which can be used to create AWS/GCP/Azure accounts. This is good
            news for those students who find it difficult to create physical
            debit and credit cards from banks. You can also get a $300 credit
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html "
              }
            >
              https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            9. Multi-Cloud GraphQL Serverless API Development with Cloud
            Development Kit for Terraform (CDKTF) (Remote Zoom Class)
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://github.com/panaverse/learn-multicloud-api-development"
              }
            >
              Learn Multicloud Serverless API Development using CDK Terraform in
              Baby Steps
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
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/quarters/quarter1"> Quarter I </Link>
          </Text>
          <Box bg="#003566" color="white" borderRadius={"20px"}>
            <Text fontSize={"18px"} pl="40px" py="5px" mb="15px">
              Quarter II
            </Text>
          </Box>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/quarters/quarter3"> Quarter III </Link>
          </Text>
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

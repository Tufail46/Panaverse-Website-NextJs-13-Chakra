"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Q1body() {
  return (
    <Box maxW="8xl" mx="auto" p={"16px"}>
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box mb="20px" maxW={"5xl"} mx="auto" p={"12px"}>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            CS-101: Object-Oriented Programming using TypeScript
          </Text>
          <Text
            textAlign={"center"}
            color={"#03071e"}
            fontSize="40px"
            fontWeight={"bold"}
          >
            Quarter I
          </Text>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Duration: 13 Weeks
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Description:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Outline:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            1. HTML and CSS (Homework)
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6 "
              }
            >
              Learn HTML by Hira Khan (Watch Recorded Videos)
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            2. Web 3.0 and Metaverse Theory
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing "
              }
            >
              Introduction to Panaverse DAO
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing  "
              }
            >
              Web 3.0 User Guide
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing   "
              }
            >
              Complete Web 3 Assignments included in the Web 3 User Guide
              Virtual and Augmented Metaverse User Guide
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            3. Fundamentals of JavaScript
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://262.ecma-international.org/"}>
              ECMAScript 2022 Language Specification
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
              }
            >
              Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4 "
              }
            >
              Chapters 2-6, 13 of JavaScript from Beginner to Professional:
              Learn JavaScript quickly by building fun, interactive, and dynamic
              web apps, games, and pages
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
              }
            >
              JavaScript Book Code
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
              }
            >
              Getting Started Exercises with JavaScript and Node.js
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            Fundamentals of JavaScript and Node.js Quiz
          </Text>
          <Text pl="20px" color={"#03071e"} fontSize="18px">
            Topics Covered in the Quiz:
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            A. Background of JavaScript and How to use JavaScript in Browser
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            B. Variables, Primitive data types Analyzing and modifying data
            types, and Operators (Chapter 2 of JavaScript from Beginner to
            Professional)
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            C. Intro to Node.js, .mjs files, Modules, NPM, import, export, and
            using external modules with npm:
          </Text>
          <Text pl="60px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  "
              }
            >
              Node.js, .mjs files, Modules, NPM, import, export
            </Link>
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            D. How to accept user input in your Node.js JavaScript programs,
            this will allow us to create interactive Node.js console programs
            using prompt-sync library. The last example in this presentation
            shows you how to use prompt-sync library in your Node.js programs:
          </Text>
          <Text pl="60px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
              }
            >
              Example of importing prompt-sync library in your Node.js programs
            </Link>
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            Note: After this point, we will do all our class work and exercises
            using Node.js in .mjs files. We will also be able to develop
            interactive Node.js console programs which will greatly help the
            students to learn.
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            E. Using Arrays and Objects in Node.js Programs (chapter 3 of
            JavaScript from Beginner to Professional)
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            F. Using if and if else statements, else if statements, Conditional
            ternary operators, and switch statements in Node.js programs
            (chapter 4 of JavaScript from Beginner to Professional)
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            G. Using while loop, do while loop, for loop, for in, and for of
            loop in Node.js (chapter 5 of JavaScript from Beginner to
            Professional)
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            H. Using Basic functions, Function arguments, Return, Variable scope
            in functions, Recursive functions, Nested functions, Anonymous
            functions, and Function callbacks in Node.js (chapter 6 of
            JavaScript from Beginner to Professional)
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            I. Using Concurrency, Callbacks, Promises, async / await, and Event
            loop (chapter 13 of JavaScript from Beginner to Professional)
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            J. JavaScript promises, mastering the asynchronous
          </Text>
          <Text pl="60px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript  "
              }
            >
              JavaScript promises, mastering the asynchronous
            </Link>
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            K. New JavaScript Features in ECMAScript 2022 and 2021
          </Text>
          <Text pl="60px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg "
              }
            >
              New JavaScript Features in ECMAScript 2022 and 2021
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            4. Object-Oriented Programming with TypeScript
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
              }
            >
              Chapters 1-11 of Learning TypeScript: Enhance Your Web Development
              Skills Using Type-Safe JavaScript
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://github.com/panaverse/learn-typescript"}>
              Learning Repository
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://www.learningtypescript.com/"}>
              In Class Companion projects and articles for Learning TypeScript
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={"https://github.com/panaverse/typescript-node-projects"}
            >
              Homework Project
            </Link>
          </Text>
          <Text pl="20px" color={"#03071e"} fontSize="18px">
            Fundamentals of TypeScript Quiz
          </Text>
          <Text pl="40px" color={"#03071e"} fontSize="18px">
            TypeScript Professional Proficiency Quiz
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            5. TypeScript for React
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://profy.dev/article/react-typescript "}>
              Minimal TypeScript Crash Course For React with Interactive Code
              Exercises
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
          <Box bg="#003566" color="white" borderRadius={"16px"}>
            <Text fontSize={"18px"} pl="40px" py="5px" mb="15px">
              Quarter I
            </Text>
          </Box>
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

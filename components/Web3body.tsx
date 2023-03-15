"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
export default function Web3body() {
  return (
    <Box maxW="8xl" mx="auto" p={"16px"}>
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box mb="20px" maxW={"5xl"} mr="12px" p={"12px"}>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Web 3 and Metaverse Specialization
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
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </Text>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Duration: 13 Weeks
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Description:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            In this course you will learn how to develop Web 3.0 DApps, create a
            project, deploy it in production, write smart contracts, unit test
            them, and create user interfaces for them. We will also learn to
            develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that
            in order to develop Web 3 applications you also need to build on top
            of Web 2.0 technologies which we have already covered in the
            previous quarters.
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db"
              }
            >
              https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Outline:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            1. Blockchain and Metaverse Theory
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
              }
            >
              The Metaverse: And How It Will Revolutionize Everything by Matthew
              Ball
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
              }
            >
              Mastering Blockchain - Fourth Edition by Imran Bashir
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            2. Smart Contract Development in Solidity
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
              }
            >
              Solidity Programming Essentials - Second Edition By Ritesh Modi
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
              }
            >
              Solidity Learning Repo
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            3. Dapp Development using Ethers.js and Next.js 13
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://github.com/panaverse/dapps-nextjs"}>
              Dapp Learning Repo
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={"https://www.figma.com/community/file/768809027799962739"}
            >
              Figma Design Kit for TailwindCSS
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            4. Tokennomics
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            5. Blockchain Project: Create a Token and Launch ICO/IEO/IDO
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            As you probably know, the ICO (Initial Coin Offering) industry has
            been booming, and its completely reinventing the way new startups
            kickstart themselves. In fact, have a look at Wikipedias list of
            highest crowdfunding projects
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
              }
            >
              https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            and you will notice that blockchain projects absolutely dominate the
            list.
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Understand the difference between IDO vs. IEO vs. ICO
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://phemex.com/blogs/what-is-a-dex-ido "}>
              https://phemex.com/blogs/what-is-a-dex-ido
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Also check these links for latest listings:
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://icodrops.com "}>ICO list at ICO Drops</Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://topicolist.com/"}>
              ICO List of Best New Initial Coin Offerings
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://cryptototem.com/ico-list/ "}>
              Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
              IDOs{" "}
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={" https://www.icolistingonline.com  "}>
              ICO List Online
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://coincodex.com/ieo-list/binance/ "}>
              Binance IEO List
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
              }
            >
              Binance Launchpad{" "}
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://icomarks.com/ieo "}>IEO List</Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://polkastarter.com "}>Polkastarter</Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Project Part 1: How to Launch a IEO on Binance Launchpad
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://appinventiv.com/blog/how-to-launch-an-ieo/ "}>
              Read How to Launch an IEO{" "}
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04 "
              }
            >
              Your first task of the project is to make a google slides
              presentation on how to start a IEO on the Binance Launch Pad{" "}
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Note: Also document the alternatives to Binance Launchpad.
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Project Part 2: How to Launch a IDO on Polkastarter
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://cryptorank.io/fundraising-platforms"}>
              Review the list of top fundraising platforms{" "}
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://polkastarter.com/ "}>
              Your second task of the project is to make a google slides
              presentation on how to start a IDO on the Polkastarter
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Project Part 3: Create a Pako Token
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            By creating a token and related contracts, you will also learn how
            to handle money sent to your contracts, which should come in handy
            if you want to create some kind of paid decentralized service in the
            future.
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Therefore, for the sake of this chapter, lets imagine that our Pako
            DApp uses its own coin – the Pako Token. We will create two
            contracts – one for the token itself and one for the token crowd
            sale (the ICO).
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Now Create your own Pako ERC20 Token and deploy it on a testnet. The
            Token should be to use OpenZeppelin contracts. You will use the
            Hardhat development environment. Also, write at least twenty
            automated tests. We will be using Solidity and Typescript for
            development.
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Project Part 4: Develop Crowd Sale Contract
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            This contract will be responsible for allowing users to exchange ETH
            for our Pako Token. In order to do that we need to set a price for
            our token (1 ETH = 100 Pako Token) Implement a payable buyToken()
            function. Emit a BuyTokens event that will log who’s the buyer, the
            amount of ETH sent and the amount of Token bought
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Transfer 75% of the Tokens to the Crowd Sale contract at deployment
            time. i.e. Right after the contract is deployed, we want the token
            contract to send 75% of our token supply to it. While 25% remain in
            our personal owner account. Transfer the ownership of the Crowd Sale
            contract (at deploy time) to our frontend address so that we are
            able to withdraw the ETH. You can use the openzeppelin crowd sale
            contracts
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={"https://docs.openzeppelin.com/contracts/4.x/crowdsales/ "}
            >
              https://docs.openzeppelin.com/contracts/4.x/crowdsales
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            However you will have to update the code to the latest solidity
            version. Also write extensive tests, for example we will simply send
            a transaction of 1 ETH from a random account to the contract. After
            the transaction, we should expect the account to have received Pako,
            while the contracts balance should have been reduced. Note: Before
            you get started writing the token contract we suggest you review the
            access control
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://docs.openzeppelin.com/contracts/4.x/access-control "
              }
            >
              https://docs.openzeppelin.com/contracts/4.x/access-control
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Project Part 5: Trying it with MetaMask
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            While it is always good to test your code, it is often more
            satisfying to see the results of your work wrapped in a nice UI.
            Lets see how we can deploy our contracts and get some Pako tokens
            into our MetaMask wallet! We start by running our deployment scripts
            for the test network so that the new token contracts are uploaded
            and deployed. When it is done, take note of what addresses the
            contracts were uploaded to and copy it! Now head to MetaMask, and
            send a transaction of 1 ETH to the crowd sale contract address. If
            your MetaMask wallet does not have any ethers, remember that you can
            use any faucet. After the transaction has been confirmed, you might
            be confused about why you cannot see any tokens in your wallet. It
            turns out that you need to manually add the token address in
            MetaMask in order to register it – after all, there are so many
            tokens out there, there is no way MetaMask could list them all by
            default! To do this, open the side menu and click on the Add token
            button to get started: Once you are on the token page, click on Add
            custom token and paste in the token contract address in the address
            field. After confirming that you want to add the token, you should
            be able to see your Pako balance right next to your ETH balance in
            the wallet. How cool!
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Project Part 6: Trying it with Multisignature Wallets
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/ "
              }
            >
              Read
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://gnosis-safe.io/ "}>Gnosis Safe</Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Project Part 7: Sending Tokens using Ethers.js
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Write a Typescript program to send Pako Token to some friend address
            using Ethers.js.
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://ethereum.org/en/developers/tutorials/send-token-etherjs/ "
              }
            >
              You may follow this tutorial
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/ "
              }
            >
              Read this NFT tutorial series
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://docs.openzeppelin.com/contracts/4.x/erc721"}>
              Create a NFT contract using the OpenZepplen ERC721 NFT Standard
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://docs.openzeppelin.com/contracts/4.x/erc721#Presets "
              }
            >
              You may use the Preset ERC721 contract
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://opensea.io/"}>
              Deploy your NFT contract on a testnet
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
              }
            >
              Implement a ERC721 Market
            </Link>
          </Text>
          <Text
            textAlign={"center"}
            color={"#03071e"}
            fontSize="40px"
            fontWeight={"bold"}
            pt="50px"
          >
            Quarter V
          </Text>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
            Experiences
          </Text>
          <Text textAlign={"center"} color={"#03071e"} fontSize="20px">
            Duration: 13 Weeks
          </Text>
          <Text color={"#03071e"} fontSize="28px" fontWeight={"bold"}>
            Course Description:
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            The Web is the Metaverse. The metaverse requires an infrastructure
            that connects all of the metaverses so that we can travel between
            them. This is only achievable with open web-based metaverses. The
            internet and its browsers are magical. Federated but linked
            experiences connect pages, people, technology, businesses,
            standards, and nations. It is unlike anything else. The metaverse
            should replicate the best qualities of the web - it should just be
            the web. We just have to extend online responsive design from mobile
            to desktop to 3D, Augmented Reality, and Virtual Reality. This
            course will teach you how to build the Open Social Spatial Web with
            WebXR and WebGPU technologies.
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            1. Open Metaverse Web Development
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://github.com/panaverse/metaverse-web"}>
              Open Metaverse Learning Repo
            </Link>
          </Text>
          <Text color={"#03071e"} fontSize="20px">
            1. Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
          </Text>
          <Text color={"#03071e"} fontSize="20px" pl="20px">
            Blender development is being funded by heavyweights in the real-time
            3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS,
            Epic Games, Adobe, Microsoft, and Decentraland. It is expected to
            become the standard asset creation tool for metaverse.
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://www.blender.org/download/"}>
              Blender 3.3+ Download
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
              }
            >
              Blender 3.0 Beginner Tutorial
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit "
              }
            >
              Blender 3.0 Hotkey
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 "
              }
            >
              Blender Projects Textbook: Blender by Example 2nd Edition
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link
              href={
                "https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5 "
              }
            >
              Blender Textbook: The Complete Guide to Blender Graphics: Computer
              Modeling & Animation 7th Edition by John M. Blain
            </Link>
          </Text>
          <Text pl="20px" color={"blue"} fontStyle="oblique" fontSize="16px">
            <Link href={"https://www.youtube.com/watch?v=H7T0SzdFHwg "}>
              Best Hardware Performance for Blender Rendering
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
          <Text fontSize={"18px"} pl="40px" py="5px" mb="15px">
            <Link href="/quarters/quarter2"> Quarter II </Link>
          </Text>
          <Text fontSize={"18px"} pl="40px" pb="15px">
            <Link href="/quarters/quarter3"> Quarter III </Link>
          </Text>
          <Text fontSize={"30px"} pb="15px" fontWeight={"bold"}>
            Specialized Course
          </Text>
          <Box bg="#003566" color="white" borderRadius={"20px"}>
            <Text fontSize={"18px"} pl="40px" py="15px">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </Text>
          </Box>
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

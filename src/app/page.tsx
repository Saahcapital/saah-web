"use client";

import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Image,
  HStack,
  Text,
  Container,
  SimpleGrid,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import NavBar from "./components/header/NavBar";
import ProductCard from "./components/products/ProductCard";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Footer from "./components/footer/Footer";
import { AccordionList } from "./components/According/AccordionList";
import { saahCapitalRoleListings } from "./components/According/saahCapitalRoleList";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Box as="section" px={{ base: "4", md: "8" }}>
        <Container py={{ base: "10", md: "24" }} height="full" maxW={'8xl'}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={"6"}
            justifyContent="space-between"
            align={{ lg: "center" }}
            height="full"
          >
            <Stack spacing={6} maxW={{ md: "4xl", lg: "3xl" }} my="auto">
              <Heading
                as="h1"
                size={{ base: "sm", md: "xl" }}
                fontWeight="extrabold"
                lineHeight="1.2"
                letterSpacing="tight"
              >
                Sa’ah Capital,
                <Text
                mt={{ base: "4", md: "2" }}
                  fontSize={{ base: "sm", md: "3xl" }}
                  fontWeight="extrabold"
                >
                  Guiding your Financial Future Through Technology
                </Text>
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "2xl" }}
                fontWeight="normal"
                color="muted"
              >
                Delivering trusted financial market Knowledge
              </Text>

              {/* <HStack mt={5}>
              <Button size="lg" variant="primary" px="10"  >
                Explore
              </Button>
            </HStack> */}
            </Stack>

            <Box>
              <Image
                width={{ base: "250px", md: "450px" }}
                height={{ base: "250px", md: "450px" }}
                borderRadius='lg'
                objectFit="cover"
                src="/saahcapital-dashbaord.svg"
                alt="Saudi Investments"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box as="section" px={{ base: "4", md: "8" }} bg="#F3F4F8">
        <Container py={{ base: "10", md: "28" }} height="full" maxW={'8xl'}>
          <Stack spacing={"6"}>
            <Heading
              as="h3"
              size={{ base: "md", md: "lg" }}
              fontWeight="extrabold"
              lineHeight="1.2"
              letterSpacing="tight"
              mx="auto"
            >
              Saudi Financial Market At your Fingertips
            </Heading>

            <SimpleGrid
              my={10}
              columns={{ base: 2, md: 4 }}
              gap={{ base: "5", md: "8" }}
              py={10}
              px={{ base: "5", md: "6" }}
            >
              <ProductCard productTitle="Stock Market" urlLink='/stock-market' imageUrl='/stock-market.png'/>
              <ProductCard productTitle="Mutual Funds Marketplace" urlLink='/mutual-funds-marketplace' imageUrl='/mutual-funds.png' />
              <ProductCard productTitle="Indices" urlLink='/Indices' imageUrl='/index.png'/>
              <ProductCard productTitle="Financial Analysis Tools" urlLink='/analysis-tools' imageUrl='/analytics-tool.png' />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
      <Box as="section" px={{ base: "4", md: "8" }} bg="bg-canvas" >
        <Container py={{ base: "10", md: "10" }} height="full" maxW={'8xl'}>
          <Center>
          <SimpleGrid
            columns={{ base: 6, md: 6 }}
            gap={{ base: "5", md: "8" }}
            px={{ base: "5", md: "6" }}
          >
            <Image
              htmlWidth="200px" // Adjust width as needed
              htmlHeight="200px" // Adjust height as needed
              src="./yaqeen.png"
              alt="SVG Image"
            /> 
            <Image
              htmlWidth="200px" // Adjust width as needed
              htmlHeight="200px" // Adjust height as needed
              src="https://global-uploads.webflow.com/625ef70d6fdb0a34f296674a/626197c89fb33230f34d67a2_snb.png"
              alt="SVG Image"
            />
            <Image
              htmlWidth="200px" // Adjust width as needed
              htmlHeight="200px" // Adjust height as needed
              src="./al-rajhi.jpeg"
              alt="SVG Image"
            /> <Image
              htmlWidth="200px" // Adjust width as needed
              htmlHeight="200px" // Adjust height as needed
              src="https://global-uploads.webflow.com/625ef70d6fdb0a34f296674a/626197c8ef0b1e52a74384fa_arbah.png"
              alt="SVG Image"
            /> <Image
              htmlWidth="200px" // Adjust width as needed
              htmlHeight="200px" // Adjust height as needed
              src="https://global-uploads.webflow.com/625ef70d6fdb0a34f296674a/626197c8b9e2ff1c22e09092_aljazira.png"
              alt="SVG Image"
            /><Image
              htmlWidth="200px" // Adjust width as needed
              htmlHeight="200px" // Adjust height as needed
              src="https://global-uploads.webflow.com/625ef70d6fdb0a34f296674a/626197c88803d35c5a2af7ce_albilad.png"
              alt="SVG Image"
            />
         
          </SimpleGrid>
          </Center>
        </Container>
      </Box>

      <Box as="section" px={{ base: "4", md: "8" }} bg="#F3F4F8">
        <Container py={{ base: "10", md: "28" }} height="full" maxW={'8xl'}>
          <Stack spacing={"6"}>
            <Heading
              as="h3"
              size={{ base: "md", md: "lg" }}
              fontWeight="extrabold"
              lineHeight="1.2"
              letterSpacing="tight"
              mx="auto"
            >
              Saah Capitals Role
            </Heading>

            <Container my={10}
      maxW={900}
    >
            <Accordion defaultIndex={0} allowMultiple allowToggle>
          
            {saahCapitalRoleListings.map((listing, id) => (
          <AccordionList key={id} {...listing} />
        ))}
       
      </Accordion>
      </Container>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

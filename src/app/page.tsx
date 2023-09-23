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
        <Container py={{ base: "10", md: "24" }} height="full">
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
                size={{ base: "md", md: "xl" }}
                fontWeight="extrabold"
                lineHeight="1.2"
                letterSpacing="tight"
              >
                Saudi Investments,
                <Text
                  fontSize={{ base: "md", md: "5xl" }}
                  fontWeight="extrabold"
                >
                  Guiding your financial future.
                </Text>
              </Heading>
              <Text
                fontSize={{ base: "md", md: "2xl" }}
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
                width="550px"
                objectFit="cover"
                src="/4.png"
                alt="Saudi Investments"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box as="section" px={{ base: "4", md: "8" }} bg="#F3F4F8">
        <Container py={{ base: "10", md: "28" }} height="full">
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
              <ProductCard productTitle="Stock Market" urlLink='/stock-market'/>
              <ProductCard productTitle="Mutual Funds Marketplace" urlLink='/mutual-funds-marketplace' />
              <ProductCard productTitle="Indices" urlLink='/Indices'/>
              <ProductCard productTitle="Analysis Tools" urlLink='/analysis-tools' />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
      <Box as="section" px={{ base: "4", md: "8" }} bg="bg-canvas">
        <Container py={{ base: "10", md: "10" }} height="full">
          <Center>
          <SimpleGrid
            columns={{ base: 2, md: 2 }}
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
              src="./al-rajhi.jpeg"
              alt="SVG Image"
            />
         
          </SimpleGrid>
          </Center>
        </Container>
      </Box>

      <Box as="section" px={{ base: "4", md: "8" }} bg="#F3F4F8">
        <Container py={{ base: "10", md: "28" }} height="full">
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

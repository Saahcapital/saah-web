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
  AccordionPanel
} from "@chakra-ui/react";
import NavBar from "./components/header/NavBar";
import ProductCard from "./components/products/ProductCard";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Box
        as="section"
        px={{ base: "4", md: "8" }}
      >
        <Container py={{ base: '10', md: '24' }} height="full">
          <Stack direction={{ base: "column", lg: "row" }} spacing={"6"} justifyContent='space-between' align={{ lg: 'center' }} height="full"
          >
            <Stack spacing={6} maxW={{ md: '4xl', lg: '3xl', }} my='auto' >
              <Heading
                as="h1"
                size={{ base: "md", md: "xl" }}
                fontWeight="extrabold"
                lineHeight="1.2"
                letterSpacing="tight"
              >
                Saudi Investments,
                <Text fontSize={{ base: "md", md: "5xl" }} fontWeight="extrabold">
                  Guiding your financial future.
                </Text>
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} fontWeight="normal" color='muted'>
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
                objectFit="cover"
                src="https://global-uploads.webflow.com/625ef70d6fdb0a34f296674a/63ac34b3dd3c6345c6412b95_mutual-funds-p-500.png"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box
        as="section"
        px={{ base: "4", md: "8" }}
        bg='#F3F4F8'
      >
        <Container py={{ base: '10', md: '28' }} height="full">
          <Stack spacing={"6"} >

            <Heading
              as="h3"
              size={{ base: "md", md: "md" }}
              fontWeight="extrabold"
              lineHeight="1.2"
              letterSpacing="tight"
              mx='auto'

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
              <ProductCard productTitle='Stock' />
              <ProductCard productTitle='Mutual Funds Marketplace' />
              <ProductCard productTitle='Index' />
              <ProductCard productTitle='Analysis Tools' />
            </SimpleGrid>

          </Stack>

        </Container>
      </Box>

      <Box
        as="section"
        px={{ base: "4", md: "8" }}
        bg='bg-canvas'
      >
        <Container py={{ base: '10', md: '28' }} height="full">
          <Stack spacing={"6"} >

            <Heading
              as="h3"
              size={{ base: "md", md: "md" }}
              fontWeight="extrabold"
              lineHeight="1.2"
              letterSpacing="tight"
              mx='auto'

            >
              Saah Capitals Role

            </Heading>

           


          </Stack>

        </Container>
      </Box>

    </Box>
  );
}

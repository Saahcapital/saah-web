"use client";

import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Container,
  HStack,
  Icon,
  List,
  ListItem,
} from "@chakra-ui/react";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
import { FiCheck } from "react-icons/fi";


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
                size={{ base: "md", md: "lg" }}
                fontWeight="extrabold"
                lineHeight="1.2"
                letterSpacing="tight"
              >
                Analysis Tools
                
              </Heading>
              
 <List spacing="4">
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Offers insights for trading decisions</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Identifies chart patterns for predictions.</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Helps to understand the entry and exit points.</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Helps to understand the entry and exit pointsAids in risk management levels.</Text>
              </HStack>
            </ListItem>
            </List>
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
     
      <Footer />
    </Box>
  );
}

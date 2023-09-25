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
      <Box as="section" px={{ base: "4", md: "8" }} >
        <Container py={{ base: "10", md: "24" }} height="80vh" maxW={'8xl'}>
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
               Stock Market 
                
              </Heading>
              
 <List spacing="4">
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Easy for beginners, powerful for experts.</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Execute market orders effortlessly.</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Keep up with IPOs and bid on time.</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Make smart decisions with expert tools.</Text>
              </HStack>
            </ListItem>
            </List>
            </Stack>

            <HStack>
            <Image
             
             width="250px"
             objectFit="cover"
             src="/stock-market-one.png"
             alt="Saudi Investments"
           />
              <Image
             
                width="250px"
                objectFit="cover"
                src="/stock-market.png"
                alt="Saudi Investments"
              />  
             
            </HStack>
          </Stack>
        </Container>
      </Box>
     
      <Footer />
    </Box>
  );
}

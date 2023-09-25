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
               Mutual Funds Marketplace 
                
              </Heading>
              
 <List spacing="4">
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Monitor past and present mutual fund performance.
</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Compare mutual funds head-to-head for informed choices.
</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Access comprehensive fund details easily.
</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Streamline account opening and management with one-time, paperless KYC processes for added convenience.
</Text>
              </HStack>
            </ListItem> 
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="4" />
                <Text fontSize={'lg'} color='muted'>Subscribe directly to your chosen mutual fund.

</Text>
              </HStack>
            </ListItem>
            </List>
            </Stack>

            <HStack>
            <Image
             
             width="250px"
             objectFit="cover"
             src="/mutual-funds.png"
             alt="Mutual Funds"
           />
              <Image
             
                width="250px"
                objectFit="cover"
                src="/mutual-funds-two.png"
                alt="Mutual Funds"
              />  
             
            </HStack>
          </Stack>
        </Container>
      </Box>
     
      <Footer />
    </Box>
  );
}

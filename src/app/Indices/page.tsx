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
      <Box as="section" px={{ base: "4", md: "8" }} height={'82vh'}>
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
                size={{ base: "md", md: "lg" }}
                fontWeight="extrabold"
                lineHeight="1.2"
                letterSpacing="tight"
              >
               Indices
                
              </Heading>
              
 <List spacing="4">
            <ListItem color="muted">
              <HStack spacing="2">
                {/* <Icon as={FiCheck} color="prime" boxSize="4" /> */}
                <Text fontSize={'lg'} color='muted'>We are creating Saudi indices because we believe they will play a crucial role in leading the global economies and serve as reliable indicators of overall economic performance. Similar to indices like the DAX or NASDAQ, Saudi indices are expected to exhibit significant volatility, offering multiple profit opportunities.
</Text>
              </HStack>
            </ListItem>
           
            </List>
            </Stack>

            <Box>
              <Image
                 width="250px"
                objectFit="cover"
                src="/index.png"
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

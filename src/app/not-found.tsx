import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <Flex
      align="center"
      justify="center"
      minHeight="100vh"
      direction="column"
    >
      <Box textAlign="center">
      <Heading
          as="h1"
          size={{ base: "md", md: "4xl" }}
          fontWeight="extrabold"
          
          mx="auto"
          lineHeight="1.2"
          letterSpacing="tight"
          textAlign="center"
        >
           404
        </Heading>
        <Text fontSize="2xl" fontWeight="bold">
          Page not found
        </Text>
        <Text fontSize="lg" mt={4}>
          The page you are looking for does not exist.
        </Text>
        <Link href="/">
          <Button  size="lg" variant="primary" mt={8}>
            Go Home
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Custom404;

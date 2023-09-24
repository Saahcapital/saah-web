"use client";

import {
  Box,
  Button,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Container,
  ButtonGroup,
  HStack,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";

import MobileDrawer from "./MobileDrawer";
import { useRouter } from "next/navigation";

import { useRef } from "react";
import { NavItem } from "@/app/models/NavItem";

const NavItems: Array<NavItem> = [
  // {
  //   label: "Our Products",
  //   href: "/#products",
  // },
  // {
  //   label: "Partners",
  //   href: "/#partners",
  // },
];

export default function NavBar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const router = useRouter();

  return (
    <Box as="nav" borderBottom="1px solid #e2e8f0" position="sticky" top="0" zIndex="1000"  bg='bg-canvas' >
      <Box position="relative" zIndex="tooltip">
        <Container py="5" maxW={'8xl'}>
          <HStack justify="space-between">
            <Image
              htmlWidth="150px" // Adjust width as needed
              htmlHeight="150px" // Adjust height as needed
              src="/saahLogo.svg"
              alt="SVG Image"
              onClick={() => router.push("/")}
              cursor="pointer"
            />
            {isDesktop ? (
              <HStack spacing="8">
                <ButtonGroup
                  size="lg"
                  variant="text"
                  colorScheme="gray"
                  spacing="8"
                >
                  {NavItems.map((item) => (
                    <Link key={item.label} href={item.href} fontSize='lg' fontWeight={'bold'}>
                      {item.label}
                    </Link>
                  ))}
                </ButtonGroup>
                <Button
                fontSize='lg' fontWeight={'bold'}
                  variant="primary"
                  as="a"
										href="mailto:info@saah-capital.com"
                  
                  px={6}
                >
                  Contact
                </Button>
              </HStack>
            ) : (
              <>
                <MobileDrawer />
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}

"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../design-system";
import { CacheProvider } from "@chakra-ui/next-js";

export function UiProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} >{children}</ChakraProvider>
    </CacheProvider>
  );
}

import { ButtonGroup, Container, IconButton, Stack, Text, Image, Box, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'




export default function Footer() {



  return (
  
   
    <Box
      bg='bg-canvas'
      color={useColorModeValue('gray.700', 'gray.200')}
     >
      <Container
        as={Stack}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Image
              htmlWidth="100px" // Adjust width as needed
              htmlHeight="100px" // Adjust height as needed
              src='/saahLogo.svg'
              alt="SVG Image"
            />
        <Text>© 2023 Saah Financial. All rights reserved</Text>
       
      </Container>
    </Box>
 
  )
}
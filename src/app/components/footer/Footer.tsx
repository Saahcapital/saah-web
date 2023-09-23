import { ButtonGroup, Container, IconButton, Stack, Text, Image, Box, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'




export default function Footer() {



  return (
  
   
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
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
        <Stack direction={'row'} spacing={6}>
        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
        </Stack>
      </Container>
    </Box>
 
  )
}
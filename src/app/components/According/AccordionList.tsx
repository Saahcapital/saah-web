import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Button,
    HStack,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import { MdAccessTime, MdLocationOn } from 'react-icons/md'
  import { saahCapitalRoleList } from './saahCapitalRoleList'

  export const AccordionList = ({title, description}: saahCapitalRoleList) => {
   
    return (
      <AccordionItem p="6" border='none'   bg='white' my={3} borderRadius='lg'>
        <AccordionButton gap={4} px="0" cursor='pointer'  justifyContent='space-between'>

          <Heading
              as="h3"
              size={{ base: "md", md: "xs" }}
              fontWeight="bold"
              lineHeight="1.2"
              letterSpacing="tight"
             
            >
              {title}
            </Heading>

          <AccordionIcon />

        </AccordionButton>
        <AccordionPanel px="0" pb={4} >
          <Stack spacing={{ base: '6', md: '8' }}>
            <Stack spacing={{ base: '4', md: '5' }}>
              <Text color="fg.muted">{description}</Text>
            </Stack>
    
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    )
  }
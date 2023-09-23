import {
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Badge,
    Button,
    HStack,
    Icon,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import { MdAccessTime, MdLocationOn } from 'react-icons/md'
  


  interface AccordionListProps {
    title: string;
    description: string;
  }

  export const AccordionList = ({title, description}: AccordionListProps) => {
   
    return (
      <AccordionItem py="4">
        <AccordionButton gap={4} px="0">
          <Text as="h2" fontWeight="semibold" textStyle="xl">
            {title}
          </Text>
        </AccordionButton>
        <AccordionPanel px="0">
          <Stack spacing={{ base: '6', md: '8' }}>
            <Stack spacing={{ base: '4', md: '5' }}>
              <Text color="fg.muted">{description}</Text>
            </Stack>
    
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    )
  }
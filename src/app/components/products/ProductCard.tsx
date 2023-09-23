import {
  Button,
  Container,
  Divider,
  Image,
  Heading,
  HStack,
  Spacer,
  Stack,
  Tag,
  Text,
  useToast,
  AspectRatio,
  Skeleton,
  Box,
  Center,
  useColorModeValue,
  Icon,
  ListItem,
  List,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { StringDecoder } from "string_decoder";
import{FiCheck} from 'react-icons/fi'



interface ProductCardProps {
  productTitle: string;
  urlLink: string;
}


export default function ProductCard({productTitle, urlLink} : ProductCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(urlLink); // Use router.push to navigate
  };
  return (
    <Container
      
      px={0}
      py={0}
      rounded='lg'
      bg='white'
      cursor='pointer'
      onClick={handleClick}
    >
      <Stack spacing={5}>
        <Box position="relative">
          <AspectRatio ratio={3 / 2}>
            <Image
              h={10}
              borderRadius='lg'
              src={''}
              alt={''}
              draggable="false"
              fallback={<Skeleton />}
            />
          </AspectRatio>
      
        </Box>
        <Stack spacing={3} p={5}>
         
            <Heading
              as="h4"
              fontSize="xl"
              fontWeight='bold'
              noOfLines={2}
              overflowWrap="break-word"
              textAlign='center'
            >
              {productTitle}
            </Heading>
            {/* <List spacing="4">
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="3" />
                <Text fontSize={'sm'} color='muted'>Easy for beginners, powerful for experts</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="3" />
                <Text fontSize={'sm'} color='muted'>Easy for beginners, powerful for experts</Text>
              </HStack>
            </ListItem>
            <ListItem color="muted">
              <HStack spacing="2">
                <Icon as={FiCheck} color="prime" boxSize="3" />
                <Text fontSize={'sm'} color='muted'>Easy for beginners, powerful for experts</Text>
              </HStack>
            </ListItem>
            </List> */}
            
         
         
        </Stack>
      </Stack>
    </Container>
  );
}

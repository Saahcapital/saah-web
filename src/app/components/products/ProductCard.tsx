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
  imageUrl: string;
}


export default function ProductCard({productTitle, urlLink,imageUrl} : ProductCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(urlLink); // Use router.push to navigate
  };
  return (
    <Container
      
      px={0}
      py={6}
      rounded='lg'
      bg='white'
      cursor='pointer'
      onClick={handleClick}
    >
      <Stack spacing={2}>
        <Box position="relative">
        
            <Image
            
          h={170}
          w='100%'
             objectFit="contain"
              borderRadius='lg'
              src={imageUrl}
              alt={productTitle}
              draggable="false"
              fallback={<Skeleton />}
            />
        
        </Box>
      
         
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
         
            

         
       
      </Stack>
    </Container>
  );
}

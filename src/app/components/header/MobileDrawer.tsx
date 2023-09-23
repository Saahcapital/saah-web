import { Button, Drawer, DrawerBody, DrawerContent, IconButton, Link, Stack, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { ToggleButton } from './ToggleButton'

import { useRouter } from 'next/navigation'



export default function MobileDrawer() {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter(); 

  const navigateAndCloseDrawer = (path : string) => {
    router.push(path); // Navigate to the specified path
    onClose(); // Close the drawer
  };

 
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: 'inline-flex', lg: 'none' }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose} >
        <DrawerContent bg={useColorModeValue('gray.50', 'gray.900')}>
          <DrawerBody mt="75px" p="4">
            <Stack spacing="3" py={8} >
              <Button size="lg" variant="tertiary" justifyContent="start"   onClick={() => navigateAndCloseDrawer('#shows')}>
              Shows
              </Button>
               <Button size="lg" variant="tertiary" justifyContent="start"  onClick={() => navigateAndCloseDrawer('#sponsors')} >
               Sponsors
              </Button>
              <Button size="lg" variant="tertiary" justifyContent="start" >
              Contact
              </Button>
                
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
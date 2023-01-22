import React from 'react'
import { useDisclosure,Drawer, DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody } from '@chakra-ui/react'

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
     <Drawer placement='down' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer></>
  )
}

export default Checkout
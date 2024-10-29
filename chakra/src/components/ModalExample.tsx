import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'

export default function ModalExample() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();

    const onConfirm = () => {
        toast({
            title: "Confirmation successful",
            duration: 3000,
            status: "success",
            isClosable: true
        })
    }

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Example Modal</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit explicabo repudiandae dolores labore dolorum rerum ad est facilis rem numquam nemo, eaque nam suscipit, odio assumenda eveniet deleniti. Ea, obcaecati.
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onConfirm} mr="3">Confirm</Button>
                        <Button colorScheme="red" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

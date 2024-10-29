import React from "react";
import { useToast, HStack, Button } from "@chakra-ui/react";

export default function ToastExample() {
    const toast = useToast();

    const onSuccess = () => {
        toast({
            title: "Success",
            status: "success",
            duration: 1000,
            isClosable: true
        })
    }

    const onError = () => {
        toast({
            title: "Error",
            status: "error",
            duration: 1000,
            isClosable: true
        })
    }

    const onInfo = () => {
        toast({
            title: "Info",
            status: "info",
            duration: 1000,
            isClosable: true
        })

    }

    return (<>
        <HStack gap="4">
            <Button colorScheme="green" onClick={onSuccess}>Success</Button>
            <Button colorScheme="red" onClick={onError}>Error</Button>
            <Button colorScheme="blue" onClick={onInfo}>Info</Button>
        </HStack>
    </>)
}

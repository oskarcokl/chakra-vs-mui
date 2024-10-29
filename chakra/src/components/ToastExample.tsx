import React from "react";
import { useToast, HStack, Button } from "@chakra-ui/react";

export default function ToastExample() {
    const onSuccess = () => {
        console.log("success");
    }

    const onError = () => {
        console.log("error");
    }

    const onInfo = () => {
        console.log("info");
    }

    return (<>
        <HStack gap="4">
            <Button colorScheme="green" onClick={onSuccess}>Success</Button>
            <Button colorScheme="red" onClick={onError}>Error</Button>
            <Button colorScheme="blue" onClick={onInfo}>Info</Button>
        </HStack>
    </>)
}

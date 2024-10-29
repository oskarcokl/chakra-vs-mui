import React from "react"
import { useState } from "react"
import { Stack, Input, Button, Card, CardHeader, CardBody, Heading, Text, FormControl, FormLabel } from "@chakra-ui/react"

export default function Login() {
    const [emailErrorMessage, setEmailErrorMessage] = useState("")

    function loginHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formElements = (e.target as HTMLFormElement).elements;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(formElements["email"].value)) {
            setEmailErrorMessage('Not valid email address')
        }
        console.log(formElements["email"].value);
        console.log(formElements["password"].value);
    }

    return (
        <Card w="sm">
            <CardHeader>
                <Heading>Login</Heading>
                <Text>Login with your email and password</Text>
            </CardHeader>
            <CardBody>
                <form onSubmit={loginHandler}>
                    <Stack gap="4" align="flex-end" maxW="sm">
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input name="email" type="email" placeholder="Enter your email"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" name="password" placeholder="Enter your password"/>
                        </FormControl>
                        <Button type="submit">Login</Button>
                    </Stack>
                </form>
            </CardBody>
        </Card>
    )
}

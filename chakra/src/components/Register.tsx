import React from "react"
import { Stack, Input, Button, Card, CardHeader, CardBody, Text, Heading, FormLabel, FormControl } from "@chakra-ui/react"

export default function Register() {
    function loginHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formElements = Array.from((e.target as HTMLFormElement).elements) as HTMLFormElement[];
        const formValues = formElements.map(formElement => formElement.value);
        console.log(formValues)
    }

    return (
        <Card w="sm">
            <CardHeader>
                <Heading>Register</Heading>
                <Text>Fill out the information bellow to create an account.</Text>
            </CardHeader>
            <CardBody>
                <form onSubmit={loginHandler}>
                    <Stack gap="4" align="flex-end" maxW="sm">
                        <FormControl isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input name="first-name" placeholder="Enter your first name"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input name="last-name" placeholder="Enter your last name"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input name="email" type="email" placeholder="Enter your email"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" name="password" placeholder="Enter your password"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Repeat Password</FormLabel>
                            <Input type="password" name="re-password" placeholder="Enter your password again :)"/>
                        </FormControl>
                        <Button type="submit">Register</Button>
                    </Stack>
                </form>
            </CardBody>
        </Card>
    )
}

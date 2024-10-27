import React from "react"
import { Stack, Input, Button, Card } from "@chakra-ui/react"
import { Field } from "./ui/field"
import { PasswordInput } from "./ui/password-input"

export default function Login() {
    function loginHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formElements = (e.target as HTMLFormElement).elements;
        console.log(formElements["email"].value);
        console.log(formElements["password"].value);
    }

    return (
        <Card.Root w="sm">
            <Card.Header>
                <Card.Title>Login</Card.Title>
                <Card.Description>Login with your email and password</Card.Description>
            </Card.Header>
            <Card.Body>
                <form onSubmit={loginHandler}>
                    <Stack gap="4" align="flex-end" maxW="sm">
                        <Field label="Email">
                            <Input name="email" placeholder="Enter your email"/>
                        </Field>
                        <Field label="Password">
                            <PasswordInput name="password" placeholder="Enter your password"/>
                        </Field>
                        <Button type="submit">Login</Button>
                    </Stack>
                </form>
            </Card.Body>
        </Card.Root>
   )
}

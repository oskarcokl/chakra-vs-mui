import React from "react"
import { Stack, Input, Button, Card } from "@chakra-ui/react"
import { Field } from "./ui/field"
import { PasswordInput } from "./ui/password-input"

export default function Register() {
    function loginHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formElements = Array.from((e.target as HTMLFormElement).elements) as HTMLFormElement[];
        const formValues = formElements.map(formElement => formElement.value);
        console.log(formValues)
    }

    return (
        <Card.Root w="sm">
            <Card.Header>
                <Card.Title>Register</Card.Title>
                <Card.Description>Fill out the information bellow to create an account.</Card.Description>
            </Card.Header>
            <Card.Body>
                <form onSubmit={loginHandler}>
                    <Stack gap="4" align="flex-end" maxW="sm">
                        <Field label="First Name">
                            <Input name="first-name" placeholder="Enter your first name"/>
                        </Field>
                        <Field label="Last Name">
                            <Input name="last-name" placeholder="Enter your last name"/>
                        </Field>
                        <Field label="Email">
                            <Input name="email" placeholder="Enter your email"/>
                        </Field>
                        <Field label="Password">
                            <PasswordInput name="password" placeholder="Enter your password"/>
                        </Field>
                        <Field label="Repeat Password">
                            <PasswordInput name="re-password" placeholder="Enter your password again :)"/>
                        </Field>
                        <Button type="submit">Register</Button>
                    </Stack>
                </form>
            </Card.Body>
        </Card.Root>
    )
}

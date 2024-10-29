import React, { useState } from "react"
import { 
    Stack, 
    Input, 
    Button, 
    Card, 
    CardHeader, 
    CardBody, 
    Text, 
    Heading, 
    FormLabel, 
    FormControl,
    FormErrorMessage,
    useToast
} from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
    email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
    password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Passowrd must be atleast 8 characters long"),
    rePassword: z
    .string()
    .min(1, "Password is required"),
    firstName: z
    .string()
    .min(1, "First name is required"),
    lastName: z
    .string()
    .min(1, "Last name is required"),
}).superRefine(({ password, rePassword }, ctx) => {
    if (password != rePassword) {
        ctx.addIssue({
            code: "custom",
            message: "Passwords do not match",
            path: ["rePassword"]
        });
    }
});

type RegisterFormData = z.infer<typeof registerSchema>;


export default function Register() {
    const toast = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    })



    async function registerHandler(data: RegisterFormData) {
        setIsSubmitting(true);

        try {
            console.log("Form data:", data);

            await new Promise(resolve => setTimeout(resolve, 1000));

            toast({
                title: "Registration successful",
                status: "success",
                duration: 3000,
                isClosable: true
            });
        } catch {
            toast({
                title: "Registration failed",
                description: "Please fill out all of the required fields",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card w="sm">
            <CardHeader>
                <Heading>Register</Heading>
                <Text>Fill out the information bellow to create an account.</Text>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(registerHandler)}>
                    <Stack gap="4" align="flex-end" maxW="sm">
                        <FormControl isRequired isInvalid={!!errors.firstName}>
                            <FormLabel>First Name</FormLabel>
                            <Input {...register("firstName")} placeholder="Enter your first name"/>
                            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={!!errors.lastName}>
                            <FormLabel>Last Name</FormLabel>
                            <Input {...register("lastName")} placeholder="Enter your last name"/>
                            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={!!errors.email}>
                            <FormLabel>Email</FormLabel>
                            <Input {...register("email")} type="email" placeholder="Enter your email"/>
                            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={!!errors.password}>
                            <FormLabel>Password</FormLabel>
                            <Input {...register("password")} type="password" placeholder="Enter your password"/>
                            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={!!errors.rePassword}>
                            <FormLabel>Repeat Password</FormLabel>
                            <Input {...register("rePassword")} type="password" placeholder="Enter your password again :)"/>
                            <FormErrorMessage>{errors.rePassword?.message}</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" isLoading={isSubmitting}>Register</Button>
                    </Stack>
                </form>
            </CardBody>
        </Card>
    )
}

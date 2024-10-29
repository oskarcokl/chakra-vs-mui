import React from "react"
import { useState } from "react"
import { 
    Stack, 
    Input, 
    Button, 
    Card, 
    CardHeader, 
    CardBody, 
    Heading, 
    Text, 
    FormControl, 
    FormLabel,
    FormErrorMessage,
    useToast
} from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(1, "Password is required")
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
    const toast = useToast();
    const [isSubmiting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    async function loginHandler(data: LoginFormData) {
        setIsSubmitting(true);
        try {
            console.log("Form data:", data);

            await new Promise(resolve => setTimeout(resolve, 1000));

            toast({
                title: "Login successful",
                status: "success",
                duration: 3000,
                isClosable: true
            });
        } catch (error) {
            toast({
                title: "Login failed",
                description: "Please check your credentials and try again",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card w="sm">
            <CardHeader>
                <Heading>Login</Heading>
                <Text>Login with your email and password</Text>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(loginHandler)}>
                    <Stack gap="4" align="flex-end" maxW="sm">
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
                        <Button type="submit" isLoading={isSubmiting} loadingText="Loggin in">Login</Button>
                    </Stack>
                </form>
            </CardBody>
        </Card>
    )
}

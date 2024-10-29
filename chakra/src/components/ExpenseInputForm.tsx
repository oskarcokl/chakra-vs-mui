import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Card,
    CardHeader,
    Heading,
    CardBody,
    FormErrorMessage,
    useToast
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const categories = [
    'Food & Dining',
    'Transportation',
    'Entertainment',
    'Bills & Utilities',
    'Shopping',
    'Healthcare',
    'Other'
];

const expenseSchema = z.object({
    description: z
    .string()
    .min(1, "Description is required"),
    category: z
    .string()
    .min(1, "You must choose a category"),
    amount: z
    .string()
    .min(1, "Amount is required"),
    date: z
    .string()
    .date()
    .min(1, "Date is required")
});

type ExpenseFormData = z.infer<typeof expenseSchema>;

export default function ExpenseInputForm() {
    const toast = useToast();
    const [isSubmiting, setIsSubmitting] = useState(false);

     const {
         register,
         handleSubmit,
         formState: { errors }
     } = useForm<ExpenseFormData>({
        resolver: zodResolver(expenseSchema)
    })

    const expenseHandler = async (data: ExpenseFormData) => {
        setIsSubmitting(true);
        try {
            console.log(data);

            await new Promise(promise => setTimeout(promise, 1000));

            toast({
                title: "Expense added successfully",
                status: "success",
                duration: 3000,
                isClosable: true
            })
        } catch {
            toast({
                title: "Error adding expense",
                description: "Make sure all of the fields are filled out",
                status: "error",
                duration: 3000,
                isClosable: true
            })
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <Card w="md">
            <CardHeader>
                <Heading>Expense Input Form</Heading>
            </CardHeader>
            <CardBody>
                <Box as="form" onSubmit={handleSubmit(expenseHandler)}>
                    <Stack spacing={4}>
                        <FormControl isRequired isInvalid={!!errors.description}>
                            <FormLabel>Description</FormLabel>
                            <Input
                                {...register("description")}
                                placeholder="Enter expense description"
                            />
                            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired isInvalid={!!errors.category}>
                            <FormLabel>Category</FormLabel>
                            <Select
                                {...register("category")}
                                placeholder="Select category"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </Select>
                            <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired isInvalid={!!errors.amount}>
                            <FormLabel>Amount</FormLabel>
                            <NumberInput min={0} precision={2}>
                                <NumberInputField
                                    {...register("amount")}
                                    placeholder="Enter amount"
                                />
                            </NumberInput>
                            <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired isInvalid={!!errors.date}>
                            <FormLabel>Date</FormLabel>
                            <Input
                                {...register("date")}
                                type="date"
                                defaultValue={new Date().toISOString().split('T')[0]}
                            />
                            <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
                        </FormControl>
                        <Box display="flex" justifyContent="flex-end">
                            <Button type="submit" isLoading={isSubmiting}>Add Expense</Button>
                        </Box>
                    </Stack>
                </Box>
            </CardBody>
        </Card>
    );
};

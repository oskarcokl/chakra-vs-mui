import React from "react";
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
    CardBody
} from '@chakra-ui/react';


const categories = [
    'Food & Dining',
    'Transportation',
    'Entertainment',
    'Bills & Utilities',
    'Shopping',
    'Healthcare',
    'Other'
];

export default function ExpenseInputForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElements = Array.from((e.target as HTMLFormElement).elements) as HTMLFormElement[];
        const formValues = formElements.map(formElement => formElement.value);
        console.log(formValues)
    };


    return (
        <Card w="md">
            <CardHeader>
                <Heading>Expense Input Form</Heading>
            </CardHeader>
            <CardBody>
                <Box as="form" onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Description</FormLabel>
                            <Input
                                name="description"
                                placeholder="Enter expense description"
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Category</FormLabel>
                            <Select
                                name="category"
                                placeholder="Select category"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Amount</FormLabel>
                            <NumberInput min={0} precision={2}>
                                <NumberInputField
                                    name="amount"
                                    placeholder="Enter amount"
                                />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Date</FormLabel>
                            <Input
                                name="date"
                                type="date"
                                defaultValue={new Date().toISOString().split('T')[0]}
                            />
                        </FormControl>
                        <Box display="flex" justifyContent="flex-end">
                            <Button type="submit">Add Expense</Button>
                        </Box>
                    </Stack>
                </Box>
            </CardBody>
        </Card>
    );
};

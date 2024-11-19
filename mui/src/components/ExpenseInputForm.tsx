import {
    Card,
    CardHeader,
    CardContent,
    Stack,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Button,
    FormHelperText,
    Snackbar,
    Alert,
} from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

const categories = [
    'Food & Dining',
    'Transportation',
    'Entertainment',
    'Bills & Utilities',
    'Shopping',
    'Healthcare',
    'Other',
];

const expenseSchema = z.object({
    description: z.string().min(1, 'Description is required'),
    category: z.string().min(1, 'You must choose a category'),
    amount: z.string().min(1, 'Amount is required'),
    date: z.string().date().min(1, 'Date is required'),
});

type ExpenseFormData = z.infer<typeof expenseSchema>;

const ExpenseInputForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<ExpenseFormData>({
        resolver: zodResolver(expenseSchema),
    });

    const submitExpense: SubmitHandler<ExpenseFormData> = async (data) => {
        setIsSubmitting(true);

        try {
            console.log(data);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSnackbarSeverity('success');
            setSnackbarMessage('Expense added successfully!');
            setSnackbarOpen(true);

        } catch (error) {
            console.error(error);
            setSnackbarSeverity('error');
            setSnackbarMessage('Error adding expense!');
            setSnackbarOpen(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card variant="outlined" sx={{ maxWidth: '400px', margin: 'auto', mt: 10 }}>
            <CardHeader title="Expense Input Form" />
            <CardContent>
                <form onSubmit={handleSubmit(submitExpense)}>
                    <Stack spacing={2}>
                        <TextField
                            label="Description"
                            {...register('description')}
                            error={!!errors.description}
                            helperText={errors.description?.message}
                        />
                        <FormControl>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                label="Category"
                                labelId="category-label"
                                {...register('category')}
                                error={!!errors.category}>
                                {categories.map((category) => (
                                    <MenuItem value={category}>{category}</MenuItem>
                                ))}
                            </Select>
                            <FormHelperText error={!!errors.category}>
                                {errors.category?.message}
                            </FormHelperText>
                        </FormControl>
                        <NumericFormat
                            customInput={TextField}
                            label="Amount"
                            thousandSeparator=","
                            decimalSeparator="."
                            prefix="€"
                            decimalScale={2}
                            allowNegative={false}
                            valueIsNumericString
                            error={!!errors.amount}
                            helperText={errors.amount?.message}
                            onValueChange={(values) => {
                                setValue('amount', values.value);
                            }}
                        />
                        <TextField
                            label="Date"
                            type="date"
                            defaultValue={new Date().toISOString().split('T')[0]}
                            {...register('date')}
                            error={!!errors.date}
                            helperText={errors.date?.message}
                        />
                        <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Adding Expense...' : 'Add Expense'}
                        </Button>
                    </Stack>
                </form>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={() => setSnackbarOpen(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert>
                </Snackbar>
            </CardContent>
        </Card>
    );
};

export default ExpenseInputForm;

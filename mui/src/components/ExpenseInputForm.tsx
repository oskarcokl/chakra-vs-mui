import { Card, CardHeader, CardContent, Stack, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import { NumericFormat } from 'react-number-format';

const categories = [
    'Food & Dining',
    'Transportation',
    'Entertainment',
    'Bills & Utilities',
    'Shopping',
    'Healthcare',
    'Other'
];

const ExpenseInputForm = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted');
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: '400px', margin: 'auto', mt: 10 }}>
            <CardHeader title="Expense Input Form" />
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField label="Description" />
                        <FormControl>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select label="Category" labelId="category-label">
                                {categories.map((category) => (
                                <MenuItem value={category}>{category}</MenuItem>
                                ))}
                            </Select>
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
                        />
                        <TextField
                            label="Date"
                            type="date"
                            defaultValue={new Date().toISOString().split('T')[0]}
                        />
                        <Button type="submit" variant="contained" color="primary">Add Expense</Button>
                    </Stack>

                </form>
            </CardContent>
        </Card>
    )
}

export default ExpenseInputForm
import { Stack, Typography, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ComponentsList() {
  return (
      <>
          <Stack spacing={2} alignItems="center" mt={4}>
              <Typography variant="h3">Component List</Typography>
              <List>
                  <ListItem>
                      <Link to="/login">Login</Link>
                  </ListItem>
                  <ListItem>
                      <Link to="/register">Register</Link>
                  </ListItem>
                  <ListItem>
                      <Link to="/expense-input-form">Expense Input Form</Link>
                  </ListItem>
                  <ListItem>
                      <Link to="/confirmation-modal">Confirmation Modal</Link>
                  </ListItem>
                  <ListItem>
                      <Link to="/toast-example">Toast Example</Link>
                  </ListItem>
                  <ListItem>
                      <Link to="/navbar">Navbar</Link>
                  </ListItem>
                  <ListItem>
                      <Link to="/data-table">Data Table</Link>
                  </ListItem>
              </List>
          </Stack>
      </>
  );
}

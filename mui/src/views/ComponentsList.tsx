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
              </List>
          </Stack>
      </>
  );
}
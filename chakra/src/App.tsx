import React from "react"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { List, ListItem, Center, Heading, Button, Box, ChakraProvider as Provider } from "@chakra-ui/react"
import Login from "./components/Login";
import Register from "./components/Register";
import ExpenseInputForm from "./components/ExpenseInputForm";
import ModalExample from "./components/ModalExample";

function App() {
    return (
        <BrowserRouter>
            <Provider>
                <Center axis="horziontal" mt="10">
                    <NavLinks/>
                </Center>
                <Center h="vh">
                    <Routes>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="expense-input-form" element={<ExpenseInputForm/>}/>
                        <Route path="modal-example" element={<ModalExample/>}/>
                    </Routes>
                </Center>
                <Center>
                    <BackButton/>
                </Center>
            </Provider>
        </BrowserRouter>
    );
}

function BackButton() {
    const location = useLocation();
    const isRoot = location.pathname === "/"

    return <>
        { !isRoot && (
            <Link to="/">
                <Box my="10">
                    <Button>Back</Button>
                </Box>
            </Link> 
        )}
    </>
    }

function NavLinks() {
    // NOTE: Might be a better way of doing this but I honestly have no idea
    // what I'm doing.
    const location = useLocation();
    const isRoot = location.pathname === "/"
    
    return <>
        { isRoot && ( <Box w="sm">
            <Heading textAlign="center">Components list</Heading>
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
                    <Link to="/modal-example">Modal Example</Link>
                </ListItem>
            </List>
        </Box>
        )}
    </>
}

export default App;

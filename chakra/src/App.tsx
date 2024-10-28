import React from "react"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { List, Theme, Center, Card, Button, Box } from "@chakra-ui/react"
import { Provider } from "./components/ui/provider";
import Login from "./components/Login";
import Register from "./components/Register";
import ExpenseInputForm from "./components/ExpenseInputForm";

function App() {
    return (
        <BrowserRouter>
            <Provider>
                <Theme appearance="light">
                    <Center axis="horziontal" pt="10">
                        <NavLinks/>
                    </Center>
                    <Center h="vh">
                        <Routes>
                            <Route path="login" element={<Login/>}/>
                            <Route path="register" element={<Register/>}/>
                            <Route path="expense-input-form" element={<ExpenseInputForm/>}/>
                        </Routes>
                    </Center>
                    <Center>
                        <BackButton/>
                    </Center>
                </Theme>
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
                <Box pb="10">
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
        { isRoot && ( <Card.Root size="lg">
            <Card.Header>
                <Card.Title>Components list</Card.Title>
            </Card.Header>
            <Card.Body>
                <List.Root>
                    <List.Item>
                        <Link to="/login">Login</Link>
                    </List.Item>
                    <List.Item>
                        <Link to="/register">Register</Link>
                    </List.Item>
                    <List.Item>
                        <Link to="/expense-input-form">Expense Input Form</Link>
                    </List.Item>
                </List.Root>
            </Card.Body>
        </Card.Root>
        )}
    </>
}

export default App;

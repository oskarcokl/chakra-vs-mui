import React from "react"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { List, Theme, Center, Card, Button, Flex } from "@chakra-ui/react"
import { Provider } from "./components/ui/provider";
import Login from "./components/Login";
import Register from "./components/Register";

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
                        </Routes>
                    </Center>
                    <BackButton/>
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
                <Flex alignItems="flex-end" direction="column" w="vw" pr="10" pb="10">
                    <Button>Back</Button>
                </Flex>
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
                </List.Root>
            </Card.Body>
        </Card.Root>
        )}
    </>
}

export default App;

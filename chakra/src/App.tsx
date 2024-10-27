import React from "react"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { List } from "@chakra-ui/react"
import { Provider } from "./components/ui/provider";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <BrowserRouter>
            <Provider>
                <NavLinks/>
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

function NavLinks() {
    // NOTE: Might be a better way of doing this but I honestly have no idea
    // what I'm doing.
    const location = useLocation();
    const isRoot = location.pathname === "/"
    
    return <>
        { isRoot && (
            <List.Root>
                <List.Item>
                    <Link to="/login">Login</Link>
                </List.Item>
                <List.Item>
                    <Link to="/register">Register</Link>
                </List.Item>
            </List.Root>
        )}
    </>
}

export default App;

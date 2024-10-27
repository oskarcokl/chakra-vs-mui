import React from "react"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const isRoot = location.pathname === "/"
    
    return <>
        { isRoot && (<ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>)}
    </>
}

export default App;

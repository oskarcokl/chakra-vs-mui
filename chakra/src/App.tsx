import React from "react"
import { Provider } from "./components/ui/provider";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <Provider>
            <Login/>
            <Register/>
        </Provider>
    );
}

export default App;

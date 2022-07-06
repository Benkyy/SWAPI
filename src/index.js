import { render } from "react-dom";
import App from "./components/app/app";
import { BrowserRouter } from "react-router-dom";
import React from "react";

render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'));
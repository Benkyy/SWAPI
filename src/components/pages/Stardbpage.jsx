import React from "react";
import {} from 'react-router-dom';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import "./pages.css";


const StarDB = () => {

    return (
        <div className="main_wrapper">
            <RandomPlanet />
        </div>
    );
};

export default StarDB;
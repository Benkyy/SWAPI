import React from "react";
import { Link, Outlet } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        // <div className="header-flex">
        //     <h3 className="logo">
        //         <a href="/home">
        //             Star DB
        //         </a>
        //     </h3>
        //     <ul className="list">
        //         <li>
        //             <a href="/person-details">People</a>
        //         </li>
        //         <li>
        //             <a href="/planet-details">PLanets</a>
        //         </li>
        //         <li>
        //             <a href="/starships-details">Starships</a>
        //         </li>
        //     </ul>
        // </div>
        <>
        <div className="header-flex">

            <Link to="/" className="list">StarDB</Link>
            <Link to="Peoplepage" className="list">People</Link>
            <Link to="PlanetPage" className="list">PLanets</Link>
            <Link to="Starshipspage" className="list">Starships</Link>
        </div>
        <Outlet />
        </>
    );
};

export {Header};
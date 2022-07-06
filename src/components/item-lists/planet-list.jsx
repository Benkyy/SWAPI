import React, { useEffect, useState } from "react";
import {getAllPlanets } from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import "./item-list.css";


const PlanetList = ({setSelectedPlanetId}) => {

    const [planetList, setPlanetList] = useState([]);
    const idRegExp = /\/([0-9])*\/$/;

    useEffect(() => {
        getAllPlanets()?.then((result) => setPlanetList(result))
        
    }, []);
    

    return (
        <ul className="item-list list-group list-hover">
            {planetList?.length > 0 ? planetList?.map((planet, index) =>(
                <li className="list-group-item"
                    key={index}
                    onClick={() => setSelectedPlanetId(Number(planet.url.match(idRegExp)[1]))}
                    >
                    {planet.name}
                </li>
            )) : <Spinner />}
        </ul>
    );
};

export default PlanetList;
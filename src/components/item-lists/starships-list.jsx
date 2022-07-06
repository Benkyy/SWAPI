import React, { useEffect, useState } from "react";
import {getAllStarships } from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import "./item-list.css";


const StarshipsList = ({setSelectedStarshipsId, selectedStarshipsId}) => {

    const [starshipsList, setStarshipsList] = useState([]);
    const idRegExp = /\/([0-9])*\/$/;

    useEffect(() => {
        getAllStarships()?.then((result) => setStarshipsList(result))
    }, []);
    

    return (
        <ul className="item-list list-group list-hover">
            {starshipsList?.length > 0 ? starshipsList?.map((starships, index) =>(
                <li className="list-group-item"
                    key={index}
                    onClick={() => setSelectedStarshipsId(Number(starships.url.match(idRegExp)[1]))}
                    >
                    {starships.name}
                </li>
            )) : <Spinner />}
        </ul>
    );
};

export default StarshipsList;
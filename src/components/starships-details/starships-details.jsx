import { getStarships } from "../../services/swapi-service";
import React, { useEffect, useState } from "react";

import "./starships-details.css"


const StarshipsDetails = ({id}) => {

    const [starships, setStarships] = useState(null);
    
    useEffect(() => {
        getStarships(id)
            .then(result => {
                setStarships(result)
        })}, [id]
    );
    

    console.log(starships);
    return (
        <div className="starships-details card">
            <img 
                className="starships-image" 
                src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} 
            />
            <div className="card-body">
                <h4>{starships?.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">MGLT: {starships?.MGLT}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Edited: {starships?.edited}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Crew {starships?.crew}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Cargo Capacity: {starships?.cargo_capacity}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Passengers: {starships?.passengers}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Manufacturer: {starships?.manufacturer}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default StarshipsDetails;
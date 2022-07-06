import React, { useEffect, useState } from "react";
import { getPlanet } from "../../services/swapi-service";

import './planet-details.css'

const PlanetDetails = ({id}) => {

    const [planet, setPlanet] = useState(null);
    
    useEffect(() => {
        getPlanet(id)
            .then(result => {
                setPlanet(result)
                console.log(result)
        })}, [id]
    );
    

    console.log(planet);
    return (
        <div className="planet-details card">
            <img 
                className="planet-image" 
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg `} 
            />
            <div className="card-body">
                <h4>{planet?.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population: {planet?.population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period: {planet?.rotation_period}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter: {planet?.diameter}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
    
};

export default PlanetDetails;
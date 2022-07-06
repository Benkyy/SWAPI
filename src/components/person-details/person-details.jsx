import React, { useEffect, useState } from "react";
import { getPerson } from "../../services/swapi-service";

import './person-details.css'

const PersonDetails = ({id}) => {

    const [person, setPerson] = useState(null);
    
    useEffect(() => {
        getPerson(id)
            .then(result => {
                setPerson(result)
        })}, [id]
    );
    

    console.log(person);
    return (
        <div className="person-details card">
            <img 
                className="person-image" 
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
            />
            <div className="card-body">
                <h4>{person?.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender: {person?.gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year: {person?.birth_year}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye color: {person?.eye_color}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
    
};

export default PersonDetails;
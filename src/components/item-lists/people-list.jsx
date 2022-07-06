import React, { useEffect, useState } from "react";
import { getAllPeople } from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import "./item-list.css";


const PeopleList = ({setSelectedPersonId, selectedPersonId}) => {
    const [peopleList, setPeopleList] = useState([]);
    
    const idRegExp = /\/([0-9])*\/$/;

    useEffect(() => {
        getAllPeople()?.then((result) => setPeopleList(result))
        
        
    }, []);
    

    return (
        <ul className="item-list list-group list-hover">
            {peopleList?.length > 0 ? peopleList?.map((person, index) => (
                <li className="list-group-item" 
                    key={index}
                    onClick={() => setSelectedPersonId(Number(person.url.match(idRegExp)[1]))}
                >
                {person.name}
            </li>
            )) : <Spinner />}
        </ul>
    );
};

export default PeopleList;
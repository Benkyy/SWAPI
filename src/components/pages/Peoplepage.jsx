import React, { useState } from "react";
import {} from 'react-router-dom';
import Header from "../header/header";
import PeopleList from "../item-lists/people-list";
import PersonDetails from "../person-details/person-details";
import RandomPlanet from "../random-planet/random-planet";
import "./pages.css";

const PeoplePage = () => {

    const [selectedPersonId, setSelectedPersonId] = useState(null);

    return (
        <div className="main_wrapper">
            <RandomPlanet />
            <div className="row mb2">
                <div className="col-md-6">
                    <PeopleList setSelectedPersonId={setSelectedPersonId} selectedPersonId={selectedPersonId}/>
                </div>
                {selectedPersonId ? (
                    <div className="col-md-6">
                        <PersonDetails id={selectedPersonId} />
                    </div>
                ) : (
                    <div className="flex">
                        {null}
                    </div>
                ) }
            </div>
        </div>
    );
};

export default PeoplePage;
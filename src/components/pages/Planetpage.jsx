import React, { useState } from "react";
import {} from 'react-router-dom';
import Header from "../header/header";
import PlanetList from "../item-lists/planet-list";
import PlanetDetails from "../planet-details/planet-details";
import RandomPlanet from "../random-planet/random-planet";
import "./pages.css";

const PlanetsPage = () => {

    const [selectedPLanetId, setSelectedPlanetId] = useState(null);

    return (
        <div className="main_wrapper">
            <RandomPlanet />
            <div className="row mb2">
                <div className="col-md-6">
                    <PlanetList setSelectedPlanetId={setSelectedPlanetId} selectedPlanetId={selectedPLanetId}/>
                </div>
                {selectedPLanetId ? (
                    <div className="col-md-6">
                        <PlanetDetails id={selectedPLanetId} />
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

export default PlanetsPage;
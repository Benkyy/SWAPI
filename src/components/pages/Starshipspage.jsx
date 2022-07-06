import React, { useState } from "react";
import {} from 'react-router-dom';
import Header from "../header/header";
import StarshipsList from "../item-lists/starships-list";
import RandomPlanet from "../random-planet/random-planet";
import StarshipsDetails from "../starships-details/starships-details";
import "./pages.css";

const StarshipsPage = () => {

    const [selectedStarshipsId, setSelectedStarshipsId] = useState(null);

    return (
        <div className="main_wrapper">
            <RandomPlanet />
            <div className="row mb2">
                <div className="col-md-6">
                    <StarshipsList setSelectedStarshipsId={setSelectedStarshipsId} selectedStarshipsId={selectedStarshipsId}/>
                </div>
                {selectedStarshipsId ? (
                    <div className="col-md-6">
                        <StarshipsDetails id={selectedStarshipsId} />
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

export default StarshipsPage;
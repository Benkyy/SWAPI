import { useEffect, useState } from 'react';
import './random-planet.css';
import { getPlanet } from "../../services/swapi-service";
import Spinner from '../spinner/spinner';

const RandomPlanet = () => {
    const [planet, setPlanet] = useState({
        id: null,
        population: null,
        rotation_period: null,
        diameter: null
    });
    const [isLoading, setIsLoading] = useState(true);
    const mask = /\/([0-9]*)\/$/;

    useEffect(() => {
        setInterval(
            () => getPlanet(Math.floor(Math.random() * 19)+3).then(result => {
                setIsLoading(false)
                setPlanet({
                    ...result,
                    id: result.url.match(mask)[1],
                })
            }), 5000);
            
    }, [])
    return (
        <div className="random-flex card">
            {!isLoading ? (
                <>
                    <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${planet ? planet.id : 5}.jpg`} />
                    <div>
                        <h4>{planet ? planet.name : '—'}</h4>
                        <ul className="list-group-random list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Population</span>
                                <span>{planet ? planet.population : '—'}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Rotation Reriod</span>
                                <span>{planet ? planet.rotation_period : '—'}</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter</span>
                                <span>{planet ? planet.diameter : '—'}</span>
                            </li>
                        </ul>
                    </div>
                </>
            ) : <Spinner />}
        </div>
    );
};

export default RandomPlanet;


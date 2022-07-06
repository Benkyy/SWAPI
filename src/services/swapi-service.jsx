const _apiBase = 'https://swapi.dev/api';

export const getResource = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    }
    return await res.json();
}

export const getAllPeople = async () => {
    const res = await getResource(`/people/`);
    return res.results;
}



export const getPlanet = async (id) => {
    return getResource(`/planets/${id}/`);
    
}
export const getAllPlanets = async () => {
    const res = await getResource(`/planets/`);
    return res.results;
}

export const getStarships = (id) => {
    return getResource(`/starships/${id}/`);
    
}
export const getAllStarships = async () => {
    const res = await getResource(`/starships/`);
    return res.results;
}

export const getPerson = (id) => {
    return getResource(`/people/${id}/`);
}


const extractId = (item) =>{
    const idRegExp = /\/([0-9])*\/$/;
    return item.url.match(idRegExp)[1];
}


// const transformPlanet = (planet) => {
//     return {
//         name: planet.name,
//         population: planet.population,
//         rotationPeriod: planet.rotation_period,
//         diameter: planet.diameter
//     }
// }

// const transformPerson = (person) => {
//     return{
//         id: extractId(person),
//         name: person.name,
//         gender: person.gender,
//         birthYear: person.birthYear,
//         eyeColor: person.eyeColor
//     }
// }

// const transformStarship = (starship) =>{
//     return{
//         id: extractId(starship),
//         name: starship.name,
//         model: starship.model,
//         manufactured: starship.manufactured,
//         costInCredits: starship.costInCredits,
//         lenght: starship.lenght,
//         crew: starship.crew,
//         passengers: starship.passengers,
//         cargoCapacity: starship.cargoCapacity
//     }
// }
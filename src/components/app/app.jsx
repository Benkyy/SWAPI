
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import {Header} from "../header/header";
import PeoplePage from "../pages/Peoplepage";
import PlanetPage from "../pages/Planetpage";
import StarshipsPage from "../pages/Starshipspage";
import StarDB from "../pages/Stardbpage";

import './app.css';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<StarDB />}/>
                    <Route path="/Peoplepage" element={<PeoplePage />}/>
                    <Route path="/Planetpage" element={<PlanetPage />}/>
                    <Route path="/Starshipspage" element={<StarshipsPage />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
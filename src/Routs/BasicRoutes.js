import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home'
import NavBar from '../Common/Navbar'
import Bollywood from '../Pages/Bollywood/Bollywood'
import BollywoodDetails from '../Pages/Bollywood/BollywoodDetails'
import Technology from '../Pages/Technology/Technology'
import TechnologyDetails from '../Pages/Technology/TechnologyDetails'
import Hollywood from '../Pages/Hollywood/Hollywood'
import HollywoodDetails from '../Pages/Hollywood/HollywoodDetails'
import Fitness from '../Pages/Fitness/Fitness'
import FitnessDetails from '../Pages/Fitness/FitnessDetails'
import Food from '../Pages/Food/Food'
import FoodDetails from '../Pages/Food/FoodDetails'
import PageNotFound from '../Pages/PageNotFound/PageNotFound'

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/:Id" element={<Home />} />

                <Route path="/bollywood" element={<Bollywood Title="Bollywood" />} />
                <Route path="/bollywood/:Id" element={<BollywoodDetails />} />

                <Route path="/technology" element={<Technology Title="Technology" />} />
                <Route path="/technology/:Id" element={<TechnologyDetails />} />

                <Route path="/hollywood" element={<Hollywood Title="Hollywood" />} />
                <Route path="/hollywood/:Id" element={<HollywoodDetails />} />

                <Route path="/fitness" element={<Fitness Title="Fitness" />} />
                <Route path="/fitness/:Id" element={<FitnessDetails />} />

                <Route path="/food" element={<Food Title="Food" />} />
                <Route path="/food/:Id" element={<FoodDetails />} />

                <Route path="*" element={<PageNotFound />} /> 
            </Routes>
        </BrowserRouter>
    )
}
export default RouterComponent;
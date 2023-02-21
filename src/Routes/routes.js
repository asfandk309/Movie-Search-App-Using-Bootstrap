import { Routes, Route } from 'react-router-dom';
import Home from '../Views/home';
import MovieDetails from '../Views/movie-details';

function MyRoutes()
{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/movie-details' element={<MovieDetails/>} />
            </Routes>
        </div>
    )
}

export default MyRoutes;
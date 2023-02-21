import React from "react";
import { useNavigate } from "react-router-dom";


function Card({ Poster, Title, imdbID }) {

    const navigate = useNavigate();

    return (
        <div className="bg-dark p-3">

            <div className="card-img">
                <img src={Poster} width="100%" height="100%" />
            </div>

            <h4 className="text-white ">{Title}</h4>

            <button className="btn btn-primary" onClick={() => navigate(`/movie-details?id=${imdbID}`)}>Movie Details</button>

        </div>
    )
}

export default Card;
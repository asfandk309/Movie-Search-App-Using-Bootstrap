import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../Views/Layout';
import querystring from  "query-string";
import axios, { BASE_URL } from "./api"
import { useEffect, useState } from 'react';

function MovieDetails() {

    const [data, setData] = useState({});

    const navigate = useNavigate();
    const { search }  = useLocation();

    const { id } = querystring.parse(search);
    useEffect(() => {
        axios.get(`${BASE_URL}i=${id}`).then((resp) => {
          setData(resp.data);
        });
      },[]);
    

    return (
        <Layout>
            <div className="row">

                <div className="col-5">
                    <div className='p-4'>
                        <img src={data?.Poster} width="100%" height="100%"></img>
                    </div>
                </div>

                <div className="col-7">

                    <h2>Movie Name</h2>

                    <ul className="list-group p-4">
                        <li className="list-group-item p-3"><span className='group-item p-2'>Genre:</span>{data?.Genre}</li>
                        <li className="list-group-item p-3"><span className='group-item p-2'>Released:</span>{data?.Released}</li>
                        <li className="list-group-item p-3"><span className='group-item p-2'>Rated:</span>{data?.Rated}</li>
                        <li className="list-group-item p-3"><span className='group-item p-2'>IMBD Rating:</span>{data?.imdbRating}</li>
                        <li className="list-group-item p-3"><span className='group-item p-2'>Director:</span>{data?.Director}</li>
                        <li className="list-group-item p-3"><span className='group-item p-2'>Writer:</span>{data?.Writer}</li>
                        <li className="list-group-item p-3"><span className='group-item p-2'>Actors:</span>{data?.Actors}</li>
                    </ul>

                </div>
            </div>

            <div className='row'>

                <div className='bg-dark p-4 text-white'>
                    
                    <h3>About</h3>
                    <p>{ data?.Plot}</p>
                    <button className='btn btn-primary'>view on IMBD</button> {" "}
                    <button className='btn btn-primary' onClick={()=>navigate("/")}>Go Back To Search</button>

                </div>

            </div>
        </Layout>
    );
}

export default MovieDetails;

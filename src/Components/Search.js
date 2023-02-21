import React from "react";

function Search( {query,setQuery,handleSearch} ) {
    return (
    
            <div className="custom-bg p-5">
                <h2> Search for a movie, TV series...</h2>
                <input type="text" className="form-control mt-4"
                 style={{height:"50px"}}
                 placeholder="Search Movies, TV Series..." 
                 value={query}
                 onChange={(e)=>setQuery(e.target.value)}
                 />
                <button className="btn btn-primary mt-4" 
                style={{width:"200px", height:"50px",fontSize:"25px"}}
                onClick={query && handleSearch}
                >
                Search
                </button>
            </div>
    

    )
}

export default Search;
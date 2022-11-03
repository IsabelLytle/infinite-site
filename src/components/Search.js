import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
    let params = useParams();

    return(
        <div>
            <input></input>
            <button>Submit</button>
        </div>
    );
};

export default Search;
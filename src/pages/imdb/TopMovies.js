import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getTopRatedMoviesAsync} from "../../redux/imdbSlice/ImdbSlice";

const TopMovies = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        getTopRatedMoviesAsync()
    }, []);

    return (
        <div>
            <h1>Movie Details</h1>
        </div>
    );
};

export default TopMovies;
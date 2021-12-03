import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getTopRatedMoviesAsync} from "../../redux/imdbSlice/ImdbSlice";

const TopMovies = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getTopRatedMoviesAsync())
    },[])

    return (
        <div>
            <h1>Top movies</h1>
        </div>
    );
};

export default TopMovies;
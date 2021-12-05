import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getTopRatedMoviesAsync} from "../../redux/imdbSlice/ImdbSlice";
import {Typography} from "@mui/material";

const TopMovies = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getTopRatedMoviesAsync())
    },[])

    return (
        <div>
            <Typography sx={{m: 4}} variant="h3" align="center">Top movies</Typography>
        </div>
    );
};

export default TopMovies;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRandomJokeAsync} from "../../redux/chuckSlices/ChuckJokeSlice";
import {Typography} from "@mui/material";

const RandomChuckJoke = () => {

    const dispatch = useDispatch();

    const chuckJoke = useSelector((state) => state.chuckJokeState)

    useEffect(() =>{
        dispatch(getRandomJokeAsync())
    }, [])

    return (
        <div>
            <Typography sx={{m:3}} variant="h4" align="center">Random Chuck Joke</Typography>
            <Typography align="center" variant="h5" sx={{m: 1}}>{chuckJoke.value}</Typography>
        </div>
    );
};

export default RandomChuckJoke;
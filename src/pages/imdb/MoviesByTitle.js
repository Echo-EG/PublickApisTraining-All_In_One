import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getMoviesByTitleAsync} from "../../redux/imdbSlice/ImdbSlice";



const MoviesByTitle = () => {

    const [title, setTitle] = useState();

    const dispatch = useDispatch();

    const handleSearchClick = () =>{
        dispatch(getMoviesByTitleAsync({title}))
    }

    return (
        <div>
            <h1>Movies by title</h1>
            <div>
                <TextField
                variant="outlined"
                label="Search by title"
                value={title}
                onChange={e => setTitle(e.target.value)}/>
                <Button onClick={handleSearchClick}><SearchIcon/></Button>
            </div>
        </div>
    );
};

export default MoviesByTitle;
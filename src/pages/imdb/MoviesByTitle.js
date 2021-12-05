import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Button, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {getMoviesByTitleAsync} from "../../redux/imdbSlice/ImdbSlice";



const MoviesByTitle = () => {

    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const handleSearchClick = () =>{
        dispatch(getMoviesByTitleAsync({title: title}))
    }

    return (
        <CssBaseline>
            <Grid container justifyContent="center" sx={{m: 4}}>
            <Grid item>
                <Typography variant="h3" style={{display: "block"}}>Movies by title</Typography>
                <TextField
                    // fullWidth
                    style={{minWidth: "70%"}}
                    variant="standard"
                    label="Search by title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                <Button onClick={handleSearchClick}><SearchIcon/></Button>
            </Grid>
            </Grid>
        </CssBaseline>
    );
};

export default MoviesByTitle;
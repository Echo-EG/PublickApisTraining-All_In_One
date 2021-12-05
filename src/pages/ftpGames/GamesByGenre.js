import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {filterByTagAsync} from "../../redux/ftpSlices/FtpGamesSlice";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    card:{
        height: "25vw"
    }
})

const GamesByGenre = () => {

    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const genreList = [
        {id: 1, genre:"mmo"},
        {id: 2, genre:"mmorpg"},
        {id: 3, genre:"shooter"},
        {id: 4, genre:"strategy"} ,
        {id: 5, genre:"moba"}
    ]


    const handleChange = (e) =>{
        dispatch(filterByTagAsync({genre: e.target.value}))
        setChecked(true);
    }

    const ftpGames = useSelector((state) => state.ftpGamesState)


    if (checked !== true){
        return (
            <div>
                <Grid container spacing={2} justifyContent="center">
                    {genreList.map((newGenre, key) => {
                        return <Grid item key={newGenre.id} >
                            <Typography variant="h5" >{newGenre.genre}</Typography>
                            <input onClick={handleChange} type="radio" value={newGenre.genre} name="genre"/>
                        </Grid>
                    })}
                </Grid>
                <Typography variant="h5" align="center">Select genre</Typography>
            </div>
        );
    }
    return (
        <div>
            <Grid container spacing={2} justifyContent="center">
            {genreList.map((newGenre, key) => {
                return <Grid item sx={{m: 1}} style={{display: "inline-block"}} key={newGenre.id}
                             id={newGenre.id}>
                    <Typography variant="h5">{newGenre.genre}</Typography>
                    <input type="radio" onClick={handleChange} value={newGenre.genre} name="genre"/>
                </Grid>
            })}
            </Grid>
            <Grid container>
                {ftpGames.map((listFromApi, key) => {
                    return <Grid item
                                 lg={4}
                                 md={4}
                                 sm={6}
                                 xs={12}
                                 key={listFromApi.id}>
                        <Card variant="outlined" style={{background: "darkgray"}} className={classes.card}
                              sx={{m: 1}}>
                            <CardHeader title={listFromApi.title} subheader={listFromApi.genre}>
                                <Typography variant="h3">{listFromApi.platform}</Typography>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="h5">{listFromApi.short_description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                })}
            </Grid>
        </div>
    );
};

export default GamesByGenre;
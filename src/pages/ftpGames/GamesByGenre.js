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

    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);


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
                <Grid container>
                    {genreList.map((newGenre, key) => {
                        return <Grid item sx={{m: 1}} key={newGenre.id} id={newGenre.id} >
                            <Typography >{newGenre.genre}</Typography>
                            <input type="radio" onClick={handleChange} value={newGenre.genre} name="genre"/>
                        </Grid>
                    })}

                </Grid>
                <p>Select genre</p>
            </div>
        );
    }
    return (
        <div>
            <div>
                <Grid container>
                    {genreList.map((newGenre, key) => {
                        return <Grid item sx={{m: 1}} key={newGenre.id} id={newGenre.id} >
                            <Typography >{newGenre.genre}</Typography>
                            <input type="radio" onClick={handleChange} value={newGenre.genre} name="genre"/>
                        </Grid>
                    })}
                    <div>
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
                    </div>
                </Grid>
            </div>
        </div>
    );

};

export default GamesByGenre;
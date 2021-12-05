import React, {useState} from 'react';
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {filterByTagAsync, gamesByPlatformAsync} from "../../redux/ftpSlices/FtpGamesSlice";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    card:{
        height: "25vw"
    }
})

const GamesByPlatform = () => {

    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();

    const platformList =[
        {id:1, platform: "pc"},
        {id:2, platform: "browser"},
        {id:3, platform: "all"}
    ]

    const handleChange = (e) =>{
        dispatch(gamesByPlatformAsync({platform: e.target.value}))

        setChecked(true);
    }

    const ftpGames = useSelector((state) => state.ftpGamesState)


    if (checked !== true){
        return (
            <div>
                <Grid container spacing={2} justifyContent="center">
                    {platformList.map((newPlatformList, key) => {
                        return <Grid item key={newPlatformList.id}>
                            <Typography variant="h5">{newPlatformList.platform}</Typography>
                            <input type="radio" onClick={handleChange} value={newPlatformList.platform} name="platform"/>
                        </Grid>
                    })}
                </Grid>
                <Typography variant="h5" align="center">Select platform</Typography>
            </div>
        );
    }
    return (
        <div>
            <Grid container spacing={2} justifyContent="center">
                {platformList.map((newPlatformList, key) => {
                    return <Grid item style={{display: "inline-block"}} key={newPlatformList.id}>
                        <Typography variant="h5">{newPlatformList.platform}</Typography>
                        <input type="radio" onClick={handleChange} value={newPlatformList.platform} name="platform"/>
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
    )
};

export default GamesByPlatform;
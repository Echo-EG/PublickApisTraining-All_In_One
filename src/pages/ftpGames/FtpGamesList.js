import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ftpGamesListAsync} from "../../redux/ftpSlices/FtpGamesSlice";
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    card:{
        height: "25vw"
    }
})

const FtpGamesList = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(ftpGamesListAsync())
    }, []);

    const ftpGames = useSelector((state) => state.ftpGamesState)

    return (
        <div>
            {ftpGames.map((listFromApi, key) =>{
                return <Grid item
                             lg={4}
                             md={4}
                             sm={6}
                             xs={12}
                             key={listFromApi.id}>
                    <Card variant="outlined" style={{background: "darkgray"}} className={classes.card} sx={{m:1}}>
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
    );
};

export default FtpGamesList;
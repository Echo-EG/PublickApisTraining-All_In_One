import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getJokesCategoriesAsync} from "../../redux/chuckSlices/ChuckCategorieSlice";
import {Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {getjokeByCategorieAsync} from "../../redux/chuckSlices/ChuckJokeSlice";

const useStyles = makeStyles({
    alignCategories:{
        display: "inline-block"
    }
})


const JokeByCategory = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getJokesCategoriesAsync())
    }, []);

    const categories = useSelector((state) => state.jokeCategoriesState)

    const jokeByCategorie = useSelector((state) => state.chuckJokeState)

    const {result} = jokeByCategorie;

    const handleCategorieClick = (e) =>{
        dispatch(getjokeByCategorieAsync({categorie: e.target.value}))
    }

    if(!result){
        return (
            <div>
                {categories.map((categoriesList) =>{
                    return <Grid item className={classes.alignCategories} sx={{m: 1}}>
                        <Typography>{categoriesList}</Typography>
                        <input onClick={handleCategorieClick} type="radio" name="categories" value={categoriesList}/>
                    </Grid>
                })}
                <p>Select categorie</p>
            </div>
        );
    }
    return (
        <div>
            {categories.map((categoriesList) =>{
                return <Grid item sx={{m:1}} className={classes.alignCategories}>
                    <Typography>{categoriesList}</Typography>
                    <input type="radio" onClick={handleCategorieClick} value={categoriesList} name="categories"/>
                </Grid>
            })}
            {result.map((newResult, key) =>{
                return <Grid item sx={{m:3}} key={newResult.id} id={newResult.id} >
                    <Typography variant="h5">{newResult.value}</Typography>
                </Grid>
            })}
        </div>
    );

};

export default JokeByCategory;
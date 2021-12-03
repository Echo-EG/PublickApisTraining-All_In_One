import {configureStore} from "@reduxjs/toolkit";
import chuckJokeReducer from "./chuckSlices/ChuckJokeSlice";
import jokeCategoriesReducer from "./chuckSlices/ChuckCategorieSlice";
import ftpGamesReducer from "./ftpSlices/FtpGamesSlice";
import imdbReducer from "./imdbSlice/ImdbSlice";

export const store = configureStore({
    reducer:{
        jokeCategoriesState:jokeCategoriesReducer,
        chuckJokeState: chuckJokeReducer,
        ftpGamesState: ftpGamesReducer,
        imdbState: imdbReducer
    }
})
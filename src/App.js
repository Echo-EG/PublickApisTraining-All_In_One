import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container, CssBaseline} from "@mui/material";
import MainPage from "./pages/MainPage";
import JokeByCategory from "./pages/chuckJokes/JokeByCategory";
import RandomChuckJoke from "./pages/chuckJokes/RandomChuckJoke";
import FtpGamesList from "./pages/ftpGames/FtpGamesList";
import GamesByGenre from "./pages/ftpGames/GamesByGenre";
import GamesByPlatform from "./pages/ftpGames/GamesByPlatform";
import Header from "./pages/components/Header";
import TopMovies from "./pages/imdb/TopMovies";
import MoviesByTitle from "./pages/imdb/MoviesByTitle";

const App = () => {
    return (
        <CssBaseline>
            <Router>
                <Header/>
                <Container maxWidth="lg">
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/jokebycategory" component={JokeByCategory}/>
                        <Route exact path="/randomjoke" component={RandomChuckJoke}/>
                        <Route exact path="/ftpgameslist" component={FtpGamesList}/>
                        <Route exact path="/gamesbygenre" component={GamesByGenre}/>
                        <Route exact path="/gamesbyplatform" component={GamesByPlatform}/>
                        <Route exact path="/topmovies" component={TopMovies}/>
                        <Route exact path="/moviesbytitle" component={MoviesByTitle}/>
                        <Route path="*" component={MainPage}/>
                    </Switch>
                </Container>
            </Router>
        </CssBaseline>
    );
};

export default App;
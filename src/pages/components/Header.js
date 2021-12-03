import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {AppBar, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const useStyles = makeStyles({
    links: {
        textDecoration: "none",
    },
    header: {
        justifyContent: "center"
    }
})


const Header = () => {
    const classes = useStyles();
    const [anchorEl1, setAnchorEl1] = useState(null);

    const handleMenu1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const [anchorEl2, setAnchorEl2] = useState(null);

    const handleMenu2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const [anchorEl3, setAnchorEl3] = useState(null);

    const handleMenu3 = (event) => {
        setAnchorEl3(event.currentTarget);
    };
    const handleClose3 = () => {
        setAnchorEl3(null);
    };

    return (
        <AppBar position="sticky">
            <Toolbar className={classes.header}>
                <IconButton onClick={handleMenu1}>Chuck Api
                    <KeyboardDoubleArrowDownIcon/>
                </IconButton>
                <Menu anchorEl={anchorEl1}
                      open={Boolean(anchorEl1)}
                      onClose={handleClose1}
                >
                    <MenuItem onClick={handleClose1}><Link to="/jokebycategory" className={classes.links}>Jokes by category</Link></MenuItem>
                    <MenuItem onClick={handleClose1}><Link to="/randomjoke" className={classes.links}>Random joke</Link></MenuItem>
                </Menu>
                <IconButton onClick={handleMenu2}>FTP games Api
                    <KeyboardDoubleArrowDownIcon/>
                </IconButton>
                <Menu anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}>
                    <MenuItem onClick={handleClose2}><Link to="/ftpgameslist" className={classes.links}>Ftp game list</Link></MenuItem>
                    <MenuItem onClick={handleClose2}><Link to="/gamesbygenre" className={classes.links}>Games by genre</Link></MenuItem>
                    <MenuItem onClick={handleClose2}><Link to="/gamesbyplatform" className={classes.links}> Games by platform</Link></MenuItem>
                </Menu>
                <IconButton onClick={handleMenu3}>IMDB Api
                    <KeyboardDoubleArrowDownIcon/>
                </IconButton>
                <Menu anchorEl={anchorEl3}
                      open={Boolean(anchorEl3)}
                      onClose={handleClose3}>
                    <MenuItem onClick={handleClose3}><Link to="/moviesbytitle" className={classes.links}>Movies by title</Link></MenuItem>
                    <MenuItem onClick={handleClose3}><Link to="/topmovies" className={classes.links}>Top movies</Link></MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
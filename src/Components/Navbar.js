import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
// import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './index.css'

const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    // },
    search: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        paddingLeft: '2px',
        paddingRight: '5px',
        // min width for search for responsive
        minWidth: '150px',
        color: 'black',
        // background: 'grey',
        // boxShadow: '0px 0px 5px 0px black',
        border: '1px solid grey',
        borderRadius: '44px',
        // marginLeft: 0,
        width: '50%',
        height: '44px'
    },
    searchIcon: {
        //     display: 'flex',
        //     padding: theme.spacing(0, 2),
        //     position: 'absolute',
        //     height: '100%',
        //     pointerEvents: 'none',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     // color: 'black'

        //     border: '0px',
        //     background: 'none',
        //     cursor: 'pointer',
        //     height: '40px',
        //     width: '40px',
        //     display: 'flex',
        // - webkit - box - align: 'center',
        // align- items: 'center',
        // -webkit - box - pack: 'center',
        // justify - content: 'center',
        // position: 'relative',
        // z - index: '1',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 'calc(1em + 2px)',
        // transition: theme.transitions.create('width'),
        width: '100%',
        color: 'black',
        // background : 'gray'
        // [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        //     '&:focus': {
        //         width: '20ch',
        //     },
        // },
    },
    navBtn: {
        color: '1937de',
        textDecoration: "none",
        border: '0px',
        background: 'white',
        cursor: 'pointer',
        overflow: 'visible',
        font: '400 16px Arial',

    },


}));
// const drawerWidth = 200;
function CustomNavbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const [open, setOpen] = useState(false);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <AppBar position="static" style={{ background: '#ffffff', height: '76px', width: '100%', padding: '2px 40px ', paddingRight: '0px' }} >
                <Toolbar>
                    <Typography variant="h6"
                    ><Link style={{ color: '#1937de', textDecoration: "none" }} to="/home">Ecommerce</Link>
                    </Typography>
                    <div style={{ marginRight: '40px' }}></div>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search for anything"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <div style={{ marginRight: '63%' }}></div>
                        <SearchIcon style={{ color: 'black' }} />
                    </div>
                    <div style={{ marginRight: '40px' }}></div>
                    <Typography >
                        <div style={{ display: 'flex' }}>
                            <button className={classes.navBtn}>
                                <Link style={{ color: 'black', textDecoration: "none" }} to="/Login">Download app</Link>
                            </button>
                            <div style={{ marginRight: '30px' }}></div>
                            <button className={classes.navBtn}>
                                <Link style={{ color: 'black', textDecoration: "none" }} to="/registration">Sign up</Link>
                            </button>
                            <div style={{ marginRight: '30px' }}></div>
                            <button className={classes.navBtn}>
                                <Link style={{ color: 'black', textDecoration: "none" }} to="/login">Log in</Link>
                            </button>
                            <div style={{ marginRight: '30px', height: '20px' }}></div>
                            <ShoppingCartIcon style={{ color: 'black', marginTop: '6px' }} />
                            <div style={{ marginRight: '30px' }}></div>
                            <Button variant="contained" color="primary" href="/createproduct" style={{ color: 'white', background: 'orange', boxShadow: "none", textDecoration: "none", textTransform: 'none' }}>
                                Sell
                       </Button>

                            {/* <Button style={{ color: '#1937de', textDecoration: "none" }} onClick={handleClick}> Signup </Button> */}
                        </div>
                    </Typography>
                </Toolbar >
            </AppBar >
            <div style={{ display: 'flex', width: "100%" }}>
                <Paper>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/parkingspace'><Tab style={{ color: 'black', fontSize: '10px' }} label="Winter deals " /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/parkingspace'><Tab style={{ color: 'black', fontSize: '10px' }} label="Brands " /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/parkingspace'><Tab style={{ color: 'black', fontSize: '10px' }} label="Women" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/parkingspace'><Tab style={{ color: 'black', fontSize: '10px' }} label="Men" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/parkingspace'><Tab style={{ color: 'black', fontSize: '10px' }} label="Electronic " /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/parkingspace'><Tab style={{ color: 'black', fontSize: '10px' }} label="Toys " /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/cancelbooking'><Tab style={{ color: 'black', fontSize: '10px' }} label="Home" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/bookingreceipt'><Tab style={{ color: 'black', fontSize: '10px' }} label="Beauty" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/feedback'><Tab style={{ color: 'black', fontSize: '10px' }} label="Kids" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/parkingspace'><Tab style={{ color: 'black', fontSize: '10px' }} label="Vintage" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/cancelbooking'><Tab style={{ color: 'black', fontSize: '10px' }} label="Sports" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/bookingreceipt'><Tab style={{ color: 'black', fontSize: '10px' }} label="Handmade" /></Link>
                        <Link style={{ textDecoration: 'none' }} to='/userdashboard/feedback'><Tab style={{ color: 'black', fontSize: '10px' }} label="other" /></Link>
                    </Tabs>
                </Paper>
            </div>
        </div>
    )

}
export default CustomNavbar;
import React from 'react';
import { Paper, Box, ButtonGroup, Button, Grid } from '@material-ui/core';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item xs={3} >
                    <Box p={2}>
                        <img src={require('../../assets/logo-nogran-black.png')} alt="logo black" className="logo-black" />
                    </Box>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                    <Box display="flex" justifyContent="center">
                        <div className={classes.root}>
                            <Button variant="outlined">Home</Button>
                            <Button variant="outlined">Empresa</Button>
                            <Button variant="outlined">Serviços</Button>
                            <Button variant="outlined">Contato</Button>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home
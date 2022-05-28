import React from 'react';
import { Box, Button, Grid, withStyles } from '@material-ui/core';

import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>

                    <Box className='background' style={{ height: '30vh' }}></Box>
                    <Box className='downer' style={{ height: '8vh' }}></Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;
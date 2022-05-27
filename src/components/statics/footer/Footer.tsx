import React from 'react'
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import './Footer.css'

function Footer() {
    return (
        <>oi
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}></Box>
                </Grid>
            </Grid> 
        </>
    );
}

export default Footer;
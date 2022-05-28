import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" alignItems="center" className='background'>
                <Grid item alignItems="center" className='background'  xs={6}>

                    <Box display='flex' alignItems="center" style={{ height: '25vh' }}>
                        <Box className='logo'>
                            <img src={require('../../../assets/logo-nogran-white.png')} />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6}>  
                    <Box className='contato'>
                    <Box><Typography variant='subtitle1'>CONTATO</Typography></Box>
                    <Box><Typography variant='caption'>+55 (11) 97615-4141</Typography></Box>
                    <Box><Typography variant='caption'>contato@digitalnogran.com.br</Typography></Box>
                    </Box>
                </Grid>
            </Grid>

            <Box className='downer' display='flex' alignItems="center" style={{ height: '8vh' }}>
                <Typography variant='subtitle2'>DIGITAL NOGRAN 2021 © Todos os direitos reservados.</Typography>
            </Box>
        </>
    );
}

export default Footer;
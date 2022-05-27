import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';

import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='upper' style={{ height: '12vh' }}>
                        <Box className='contact'>
                        Estamos à disposição para atendê-los.
                            <Button variant="contained" color="primary">
                                ENTRE EM CONTATO
                            </Button>
                        </Box>

                    </Box>
                    <Box className='background' style={{ height: '30vh' }}></Box>
                    <Box className='downer' style={{ height: '8vh' }}></Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;
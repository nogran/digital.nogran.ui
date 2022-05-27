import React from 'react';
import { Grid, Container, Box, Typography } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <Grid container direction="row" justifyContent='center' >
            <Grid item xs={12}>
                <Box className='background' display='flex' style={{ height: '80vh' }}>
                    <Box p={20}>
                        <Box>
                        <Typography className='home'>
                            A era
                        </Typography> 
                        <Typography className='home'>
                           exponencial:
                        </Typography> 
                        <Typography className='home'>
                        cresça sem limites
                        </Typography> 
                    </Box>
                    </Box>
                </Box>
                <Grid container direction="row" xs={12} className='background2'>
                    <Box display='flex' p={18} style={{ height: '20vh' }}>

                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home
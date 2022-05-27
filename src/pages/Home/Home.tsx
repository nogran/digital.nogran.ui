import React from 'react';
import { Grid, Container, Box, Typography } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <Grid container direction="row" justifyContent='center' >
            <Grid item xs={12}>
                <Box display='flex' p={30} style={{ height: '50vh' }}>
                    <Box>
                        <Typography className='home2'>
                            Soluções
                        </Typography>
                        <Typography className='home2'>
                            Tecnológicas
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            Melhoria
                        </Typography>
                        <Typography>
                            é o meio pelo qual uma pessoa
                        </Typography>
                        <Typography>
                            interage com um dispositivo.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Home
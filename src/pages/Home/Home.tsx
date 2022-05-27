import React from 'react';
import { Grid, Container, Box, Typography } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <Grid container direction="row" justifyContent='center' >
            <Grid item xs={12}>
                <Box display='flex' p={20} style={{ height: '50vh' }}>
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
                <Grid item xs={12}>
                    <Box className="flex2" display='flex' p={20} style={{ height: '50vh' }}>


                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className="flex3" display='flex' p={20} style={{ height: '50vh' }}>


                    </Box>
                </Grid>
            </Grid>
        </Grid >
    );
}

export default Home
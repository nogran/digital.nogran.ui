import React from 'react';
import { Grid, Container, Box, Typography, withStyles, Button } from '@material-ui/core';
import './Home.css';

const StyledButton = withStyles({
    root: {
        backgroundColor: '#656565',
        color: '#fff',
        '&:hover': {
            backgroundColor: 'black',
            // color: 'black',
        },
    }
})(Button);

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

                <Box className='upper' style={{ height: '12vh' }}>
                    <Box className='contact'>
                        Estamos à disposição para atendê-los.
                        <StyledButton variant="contained" style={{ fontWeight: 'bold' }}>
                            ENTRE EM CONTATO
                        </StyledButton>
                    </Box>
                </Box>
            </Grid>
        </Grid >
    );
}

export default Home
import React from 'react';
import Swiper from './swiperReact/SwiperReact';
import { Grid, Box, Typography, withStyles, Button } from '@material-ui/core';
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
        <>
            <Swiper />

            <Grid container direction='row' justifyContent='center' alignItems='center' >

                <Grid item alignItems='center' style={{ height: '80vh' }} xs={6}>
                    <Box padding={15}>
                        <Box>
                            <Typography variant='h3' align='left'>Soluções</Typography>
                            <Typography variant='h3' align='left'>Tecnológicas</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h5' align='left'>Melhoria</Typography>
                            <Typography variant='h5' align='left'>é o meio pelo qual uma pessoa</Typography>
                            <Typography variant='h5' align='left'>interage com um dispositivo.</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item alignItems='center' xs={6}>
                    <Box className="flex2" style={{ height: '80vh' }}>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className="flex3" display='flex' style={{ height: '50vh' }}>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className='folder' style={{ height: '70vh' }}>
                        <Box className='folder2' padding={20}>
                            <Typography variant='h4'>Gostamos de desafios! Portanto,</Typography>
                            <Typography variant='h4'>seja qual for sua demanda, entre</Typography>
                            <Typography variant='h4'>em contato e converse com nossa</Typography>
                            <Typography variant='h4'>equipe.</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12}>

                    <Box className='upper-line' display='flex' alignItems="center" justifyContent="center" style={{ height: '12vh' }}>
                        <Typography align="center" variant='h5'>Estamos à disposição para atendê-los.</Typography>
                        <Box marginLeft={4}>
                            <StyledButton variant="contained" style={{ fontWeight: 'bold' }}>ENTRE EM CONTATO</StyledButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home
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
            <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>

                {/* PAGE 1 */}
                <Grid item style={{ height: '70vh' }} xs={6}>
                    <Box display='flex' justifyContent='center' alignContent='center'>
                        <Grid item>
                            <Typography variant='h3'>Soluções</Typography>
                            <Typography variant='h3'>Tecnológicas</Typography>
                            <Typography variant='h5'>Equipe preparada e experiente</Typography>
                            <Typography variant='h5'>para diagnosticar sua necessidade</Typography>
                            <Typography variant='h5'>e oferecer a melhor solução para</Typography>
                            <Typography variant='h5'>o seu negócio.</Typography>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item className="flex2" style={{ height: '70vh' }} xs={6}>

                </Grid>

                {/* PAGE 2 */}
                <Grid item className="flex2" style={{ height: '70vh' }} xs={6}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <img width="35%" src={require("../../assets/logo/logo-nogran-vertical.png")} alt="" />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>
                        <Box marginBottom='40px'>
                            <Typography variant='h4' style={{ fontWeight: 'bold' }}>Produto Ideal</Typography>
                        </Box>

                        <Box className='alinhar' display='flex' marginBottom='5px'>
                            <Box marginRight='30px'>
                                <Typography variant='h5'>1.</Typography>
                            </Box>
                            <Typography variant='h5' style={{ fontWeight: 'bold' }}>Usuário</Typography>
                        </Box>
                        <Typography variant='h6'>Durante todo o desenvolvimento do projeto esse é o nosso</Typography>
                        <Typography variant='h6'>principal foco: as pessoas que irão utilizar o produto.</Typography>

                        <Box className='alinhar' display='flex' marginTop='30px' marginBottom='5px'>
                            <Box marginRight='30px'>
                                <Typography variant='h5'>2.</Typography>
                            </Box>
                            <Typography variant='h5' style={{ fontWeight: 'bold' }}>Negócio</Typography>
                        </Box>
                        <Typography variant='h6'>Não deixamos de pensar no modelo de negócio de</Typography>
                        <Typography variant='h6'>quem está contratando pelo desenvolvimento do produto.</Typography>

                        <Box className='alinhar' display='flex' marginTop='30px' marginBottom='5px'>
                            <Box marginRight='30px'>
                                <Typography variant='h5'>3.</Typography>
                            </Box>
                            <Typography variant='h5' style={{ fontWeight: 'bold' }}>Estética</Typography>
                        </Box>
                        <Typography variant='h6'>Ao mesmo tempo, priorizamos a estética do projeto. É de</Typography>
                        <Typography variant='h6'>suma importância que o produto seja visualmente agradável.</Typography>
                    </Box>
                </Grid>

                {/* PAGE 3 */}
                <Grid xs={6}></Grid>
                <Box className='folder2' style={{ height: '70vh' }}>

                </Box>

                <Grid xs={6}></Grid>

                <Grid item xs={12}>
                    <Box className='folder' style={{ height: '70vh' }}>
                        <Box className='folder' padding={25}>
                            <Typography variant='h5'>Gostamos de desafios! Portanto,</Typography>
                            <Typography variant='h5'>seja qual for sua demanda, entre</Typography>
                            <Typography variant='h5'>em contato e converse com nossa</Typography>
                            <Typography variant='h5'>equipe.</Typography>
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
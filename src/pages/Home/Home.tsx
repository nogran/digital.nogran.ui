import React, { useEffect, useState } from 'react';
import Swiper from './swiperReact/SwiperReact';
import { Grid, Box, Typography, withStyles, Button, Card, CardContent } from '@material-ui/core';
import './Home.css';
import Navbar from '../../components/statics/navbar/Navbar';
import { Link } from 'react-router-dom';

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

export const Home = () => {

    const [ativaCor, setAtivaCor] = useState(false);

    useEffect(function () {
        function posicaoScroll() {
            if (window.scrollY > 40) {
                setAtivaCor(true);
            } else {
                setAtivaCor(false);
            }
        }
        window.addEventListener('scroll', posicaoScroll);
        window.scrollTo(0, 0)
    }, []);


    return (
        <>
            <Navbar acao={ativaCor} />
            <Swiper />
            <Grid container direction="row" justifyContent="center" alignItems="center">

                {/* PAGE 1 */}
                <Grid item xs={6} alignItems="center" >
                    <Box justifyContent="center" alignItems="center">

                        <Box marginLeft={20}>
                            <Typography variant='h3'>Soluções</Typography>
                        </Box>
                        <Box marginLeft={20}>
                            <Typography align="left" variant='h3'>Tecnológicas</Typography>
                        </Box>
                        <Box marginLeft={20} marginTop={2}>
                            <Typography align="left" variant='h5'>Equipe preparada e experiente</Typography>
                        </Box>
                        <Box marginLeft={20}>
                            <Typography align="left" variant='h5'>para diagnosticar sua necessidade</Typography>
                        </Box>
                        <Box marginLeft={20}>
                            <Typography align="left" variant='h5'>e oferecer a melhor solução para</Typography>
                        </Box>
                        <Box marginLeft={20}>
                            <Typography align="left" variant='h5'>o seu negócio.</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item style={{ height: '80vh' }} xs={6} alignItems='center'>
                    <Box marginTop={17} display='flex' justifyContent='center' alignItems='center'>
                        <img width="45%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="" />
                    </Box>
                </Grid>

                {/* PAGE 2 */}
                <Grid item xs={6} style={{ height: '80vh' }}>
                    <Box marginTop={8} display='flex' justifyContent='center' alignItems='center'>
                        <img width="35%" src={require("../../assets/logo/logo-nogran-vertical.png")} alt="" />
                    </Box>
                </Grid>

                <Grid item xs={6} alignItems="center" >
                    <Box justifyContent="center" alignItems="center">
                        <Box marginBottom='40px' >
                            <Typography variant='h3'>Produto Ideal</Typography>
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
                <Grid item xs={12} alignItems="center" style={{ height: '80vh' }}>
                    <Box justifyContent="center" alignItems="center" margin={15}>
                        <Box marginBottom={12}>
                            <Typography variant='h3' align='center'>Tecnologias que utilizamos</Typography>
                        </Box>
                        <Box marginBottom={12} display='flex' justifyContent='space-between' alignItems='center'>
                            <img width="8%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="" />
                            <img width="8%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="" />
                            <img width="8%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="" />
                            <img width="8%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="" />
                            <img width="8%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="" />
                            <img width="8%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                            <img width="8%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
                            <img width="8%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
                        </Box>
                        <Typography variant='h5' align='center'>A Nogran faz com que as tecnologias mais modernas e estáveis do mercado cheguem para seus clientes,</Typography>
                        <Typography variant='h5' align='center'>implementando soluções atuais para problemas antigos.</Typography>
                    </Box>
                </Grid>

                {/* PAGE 4 */}
                <Grid item xs={12} alignItems="center">
                    <CardContent className='folder' style={{ height: '50vh' }} >
                        <Box margin={5} >
                            <Typography align='center' variant='h2'>Gostamos de desafios!</Typography>
                            <Typography align='center' variant='h4'>Portanto, seja qual for sua demanda,</Typography>
                            <Typography align='center' variant='h4'>entre em contato e converse com</Typography>
                            <Typography align='center' variant='h4'>nossa equipe.</Typography>
                        </Box>

                    </CardContent>

                    <Box margin={3} className='upper-line' display='flex' alignItems="center" justifyContent="center" >
                        <Typography align="center" variant='h5'>Estamos à disposição para atendê-los.</Typography>
                        <Link to='/contato' className='text-decorator-none'>
                            <Box marginLeft={4}>
                                <StyledButton variant="contained" style={{ fontWeight: 'bold' }}>ENTRE EM CONTATO</StyledButton>
                            </Box>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
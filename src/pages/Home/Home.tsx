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
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={0}>

                {/* PAGE 1 */}
                <Grid item xs={6} style={{ height: '60vh' }} alignItems="center">
                    <Box paddingLeft={20} paddingY={20}>
                        <Typography variant='h4'>Soluções</Typography>
                        <Typography variant='h4'>Tecnológicas</Typography>
                        <Typography variant='h6'>Nossa equipe é especializada em diagnosticar a sua necessidade e desenvolver a melhor solução para o seu negócio. Trabalhamos com grandes empresas até startups, sempre entregando aplicações web robustas para Sistemas Customizados.</Typography>
                    </Box>
                </Grid>

                <Grid item style={{ height: '60vh' }} xs={6} alignItems='center'>
                    <Box sx={{ p: 15 }} display='flex' justifyContent='center' alignItems='center' className='box-shadow'>
                        <img width="80%" src={require("../../assets/logo/pc.png")} alt="" />
                    </Box>
                </Grid>

                {/* PAGE 2 */}
                <Grid item xs={6} style={{ height: '80vh' }}>
                    <Box display='flex' justifyContent='center' alignItems='center' marginTop={10}>
                        <img width="35%" src={require("../../assets/logo/logo-nogran-vertical.png")} alt="" />
                    </Box>
                </Grid>

                <Grid item xs={6} alignItems="center" style={{ height: '50vh' }} >
                    <Box justifyContent="center" alignItems="center">
                        <Box marginBottom='40px' >
                            <Typography variant='h4'>Produto Ideal</Typography>
                        </Box>

                        <Box className='alinhar' display='flex' marginBottom='5px'>
                            <Box marginRight='30px'>
                                <Typography variant='h6'>1.</Typography>
                            </Box>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Usuário</Typography>
                        </Box>

                        <Box paddingRight={20}>
                            <Typography variant='h6'>Durante todo o desenvolvimento do projeto esse é o nosso principal foco: as pessoas que irão utilizar o produto.</Typography>

                            <Box className='alinhar' display='flex' marginTop='30px' marginBottom='5px'>
                                <Box marginRight='30px'>
                                    <Typography variant='h6'>2.</Typography>
                                </Box>
                                <Typography variant='h6' style={{ fontWeight: 'bold' }}>Negócio</Typography>
                            </Box>
                            <Typography variant='h6'>Não deixamos de pensar no modelo de negócio de quem está contratando pelo desenvolvimento do produto.</Typography>

                            <Box className='alinhar' display='flex' marginTop='30px' marginBottom='5px'>
                                <Box marginRight='30px'>
                                    <Typography variant='h6'>3.</Typography>
                                </Box>
                                <Typography variant='h6' style={{ fontWeight: 'bold' }}>Estética</Typography>
                            </Box>
                            <Typography variant='h6'>Ao mesmo tempo, priorizamos a estética do projeto. É de suma importância que o produto seja visualmente agradável.</Typography>
                        </Box>
                    </Box>

                </Grid>

                {/* PAGE 3 */}
                <Grid item xs={6} alignItems="center" style={{ height: '40vh' }}>
                    <Box paddingLeft={20} marginTop={10}>
                        <Typography variant='h4'>Nosso</Typography>
                        <Typography variant='h4'>Diferencial</Typography>
                        <Typography variant='h6'>Ótimo atendimento e prioridade na solução dos problemas do cliente. Utilizamos metodologias ágeis para trabalhar por etapas de desenvolvimento e fracionamento de entregas. Isso permite o acompanhamento de todas as etapas do projeto e também, são evitados eventuais problemas que podem ser corrigidos mais rapidamente. Pensamos em cada detalhe da sua empresa para ultrapassarmos as expectativas ao concluir o projeto.</Typography>
                    </Box>

                </Grid>

                <Grid item xs={6} alignItems='center' style={{ height: '40vh' }}>
                    <Box display='flex' justifyContent='center' alignItems='center' marginTop={10} marginRight={10} className='nosso'>
                        <img width="50%" src={require("../../assets/logo/nosso.png")} alt="" />
                    </Box>
                </Grid>

                {/* PAGE 4 */}
                <Grid item xs={12} alignItems="center" style={{ height: '80vh' }}>
                    <Box justifyContent="center" alignItems="center" margin={20}>
                        <Box marginBottom={10}>
                            <Typography variant='h4' align='center'>Tecnologias que utilizamos</Typography>
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
                        <Typography variant='h6' align='center'>A Nogran faz com que as tecnologias mais modernas e estáveis do mercado cheguem para seus clientes, implementando soluções atuais para problemas antigos.</Typography>
                    </Box>
                </Grid>

                {/* PAGE 4 */}
                <Grid item xs={12} alignItems="center">
                    <CardContent className='folder' style={{ height: '45vh' }} >
                        <Box margin={5} >
                            <Typography align='center' variant='h3'>Gostamos de desafios!</Typography>
                            <Typography align='center' variant='h5'>Portanto, seja qual for sua demanda,</Typography>
                            <Typography align='center' variant='h5'>entre em contato e converse com</Typography>
                            <Typography align='center' variant='h5'>nossa equipe.</Typography>
                        </Box>
                    </CardContent>

                    <Box margin={3} className='upper-line' display='flex' alignItems="center" justifyContent="center" >
                        <Typography align="center" variant='h6'>Estamos à disposição para atendê-los.</Typography>
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
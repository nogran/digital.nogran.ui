import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Box, Button, Grid, TextField, Typography, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../../components/statics/navbar/Navbar";
import './Empresa.css';
import "swiper/css";
import "swiper/css/pagination";

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

export const Empresa = () => {

    const [ativaCor, setAtivaCor] = useState(true);

    useEffect(function () {
        function posicaoScroll() {
            if (window.scrollY > 40) {
                setAtivaCor(true);
            } else {
                setAtivaCor(true);
            }
        }
        window.addEventListener('scroll', posicaoScroll);
        window.scrollTo(0, 0)
    }, []);
    SwiperCore.use([Autoplay])
    return (
        <>
            <Navbar acao={ativaCor} />
            <Grid container direction="row" justifyContent='center' alignItems='center' >

                {/* PAGE 1 */}
                <Grid item className="empresa2" xs={12}>
                    <Box style={{ height: '40vh' }} display='flex' alignItems='center' justifyContent='start' marginLeft={20}>
                        <Typography variant='h4' style={{ fontWeight: 'bold', color: 'white' }}>EMPRESA</Typography>
                    </Box>
                </Grid>

                {/* PAGE 2 */}
                <Grid item xs={6} style={{ height: '60vh' }} >
                    <Box marginLeft={20}>
                        <Typography align="left" variant='h5' style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}> DIGITAL NOGRAN</Typography>
                        <Typography align="left" variant='h6' style={{ marginTop: 15 }}>Somos uma empresa que tem como objetivo entregar soluções tecnológicas customizadas para o seu negócio. Formada por profissionais com vivência prática no mercado que viram a necessidade de entregar um atendimento exclusivo na criação de Sistemas Web.</Typography>
                        <Typography align="left" variant='h6' style={{ marginTop: 15 }}>Nosso maior objetivo é entender as necessidades dos nossos clientes, transformando-as em valor agregado ao seu negócio. Entregamos soluções com qualidade e através de uma relação de parceria, transparência e comprometimento.</Typography>
                        <Typography align="left" variant='h6' style={{ marginTop: 15 }}>Trabalhamos utilizando metodologias de desenvolvimento ágil, sempre percorrendo os prazos acordados. Nosso grande diferencial é o relacionamento com o cliente. Buscamos estabelecer um relacionamento estreito, uma parceria sincera e verdadeira. </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box padding={10}>
                        
                        <Swiper
                            className="mySwiper"
                            loop={true}
                            modules={[Pagination, Navigation]}
                            style={{ height: '60vh' }}
                            speed={1600}
                            autoplay={{ delay: 3500 }}
                            pagination={true}
                        >

                            <SwiperSlide className="bgEmpresa1"></SwiperSlide>
                            <SwiperSlide className="bgEmpresa2"></SwiperSlide>
                        </Swiper>
                    </Box>
                </Grid>

                {/* PAGE 2 */}
                <Grid item className="empresa1" xs={12} style={{ height: '40vh' }}>
                </Grid>

                {/* PAGE 3 */}
                <Grid item xs={12} style={{ height: '30vh', marginTop: '20px' }}>
                    <Typography variant='h3' align="center">Olhar para o Futuro.</Typography>
                    <Box>
                        <Typography variant='h6' align='center' style={{ marginLeft: '170px', marginRight: '170px', marginTop: '10px' }}>Nossa equipe é formada por profissionais com vasta experiência nas áreas de tecnologia, desenvolvimento de software e produção industrial. Isso possibilita a visão ao futuro onde desenvolvemos soluções digitais específicas, explorando a criação de uma nova jornada para nossos clientes.</Typography>
                    </Box>
                </Grid>

                {/* PAGE 4 */}
                <Grid item xs={4} className="missao" style={{ height: '40vh' }}>
                    <Box marginLeft='170px'>
                        <Typography variant='h5' style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}>Missão</Typography>
                        <Typography variant='h6' style={{ marginTop: '10px' }}>Entregar a melhor experiência de integração digital para todos os nossos clientes, em cada plataforma digital.</Typography>
                    </Box>
                </Grid>

                <Grid item xs={4} className="missao" style={{ height: '40vh' }}>
                    <Box marginLeft='70px' marginRight='70px'>
                        <Typography variant='h5' style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}>Visão</Typography>
                        <Typography variant='h6' style={{ marginTop: '10px' }}>Ser uma marca de liderança em projetar o futuro a ser explorado com base nos produtos da era tecnológica, que promete um alto e forte crescimento para resolver os problemas de todos os tipos de organizações.</Typography>
                    </Box>
                </Grid>

                <Grid item xs={4} className="missao" style={{ height: '40vh' }}>
                    <Typography variant='h5' style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}>Objetivo</Typography>
                    <Typography variant='h6' style={{ marginRight: '150px', marginTop: '10px' }}>Aumentar o crescimento dos clientes através de tecnologias de gestão de produção, comercial, marketing e financeira para firmar uma parceria sólida e transparente com os clientes.</Typography>
                </Grid>

                <Grid item xs={12} className='upper-line2' style={{ height: '10vh' }}>
                    <Box margin={3} display='flex' alignItems="center" justifyContent="center" >
                        <Typography align="center" variant='h6'>Conheça nossos serviços e saiba mais sobre nosso trabalho.</Typography>
                        <Link to='/servicos' className='text-decorator-none'>
                            <Box marginLeft={4}>
                                <StyledButton variant="contained" style={{ fontWeight: 'bold' }}>SERVIÇOS</StyledButton>
                            </Box>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

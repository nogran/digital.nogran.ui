
import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography, withStyles } from "@material-ui/core";
import './Empresa.css';
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "../../components/statics/navbar/Navbar";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";

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
                <Grid item className="empresa2" xs={4} style={{ height: '40vh' }}>
                </Grid>
                <Grid item className="empresa2" xs={8} style={{ height: '40vh' }} >
                </Grid>

                <Grid item xs={6} style={{ height: '50vh' }} >
                    <Box marginLeft={20}>
                        <Typography align="left" variant='h5' style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}> DIGITAL NOGRAN</Typography>
                        <Typography align="left" variant='h6' style={{ marginTop: 15 }}>Somos uma empresa formada por consultores com vasta experiência nas áreas de tecnologia e desenvolvimento de software.</Typography>
                        <Typography align="left" variant='h6' style={{ marginTop: 15 }}>Nosso maior objetivo é entender as necessidades dos nossos clientes, transformando-as em valor agregado ao seu negócio. Entregamos soluções com qualidade e através de uma relação de parceria, transparência e comprometimento.</Typography>
                        <Typography align="left" variant='h6' style={{ marginTop: 15 }}>Trabalhamos utilizando metodologias de desenvolvimento ágil, sempre percorrendo os prazos acordados. Nosso grande diferencial é o relacionamento com o cliente. Buscamos estabelecer um relacionamento estreito, uma parceria sincera e verdadeira. </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box padding={10}>
                        <Swiper className="mySwiper" loop={true} modules={[Pagination, Navigation]} style={{ height: '50vh' }}
                            speed={1600}
                            autoplay={{ delay: 3500 }}
                            pagination={true}>

                            <SwiperSlide className="bgEmpresa"></SwiperSlide>
                            <SwiperSlide className="bgEmpresa"></SwiperSlide>
                        </Swiper>
                    </Box>
                </Grid>

                {/* PAGE 2 */}
                <Grid item className="empresa1" xs={12} style={{ height: '40vh' }}>
                </Grid>

                {/* PAGE 3 */}
                <Grid item xs={12} style={{ height: '30vh' }}>
                    <Typography variant='h3' align="center">Olhar para o Futuro.</Typography>
                    <Typography align="center" variant='h6' style={{ marginTop: 15 }}>Somos uma empresa formada por consultores com vasta experiência nas áreas de tecnologia e desenvolvimento de software.</Typography>
                </Grid>

                {/* PAGE 4 */}
                <Grid item xs={4} className="missao" style={{ height: '40vh' }}>
                    <Typography variant='h5' align="center" style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}>Objetivo</Typography>
                </Grid>


                <Grid item xs={4} className="missao" style={{ height: '40vh' }}>
                    <Typography variant='h5' align="center" style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}>Missão</Typography>
                </Grid>

                <Grid item xs={4} className="missao" style={{ height: '40vh' }}>
                    <Typography variant='h5' align="center" style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}>Visão</Typography>
                </Grid>

                <Grid item xs={12} className="missao" style={{ height: '10vh' }}>
                    <Box margin={3} className='upper-line' display='flex' alignItems="center" justifyContent="center" >
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

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import {
  Box,
  Button,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../../components/statics/navbar/Navbar";
import "./Empresa.css";
import "swiper/css";
import "swiper/css/pagination";

const StyledButton = withStyles({
  root: {
    backgroundColor: "#656565",
    color: "#fff",
    "&:hover": {
      backgroundColor: "black",
      // color: 'black',
    },
  },
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
    window.addEventListener("scroll", posicaoScroll);
    window.scrollTo(0, 0);
  }, []);
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Navbar acao={ativaCor} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* PAGE 1 */}
        <Grid item className="empresa2" xs={12}>
          <Box
            style={{ height: "40vh" }}
            display="flex"
            alignItems="center"
            justifyContent="start"
            marginLeft={20}
          >
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", color: "white" }}
            >
              EMPRESA
            </Typography>
          </Box>
        </Grid>

        {/* FIRST VIEW*/}
        <Grid item xs={12} sm={6} lg={6} >
          <Box marginLeft={20}>
            <Typography
              align="left"
              variant="h5"
              style={{ fontWeight: "bold", letterSpacing: 4, lineHeight: 2 }}
            >
              DIGITAL NOGRAN
            </Typography>
            <Typography align="left" variant="h6" style={{ marginTop: 15 }}>
              Nós somos uma equipe de especialistas experientes no mercado,
              comprometidos em fornecer atendimento excepcional na criação de
              sistemas web personalizados para o seu negócio. Nossa missão é
              entender suas necessidades e transformá-las em soluções
              tecnológicas de valor, utilizando metodologias ágeis para entregas
              rápidas e precisas dentro dos prazos acordados. Se você deseja
              aumentar sua competitividade, aumentar sua presença online ou
              alcançar novos mercados, confie em nós para ajudá-lo a alcançar
              seus objetivos.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={6}>
          <Box padding={10}>
            <Swiper
              className="mySwiper"
              loop={true}
              modules={[Pagination, Navigation]}
              style={{ height: "60vh" }}
              speed={1600}
              autoplay={{ delay: 3500 }}
              pagination={true}
            >
              <SwiperSlide className="bgEmpresa1"></SwiperSlide>
              <SwiperSlide className="bgEmpresa2"></SwiperSlide>
            </Swiper>
          </Box>
        </Grid>

        {/* SECOND VIEW */}
        <Grid
          item
          className="empresa1"
          xs={12}
          style={{ height: "40vh" }}
        ></Grid>

        {/* THIRD VIEW */}
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Olhar para o Futuro.
          </Typography>
        </Grid>

        {/* FORTH VIEW */}
        <Grid container spacing={2}>
          <Grid item xs={4} className="missao">
            <Box textAlign="center">
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", letterSpacing: 4, lineHeight: 2 }}
              >
                Missão
              </Typography>
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                Fornecer a melhor experiência de integração digital para todos
                os nossos clientes em todas as plataformas digitais,
                desenvolvendo soluções personalizadas para maximizar o sucesso
                do negócio dos nossos clientes.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} className="missao">
            <Box textAlign="center">
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", letterSpacing: 4, lineHeight: 2 }}
              >
                Visão
              </Typography>
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                Ser uma líder na projeção do futuro a ser explorado com base nas
                tecnologias atuais, oferecendo soluções para impulsionar o
                crescimento e resolver problemas para todos os tipos de
                organizações.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} className="missao">
            <Box textAlign="center">
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", letterSpacing: 4, lineHeight: 2 }}
              >
                Objetivo
              </Typography>
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                Aumentar o crescimento dos clientes através de tecnologias
                avançadas de gestão de produção, comercial, marketing e
                financeira, estabelecendo parcerias sólidas e transparentes.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} className="upper-line2" style={{ height: "10vh" }}>
          <Box
            margin={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography align="center" variant="h6">
              Conheça nossos serviços.
            </Typography>
            <Link to="/servicos" className="text-decorator-none">
              <Box marginLeft={4}>
                <StyledButton
                  variant="contained"
                  style={{ fontWeight: "bold" }}
                >
                  SERVIÇOS
                </StyledButton>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

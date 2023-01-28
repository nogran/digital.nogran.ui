import { useEffect, useState } from "react";
import Swiper from "./swiperReact/SwiperReact";
import {
  Grid,
  Box,
  Typography,
  withStyles,
  Button,
  CardContent,
} from "@material-ui/core";
import "./Home.css";
import Navbar from "../../components/statics/navbar/Navbar";
import { Link } from "react-router-dom";

const StyledButton = withStyles({
  root: {
    backgroundColor: "#656565",
    color: "#fff",
    "&:hover": {
      backgroundColor: "black",
    },
  },
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
    window.addEventListener("scroll", posicaoScroll);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar acao={ativaCor} />
      <Swiper />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        {/* PAGE 1 */}
        <Grid item xs={12} sm={6} lg={6} alignItems="center">
          <Box paddingLeft={10} marginRight={10} paddingY={20}>
            <Typography variant="h4">Soluções</Typography>
            <Typography variant="h4" style={{ marginBottom: "10px" }}>
              Tecnológicas
            </Typography>
            <Typography variant="h6">
              Nossa equipe é formada por especialistas qualificados em
              desenvolvimento de software e design, oferecendo soluções digitais
              personalizadas e inovadoras para maximizar o potencial e garantir
              a competitividade do seu negócio no mercado.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={6} alignItems="center">
          <Box
            sx={{ p: 15 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="pc"
          >
            <img src={require("../../assets/logo/pc.png")} />
          </Box>
        </Grid>
      </Grid>

      {/* PAGE 2 */}
      {/* <Grid item xs={12} sm={6} lg={6} alignItems="center">
        <Box
          sx={{ p: 15 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="logo_vertical"
          paddingLeft={20} paddingY={20}
        >
          <img src={require("../../assets/logo/logo-nogran-vertical.png")} />
        </Box>
      </Grid> */}

      <Grid container>
        <Grid item xs={12} sm={4} lg={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingLeft={10}
            paddingRight={10}
          >
            <Typography variant="h6">
              1. Usuário Durante todo o desenvolvimento do projeto esse é o
              nosso principal foco: as pessoas que irão utilizar o produto.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingLeft={10}
            paddingRight={10}
          >
            <Typography variant="h6">
              2. Negócio Não deixamos de pensar no modelo de negócio de quem
              está contratando pelo desenvolvimento do produto.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingLeft={10}
            paddingRight={10}
          >
            <Typography variant="h6">
              3. Estética A estética do projeto é uma prioridade e é importante
              que o produto seja visualmente agradável.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* PAGE 3 */}
      <Grid item xs={12} sm={6} lg={6} alignItems="center">
        <Box paddingLeft={10} paddingRight={10} paddingY={10}>
          <Typography variant="h4">Nosso</Typography>
          <Typography variant="h4" style={{ marginBottom: "10px" }}>
            Diferencial
          </Typography>
          <Typography variant="h6">
            Nossa equipe oferece ótimo atendimento, utiliza metodologias ágeis
            para dividir o projeto em etapas e entregar incrementos frequentes,
            buscando superar as expectativas do cliente.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} lg={6} alignItems="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={10}
          marginRight={10}
          className="hands"
        >
          <img src={require("../../assets/logo/nosso.png")} />
        </Box>
      </Grid>

      {/* PAGE 4 */}
      <Grid item xs={12} alignItems="center">
        <Box justifyContent="center" alignItems="center">
          <Typography variant="h4" align="center">
            Tecnologias que utilizamos
          </Typography>
        </Box>

        <Box
        marginTop={5}
          marginBottom={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className="tech_icon"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        </Box>
      </Grid>

      {/* PAGE 4 */}
      <Grid item xs={12} alignItems="center">
        <CardContent className="folder">
          <Box margin={5}>
            <Typography align="center" variant="h3">
              Gostamos de desafios!
            </Typography>
            <Typography align="center" variant="h5">
              Portanto, seja qual for sua demanda, entre em contato e converse
              com nossa equipe.
            </Typography>
          </Box>
        </CardContent>
      </Grid>

      <Grid item xs={12} className="upper-line" style={{ height: "10vh" }}>
        <Box
          margin={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/contato" className="text-decorator-none">
            <StyledButton variant="contained" style={{ fontWeight: "bold" }}>
              ENTRE EM CONTATO
            </StyledButton>
          </Link>
        </Box>
      </Grid>
    </>
  );
};

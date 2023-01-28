import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import "./Servicos.css";
import Navbar from "../../components/statics/navbar/Navbar";

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

export const Servicos = () => {
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

  return (
    <>
      <Navbar acao={ativaCor} />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="servicoimg" xs={12}>
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
              SERVIÇOS
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <div className="servicos-page">
        <div className="servicos-container">
          <Card className="servicos-item">
            <CardContent>
              <Typography variant="h5">Análise de Dados</Typography>
              <Typography variant="body1">
                Maximizar o potencial do seu negócio com análise de dados de
                alto nível.
              </Typography>
            </CardContent>
          </Card>
          <Card className="servicos-item">
            <CardContent>
              <Typography variant="h5">Desenvolvimento Web</Typography>
              <Typography variant="body1">
                Desenvolvemos os melhores sites usando as melhores tecnologias
                do mercado.
              </Typography>
            </CardContent>
          </Card>
          <Card className="servicos-item">
            <CardContent>
              <Typography variant="h5">Design Gráfico</Typography>
              <Typography variant="body1">
                Design de marca, ilustração, social mídia, etc. Criamos
                materiais gráficos sob medida para você.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

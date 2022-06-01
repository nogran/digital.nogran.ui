import { Box, Grid, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Navbar from "../../components/statics/navbar/Navbar";

export const Contato = () => {

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
  }, []);

  return (
    <>
      <Navbar acao={ativaCor} />
      <Grid container alignItems="center">
        <Grid xs={12}>
        <img src={require("../../assets/images/pexels-photo-3184639.jpg")} alt="" />

        </Grid>

        <Grid item xs={6}>
          <Box margin={12}>
            <form>
              <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Contato</Typography>
              <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
              <TextField id='telefone' label='telefone' variant='outlined' name='telefone' margin='normal' fullWidth />
              <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />
              <TextField id='mensagem' label='mensagem' variant='outlined' name='mensagem' margin='normal' fullWidth rows={10} multiline />
            </form>
          </Box>
        </Grid>
        <Grid xs={6}>

        </Grid>
      </Grid>
    </>
  );
}

import { useEffect, useState } from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import './Contato.css';
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
      <Grid container direction="row">
        <Grid item className="contatoimg" xs={12}>
          <Box style={{ height: '40vh' }} display='flex' alignItems='center' justifyContent='start' marginLeft={4}>
              <Typography variant='h4'style={{ fontWeight: 'bold', color: 'white' }}>CONTATO</Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box margin={4}>
            <form>
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

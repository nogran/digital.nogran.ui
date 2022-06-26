import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography, withStyles } from "@material-ui/core";
import './Contato.css';
import Navbar from "../../components/statics/navbar/Navbar";
import Usuario from "../../models/Usuario";
import Email from "../../models/Email";
import { postsemtoken } from "../../services/Service";

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

export const Contato = () => {

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    // await postsemtoken(`/contato`, usuario, setUsuario)
    await postsemtoken(`/sendMail`, email, setEmail)
    alert('🌱 Mensagem enviada com sucesso.')
  };

  // function updatedModel(e: ChangeEvent<HTMLInputElement>) {
  //   setUsuario({
  //     ...usuario,
  //     [e.target.name]: e.target.value
  //   })
  // }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setEmail({
      ...email,
      [e.target.name]: e.target.value
    })
  }

  const [usuario, setUsuario] = useState<Usuario>(
    {
      id: 0,
      nome: '',
      telefone: '',
      email: '',
      mensagem: ''
    })

  const [email, setEmail] = useState<Email>(
    {
      recipient: 'mateusnog95@gmail.com',
      msgBody: '',
      subject: 'Contato Digital',
      attachment: ''
    })

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

  return (
    <>
      <Navbar acao={ativaCor} />
      <Grid container direction="row" justifyContent='center' alignItems='center'>
        <Grid item className="contatoimg" xs={12}>
          <Box style={{ height: '40vh' }} display='flex' alignItems='center' justifyContent='start' marginLeft={20}>
            <Typography variant='h4' style={{ fontWeight: 'bold', color: 'white' }}>CONTATO</Typography>
          </Box>
        </Grid>

        <Grid item xs={7} alignItems='center'>
          <Box marginLeft={20} >
            <form onSubmit={onSubmit}>
              <Box display='flex' justifyContent='space-between' alignItems='center' marginTop={5}>
                <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth required />
                <TextField value={usuario.telefone} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="telefone" label="Telefone" variant="outlined" name="telefone" margin="normal" fullWidth required />
                <TextField value={usuario.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="email" label="E-mail" variant="outlined" name="email" margin="normal" fullWidth required />
              </Box>

              <TextField value={usuario.mensagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="mensagem" label="Mensagem" variant="outlined" name="mensagem" margin="normal" fullWidth required rows={10} multiline />

              {/* <TextField value={email.msgBody} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="msgBody" label="Mensagem" variant="outlined" name="msgBody" margin="normal" fullWidth required /> */}

              <Box marginTop={2} textAlign='center'>
                <StyledButton type='submit' variant='contained' color='primary'>
                  Enviar
                </StyledButton>
              </Box>
            </form>

          </Box>
        </Grid>
        <Grid xs={5} alignItems='center'>
          <Box display='inline-block' justifyContent='center' alignItems='center' marginLeft={20}>
            <Box><Typography variant='h6' style={{ fontWeight: 'bold' }}>E-mail:</Typography></Box>
            <Box><Typography variant='h6'>contato@digitalnogran.com.br</Typography></Box>
            <Box><Typography variant='h6' style={{ fontWeight: 'bold' }}>Telefone:</Typography></Box>
            <Box><Typography variant='h6'>+55 (11) 97615-4141</Typography></Box>
          </Box>
        </Grid>
      </Grid >
    </>
  );
}

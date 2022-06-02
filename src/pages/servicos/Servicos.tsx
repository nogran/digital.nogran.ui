import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography, withStyles } from "@material-ui/core";
import './Servicos.css';
import Navbar from "../../components/statics/navbar/Navbar";

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
        window.addEventListener('scroll', posicaoScroll);
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Navbar acao={ativaCor} />

            <Grid container direction="row" justifyContent='center' alignItems='center'>

                <Grid item className="contatoimg" xs={12}>
                    <Box style={{ height: '40vh' }} display='flex' alignItems='center' justifyContent='start' marginLeft={20}>
                        <Typography variant='h4' style={{ fontWeight: 'bold', color: 'white' }}>SERVIÇOS</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
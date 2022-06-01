
import { useEffect, useState } from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import './Empresa.css';
import Navbar from "../../components/statics/navbar/Navbar";

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

    return (
        <>
            <Navbar acao={ativaCor} />
            <Grid container direction="row">

            </Grid>
        </>
    );
}

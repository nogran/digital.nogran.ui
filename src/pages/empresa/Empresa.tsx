
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
            <Grid container direction="row" justifyContent='center' alignItems='center' >

                {/* PAGE 1 */}
                <Grid item className="empresa1" xs={4} style={{ height: '40vh' }}>
                </Grid>
                <Grid item className="empresa2" xs={8} style={{ height: '40vh' }} >
                </Grid>

                <Grid item xs={6} style={{ height: '80vh', backgroundColor: 'blue' }}>
                    <Typography align="center" variant='h5' style={{ fontWeight: 'bold', letterSpacing: 4, lineHeight: 2 }}> DIGITAL NOGRAN</Typography>
                </Grid>

                <Grid item xs={6} style={{ height: '80vh', backgroundColor: 'yellow' }}>
                    <Typography></Typography>
                </Grid>

                {/* PAGE 2 */}
                <Grid item className="empresa1" xs={12} style={{ height: '40vh' }}>
                </Grid>

                {/* PAGE 3 */}
                <Grid item xs={12} style={{ height: '80vh' }}>
                </Grid>
            </Grid>
        </>
    );
}

import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";

function Contato() {
    return (
        <Grid container alignItems="center">
            <Grid item xs={6}>
                <Box margin={12}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Contato</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth/>
                        <TextField id='telefone' label='telefone' variant='outlined' name='telefone' margin='normal' fullWidth/>
                        <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth/>
                        <TextField id='mensagem' label='mensagem' variant='outlined' name='mensagem' margin='normal' fullWidth rows={10} multiline/>
                    </form>
                </Box>
            </Grid>
            <Grid xs={6}>

            </Grid>
        </Grid>
    );
}

export default Contato;
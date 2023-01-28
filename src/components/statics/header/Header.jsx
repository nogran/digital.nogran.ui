import React from 'react';
import { Box, Grid } from '@material-ui/core';
import './Header.css'

function Header() {
    return (
        <>
            <Box className='header' style={{ height: '12vh' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box className='header-content'>
                            <Box>Header Content</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Header;
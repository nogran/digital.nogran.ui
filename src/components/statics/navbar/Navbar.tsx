import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

import './Navbar.css';

const toolbarStyle = {
    minHeight: '80px',
  };

function Navbar({ acao }: { acao: any }) {
    return (
        <>
            <AppBar elevation={1} className={acao ? 'ativaCor' : 'desativaCor'}>
                    <Toolbar style={toolbarStyle} className='bar'>
                        <Box display="flex" marginRight={15}>
                        {/* <img src={require('../../../assets/logo-nogran-black.png')}/> */}
                            <Box mx={1}  p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">HOME</Typography>
                            </Box>
                            <Box mx={1} p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">EMPRESA</Typography>
                            </Box>
                            <Box mx={1} p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">SERVIÇOS</Typography>
                            </Box>
                            <Box mx={1} p={1}style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">CONTATO</Typography>
                            </Box>
                        </Box>
                    </Toolbar >
            </AppBar >
        </>
    );
}

export default Navbar
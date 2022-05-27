import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.css';

const toolbarStyle = {
    minHeight: '80px',
  };

function Navbar({ acao }: { acao: any }) {
    return (
        <>
            <AppBar elevation={1} className={acao ? 'ativaCor' : 'bg'}>
                    <Toolbar style={toolbarStyle} className='bar'>
                        <Box display="flex" justifyContent='flex-end' className={acao ? 'acao' : 'acao2'}>
                            <Box mx={1}  p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">
                                    HOME
                                </Typography>
                            </Box>
                            <Box mx={1} p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">
                                    EMPRESA
                                </Typography>
                            </Box>
                            <Box mx={1} p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">
                                    SERVIÇOS
                                </Typography>
                            </Box>
                            <Box mx={1}  p={1}style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">
                                    CONTATO
                                </Typography>
                            </Box>
                        </Box>
                    </Toolbar >
                
            </AppBar >
 
        </>
    )
}

export default Navbar
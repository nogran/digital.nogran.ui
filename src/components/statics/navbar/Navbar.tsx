import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.css';

function Navbar({ acao }: { acao: any }) {
    return (
        <>
            <AppBar className={acao ? 'ativaCor' : 'bg'}>
                    <Toolbar className='bar'>
                        <Box display="flex" justifyContent='flex-end' className={acao ? 'acao' : 'acao2'}>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6">
                                    HOME
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6">
                                    EMPRESA
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6">
                                    SERVICOS
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6">
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
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

const toolbarStyle = {
    minHeight: '80px',
    borderBottom: '1px solid rgba(255,255,255, 0.3)',
}

const linkStyle = {
    textDecoration: "none",
    color: 'white'
};

function Navbar({ acao }: { acao: any }) {
    return (
        <>
            <AppBar elevation={0} className={acao ? 'ativaCor' : 'desativaCor'}>
                <Toolbar style={toolbarStyle} className='bar'>
                    <Box display="flex" marginRight={15}>
                        {/* <img src={require('../../../assets/logo-nogran-black.png')}/> */}

                        <Link to='/home' style={linkStyle} className={acao ? 'ativaCor' : 'desativaCor'}>
                            <Box mx={1} p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">HOME</Typography>
                            </Box>
                        </Link>

                        <Link to='/empresa' style={linkStyle} className={acao ? 'ativaCor' : 'desativaCor'}>
                            <Box mx={1} p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">EMPRESA</Typography>
                            </Box>
                        </Link>

                        <Link to='/servicos' style={linkStyle} className={acao ? 'ativaCor' : 'desativaCor'}>
                            <Box mx={1} p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">SERVIÇOS</Typography>
                            </Box>
                        </Link>

                        <Link to='/contato' style={linkStyle} className={acao ? 'ativaCor' : 'desativaCor'}>
                            <Box mx={1} p={1} style={{ cursor: "pointer" }}>
                                <Typography variant="subtitle1">CONTATO</Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar >
            </AppBar >
        </>
    );
}

export default Navbar
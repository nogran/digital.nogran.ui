import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
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

                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} p={1} style={{ cursor: "pointer", color: "white" }}>
                                <Typography variant="subtitle1">HOME</Typography>
                            </Box>
                        </Link>

                        <Link to='/empresa' className='text-decorator-none'>
                            <Box mx={1} p={1} style={{ cursor: "pointer", color: "black" }}>
                                <Typography variant="subtitle1">EMPRESA</Typography>
                            </Box>
                        </Link>

                        <Box mx={1} p={1} style={{ cursor: "pointer" }}>
                            <Typography variant="subtitle1">SERVIÇOS</Typography>
                        </Box>

                        <Link to='/contato' className='text-decorator-none'>
                            <Box mx={1} p={1} style={{ cursor: "pointer", color: "black" }}>
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
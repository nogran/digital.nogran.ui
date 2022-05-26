import React from 'react';
import { Paper, Box, ButtonGroup, Button, Grid, Container, Typography } from '@material-ui/core';
import './Header.css';

function Header() {
    return (
        <>
            <Container style={{ backgroundColor: '#F5F5F5', height: '100vh' }}>
                <div className='header'>
                    <p>A era</p>
                    <p>exponencial</p>
                    <p>cresça sem limites</p>
                </div>
            </Container>
        </>
    );
}

export default Header
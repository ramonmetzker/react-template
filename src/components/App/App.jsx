import { Container, CssBaseline, ThemeProvider, Toolbar } from '@material-ui/core';
import React from 'react';
import Header from '../Header';
import darkTheme from '../../styles/Theme';
import Body from '../Body';

const App = () => {
    const theme = darkTheme;
    return(
        <ThemeProvider theme={theme}>
            <Header />
            <Toolbar />
            <Container maxWidth="lg">
                <Body />
            </Container>
            <CssBaseline />
        </ThemeProvider>
    )
}

export default App;
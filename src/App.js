import React from 'react';
import yellow from '@material-ui/core/colors/yellow'
import grey from '@material-ui/core/colors/grey'
import Container from "@material-ui/core/Container";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";


const outerTheme = createMuiTheme({
    palette: {
        primary: {
            main: yellow['A200'],
            dark: yellow['700']
        },
        darkBg: {
            main: grey[900],
        },
    },
    typography: {

        h1: {
            fontSize: '30',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 20,
            marginTop: 20,
            textShadow: '1px 1px 10px rgba(0, 0, 0, 1)'
        },
        h2: {
            fontSize: '25',
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '1px 1px 10px rgba(0, 0, 0, 1)'
        },
        body1: {
            color: '#fff',
        }

    },
});



function App() {

    return (
        <div className="App">
            <ThemeProvider theme={outerTheme}>
                <Container maxWidth="xl">
                    <Header/>
                    <AppRoutes/>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;

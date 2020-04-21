import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { MapComponent } from '../';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:3000');

const styles = {
    wrapper: {
        padding: 0,
        maxWidth: 1288
    },
    map: {
        height: 890
    }
};

class App extends Component {
    state = {
        heroes: [],
        dataLoaded: false
    };

    componentDidMount = () => {
        client.onmessage = (event) => {
            let data = JSON.parse(event.data);
            this.updateState(data);
        };

        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
    };

    updateState = (data) => {
        const heroesAttributes = {
            hero: data.hero,
            house: data.house,
            x: data.x,
            y: data.y
        };

        if (!this.state.heroes.some((e) => e.hero === data.hero)) {
            this.setState({
                heroes: [heroesAttributes, ...this.state.heroes]
            });
        } else {
            this.setState({ dataLoaded: true });
            const index = this.state.heroes.findIndex(
                (e) => e.hero === data.hero
            );

            this.setState({
                heroes: [
                    ...this.state.heroes.slice(0, index),
                    Object.assign(
                        {},
                        this.state.heroes[index],
                        heroesAttributes
                    ),
                    ...this.state.heroes.slice(index + 1)
                ]
            });
        }
    };

    render() {
        const theme = createMuiTheme({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 480,
                    md: 768,
                    lg: 1024,
                    xl: 1440
                }
            }
        });

        const { classes } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Container className={classes.wrapper}>
                        {this.state.dataLoaded && (
                            <MapComponent heroes={this.state.heroes} />
                        )}
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);

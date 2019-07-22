import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/NavBar';

class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Vnda App</title>
                </Head>

                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <NavBar>
                    <Component {...pageProps} />
                </NavBar>

            </Container>
        );
    }
}

export default MyApp;
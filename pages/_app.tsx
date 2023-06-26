import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';
import theme from '@definitions/chakra/theme';
import { StyledThemeProvider } from '@definitions/styled-components';
import '../src/styles/global.css';
import Layout from 'src/layout';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { OpenAPI } from 'src/services';
import NextNProgress from 'nextjs-progressbar';
import { UserProvider } from '@components/context/UserContext';
import { Toaster } from 'react-hot-toast';

function MyApp({
    Component,
    pageProps,
}: AppProps<{ dehydratedState: unknown }>): JSX.Element {
    OpenAPI.BASE =
        (process.env.NEXT_PUBLIC_API_BASEURL as string) ||
        'https://pi-commandcenterdev.azurewebsites.net';
    OpenAPI.TOKEN = Cookies.get('token') as string;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
            if (loader)
                setTimeout(() => {
                    loader.remove();
                }, 1000);
        }
    }, []);
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
                <title>Timesheet Command Center</title>
                <link rel="icon" href="/assets/logo.png" type="image/x-icon" />
            </Head>
            <StyledThemeProvider>
                <UserProvider>
                    <Toaster position="top-right" reverseOrder={false} />
                    <NextNProgress color="#2EAFA3" />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </UserProvider>
            </StyledThemeProvider>
        </ChakraProvider>
    );
}

export default MyApp;

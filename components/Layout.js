import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import MenuVertical from './MenuVertical';
import Footer from './Footer';
import Head from 'next/head';


export default props => {
    return (
        <div>
            <Head>
                <title>CrowdCoin</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Zac Messinger" />
                <meta name="keywords" content="Ethereum, DAPP, Zac, Messinger, zmess, zmess24, Ether" />
                <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
                <link rel="shortcut icon" type="image/png" href="../static/favicon.png" />

                <meta name="description" content="Decentralized application built on Ethereum using the Rinkeby Network that allows users to bet on a number to win Ether." />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet"></link>
            </Head>
            <style jsx global>{`
                    .layout { 
                        margin-left: 250px !important;
                    }

                    h1, h2, h3, h4, h5 {
                        font-family: Roboto, sans-serif;
                    }

                    p {
                        font-size: 15px;
                        font-family: Roboto, sans-serif;
                    }
                    `}</style>
            <MenuVertical />
                <div className="layout" style={{ backgroundColor: '#eee', height: '100vh' }}>
                    {props.children}
                </div>
                {/* <Footer /> */}
        </div>
    )
}
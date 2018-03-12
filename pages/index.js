import React, { Component } from 'react';
import Layout from '../components/Layout';
import withRedux from "next-redux-wrapper";
import initStore from '../store';
import { Container, Grid } from 'semantic-ui-react';


class App extends Component {
    render() {
        return (
            <Layout>
                <Container style={{ padding: '25px' }}>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <h1>Welcome</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <h2><strong>Getting Started</strong></h2>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <h3>Step 1:</h3>
                                <p>Sign up for MetaMask, and connect to the Rinkeby Network.</p>
                                <img src="../static/metamask.png" width="200px"/>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>Step 2:</h3>
                                <p>Create an account and use <a target='_blank' href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a> to recieve free test Ether.</p>
                                <p>Tips:</p>
                                <p>1. You can copy your Ethereum address by clicking on the "..." dropdown in MetaMask.</p>
                                <p>2. I recommend using Google Plus for grabbing the post url per the instructions.</p>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>Step 3:</h3>
                                <p>Get started and create a project, or contribute to an existing one!</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Layout>
        )
    }
}

export default withRedux(initStore, null, null)(App);
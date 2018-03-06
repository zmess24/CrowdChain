import React, { Component } from 'react';
import Layout from '../components/Layout';
import DataShow from '../components/DataShow'
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
                                <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>My Projects</h1>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Layout>
        )
    }
}

export default withRedux(initStore, null, null)(App);
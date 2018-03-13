import React, { Component } from 'react';
import Layout from '../components/Layout';
import withRedux from "next-redux-wrapper";
import initStore from '../store';
import { Link } from '../routes';
import { Container, Grid, Card, Icon, Table } from 'semantic-ui-react';


class App extends Component {
    render() {  
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <div style={{ padding: '25px' }}>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>My Projects</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Card fluid>
                                    <Card.Content>
                                        <Link route={"/projects/create"}>
                                            <a style={{ color: 'black'}}>
                                                <Icon style={{ float: 'right' }} size="big" name='plus square' />
                                            </a>
                                        </Link>
                                        <Card.Header>My Projects</Card.Header>
                                        <Card.Meta>Campaigns started by my Metamask account.</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Table>
                                            <Header>
                                                <Row>
                                                    <HeaderCell>ID</HeaderCell>
                                                    <HeaderCell>Name</HeaderCell>
                                                    <HeaderCell>Description</HeaderCell>
                                                    <HeaderCell>Start Date</HeaderCell>
                                                    <HeaderCell>Ether Raised</HeaderCell>
                                                </Row>
                                            </Header>
                                            <Body>
                                                {/* {this.renderRows()} */}
                                            </Body>
                                        </Table>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Layout>
        )
    }
}

export default withRedux(initStore, null, null)(App);
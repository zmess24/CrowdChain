import React, { Component } from 'react';
import Layout from '../components/Layout';
import withRedux from "next-redux-wrapper";
import initStore from '../store';
import { Container, Grid, Card, Icon, Table } from 'semantic-ui-react';


class Projects extends Component {
    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (
            <Layout>
                <div style={{ padding: '25px' }}>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>Projects</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Card fluid>
                                    <Card.Content>
                                        <Icon style={{ float: 'right' }} size="big" name='plus square' /> 
                                        <Card.Header>Projects</Card.Header>
                                        <Card.Meta>Historical list of campaigns.</Card.Meta>
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

export default withRedux(initStore, null, null)(Projects);
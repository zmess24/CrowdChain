import React, { Component } from 'react';
import Layout from '../components/Layout';
import withRedux from "next-redux-wrapper";
import initStore from '../store';
import { Container, Grid, Card, Icon, Segment, Table } from 'semantic-ui-react';


class Dashboard extends Component {

    state = {
        projects: 0,
        totalContributions: 0,
        contributionTotal: 0,
        highestContribution: 0
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (
            <Layout>
                <div style={{ padding: '25px' }}>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>Dashboard</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <Card>
                                    <Card.Content>
                                        <Icon style={{ float: 'right' }} size="large" name='calendar outline' />
                                        <Card.Header>{this.state.projects}</Card.Header>
                                        <Card.Meta>Total Projects</Card.Meta>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                                <Card>
                                    <Card.Content>
                                        <Icon style={{ float: 'right' }} size="large" name='users' />
                                        <Card.Header>{this.state.projects}</Card.Header>
                                        <Card.Meta>Total Backers</Card.Meta>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                                <Card>
                                    <Card.Content>
                                        <Icon style={{ float: 'right' }} size="large" name='plus' />
                                        <Card.Header>{this.state.projects}</Card.Header>
                                        <Card.Meta>Contributions Made</Card.Meta>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                                <Card>
                                    <Card.Content>
                                        <Icon style={{ float: 'right' }} size="large" name='money' />
                                        <Card.Header>{this.state.projects} ether</Card.Header>
                                        <Card.Meta>Biggest Contribution</Card.Meta>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>Last 10 Projects</Card.Header>
                                        <Card.Meta>Recently Created Projects</Card.Meta>
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

export default withRedux(initStore, null, null)(Dashboard);
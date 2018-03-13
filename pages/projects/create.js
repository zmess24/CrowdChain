import React, { Component } from 'react';
import Layout from '../../components/Layout';
import withRedux from "next-redux-wrapper";
import initStore from '../../store';
import { Link } from '../../routes';
import { Grid, Card, Icon, Form, Button, Input, Message, Image } from 'semantic-ui-react';

class CreateProject extends Component {
    state = {
        title: '',
        goalEther: '',
        description: '',
        goalDate: '',
        loading: false,
        errorMessage: ''
    }

    // onSubmit = async (event) => {
    //     event.preventDefault()

    //     const campaign = Campaign(this.props.address);
    //     const { description, value, recipient } = this.state;

    //     this.setState({ loading: true, errorMessage: '' })

    //     try {
    //         const accounts = await web3.eth.getAccounts();
    //         await campaign.methods.createRequest(
    //             description,
    //             web3.utils.toWei(value, 'ether'),
    //             recipient
    //         ).send({ from: accounts[0] });

    //         Router.pushRoute('/campaigns/' + this.props.address + '/requests');
    //     } catch (err) {
    //         this.setState({ errorMessage: err.message })
    //     }

    //     this.setState({ loading: false })
    // };

    render() {
        return (
            <Layout>
                <div style={{ padding: '25px' }}>
                    <Grid stackable>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>Create Project</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column width={10}>
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>Start a new Project</Card.Header>
                                        <Card.Meta>Current Escrow is set at 0.1 Ether</Card.Meta>
                                    </Card.Content>
                                    <Card.Content>
                                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                                            <Form.Group>
                                                <Form.Field width={8}>
                                                    <label>Title</label>
                                                    <Input
                                                        value={this.state.title}
                                                        placeholder="Enter project title..."
                                                        onChange={event => this.setState({ title: event.target.value })}
                                                    />
                                                </Form.Field>
                                                <Form.Field width={8}>
                                                    <label>Crowd Sourcing Goal</label>
                                                    <Input
                                                        value={this.state.goalEther}
                                                        type="number"
                                                        placeholder="Enter Goal Ether Amount..."
                                                        onChange={event => this.setState({ goalEther: event.target.value })}
                                                    />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Field width={8}>
                                                    <label>Owner</label>
                                                    <Input
                                                        value={this.state.recipient}
                                                        onChange={event => this.setState({ recipient: event.target.value })}
                                                    />
                                                </Form.Field>
                                                <Form.Field width={8}>
                                                    <label>Goal Date</label>
                                                    <Input
                                                        value={this.state.recipient}
                                                        type="date"
                                                        onChange={event => this.setState({ recipient: event.target.value })}
                                                    />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Field placeholder="Enter a project description..." width={16} label="Description" control='textarea' value={this.state.goalEther} onChange={event => this.setState({ goalEther: event.target.value })} />
                                            </Form.Group>
                                            <Button loading={this.state.loading} color='black' floated="right">Create Project</Button>
                                            <Message error header="Oops" content={this.state.errorMessage} />
                                        </Form>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>
                                            <Link route={"/index"}>
                                                <a>
                                                    <Image src="../../static/ethereum-icon.jpeg"/>
                                                </a>
                                            </Link>
                                        </Card.Header>
                                        <Card.Description>Not connected to the Ethereum Network? Checkout the Welcome page for instructions on how to set up MetaMask!</Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Layout>
        );
    }
}

export default CreateProject;
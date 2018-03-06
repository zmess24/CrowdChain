import React, { Component } from 'react';
import Layout from '../components/Layout';
import DataShow from '../components/DataShow'
import withRedux from "next-redux-wrapper";
import initStore from '../store';


class App extends Component {
    render() {
        return (
            <Layout>
                {/* <DataShow /> */}
                <h1>Hello World</h1>
            </Layout>
        )
    }
}

export default withRedux(initStore, null, null)(App);
import React, { Component } from 'react';

import { Menu, Icon } from 'semantic-ui-react'

export default class MenuVertical extends Component {
    state = { activeItem: ''}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu vertical borderless fixed="left" size="large" style={{ height: '100vh'}} icon="labeled">
                <Menu.Item header><img src="../static/logo.png"/></Menu.Item>
                <Menu.Item name='welcome' active={activeItem === 'welcome'} onClick={this.handleItemClick}>
                    <Icon name='hand peace' />Welcome
                </Menu.Item>
                <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
                    <Icon name='dashboard' />Dashboard
                </Menu.Item>
                <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick}>
                    <Icon name='calendar outline' />Projects
                </Menu.Item>
                <Menu.Item name='myProjects' active={activeItem === 'myProjects'} onClick={this.handleItemClick}>
                    <Icon name='user' />My Projects
                </Menu.Item>
            </Menu>
        )
    }
}


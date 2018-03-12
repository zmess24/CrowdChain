import React, { Component } from 'react';
import { Link } from '../routes';
import { Menu, Icon, Label, Divider } from 'semantic-ui-react'

export default class MenuVertical extends Component {
    state = { activeItem: ''}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu vertical borderless fixed="left" style={{ height: '100vh', width: '250px', fontFamily: 'Roboto, sans-serif', fontSize: '18px'}} size="large">
                <Menu.Item header><img src="../static/logo.png"/></Menu.Item>

                <Divider style={{ marginLeft: '20px', marginRight: '20px'}}/>
                
                <Link route="/">
                    <a className="item">
                        <div>
                            Welcome <Icon style={{ float: 'left', marginRight: '15px', color: '#999999' }} name='hand peace' />
                        </div>
                    </a>
                </Link>

                <Link route="/dashboard">
                    <a className="item">
                        <div>
                            <Icon style={{ float: 'left', marginRight: '15px', color: '#999999' }} name='dashboard' />Dashboard
                        </div>
                    </a>
                </Link>
                
                <Link route="/projects">
                    <a className="item">
                        <div>
                            <Icon style={{ float: 'left', marginRight: '15px', color: '#999999' }} name='calendar outline' />Projects
                        </div>
                    </a>
                </Link>
                
                <Link route="/myprojects">
                    <a className="item">
                        <div>
                            <Icon style={{ float: 'left', marginRight: '15px', color: '#999999' }} name='user' />My Projects
                        </div>  
                    </a>
                </Link>
        
            </Menu>
        )
    }
}


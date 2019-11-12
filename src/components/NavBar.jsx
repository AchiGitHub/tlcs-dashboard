import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu

export class NavBar extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme='dark' className='selected-nav-item'>
                <Menu.Item key="mail" style={{width:"185px"}}>
                    <Icon type="car" />
                    DynamiC
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavBar

import React, { Component } from 'react'
import { Icon, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export class SideBar extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div style={{ width: 185 }}>
                {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button> */}
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
                    className='sidebar-height'
                    theme='dark'
                    style={{ height: "1000px", color:"#fff" }}
                >

                    <Menu.Item key="1">
                        <Icon type="area-chart" />
                        <Link to="/" className='link'>Real Time Traffic</Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <Link to="/pedestrian">
                            Pedestrian
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Crowd Sourcing</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default SideBar

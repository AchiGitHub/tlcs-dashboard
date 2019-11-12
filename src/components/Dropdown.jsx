import React from 'react';
import { Row, Col, Dropdown, Button, Icon, Menu, message } from 'antd';

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );

export default function DropdownMenu({type}) {
    return (
        <Dropdown overlay={menu}>
            <Button>
                {type} <Icon type="down" />
            </Button>
        </Dropdown>
    )
}

import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <SubMenu title={<span>Converter</span>}>
        <Menu.Item key="setting:3"><a href="/currency">Currency</a></Menu.Item>
        <Menu.Item key="setting:4">Chart</Menu.Item>
      </SubMenu>
      <Menu.Item key="mail">
        <a href="/calendar">Calendar</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu
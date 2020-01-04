import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const LinkMenu: React.FC = () => {
  return (
    <Menu>
      <Menu.Menu position="right">
        <Menu.Item name="shop">
          <Link to="/shop">Shop</Link>
        </Menu.Item>
        <Menu.Item name="cart">
          <Link to="/cart">Cart (0)</Link>
        </Menu.Item>
        <Menu.Item name="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { RootState } from "../../redux";
import { numberOfItems } from "../../helpers/numberOfItems";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  numberOfItems: numberOfItems(state)
});

type Props = ReturnType<typeof mapStateToProps>;

const UnconnectedLinkMenu: React.FC<Props> = ({ numberOfItems }) => {
  return (
    <Menu>
      <Menu.Menu position="right">
        <Menu.Item name="shop">
          <Link to="/shop">Shop</Link>
        </Menu.Item>
        <Menu.Item name="cart">
          <Link to="/cart">Cart ({numberOfItems})</Link>
        </Menu.Item>
        <Menu.Item name="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export const LinkMenu = connect(mapStateToProps)(UnconnectedLinkMenu);

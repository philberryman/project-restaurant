import React from "react";

class Menu extends React.Component {
  render() {
    return this.props.menu.map(menuItem => (
      <li key={menuItem.id}>
        {menuItem.burgerName}: {menuItem.price}
      </li>
    ));
  }
}
export default Menu;

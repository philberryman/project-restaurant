import React from "react";

class Menu extends React.Component {
  render() {
    return this.props.menu.map(menuItem => (
      <li key={menuItem.id}>
        {menuItem.itemName}: {menuItem.price}
      </li>
    ));
  }
}
export default Menu;

import React from "react";

class Menu extends React.Component {
  render() {
    return this.props.menu.map(menuItem => (
      <li key={menuItem.id}>
        <div>{menuItem.itemName} <img src={menuItem.imageURL} /></div>
        {menuItem.price}
      </li>
    ));
  }
}
export default Menu;

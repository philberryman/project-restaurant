import React from "react";
import Menu from "./Menu";
import Locations from "./Locations";

const menu = [
  {
    id: 1,
    itemName: "Hamburger",
    price: 10
  },
  {
    id: 2,
    itemName: "Cheese Burger",
    price: 12
  },
  {
    id: 3,
    itemName: "Cat Burger",
    price: 5
  },
  {
    id: 4,
    itemName: "Mystery Meat Burger",
    price: "Free if you bring a cat"
  },
  {
    id: 5,
    itemName: "Fries",
    price: "3"
  }
];
const locations = [
  {
    id: 1,
    location: "North London"
  },
  {
    id: 2,
    location: "South London"
  },
  {
    id: 3,
    location: "East London"
  },
  {
    id: 4,
    location: "West London"
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1 className="header__title">The Last Burger You'll Ever Eat</h1>
        </header>
        <main>
          <div className="content">
            <ul className="menuList">
              <Menu menu={menu} />
            </ul>
            <ul className="locationsList">
              <Locations locations={locations} />
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

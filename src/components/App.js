import React from "react";
import Menu from "./Menu";
import Locations from "./Locations";

const menu = [
  {
    id: 1,
    itemName: "Hamburger",
    description: "Our classic burger. <br />Pickles, lettuce, tomator.<br />No cheese. Or cat. Probably",
    imageURL:"hamburger.jpg",
    price: 10
  },
  {
    id: 2,
    itemName: "Cheese Burger",
    description: "Our classic burger - with cheese.",
    imageURL:"cheese-burgers.jpg",
    price: 12
  },
  {
    id: 3,
    itemName: "Cat Burger",
    description: "Definitely no cat in this one. Cheese is optional",
    imageURL:"cat-burger.jpg",
    price: 5
  },
  {
    id: 4,
    itemName: "Mystery Meat Burger",
    description: "If you hate cats but love dogs this burger's for you. Or maybe if you hate dogs.",
    imageURL:"mystery.jpg",
    price: 20

  },
  {
    id: 5,
    itemName: "Fries",
    description: "Fried potatoes.",
    imageURL:"fries.jpg",
    price: "3"
  }
];
const locations = [
  {
    id: 1,
    location: "North London"
    address: "113 Bayham St,<br />Camden Town, London NW1 0AG"
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

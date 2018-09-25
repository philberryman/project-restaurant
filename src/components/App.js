import React from 'react';
import Menu from './Menu';

const menu = [
  {id:1,
  burgerName : "Hamburger",
  price : 10},
  {id:2,
    burgerName : "Cheese Burger",
    price : 12},
  {id:3,
      burgerName : "Cat Burger",
      price : 5},
  {id:4,
        burgerName : "Mystery Meat Burger",
        price : "Free if you bring a cat"},
]

class App extends React.Component {
  render(){
    return (
      <div>
        <ul>
          <Menu menu={menu} />
        </ul>

        <ul>

        </ul>
      </div>
    )
  }
}

export default App;

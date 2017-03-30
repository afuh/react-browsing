import React from 'react';
import Chance from 'chance'

class Menu extends React.Component {
  constructor(props){
    super(props);

    let menu = [];

    for (let i = 0; i < this.props.menuAmount; i++) {
      menu.push({
        img: require("../assets/salad187140.jpg"),
        title: "Salad title",
        desc: chance.sentence(),
        price: "€" + chance.natural({min: 1, max: 20}) + ".99"
      });
    }
    this.state = { menu };
  }
  render() {
    return (
        <div className="menu">
          {this.state.menu.map((salad, i) => (

          <div key={i} className="row salad-container">
            <div className="salad-image">
              <img src={salad.img} alt="identicon"/>
            </div>
            <div className="salad-text">
              <h3>{salad.title}</h3>
              <span>{salad.desc}</span>
            </div>
            <div className="salad-price">
              <span>{salad.price}</span>
            </div>
          </div>

          ))}
        </div>
    );
  }
}

export default Menu;

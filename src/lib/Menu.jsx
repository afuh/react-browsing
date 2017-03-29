import React from 'react';
import Chance from 'chance'

class Menu extends React.Component {
  constructor(props){
    super(props);

    let menu = [];

    for (let i = 0; i < this.props.menuAmount; i++) {
      menu.push({
        img: "img/salad187140.jpg",
        title: "Salad title",
        desc: chance.sentence(),
        price: "€" + chance.natural({min: 1, max: 20}) + ".99"
      });
    }
    this.state = { menu };
  }
  render() {
    return (
        <div>
          {this.state.menu.map((salad, i) => (
          <div key={i} className="row">
            <img src={salad.img} alt="identicon"/>
            <div>
              <h5>{salad.title}</h5>
              <span>{salad.desc}</span>
            </div>
            <span>{salad.price}</span>
          </div>
          ))}
        </div>
      );
    }
}

export default Menu;

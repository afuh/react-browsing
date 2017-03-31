import React from 'react';
import Chance from 'chance';

class About extends React.Component {
  constructor(props){
    super(props);

    const ppl = [];

    for (let i = 0; i < this.props.pplAmount; i++) {
      ppl.push({
        name: chance.name({middle: true}),
        avatar: chance.avatar({protocol: 'https'}) + "?s=32&d=identicon&r=PG" + ".jpg",
        about: chance.paragraph({sentences: 2})
      });
    }
    this.state = { ppl };
  }
  render() {
    return (
        <div className="about">
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
          <div className="about-cont row">
            {this.state.ppl.map((person, i) => (
              <div key={i} className="about-person">
                <img src={person.avatar} alt="identicon"/>
                <h5>{person.name}</h5>
                <p>{person.about}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
}

export default About;

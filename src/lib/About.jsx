import React from 'react';

import Chance from 'chance';


class About extends React.Component {
  constructor(props){
    super(props);

    let ppl = [];

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
        <div>
          {this.state.ppl.map((person, i) => (
            <div key={i}>
              <h5>{person.name}</h5>
              <img src={person.avatar} alt="identicon"/>
              <p>{person.about}</p>
            </div>
          ))}
        </div>
      );
    }
}

export default About;

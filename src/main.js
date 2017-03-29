const css = require('./main.sass');

import React from 'react';
import ReactDOM from 'react-dom';

import Content from './lib/Content.jsx';

class Nav extends React.Component {
	constructor(props) {
	 	super(props);
    this.state = {
      tab: 0
    }
    this.tabA = this.tabA.bind(this);
    this.tabB = this.tabB.bind(this);
    this.tabC = this.tabC.bind(this);
	}
  tabA() {
    this.setState({
      tab: 0
    });
  }
  tabB() {
    this.setState({
      tab: 1
    });
  }
  tabC() {
    this.setState({
      tab: 3
    });
  }
  render() {
  	return (
    	<div>
			  <button onClick={this.tabA}>Menu</button>
        <button onClick={this.tabB}>About us</button>
        <button onClick={this.tabC}>Contact</button>
        <Content tab={this.state.tab} />
    	</div>
  	);
	}
};

ReactDOM.render(
  <Nav />,
  document.getElementById('app')
)

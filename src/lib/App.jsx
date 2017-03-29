import React from 'react';
import Navbar from './Navbar.jsx';

class App extends React.Component {
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
      tab: 2
    });
  }
  render() {
  	return (
    	<div>
			  <button onClick={this.tabA}>Menu</button>
        <button onClick={this.tabB}>About us</button>
        <button onClick={this.tabC}>Contact</button>

        <div className="back"></div>

        <Navbar tab={this.state.tab} />
    	</div>
  	);
	}
};

export default App;

import React from 'react';

import About from './About';
import Menu from './Menu';
import Contact from './Contact';

class App extends React.Component {
	constructor(props) {
	 	super(props);
    this.state = {
      tab: 0,
    }
    this.tab = this.tab.bind(this);
	}
  tab(n) {
    this.setState({
      tab: n,
    });
  }
  render() {
		const teal = "#009688";
		const border = `2px solid ${teal}`;
		const styleOn = {
			borderTop: border,
			borderLeft: border,
			borderRight: border,
			color: teal
		}
		const styleOff = {
			borderBottom: border,
			color: "#333"
		};
  	return (
    	<div className="main">

				<div className="buttons row">
				  <button onClick={() => this.tab(0)} style={this.state.tab == 0 ? styleOn : styleOff}>Menu</button>
	        <button onClick={() => this.tab(1)} style={this.state.tab == 1 ? styleOn : styleOff}>About Us</button>
	        <button onClick={() => this.tab(2)} style={this.state.tab == 2 ? styleOn : styleOff}>Contact</button>
				</div>

				<div className="content">
					{
						this.state.tab === 0 ? <Menu menuAmount={16} /> :
						this.state.tab === 1 ? <About pplAmount={6} /> :
						<Contact />
					}
				</div>

    	</div>
  	);
	}
};

export default App;

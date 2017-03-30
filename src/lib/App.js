import React from 'react';

import About from './About.jsx';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
	constructor(props) {
	 	super(props);
    this.state = {
      tab: 0
    }
    this.tab = this.tab.bind(this);
	}
  tab(n) {
    this.setState({
      tab: n
    });
  }
  render() {
  	return (
    	<div className="main">

				<div className="buttons row">
				  <button type="button" onClick={() => this.tab(0)}>Menu</button>
	        <button type="button" onClick={() => this.tab(1)}>About us</button>
	        <button type="button" onClick={() => this.tab(2)}>Contact</button>
				</div>

				<div className="content">
					{
						this.state.tab === 0 ? <Menu menuAmount={8} />
					:
						this.state.tab === 1 ? <About pplAmount={4} />
					:
						<Contact />
					}
				</div>

    	</div>
  	);
	}
};

export default App;

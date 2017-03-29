import React from 'react';

import About from './About.jsx';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';

const Navbar = (props) => {
  switch (props.tab) {
    case 0:
      return(
        <div className="content">
          <Menu menuAmount={8}/>
        </div>
      );
      break;
    case 1:
      return(
        <div className="content">
          <About pplAmount={4} />
        </div>
      );
      break;
    case 2:
      return(
        <div className="content">
          <Contact />
        </div>
      );
      break;
  }
};

export default Navbar;

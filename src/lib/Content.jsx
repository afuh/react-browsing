import React from 'react';

import About from './About.jsx';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';

const Content = (props) => {
  switch (props.tab) {
    case 0:
      return(
        <div>
          <Menu menuAmount={8}/>
        </div>
      );
      break;
    case 1:
      return(
        <div>
          <About pplAmount={4} />
        </div>
      );
    case 2:
      return(
        <div>
          <Contact />
        </div>
      );
  }
};

export default Content;

const css = require('./main.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import App from './lib/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOMServer.renderToString(<App />);

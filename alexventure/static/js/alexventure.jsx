'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';

const App = () => (
    <MuiThemeProvider>
    <MyAwesomeReactComponent />
    </MuiThemeProvider>
);

// React = require('react');
// ReactDOM = require('react-dom');

// var App = React.createClass({
//     render: function () {
//         return (
//             <div className="app">Hello, this is a React component!</div>
//         );
//     }
// });

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
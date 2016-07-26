'use strict';

import React    from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './Main';

injectTapEventPlugin();

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';

// const App = () => (
//     <MuiThemeProvider>
//         <MyAwesomeReactComponent />
//     </MuiThemeProvider>
// );


render(
    <Main />,
    document.getElementById('app')
);
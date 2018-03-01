import React from 'react';
/** Render components to DOM **/
import ReactDOM from 'react-dom';
import App from './App';

/**
* Take this Component's generated HTML and put it in the DOM ('container' div in index.html)
*/
ReactDOM.render(<App />, document.querySelector('.container'));

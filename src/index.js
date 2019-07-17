import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom'; // rather to import entire ReactDOM here I used curly brace get the non expose method from react-dom
import App from './App'

render(<App name="awesome app"/>, document.getElementById('root'));
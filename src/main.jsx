import React from 'react'
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'


ReactDOM.render(
      <BrowserRouter>
        <Routes />
      </BrowserRouter>,
  document.getElementById('root')
)



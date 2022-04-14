import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    

   const location = useLocation();
   console.log(location);

  return (
    <div>
      <h1>Products page</h1>
      <p>{location.pathname}</p>
      <p>{new URLSearchParams(location.search).get('name')}</p>
    </div>
    );
  }
}

export default App;

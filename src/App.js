import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
  MUST install 'react-router-dom' into this project.
  Also, 'react-router' Version 4 is installed.
*/
import { BrowserRouter, Route, Switch, Link, IndexRoute } from 'react-router-dom'
import Root from './components/Root';
import Home from './components/Home';
import User from './components/User';

/*
  <BrowserRouter> is from 'react-router-dom', as shown in the imports above.
  <BrowserRouter> has one <div> with a component (Root.js) and a Switch
  with "child components" within it.
*/
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Root>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/user" component={User} />
              <Route path="/home" component={Home} />
            </Switch>
          </Root>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

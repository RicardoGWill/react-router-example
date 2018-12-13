import React, { Component } from 'react';

import Header from './Header';

/*
  {this.props.children} refers to the "Switch" with multiple "Route"s inside
  the "Root" tag in App.js.  Thus, as shown below, Header.js is always
  rendered at the top whenever Home.js or User.js are shown.
*/
class Root extends Component {
  render(){
    return(
      <div>
        <div>
          <Header/>
        </div>
        <hr/>
        <div>
          {this.props.children}
        </div>
      </div>

    );
  }
}

export default Root;

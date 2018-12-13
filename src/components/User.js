import React, { Component } from 'react';

import { Link } from 'react-router-dom';

/*
  Using CSS (className="BlackNoUnderlineLinkCSS"), the button text is a link
  yet is styled as black without any underline. (See App.css)
*/
class User extends Component {

  render(){
    return(
      <div>
        <h3>The User Page</h3>
        <p>Welcome User</p>
        <button>
          <Link to={"/home"} className="BlackNoUnderlineLinkCSS">
            Return to the Home Page
          </Link>
        </button>
      </div>
    );
  }
}

export default User;

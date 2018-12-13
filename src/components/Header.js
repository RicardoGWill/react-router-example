import React, { Component } from 'react';

/*
  "Link" must be imported if not using <a href=""></a> for links.
*/
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
      <div>
        <ul>
          <li>
          <Link to={"/home"}>
            Home
          </Link>
          </li>
          <li>
          <Link to={"/user"}>
            User
          </Link>
          </li>
        </ul>
      </div>
    );
};

export default Header;

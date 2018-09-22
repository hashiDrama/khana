import React from 'react';
import chef from './chef-icon.png';
import LoginWindow from './LoginWindow.js';

class Navbar extends React.Component
{
    render() {
      return(
        <div>
          <nav className = "navbar navbar-expand-lg">
            <a className = "navbar-brand company-name" href = "#">
              <img src = {chef} width = "60" height = "60" className = "d-inline-block chef-img" alt = "Avatar" />
              Test
            </a>
            <div className = "container">
                <ul className = "nav nav-pills">
                  <li role="presentation" className="active">
                    <LoginWindow text = "Login"/>
                    </li>
                  <li role="presentation">
                    <LoginWindow text = "SignUp"/>
                  </li>
                </ul>
            </div>
          </nav>
        </div>
      );
    }
}

export default Navbar;

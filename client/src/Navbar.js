import React from 'react';
import chef from './chef-icon.png';
import LoginWindow from './LoginWindow.js';
import SignupWindow from './signupWindow.js';


class Navbar extends React.Component
{
    render() {
      return(
        <div>

          <nav className = "navbar navbar-expand-lg navbar-light bg-light top-header">
						<a className = "navbar-brand company-name" href = "#">
							<h1 className = "company-title">
              <img src = {chef} width = "60" height = "60" className = "d-inline-block chef-img" alt = "Avatar" />
              Test
						</h1>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				    aria-expanded="false" aria-label="Toggle navigation">
					       <span className="navbar-toggler-icon">
					       </span>
				    </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
								<li className="nav-item active">
								<button type = "button" className = "btn btn-link">About</button>
								</li>
								<li className="nav-item">
									<LoginWindow text = "Login"/>
								</li>
								<li className="nav-item">
									<LoginWindow text = "SignUp"/>
								</li>
								<li className="nav-item">
									<button type = "button" className = "btn btn-link">Contact</button>
								</li>
							</ul>
						</div>

          </nav>

        </div>
      );
    }
}

export default Navbar;

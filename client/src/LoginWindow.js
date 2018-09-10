import React from 'react';
import LoginForm from './loginForm.js';

class LoginWindow extends React.Component
{
    render(){
      return(
        <div>
          <button type = "button" className = "btn btn-primary" data-toggle = "modal" data-target = "#loginWindow">{this.props.text}</button>
          <div className="modal fade" id="loginWindow" tabIndex="-1" role="dialog" aria-labelledby="loginWindowTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="loginWindowTitle">Sign up or login to your account</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <LoginForm text = "hey" />
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default LoginWindow;

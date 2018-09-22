import React from 'react';
import SignupForm from './signupForm.js';

export default class SignupWindow extends React.Component
{
    render(){
      return(
        <div>
          <button type = "button" className = "btn btn-link" data-toggle = "modal" data-target = "#signupWindow">{this.props.text}</button>
          <div className="modal fade" id="signupWindow" tabIndex="-1" role="dialog" aria-labelledby="signupWindowTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="signupWindowTitle">Sign up or login to your account</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  // <SignupForm text = "hey" />
                  <h1>Hey</h1>
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }
}

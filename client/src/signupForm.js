import React from 'react';

const url = 'http://localhost:3001';
export default class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
                    name: '',
                    email: '',
                    password: ''
                  };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleEmailChange(event){
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  handleSubmit(event){
    alert('submited:' + JSON.stringify({"email" : this.state.email}));

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const userDetails = {};
    userDetails.name = this.state.name;
    userDetails.email = this.state.email;
    userDetails.password = this.state.password;
    const options = {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userDetails),
    };
    const req = new Request(url+'/register', options);
    fetch(req).then(res => {
      return res.json();
    }).then(res => {
      alert(res.responseCode);
      window.open('./profile', '_self');
    }).catch(err => alert(err));
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
      <div className = "form-group inputName">
        <label htmlFor = "inputNameT">Full Name:</label> <input type = "text" className = "form-control" id = "inputNameT" onChange = {this.handleNameChange} placeholder = "Enter your name"/>
      </div>
      <div className = "form-group inputEmail">
        <label htmlFor = "inputEmailT">Email:</label> <input type = "text" className = "form-control" id = "inputEmailT" onChange = {this.handleEmailChange} placeholder = "Enter email"/>
      </div>
      <div className = "form-group inputPswrd">
        <label htmlFor = "inputPswrdT">Password: </label><input type = "password" className = "form-control" id = "inputPswrdT" onChange = {this.handlePasswordChange} placeholder = "Enter password"/>
      </div>
      <div className = "form-group">
          <button type = "submit" className = "btn btn-danger form-control">Signup</button>
      </div>
    </form>
    );
  }
}

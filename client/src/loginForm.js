import React from 'react';
import axios from 'axios';

const url = 'http://localhost:3001';
export default class LoginForm extends React.Component{
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
    // event.preventDefault();
    alert('submited:' + JSON.stringify({"email" : this.state.email}));
    //axios.get('http://localhost:3001/ge').then(json => alert(json)).catch(err => alert(err));
    // fetch('http://localhost:3001/ge').then(res => res.json()).then(res => alert(res.em)).catch(err => alert(err))
    // axios.post('http://localhost:3001/login', {"email":this.state.email}).then(res => {
    //   a=res;
    //   alert(res);
    // }).catch(err => {alert(err)});

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({"email" : this.state.email}),
    };
    const req = new Request(url+'/login', options);
    fetch(req).then(res => {
      return res.json();
    }).then(res => {
      alert(res.responseCode);
      window.open('./public/profile.html', '_blank');
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
          <button type = "submit" className = "btn btn-danger form-control">Login/Signup</button>
      </div>
    </form>
    );
  }
}

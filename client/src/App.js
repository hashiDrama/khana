import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Profile from './Profile.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
			<header>
        <Route path = "/" exact strict render = {
        () => {
          return(
          <div>
                <Navbar />
          </div>
        )}
        }/>
        <Route path = "/profile" exact render = {
            () => {
            return(<div><Navbar /><Profile /></div>);
            }
        }/>
				</header>
      </div>
      </Router>
    );
  }
}

export default App;

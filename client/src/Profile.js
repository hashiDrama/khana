import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component{
  render(){
    return(
      <h1>Profile page</h1>
    );
  }
}

ReactDOM.render(<Profile />, document.getElementById('profileRoot'));

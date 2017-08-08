// Code Keypad Component Here

import React from 'react';
import ReactDOM from 'react-dom';

class Keypad extends React.Component{
  password = () => {
    console.log('Entering password...')
  }

  render(){
    return(
      <input type="password" onKeyUp={this.password}/>
    )
  }
}

export default Keypad

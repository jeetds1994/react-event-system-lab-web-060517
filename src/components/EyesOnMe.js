// Code EyesOnMe Component Here

import React from 'react';
import ReactDOM from 'react-dom';


class EyesOnMe extends React.Component{
  onBlur = () =>{
    console.log('Hey! Eyes on me!');
  }
  onFocus = () =>{
    console.log('Good!')
  }
  render(){
    return(
      <button onFocus={this.onFocus} onBlur={this.onBlur}>Eyes on me, please!</button>
    )
  }
}

export default EyesOnMe

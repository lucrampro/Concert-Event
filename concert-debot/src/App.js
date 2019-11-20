import React from 'react';
import './App.css';
import { TweenMax } from "gsap";

class App extends React.Component {
  constructor(props){
    super(props)
  }
  changeBackground(){
    TweenMax.to('.App', 3 , {
      opacity : 0
    })
  }
  componentDidMount(){
    this.changeBackground.bind(this)
  }
  render(){
    return (
      <div className="App"></div>
    )
  }
}

export default App;

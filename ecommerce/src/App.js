import React, { Component } from 'react'
import "./components/style.css"
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hi I am externally Styled </h1>
        <div className='mysquare'> </div>    
        <h2 style = {{color:"red", backgroundColor : "green"}}> Inline Styling</h2>    
        </div>
    )
  }
}

import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './Color.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "https://chatappsamraj.herokuapp.com",
      
      ///
      color: 'white'
      ///
      
    },
    this.enterTestPage = this.enterTestPage.bind(this);

      
  }
    

  // sending sockets
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) 
  }

  ///
  
  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }
  
    enterTestPage(){
    this.props.enterTestPage(true);
  }
  ///

  render() {
    // testing for socket connections

    const socket = socketIOClient(this.state.endpoint);
    socket.on('change color', (col) => {
      document.body.style.backgroundColor = col
    })

    return (
      <div style={{ textAlign: "center" }}>
        <button id="button0" onClick={() => this.send() }>Change Color</button>


 
        <button id="button1" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="button2" onClick={() => this.setColor('red')}>Red</button>
        
        <button onClick={this.enterTestPage}>ENTER TEST PAGE</button>


      </div>
    )
  }
}
export default App;
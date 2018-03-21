import React, { Component } from 'react';
import './Landing.css';
class Landing extends Component {

  
    
    
    
    constructor(props){
    super(props);

    this.enterChatroom = this.enterChatroom.bind(this);
  
    
    }

  
    
    
    
     enterChatroom(){
    this.props.enterChatroom(true);
  
     
     
     }

    
    
    
  render() {

    return (
      <div>
        
          <div className="enter">

        <div id="land">
        <p>

               A LIVE APP BY
  <br></br>
      <h2>RAJAN RAI &amp; SAM YEE.</h2>
  <br></br>
            <button onClick={this.enterChatroom} id="button1">ENTER</button>
       </p>  

         
                 </div>
        </div>

      
        
        
        </div>
    );
  }
}

export default Landing;

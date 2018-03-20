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
      A LIVE APP BY
    <br> 
	</br>
	<span>RAJAN RAI &amp; SAM YEEEEEEEE.</span>
        </div>

        <div id="land">

         
            <button onClick={this.enterChatroom} id="button1">ENTER</button>
         

         
         
        </div>

      
        
        
        </div>
    );
  }
}

export default Landing;

import React, { Component } from 'react';
import './App.css';
import Chatroom from "./comp/Chatroom";
import Landing from "./comp/Landing";
import Sticker from "./comp/Sticker";
import Color from "./comp/Color";
import Test from "./comp/Test";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      landingDisplay:true,
   
      TestDisplay:false,
        chatroomDisplay:false,
      stickerDisplay:false,
      ColorDisplay:false
    }
    this.enterChatroom = this.enterChatroom.bind(this);
    this.enterStickerPage = this.enterStickerPage.bind(this);
    this.enterColorPage = this.enterColorPage.bind(this);
    this.enterTestPage = this.enterTestPage.bind(this);
  }
    
    
      enterStickerPage(show){
    this.setState({
      landingDisplay:false,
      chatroomDisplay:false,
        TestDisplay:false,
      stickerDisplay:true,
      ColorDisplay:false
    })
  }
    

  enterChatroom(show){
    this.setState({
      landingDisplay:false,
      chatroomDisplay:true,
      stickerDisplay:false,
      ColorDisplay:false,
      TestDisplay:false,
    })
  }

     enterColorPage(show){
    this.setState({
      landingDisplay:false,
        TestDisplay:false,
      chatroomDisplay:false,
      stickerDisplay:false,
      ColorDisplay:true
    })
  }
    
     enterTestPage(show){
    this.setState({
      landingDisplay:false,
        TestDisplay:true,
      chatroomDisplay:false,
      stickerDisplay:false,
      ColorDisplay:false
    })
  }

  render() {

    var mycomp = null;

    if(this.state.landingDisplay === true){
      mycomp = <Landing enterChatroom={this.enterChatroom}/>;
    
    } else if(this.state.chatroomDisplay === true){
      mycomp = <Chatroom enterStickerPage={this.enterStickerPage}/>;
    
    } else if(this.state.stickerDisplay === true){
      mycomp = <Sticker enterColorPage={this.enterColorPage}/>; 
    
    } else if(this.state.ColorDisplay === true){
        mycomp = <Color enterTestPage={this.enterTestPage}/>;
       
    
        
    }else if(this.state.TestDisplay === true){
        mycomp = <Test />;
       
    
        
    }

    return (
      <div className="App">

        {mycomp}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';


import mySocket from "socket.io-client";

class App extends Component {
constructor(props){
    super(props);
    
    this.state = {
        mode:0,
        username:"",
        users:[],
        allChats:[],
        myMsg:""
        
        
        
        
    }
    
    this.joinChat = this.joinChat.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleMyMsg = this.handleMyMsg.bind(this);
    this.sendChat = this.sendChat.bind(this);
    
    
    
}
componentDidMount () {
    this.socket = mySocket("https://chatappsamraj.herokuapp.com");
    
}    
  
joinChat(){
    if (this.state.username !=""){
        this.setState({
        
        mode:1,
        
        
    });
    //this.socket = mySocket("http://localhost:10001");
    this.socket.emit("username", this.state.username);
    this.socket.on("usersjoined", (data)=>{
        console.log(data);
        this.setState({
            
            users:data
            
            
        });
        
        
        
        
    });
    
    this.socket.on("msgsent", (data)=>{
        this.setState({
            allChats:data
            
            
        });
        
        
    });
    
    }else{
        alert("please enter a username")
        
        
    }
    
} 
    
    
    
    
    handleUsername(evt){
        
        this.setState({
            
            username:evt.target.value
            
            
        })
        
        
    }
    
    handleMyMsg(evt){
        
        this.setState({
            myMsg:evt.target.value 
            
            
            
        })
        
        
    }
    
    sendChat(){
        var msg = this.state.username+": "+this.state.myMsg;
        this.socket.emit("sendChat", msg);
        
    }
    
  render() {
      
      var config = null;
      
      if(this.state.mode === 0){
          config = (
          
          <div id='signIn'>
          <input type="text" placeholder="Type your Username" onChange={this.handleUsername}/>
          <button onClick={this.joinChat}>Join Chat</button>
          </div>
          
      )
      } else if(this.state.mode === 1){
          var allChats = this.state.allChats.map((obj,i)=>{
              return(
              <div key={i}>
                  {obj}
                  </div>
              
              )
              
              
          })
          
          config =(
          
            <div id ="chatBox">
              <div  id="chatDisplay">{allChats}
                  <div style={{ backgroundImage: 'url(chat-bg.jpg)' }} id="controls">
                  </div>
                                <input id='typing' type="text" placeholder="type Msg" onChange ={this.handleMyMsg} />
                    <button onClick= {this.sendChat}>Send</button> 
              </div>
            </div>
          
          )
          
          
      }
      
      var allUsers = this.state.users.map((obj,i)=>{
        return (
        
        <div key={i}>
            {obj}
            </div>
        
        )  
          
          
          
      })
      
    return (
      <div className="App">
          {config}

          <div id="allUsers">
          <h2>USERS ONLINE</h2>

        <hr />

          <div id="users">
          {allUsers}
          </div>

          </div>
    </div>
    );
  }
}

export default App;

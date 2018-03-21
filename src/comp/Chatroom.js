import React, { Component } from 'react';
import "./Chatroom.css";
import mySocket from "socket.io-client";

class Chatroom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: 0,
      username: "",
      users: [],
      allChats: [],
      myMsg: ""
    }
    this.joinChat = this.joinChat.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleMyMsg = this.handleMyMsg.bind(this);
    this.sendChat = this.sendChat.bind(this);
    this.enterStickerPage = this.enterStickerPage.bind(this);
  }

  componentDidMount() {
     //this.socket = mySocket("http://localhost:10001");
  }

  joinChat() {
    this.setState({
      mode: 1
    })
    this.socket = mySocket("https://chatappsamraj.herokuapp.com");
    this.socket.emit("username", this.state.username);

    this.socket.on("usersjoined", (data) => {
      console.log(data);
      this.setState({
        users: data
      })
    });

    this.socket.on("msgsent", (data)=>{
      this.setState({
        allChats:data
      })
    });
  }

  handleUsername(evt) {
    this.setState({
      username: evt.target.value
    })
  }

  handleMyMsg(evt) {
    this.setState({
      myMsg: evt.target.value
    })
  }

  sendChat() {
    var msg = this.state.username + ": " + this.state.myMsg;
    this.socket.emit("sendChat", msg);
  }

  enterStickerPage(){
    this.props.enterStickerPage(true);
  }

  render() {

    var config = null;

    if (this.state.mode === 0) {
      config = (
        <div id='msgDiv'>
          <input type = "text" placeholder = "Type your username"
          onChange = {this.handleUsername} className="textInputs"/>
          <br/><br/>
          <button onClick={this.joinChat} className="chatroomButtons">Join Chat</button>
        </div>
      )
    } else if (this.state.mode === 1) {
      var allChats = this.state.allChats.map((obj,i)=>{
        return (
          <div key={i}>
            {obj}
          </div>
        )
      });
      config = (
        <div id="chatBox">
        <div id="chatDisplay">{allChats}</div>
        <div id="chatroomControls">
          <input type="text" placeholder="Type your message"
          onChange={this.handleMyMsg} className="textInputs"/>
          <button onClick={this.sendChat} className="chatroomButtons">Send</button>

          <br/><hr/><br/>
          <button onClick={this.enterStickerPage}>ENTER STICKER PAGE</button>
        </div>
        </div>
      )
    }

    var allUsers = this.state.users.map((obj, i) => {
      return (
        <div key={i}>
          {obj}
        </div>
      )
    });


    return (
      <div>

        {config}

        <div id="allUsers">
          <h3>ACTIVE USERS</h3>
          <div id="users">
          {allUsers}
          </div>
        </div>

      </div>
    );
  }
}

export default Chatroom;

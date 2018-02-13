import React, { Component } from 'react';
import './App.css';
import Chat from './comp/Chat';
import Land from './comp/Land';


class App extends Component {
	render() {
		return (
			<main>
				<div className="flex">
                   <Land/>
					<Chat />
			  
				</div>
			</main>
		);
	}
}

export default App;


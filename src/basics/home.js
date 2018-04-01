import React from 'react';
// import App from '../App';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: "Welcome to ReactJS"
		};
	}

	handleChange(e){
		e.preventDefault();
		let title = e.target.value;
		this.setState({title:title});
	}

	render(){
		return(
			<div>
				<h1> {this.state.title} </h1>
				<input value={this.state.title} type="text" onChange={(e) => this.handleChange(e)} />
			</div>
		)
	}
}
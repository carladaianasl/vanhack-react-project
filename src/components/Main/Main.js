import React, { Component } from 'react';

class Main extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      count: 0
	    };
  	}
	
	render(){
		return(
			<div className="main"></div>
		)
	}
}



export default Main;

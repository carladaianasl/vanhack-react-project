import React, { Component } from 'react';
import { MenuItems } from "./Menuitems";
import SimpleMenuInfo from "./Menuinfoicon";
import GroupAvatars from "./Groupavatars";
import OutlinedButtons from "../button";
import './Navbar.css';



class Navbar extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      count: 0
	    };
  	}
	
	render(){
		return(
			<div className="Heading">
				<div className="navbar-top-left">
					Principal Product Manager @Driftwood sidecorp 
					<SimpleMenuInfo />
				</div>

				<div className="navbar-top-right">
					<GroupAvatars />
				</div>		

				<div className="navbar-top-right">
					<OutlinedButtons name="Edit job" buttonstyle="button-navbar" color="primary" />
				</div>		

				<nav className="NavbarItems">
					<ul>
						{MenuItems.map((item, index) => {
							return(
								<li key={index}>
									<a className={item.id == this.state.count ? "active" : "" } href={item.url} id={item.id} onClick={() => this.setState({ count: item.id })}>
									{item.title}
									</a>
								</li>
							)
						})}
						
					</ul>
				</nav>
			</div>
		)
	}
}



export default Navbar;

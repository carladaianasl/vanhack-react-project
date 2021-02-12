import React, { Component } from 'react';
import { MenuItems } from "./Menuitems";
import SimpleMenuInfo from "./Menuinfoicon";
import GroupAvatars from "./Groupavatars";
import OutlinedButtons from "../button";
import './Navbar.css';


class Navbar extends React.Component{
	
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
									<a className={item.cName} href={item.url}>
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

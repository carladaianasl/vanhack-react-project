import React, { Component } from 'react';
import { MenuItems } from "./Menuitems";
import './Navbar.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

class Navbar extends React.Component{
	


	render(){
		return(
			<div className="Heading">
				<div className="navbar-text">
					Principal Product Manager @Driftwood sidecorp 
					<InfoOutlinedIcon style={{ fontSize: 28 }} className="icon-info"></InfoOutlinedIcon>
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

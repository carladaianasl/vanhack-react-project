import React, { Component } from 'react';
import SimpleMenuInfo from "./Menuinfoicon";
import GroupAvatars from "./Groupavatars";
import OutlinedButtons from "../button";
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Calendar from "../Main/Calendar";
import Next from "../Main/Next";


class Navbar extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      count: 0
	    };
  	}
	
	render(){

		return(
			<div className="Header">
				<div className="navbar-top-left">
					Principal Product Manager @Driftwood sidecorp 
					<SimpleMenuInfo />
				</div>

				<div className="navbar-top-right">
					<GroupAvatars />
				</div>		

				<div className="navbar-top-right">
					<OutlinedButtons name="Edit job" color="primary" />
				</div>		

				<Router>
			      	<div className="NavbarItems">
				        <ul>
				          <li>
				            <NavLink exact activeClassName="active" to="/">Calendar</NavLink>
				          </li>
				          <li>
				             <NavLink exact activeClassName="active" to="/next">Next Interviews</NavLink>
				          </li>
				        </ul>
				    </div>

			      	<div className="main">
				        <Switch>
				          <Route exact path="/">
				            <Calendar />
				          </Route>
				          <Route path="/next">
				          	<Next />
				          </Route>
				        </Switch>
			        </div>

			    </Router>

			</div>
		)
	}
}


export default Navbar;

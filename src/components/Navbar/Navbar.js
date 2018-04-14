import React from "react";
import "./Navbar.css";

const Navbar = props => {
	return (
		<ul className="navbar navbar-default navbar-static-top">
			<div className="container">
				<li role="presentation" className="score">
          Score : {props.score}</li>
			</div>
		</ul>
	);
};

export default Navbar;

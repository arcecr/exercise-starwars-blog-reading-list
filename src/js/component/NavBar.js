import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import starsWarsLogo from "../../img/SWLogo2.jpg";
import Favorites from "./Favorites";

export const NavBar = () => {
	return (
		<Container>
			<Navbar className="justify-content-between p-0">
				<Navbar.Brand>
					<Link to="/">
						<img src={starsWarsLogo} width="100" height="100" className="d-inline-block align-top" />
					</Link>
				</Navbar.Brand>
				<Favorites />
			</Navbar>
		</Container>
	);
};

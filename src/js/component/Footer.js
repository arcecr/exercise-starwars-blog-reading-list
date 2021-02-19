import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center text-light">
		<Container>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="https://github.com/arcecr" className="text-warning">
				<strong>Dylan A. Miranda</strong>
			</a>
		</Container>
	</footer>
);

import React from "react";

import { Button } from "react-bootstrap";
const NotFound = () => {
	return (
		<div className="text-center m-5">
			<h1 className="display-3 text-light">Not found!</h1>
			<Button variant="outline-warning" href="/">
				Back to home
			</Button>
		</div>
	);
};

export default NotFound;

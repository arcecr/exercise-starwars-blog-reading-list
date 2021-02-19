import React, { useState, useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import { useParams, Redirect, Link } from "react-router-dom";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { isNum, capitalizeFirstLetter } from "../utils";

const Planet = () => {
	const { id } = useParams();
	const { actions, store } = useContext(Context);
	const [planet, setPlanet] = useState(actions.getPlanetById(isNum(id) && parseInt(id)));

	let dataToFilter = [
		{
			name: "Population",
			property: "population"
		},
		{
			name: "Terrain",
			property: "terrain"
		},
		{
			name: "Climate",
			property: "climate"
		},
		{
			name: "Diameter",
			property: "diameter"
		},
		{
			name: "Rotation Period",
			property: "rotation_period"
		},
		{
			name: "Orbital Period",
			property: "orbital_period"
		}
	];

	useEffect(
		() => {
			setPlanet(actions.getPlanetById(isNum(id) && parseInt(id)));
		},
		[id]
	);

	return (
		<>
			{!Planet ? (
				<Redirect to="/404" />
			) : (
				<>
					<Container>
						<Card className="border-0 text-light" style={{ backgroundColor: "#282727" }}>
							<Row className="flex-md-nowrap" noGutters>
								<Col md={6} lg={4}>
									<img
										src={`${store.endpoints.images}/planets/${id}.jpg`}
										className="img-fluid mx-auto d-block mt-md-0 mt-4"
										onError={e => (e.target.src = "https://via.placeholder.com/400x400")}
									/>
								</Col>
								<Col md={6} lg={8} className="">
									<Card.Body className="d-flex flex-column h-100 mr-4 ml-4 m-md-auto card-body">
										<Card.Title className="display-4">{planet.properties.name}</Card.Title>
										<Card.Text className="lead">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris
											ipsum, semper in dignissim non, varius eu leo. Interdum et malesuada fames
											ac ante ipsum primis in faucibus. Vestibulum a interdum lacus.
										</Card.Text>
										<Card.Text className="d-flex flex-row justify-content-between mt-auto">
											<Link to="/" className="btn btn-outline-light">
												Back to home
											</Link>
											<Button
												variant="outline-warning"
												onClick={() => actions.addFavorite(planet)}>
												{actions.isFavorite(planet._id) ? (
													<i className="fas fa-heart" />
												) : (
													<i className="far fa-heart" />
												)}
											</Button>
										</Card.Text>
									</Card.Body>
								</Col>
							</Row>
						</Card>

						<hr className="my-4 bg-secondary" />

						<div className="d-flex flex-md-row flex-column flex-md-nowrap flex-wrap justify-content-md-around">
							{dataToFilter.map((item, i) => {
								if (planet.properties.hasOwnProperty(item.property)) {
									return (
										<div key={i} className="card bg-transparent border-0 text-light">
											<div className="card-body">
												<h6 className="card-subtitle mb-2 text-muted">{item.name}</h6>
												<p className="card-text">
													{capitalizeFirstLetter(planet.properties[item.property])}
												</p>
											</div>
										</div>
									);
								}
							})}
						</div>

						<hr className="my-4 bg-secondary" />
					</Container>
				</>
			)}
		</>
	);
};

export default Planet;

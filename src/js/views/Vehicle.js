import React, { useState, useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import { useParams, Redirect, Link } from "react-router-dom";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { isNum, capitalizeFirstLetter } from "../utils";

const Vehicle = () => {
	const { id } = useParams();
	const { actions, store } = useContext(Context);
	const [vehicle, setVehicle] = useState(actions.getVehicleById(isNum(id) && parseInt(id)));

	let dataToFilter = [
		{
			name: "Model",
			property: "model"
		},
		{
			name: "Passengers",
			property: "passengers"
		},
		{
			name: "Cost on credits",
			property: "cost_in_credits"
		},
		{
			name: "Length",
			property: "length"
		},
		{
			name: "Crew",
			property: "crew"
		},
		{
			name: "Max Atmosphering Speed",
			property: "max_atmosphering_speed"
		}
	];

	useEffect(
		() => {
			setVehicle(actions.getVehicleById(isNum(id) && parseInt(id)));
		},
		[id]
	);

	return (
		<>
			{!vehicle ? (
				<Redirect to="/404" />
			) : (
				<>
					<Container>
						<Card className="border-0 text-light" style={{ backgroundColor: "#282727" }}>
							<Row className="flex-lg-nowrap" noGutters>
								<Col lg={7} xl={6}>
									<img
										src={`${store.endpoints.images}/vehicles/${id}.jpg`}
										className="img-fluid mx-auto d-block mt-lg-0 mt-4"
										onError={e => (e.target.src = "https://via.placeholder.com/600x400")}
									/>
								</Col>
								<Col lg={5} xl={6}>
									<Card.Body className="d-flex flex-column h-100 mr-4 ml-4 m-lg-auto card-body">
										<Card.Title className="display-4">{vehicle.properties.name}</Card.Title>
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
												onClick={() => actions.addFavorite(vehicle)}>
												{actions.isFavorite(vehicle._id) ? (
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

						<div className="d-flex flex-lg-row flex-column flex-lg-nowrap flex-wrap justify-content-lg-around">
							{dataToFilter.map((item, i) => {
								if (vehicle.properties.hasOwnProperty(item.property)) {
									return (
										<div key={i} className="card bg-transparent border-0 text-light">
											<div className="card-body">
												<h6 className="card-subtitle mb-2 text-muted">{item.name}</h6>
												<p className="card-text">
													{capitalizeFirstLetter(vehicle.properties[item.property])}
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

export default Vehicle;

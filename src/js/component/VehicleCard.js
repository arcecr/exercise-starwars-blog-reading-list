import React from "react";
import PropTypes from "prop-types";

import BaseCard from "./BaseCard";
import { ListGroupItem } from "react-bootstrap";

const VehicleCard = ({ id, name, img, model, passengers, onFavorite, isFavorite }) => {
	return (
		<BaseCard id={id} type={"vehicle"} title={name} img={img} onFavorite={onFavorite} isFavorite={isFavorite}>
			<ListGroupItem>
				<span className="font-weight-bold">Model:</span> {model}
			</ListGroupItem>
			<ListGroupItem>
				<span className="font-weight-bold">Passengers:</span> {passengers}
			</ListGroupItem>
		</BaseCard>
	);
};

VehicleCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	img: PropTypes.string,
	model: PropTypes.string,
	passengers: PropTypes.string,
	onFavorite: PropTypes.func,
	isFavorite: PropTypes.bool
};

export default VehicleCard;

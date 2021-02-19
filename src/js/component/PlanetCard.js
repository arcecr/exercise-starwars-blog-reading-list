import React from "react";
import PropTypes from "prop-types";

import BaseCard from "./BaseCard";
import { ListGroupItem } from "react-bootstrap";

const PlanetCard = ({ id, name, img, population, terrain, onFavorite, isFavorite }) => {
	return (
		<BaseCard id={id} type={"planet"} title={name} img={img} onFavorite={onFavorite} isFavorite={isFavorite}>
			<ListGroupItem>
				<span className="font-weight-bold">Population:</span> {population}
			</ListGroupItem>
			<ListGroupItem>
				<span className="font-weight-bold">Terrain:</span> {terrain}
			</ListGroupItem>
		</BaseCard>
	);
};

PlanetCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	img: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	onFavorite: PropTypes.func,
	isFavorite: PropTypes.bool
};

export default PlanetCard;

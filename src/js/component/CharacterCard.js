import React from "react";
import PropTypes from "prop-types";

import BaseCard from "./BaseCard";
import { ListGroupItem } from "react-bootstrap";

const CharacterCard = ({ id, name, img, gender, hairColor, eyeColor, onFavorite, isFavorite }) => {
	return (
		<BaseCard id={id} type={"character"} title={name} img={img} onFavorite={onFavorite} isFavorite={isFavorite}>
			<ListGroupItem>
				<span className="font-weight-bold">Gender:</span> {gender}
			</ListGroupItem>
			<ListGroupItem>
				<span className="font-weight-bold">Hair Color:</span> {hairColor}
			</ListGroupItem>
			<ListGroupItem>
				<span className="font-weight-bold">Eye-Color:</span> {eyeColor}
			</ListGroupItem>
		</BaseCard>
	);
};

CharacterCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	img: PropTypes.string,
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string,
	onFavorite: PropTypes.func,
	isFavorite: PropTypes.bool
};

export default CharacterCard;

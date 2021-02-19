import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Card, Button, ListGroup } from "react-bootstrap";

const BaseCard = ({ children, id, type, img, title, onFavorite, isFavorite }) => {
	return (
		<Card>
			<Card.Img variant="top" src={img} onError={e => (e.target.src = "https://via.placeholder.com/360x300")} />
			<Card.Body className="p-0">
				<Card.Header as={"h5"}>{title}</Card.Header>
				<ListGroup variant="flush">{children}</ListGroup>
			</Card.Body>
			<Card.Footer className="d-flex flex-row justify-content-between">
				<Link to={`${type}/${id}`} className="btn btn-outline-primary">
					Learn more!
				</Link>
				<Button variant="outline-warning" onClick={onFavorite}>
					{isFavorite ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
				</Button>
			</Card.Footer>
		</Card>
	);
};

BaseCard.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	id: PropTypes.string,
	type: PropTypes.string,
	img: PropTypes.string,
	title: PropTypes.string,
	onFavorite: PropTypes.func,
	isFavorite: PropTypes.bool
};

export default BaseCard;

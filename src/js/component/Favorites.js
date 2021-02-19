import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Badge, Button, Dropdown } from "react-bootstrap";

import { Context } from "../store/appContext";

const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<Dropdown alignRight>
			<Dropdown.Toggle variant="warning">
				<Badge variant="light">{store.favorites.length}</Badge>
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Header>Favorites</Dropdown.Header>
				<Dropdown.Divider />
				{store.favorites.length ? (
					store.favorites.map((favorite, i) => {
						return (
							<Dropdown.ItemText
								key={i}
								className={"text-nowrap d-flex justify-content-between align-items-center"}>
								<Link to={`/${favorite.type}/${favorite.uid}`}>
									<p className="m-0">{favorite.properties.name}</p>
								</Link>
								<Button
									variant="light"
									className={"ml-3"}
									onClick={() => actions.removeFavorite(favorite)}>
									<i className="fas fa-trash" />
								</Button>
							</Dropdown.ItemText>
						);
					})
				) : (
					<Dropdown.ItemText className={"text-nowrap d-flex align-items-center"}>
						Nothing here...
					</Dropdown.ItemText>
				)}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Favorites;

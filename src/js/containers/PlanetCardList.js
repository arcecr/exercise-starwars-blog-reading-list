import React, { useContext } from "react";

import { Context } from "../store/appContext";
import PlanetCard from "../component/PlanetCard";

const PlanetCardList = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h2 className="text-danger mt-4 mb-0">Planets</h2>
			<div className="baseCardList d-flex flex-row flex-nowrap pt-4 pb-4">
				{store.planets.map((planet, i) => {
					return (
						<PlanetCard
							key={i}
							id={planet.uid}
							name={planet.properties.name}
							img={`${store.endpoints.images}/planets/${planet.uid}.jpg`}
							population={planet.properties.population}
							terrain={
								planet.properties.terrain.length > 30
									? planet.properties.terrain.substring(0, 30) + "..."
									: planet.properties.terrain
							}
							onFavorite={() => actions.addFavorite(planet)}
							isFavorite={actions.isFavorite(planet._id)}
						/>
					);
				})}
			</div>
		</>
	);
};

export default PlanetCardList;

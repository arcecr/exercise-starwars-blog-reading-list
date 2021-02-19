import React, { useContext } from "react";

import { Context } from "../store/appContext";
import VehicleCard from "../component/VehicleCard";

const VehicleCardList = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h2 className="text-danger mt-4 mb-0">Vehicles</h2>
			<div className="baseCardList d-flex flex-row flex-nowrap pt-4 pb-4">
				{store.vehicles.map((vehicle, i) => {
					return (
						<VehicleCard
							key={i}
							id={vehicle.uid}
							name={vehicle.properties.name}
							img={`${store.endpoints.images}/vehicles/${vehicle.uid}.jpg`}
							model={
								vehicle.properties.model.length > 30
									? vehicle.properties.model.substring(0, 30) + "..."
									: vehicle.properties.model
							}
							passengers={vehicle.properties.passengers}
							onFavorite={() => actions.addFavorite(vehicle)}
							isFavorite={actions.isFavorite(vehicle._id)}
						/>
					);
				})}
			</div>
		</>
	);
};

export default VehicleCardList;

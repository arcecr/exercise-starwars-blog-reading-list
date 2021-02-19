import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.loadCharacters();
			state.actions.loadPlanets();
			state.actions.loadVehicles();
		}, []);

		useEffect(
			() => {
				const { isCharacterDataLoading, isPlanetDataLoading, isVehicleDataLoading } = state.store;

				if (isCharacterDataLoading || isCharacterDataLoading || isVehicleDataLoading) {
					state.actions.startDataLoading();
				} else {
					state.actions.stopDataLoading();
				}
			},
			[state.store.isCharacterDataLoading, state.store.isPlanetDataLoading, state.store.isVehicleDataLoading]
		);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};

	return StoreWrapper;
};

export default injectContext;

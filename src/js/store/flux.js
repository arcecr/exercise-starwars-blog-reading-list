const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			endpoints: {
				characters: "https://www.swapi.tech/api/people",
				planets: "https://www.swapi.tech/api/planets",
				vehicles: "https://www.swapi.tech/api/vehicles",
				images: "https://starwars-visualguide.com/assets/img"
			},
			characters: JSON.parse(window.localStorage.getItem("characters")) || [],
			planets: JSON.parse(window.localStorage.getItem("planets")) || [],
			vehicles: JSON.parse(window.localStorage.getItem("vehicles")) || [],
			favorites: JSON.parse(window.localStorage.getItem("favorites")) || [],
			isCharacterDataLoading: false,
			isPlanetDataLoading: false,
			isVehicleDataLoading: false,
			isDataLoading: false
		},
		actions: {
			getSWAPIResource: async (type, ep) => {
				let endpoint = ep;
				let items = [];
				let hasNextPage = false;

				do {
					const response = await fetch(endpoint);
					const data = await response.json();

					data.results.forEach(async item => {
						const response = await fetch(item.url);
						let data = await response.json();

						data = { type: type, ...data.result };

						items.push(data);
					});

					if (data && data.next) {
						endpoint = data.next;
						hasNextPage = true;
					} else {
						hasNextPage = false;
					}
				} while (hasNextPage);

				return items;
			},

			startDataLoading() {
				setStore({ isDataLoading: true });
			},

			stopDataLoading() {
				setStore({ isDataLoading: false });
			},

			loadCharacters: async () => {
				if (!localStorage.getItem("characters")) {
					setStore({ isCharacterDataLoading: true });

					const charactersResponse = await getActions().getSWAPIResource(
						"character",
						getStore().endpoints.characters
					);

					setStore({ characters: charactersResponse });
					localStorage.setItem("characters", JSON.stringify(charactersResponse));

					setStore({ isCharacterDataLoading: false });
				}
			},

			loadPlanets: async () => {
				if (!localStorage.getItem("planets")) {
					setStore({ isPlanetDataLoading: true });

					const planetsResponse = await getActions().getSWAPIResource("planet", getStore().endpoints.planets);

					setStore({ planets: planetsResponse });
					localStorage.setItem("planets", JSON.stringify(planetsResponse));

					setStore({ isPlanetDataLoading: false });
				}
			},

			loadVehicles: async () => {
				if (!localStorage.getItem("vehicles")) {
					setStore({ isVehicleDataLoading: true });

					const vehiclesResponse = await getActions().getSWAPIResource(
						"vehicle",
						getStore().endpoints.vehicles
					);

					setStore({ vehicles: vehiclesResponse });
					localStorage.setItem("vehicles", JSON.stringify(vehiclesResponse));

					setStore({ isVehicleDataLoading: false });
				}
			},

			getCharacterById: id => {
				return getStore().characters.find(character => parseInt(character.uid) === id);
			},

			getPlanetById: id => {
				return getStore().planets.find(planet => parseInt(planet.uid) === id);
			},

			getVehicleById: id => {
				return getStore().vehicles.find(vehicle => parseInt(vehicle.uid) === id);
			},

			addFavorite: item => {
				if (!getStore().favorites.some(itemToFind => itemToFind._id === item._id)) {
					let items = [...getStore().favorites, item];
					localStorage.setItem("favorites", JSON.stringify(items));
					setStore({ favorites: items });
				} else {
					getActions().removeFavorite(item);
				}
			},

			isFavorite: id => {
				return getStore().favorites.some(itemToFind => itemToFind._id === id);
			},

			removeFavorite: item => {
				let items = getStore().favorites.filter(
					itemToFilter => JSON.stringify(itemToFilter) !== JSON.stringify(item)
				);
				localStorage.setItem("favorites", JSON.stringify(items));
				setStore({ favorites: items });
			}
		}
	};
};

export default getState;

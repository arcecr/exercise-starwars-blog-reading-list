import React, { useContext } from "react";

import Container from "react-bootstrap/Container";

import { Context } from "../store/appContext";
import { Loading } from "../component/Loading";

import PlanetCardList from "../containers/PlanetCardList";
import CharacterCardList from "../containers/CharacterCardList";
import VehicleCardList from "../containers/VehicleCardList";

const Home = props => {
	const { store } = useContext(Context);

	return (
		<Container>
			{store.isDataLoading ? (
				<Loading />
			) : (
				<>
					<CharacterCardList />
					<PlanetCardList />
					<VehicleCardList />
				</>
			)}
		</Container>
	);
};

export default Home;

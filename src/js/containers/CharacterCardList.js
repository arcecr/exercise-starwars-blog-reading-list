import React, { useContext } from "react";

import { Context } from "../store/appContext";
import CharacterCard from "../component/CharacterCard";

const CharacterCardList = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h2 className="text-danger mb-0">Characters</h2>
			<div className="baseCardList d-flex flex-row flex-nowrap pt-4 pb-4">
				{store.characters.map((character, i) => {
					return (
						<CharacterCard
							key={i}
							id={character.uid}
							name={character.properties.name}
							img={`${store.endpoints.images}/characters/${character.uid}.jpg`}
							gender={character.properties.gender}
							hairColor={character.properties.hair_color}
							eyeColor={character.properties.eye_color}
							onFavorite={() => actions.addFavorite(character)}
							isFavorite={actions.isFavorite(character._id)}
						/>
					);
				})}
			</div>
		</>
	);
};

export default CharacterCardList;

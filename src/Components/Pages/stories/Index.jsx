import { useState } from "react";
import Menu from "./Menu";

import Modal from "./Modal";
import Table from "./Table";
import useTitle from "../../../Hooks/useTitle";
import useLocalStorage from "../../../Hooks/useLocalStorage";

// Composant principal de la page de liste des stories
// affichera les différentes stories sous forme de tableau avec les actions possibles (edit, delete)
function StoriesList() {
	// Utilisation du Hook personnalisé useTitle pour changer le titre de la page
	useTitle("Stories List");
	// Récupération de la liste des stories stockées en localStorage en par le Hook personnalisé useLocalStorage
    const [storiesList, setStoriesList] = useLocalStorage("stories");
    // Initialisation des states pour la gestion de la suppression d'une story qui sera transmis au composant table via les props 
	const [indexStory, setIndexStory] = useState(null);
	// Initialisation du state pour l'ouverture du modal de suppression
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	// function pour supprimer une story déclenché par le bouton delete du composant RowStory, activée par le click sur le bouton "okay" de la modal
	function deleteSelectedStory() {
		// filtre la liste des stories pour supprimer la story sélectionnée
		// filter retourne un nouveau tableau avec les éléments qui correspondent à la condition
		const newStoriesList = storiesList.filter(
			(story) => story.id !== indexStory
		);
		// mise à jour de la liste des stories en localStorage en utilisant le setter du Hook personnalisé useLocalStorage
		setStoriesList(newStoriesList);
		// fermeture du modal de suppression
		setIsDeleteModalOpen(false);
	}
    
	return (
		<main id="story">
			<h2>Stories List</h2>
			<Menu />

			{/* si pas de données dans le local storage affichage d'un message dans la vue
			sinon affichage du tableau des stories via le composant Table
			*/}
			{storiesList.length === 0 ? (
				<p>No stories available</p>
			) : (
				<Table
                    key={storiesList.length}
					setIndexStory={setIndexStory}
					setIsDeleteModalOpen={setIsDeleteModalOpen}
				/>
			)}

			{isDeleteModalOpen && (
				<Modal
					deleteSelectedStory={deleteSelectedStory}
					setIsDeleteModalOpen={setIsDeleteModalOpen}
				/>
			)}
		</main>
	);
}

export default StoriesList;

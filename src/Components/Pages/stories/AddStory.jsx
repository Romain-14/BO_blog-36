import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import Form from "./Form";
import useTitle from "../../../Hooks/useTitle";
import useLocalStorage from "../../../Hooks/useLocalStorage";

const DELAY = 1;

// Composant pour ajouter une histoire 
function AddStory() {
	// Utilisation du Hook personnalisé useTitle pour changer le titre de la page
    useTitle("Add Story");
	// Récupération de la liste des stories stockées en localStorage par le Hook personnalisé useLocalStorage
    const [storiesList, setStoriesList] = useLocalStorage("stories");
	// Utilisation du Hook useNavigate pour la programmer la redirection vers la page de liste des stories après l'ajout d'une nouvelle story au bout d'un delai défini ligne 10 hors du scope de ce composant
	const navigate = useNavigate();

	// Initialisation du state pour la nouvelle story
	// id généré par la date actuelle
	const [story, setStory] = useState({
		id: new Date().getTime(),
		title: "",
		content: "",
	});
	// Initialisation du state pour connaitre l'etat du formulaire (envoyé ou non)
	const [isSubmitted, setIsSubmitted] = useState(false);

	// Hook useEffect pour gérer la redirection vers la page de liste des stories après l'ajout d'une nouvelle story
	useEffect(() => {
		// si le formulaire n'est pas soumis, on ne fait rien
		if (!isSubmitted) return;
		// sinon redirection vers la route "/admin/story/list" après un délai
		const idTO = setTimeout(() => {
			navigate("/admin/story/list");
		}, DELAY * 1000);

		// nettoyage du setTimeout, permet d'éviter les fuites de mémoire en annulant le setTimeout au démontage du composant
		return () => clearTimeout(idTO);
	}, [isSubmitted, navigate]);

	// fonction exécutée lors de la soumission du formulaire
	function submitHandler(e) {
		e.preventDefault();
		// ajout de la nouvelle story à la liste des stories
		storiesList.push(story);
		// mise à jour de la liste des stories en localStorage en utilisant le setter du Hook personnalisé useLocalStorage
        setStoriesList(storiesList);
		// mise à jour du state isSubmitted pour activer le useEffect
		setIsSubmitted(true);
	}

	// function pour gérer les changements des champs du formulaire
	function onChangeHandler(e) {
		setStory({
			...story,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<main>
			<h1>Add Story</h1>

			<Link to="/admin/story/list" className="button back-btn">
				<FontAwesomeIcon icon={faLeftLong} /> Back to Stories List
			</Link>

			{/* montage du composant Form personnalisé via les props */}
			<Form
                type="add"
				story={story}
				submitHandler={submitHandler}
				onChangeHandler={onChangeHandler}
				msg={`Story added successfully, redirecting in ${DELAY} seconds !`}
				isSubmitted={isSubmitted}
			/>
		</main>
	);
}

export default AddStory;

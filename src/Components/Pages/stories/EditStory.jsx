import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import Form from "./Form";
import useTitle from "../../../Hooks/useTitle";
import useLocalStorage from "../../../Hooks/useLocalStorage";

const DELAY = 1;

function EditStory() {
	// Utilisation du Hook personnalisé useTitle pour changer le titre de la page
    useTitle("Edit Story");
	// Récupération de la liste des stories stockées en localStorage par le Hook personnalisé useLocalStorage
    const [storiesList, setStoriesList] = useLocalStorage("stories");
	// utilisation du hook navigate pour programmer la redirection vers la page de liste des stories après avoir valider la modification d'une story
	const navigate = useNavigate();
	// récupération de l'id de la story à modifier via le hook useParams transmis par la route dynamique "/admin/story/:id/edit"
	const { id } = useParams();

	// Initialisation du state pour la story à modifier
	const [story, setStory] = useState(
		// find retourne le premier élément du tableau qui correspond à la condition
		storiesList.find((story) => story.id === parseInt(id))
	);
	// Initialisation du state pour connaitre l'etat du formulaire (envoyé ou non)
	const [isSubmitted, setIsSubmitted] = useState(false);

	// même fonctionnement que pour le composant AddStory
	useEffect(() => {
		if (!isSubmitted) return;
		const idTO = setTimeout(() => {
			navigate("/admin/story/list");
		}, DELAY * 1000);

		return () => clearTimeout(idTO);
	}, [isSubmitted, navigate]);

	// fonction exécutée lors de la soumission du formulaire
	function submitHandler(e) {
		e.preventDefault();
		// récupération de la story à modifier dans la liste des stories
		// D'abord récupéré son index (la position dans le tableau ) via findIndex
		// permets de modifier la story dans le tableau
		const index = storiesList.findIndex(
			(story) => story.id === parseInt(id)
		);
		// ensuite remplacement de la story dans le tableau
		storiesList[index] = story;
		// mise à jour de la liste des stories en localStorage en utilisant le setter du Hook personnalisé useLocalStorage
		setStoriesList(storiesList);
		setIsSubmitted(true);
	}

	// à partir d'ici c'est la même chose que pour le composant AddStory

	function onChangeHandler(e) {
		setStory({
			...story,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<main>
			<h1>Edit Story n°{id}</h1>

			<Link to="/admin/story/list" className="button back-btn">
				<FontAwesomeIcon icon={faLeftLong} /> Back to Stories List
			</Link>
            
			<Form
				type="edit"
				story={story}
				submitHandler={submitHandler}
				onChangeHandler={onChangeHandler}
				msg={`Story updated successfully, redirecting in ${DELAY} seconds !`}
				isSubmitted={isSubmitted}
			/>
		</main>
	);
}

export default EditStory;

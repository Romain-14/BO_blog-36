import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import Toast from "../../Layout/Toast";

// composant Form utilisé par les composants AddStory et EditStory
// les props sont destructurées pour récupérer les valeurs nécessaires, pour éviter de faire le chainage des props (props.type, props.submitHandler, etc...) , on utilisera directement les noms des props
function Form({ type, submitHandler, onChangeHandler, story, msg, isSubmitted }) {

    // fonction pour afficher l'icone et le texte du bouton en fonction du type de formulaire (monté depuis le composant parent AddStory ou EditStory)
    // Cette fonction retourne un élément JSX et est utilisée dans le bouton du formulaire
    function outputHandler() {
        if (type === "add") {
            return (
                <>
                    <FontAwesomeIcon icon={faPlus} />{" "}
                    Add
                </>
            );
        } 
        if (type === "edit") {
            return (
                <>
                    <FontAwesomeIcon icon={faPenToSquare} />{" "}
                    Edit
                </>
            );
        }
    }

	return (
		<>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					name="title"
					placeholder="Enter title"
					aria-label="Enter title"
					value={story.title}
					onChange={onChangeHandler}
					required
				/>
                
				<textarea
					name="content"
					placeholder="Enter content"
					aria-label="Enter content"
					value={story.content}
					onChange={onChangeHandler}
					required
				></textarea>

				<button type="submit">{outputHandler()}</button>
			</form>
            {
                isSubmitted && <Toast message={msg} />
            }
			
		</>
	);
}

Form.propTypes = {
    type: PropTypes.string.isRequired,
    submitHandler: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    story: PropTypes.object.isRequired,
    msg: PropTypes.string.isRequired,
    isSubmitted: PropTypes.bool.isRequired,
};

export default Form;

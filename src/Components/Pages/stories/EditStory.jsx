import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import Form from "./Form";
import useTitle from "../../../Hooks/useTitle";
import useLocalStorage from "../../../Hooks/useLocalStorage";

const DELAY = 1;

function EditStory() {
    useTitle("Edit Story");
    const [storiesList] = useLocalStorage("stories");
	const navigate = useNavigate();
	const { id } = useParams();

	const [story, setStory] = useState(
		storiesList.find((story) => story.id === parseInt(id))
	);
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		if (!isSubmitted) return;
		const idTO = setTimeout(() => {
			navigate("/admin/story/list");
		}, DELAY * 1000);

		return () => clearTimeout(idTO);
	}, [isSubmitted, navigate]);

	function submitHandler(e) {
		e.preventDefault();

		const index = storiesList.findIndex(
			(story) => story.id === parseInt(id)
		);

		storiesList[index] = story;
		localStorage.setItem("stories", JSON.stringify(storiesList));

		setIsSubmitted(true);
	}

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

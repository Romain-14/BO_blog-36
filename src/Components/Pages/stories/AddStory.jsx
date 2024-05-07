import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import Form from "./Form";
import useTitle from "../../../Hooks/useTitle";
import useLocalStorage from "../../../Hooks/useLocalStorage";

const DELAY = 1;

function AddStory() {
    useTitle("Add Story");
    const [storiesList, setStoriesList] = useLocalStorage("stories");

	const navigate = useNavigate();

	const [story, setStory] = useState({
		id: new Date().getTime(),
		title: "",
		content: "",
	});

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
		storiesList.push(story);
        setStoriesList(storiesList);
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
			<h1>Add Story</h1>

			<Link to="/admin/story/list" className="button back-btn">
				<FontAwesomeIcon icon={faLeftLong} /> Back to Stories List
			</Link>

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

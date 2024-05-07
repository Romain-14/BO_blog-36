import { useState } from "react";
import Menu from "./Menu";

import Modal from "./Modal";
import Table from "./Table";
import useTitle from "../../../Hooks/useTitle";
import useLocalStorage from "../../../Hooks/useLocalStorage";

function StoriesList() {
	useTitle("Stories List");
    const [storiesList, setStoriesList] = useLocalStorage("stories");
    
	const [indexStory, setIndexStory] = useState(null);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	function deleteSelectedStory() {
		const newStoriesList = storiesList.filter(
			(story) => story.id !== indexStory
		);
		setStoriesList(newStoriesList);
		setIsDeleteModalOpen(false);
	}
    
	return (
		<main id="story">
			<h2>Stories List</h2>
			<Menu />

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

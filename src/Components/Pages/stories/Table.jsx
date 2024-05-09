import PropTypes from "prop-types";

import RowStory from "./RowStory";
import useLocalStorage from "../../../Hooks/useLocalStorage";

function Table({ setIndexStory, setIsDeleteModalOpen }) {
    const [storiesList] = useLocalStorage("stories");
	
	return (
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>Title</th>
					<th>Content</th>
					<th colSpan="2">Actions</th>
				</tr>
			</thead>
			<tbody>
				{storiesList.map((story) => (
					<RowStory
						key={story.id}
						story={story}
						setIndexStory={setIndexStory}
						setIsDeleteModalOpen={setIsDeleteModalOpen}
					/>
				))}
			</tbody>
		</table>
	);
}

Table.propTypes = {
	setIndexStory: PropTypes.func.isRequired,
	setIsDeleteModalOpen: PropTypes.func.isRequired,
};
export default Table;

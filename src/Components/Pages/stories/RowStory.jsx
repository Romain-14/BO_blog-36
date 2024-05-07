import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function RowStory({ story, setIndexStory, setIsDeleteModalOpen }) {

    
	return (
		<tr>
			<td>{story.id}</td>
			<td>{story.title}</td>
			<td>{story.content}</td>
			<td className="action-col">
				<Link
					to={`/admin/story/${story.id}/edit`}
					className="button edit-btn"
				>
					<FontAwesomeIcon icon={faPenToSquare} />
				</Link>

				<button
					className="button delete-btn"
					onClick={() => {
						setIndexStory(story.id);
						setIsDeleteModalOpen(true);
					}}
				>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</td>
		</tr>
	);
}

RowStory.propTypes = {
	story: PropTypes.object.isRequired,
	setIndexStory: PropTypes.func.isRequired,
	setIsDeleteModalOpen: PropTypes.func.isRequired,
};
export default RowStory;

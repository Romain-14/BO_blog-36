import PropTypes from "prop-types";

function Modal({ deleteSelectedStory , setIsDeleteModalOpen }) {
	return (
		<div className="confirm-delete">
			<p>Are you sure you want to delete this story ?</p>
			<button onClick={ deleteSelectedStory }>Okay</button>
			<button onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
		</div>
	);
}

Modal.propTypes = {
	deleteSelectedStory : PropTypes.func.isRequired,
	setIsDeleteModalOpen: PropTypes.func.isRequired,
};

export default Modal;

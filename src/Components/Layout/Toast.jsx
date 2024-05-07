import PropTypes from "prop-types";

function Toast({ message }) {
	return (
		<div className="toast">
			<p>{message}</p>
		</div>
	);
}

Toast.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Toast;

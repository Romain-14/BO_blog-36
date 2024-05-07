import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faPlus } from "@fortawesome/free-solid-svg-icons";

function menu() {
	return (
		<nav>
			<Link to="/admin" className="button back-btn">
                <FontAwesomeIcon icon={faLeftLong} /> Back admin panel
			</Link>
            
			<Link to="/admin/story/add" className="button add-btn">
                <FontAwesomeIcon icon={faPlus} /> Add a new story
			</Link>
		</nav>
	);
}

export default menu;

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import useTitle from "../../Hooks/useTitle";

function Home() {

    useTitle("Home");

	return (
		<main id="home">
			<p>
				Welcome to the blog admin panel. Here you can manage your blog
				posts.
			</p>
			<article>
				<h2>Stories</h2>

				<nav>
					<Link to="/admin/story/list" className="button back-btn">
						<FontAwesomeIcon icon={faEye} /> View
					</Link>
					<Link to="/admin/story/add" className="button add-btn">
						<FontAwesomeIcon icon={faPlus} /> Add
					</Link>
				</nav>
			</article>
		</main>
	);
}

export default Home;

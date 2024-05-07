import { Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./Components/Pages/Home";
import StoriesList from "./Components/Pages/stories/Index";
import AddStory from "./Components/Pages/stories/AddStory";
import EditStory from "./Components/Pages/stories/EditStory";
// import Footer from "./Components/Layout/Footer";


function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/admin" element={<Home />} />
                <Route path="/admin/story/list" element={<StoriesList />} />
                <Route path="/admin/story/add" element={<AddStory />} />
                <Route path="/admin/story/:id/edit" element={<EditStory />} />

			</Routes>

			{/* <Footer /> */}
		</>
	);
}

export default App;

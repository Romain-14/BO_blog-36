import { useEffect } from "react";

function useTitle(title) {
	useEffect(() => {
		document.title = title + " - Blog Admin";
	}, [title]);

	return null;
}

export default useTitle;

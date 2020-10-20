import React from "react";
import courses from "./utils/api/courses";

function App() {
	const getData = async () => {
		const dataCourse = await courses.all();
		console.log(dataCourse.data.data);
	};

	getData();

	return (
		<div className="container mx-auto">
			<h1 className="text-2xl">Hallo Gaiss</h1>
		</div>
	);
}

export default App;

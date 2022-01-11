import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Bum from "./Bum";

import "./Home.css";

export function Home() {
	const [message, setMessage] = useState("Loading...");
	const [images, setImages] = useState([{ image: "https://lh3.googleusercontent.com/5OJieWsez2Jc0phE8yn5A3jeg8w_8kdSe99vfy6xznSEMXOb4jH6OMJ_yGzqEJ9e-YL4OLNXx1SRlp5Jm0Xaw_LazrRFzqEShIzM_Q"}]);


	useEffect(() => {
		const options = { method: "GET" };
		fetch('/api/scorelist', options)
			.then(response => response.json())
			.then(response => setImages(response))
			.then(setMessage(""))
			.catch(err => console.error(err));
	}, []);

	return (
		<main role="main">
			<h1>{message}</h1>
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				{images.map((x, index) => <div key= { index }><img alt="seabum" src={x.image + "=w181"}></img><h3>Rank:{index+1}{" - #"}{x.id}</h3></div>)}
			</div>

		</main>
	);
}

export default Home;

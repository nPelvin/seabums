import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bum from "./Bum";

import "./Home.css";
import logo from "./logo.svg";

export function Home() {
	const [message, setMessage] = useState("Loading...");
	const [images, setImages] = useState([{ image: "https://lh3.googleusercontent.com/5OJieWsez2Jc0phE8yn5A3jeg8w_8kdSe99vfy6xznSEMXOb4jH6OMJ_yGzqEJ9e-YL4OLNXx1SRlp5Jm0Xaw_LazrRFzqEShIzM_Q"}]);
	// const [toShow, setToShow] = useState("");
	// const [scoreList, setScoreList] = useState([]);

	// useEffect(() => {
	// 	fetch('api/scorelist', options)
	// 		.then(response => response.json())
	// 		.then(response => console.log(response))
	// 		.catch(err => console.error(err));
	// }, []);

	// useEffect(() => {
	// 	fetch('https://api.opensea.io/api/v1/asset/0xfaa2ba39e9d988936a5bfed5690dfc9ca570c124/1/', options)
	// 		.then(response => response.json())
	// 		// .then(response => console.log(response.collection, response.collection.slug) )
	// 		.catch(err => console.error(err));
	// }, []);

	useEffect(() => {
		const options = { method: "GET" };
		fetch('/api/scorelist', options)
			.then(response => response.json())
			.then(response => setImages(response))
			.then(setMessage(""))
			.catch(err => console.error(err));
	}, []);

	// useEffect(() => { setToShow(images[0].image); }, [images]);

	console.log(images);

	return (
		<main role="main">
			<h1>{message}</h1>
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				{images.map((x, index) => <div key= { index }><img alt="seabum" src={x.image + "=w181"}></img><h3>#{index+1}{" - "}{x.id}</h3></div>)}
			</div>
			{/* <img src="https://lh3.googleusercontent.com/vLnz3nWblhMY7jInP5jLxcZEIN3gBvmwmkUb0rf0ok6ukuEY2M-RCVkVDLDMf1A6texf3o-rlt7iDTSsoj0uvwR1azjqz_E1blVqww=w181" alt="seabum"></img> */}
			{/* {images.map((x) => <div key={x}>{x.image + "=w181"}</div>)} */}
			{/* <Bum /> */}
		</main>
	);
}

export default Home;

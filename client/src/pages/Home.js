import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bum from "./Bum";

import "./Home.css";
import logo from "./logo.svg";

export function Home() {
	const [message, setMessage] = useState("Loading...");
	const [images, setImages] = useState([{ image: "https://lh3.googleusercontent.com/vLnz3nWblhMY7jInP5jLxcZEIN3gBvmwmkUb0rf0ok6ukuEY2M-RCVkVDLDMf1A6texf3o-rlt7iDTSsoj0uvwR1azjqz_E1blVqww=w181"}]);
	const [toShow, setToShow] = useState("");
	const [scoreList, setScoreList] = useState([]);
	const options = { method: 'GET' };
	useEffect(() => {
		fetch('api/scorelist', options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));
	}, []);

	useEffect(() => {
		fetch('https://api.opensea.io/api/v1/asset/0xfaa2ba39e9d988936a5bfed5690dfc9ca570c124/1/', options)
			.then(response => response.json())
			// .then(response => console.log(response.collection, response.collection.slug) )
			.catch(err => console.error(err));
	}, []);

	useEffect(() => {
		fetch('http://localhost:3000/api/scorelist', options)
			.then(response => response.json())
			.then(response => setImages(response))
			.catch(err => console.error(err));
	}, []);

	useEffect(() => { setToShow(images[0].image); }, [images]);

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	console.log(images);
	console.log("to show", toShow);

	return (
		<main role="main">
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				{images.map((x, index) => <div><img key={index} alt="seabum" src={x.image + "=w181"}></img><h3>#{index+1}{" - "}{x.id}</h3></div>)}
			</div>
			{/* <img src="https://lh3.googleusercontent.com/vLnz3nWblhMY7jInP5jLxcZEIN3gBvmwmkUb0rf0ok6ukuEY2M-RCVkVDLDMf1A6texf3o-rlt7iDTSsoj0uvwR1azjqz_E1blVqww=w181" alt="seabum"></img> */}
			{/* {images.map((x) => <div key={x}>{x.image + "=w181"}</div>)} */}
			{/* <Bum /> */}
		</main>
	);
}

export default Home;

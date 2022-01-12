import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Bum from "./Bum";

import "./Home.css";

export function Home() {
	const [images, setImages] = useState([{ image: "https://lh3.googleusercontent.com/5OJieWsez2Jc0phE8yn5A3jeg8w_8kdSe99vfy6xznSEMXOb4jH6OMJ_yGzqEJ9e-YL4OLNXx1SRlp5Jm0Xaw_LazrRFzqEShIzM_Q" }]);
	const [selectedImage, setSelectedImage] = useState("https://lh3.googleusercontent.com/5OJieWsez2Jc0phE8yn5A3jeg8w_8kdSe99vfy6xznSEMXOb4jH6OMJ_yGzqEJ9e-YL4OLNXx1SRlp5Jm0Xaw_LazrRFzqEShIzM_Q");
	const [rankings, setRankings] = useState([{ image: "https://lh3.googleusercontent.com/5OJieWsez2Jc0phE8yn5A3jeg8w_8kdSe99vfy6xznSEMXOb4jH6OMJ_yGzqEJ9e-YL4OLNXx1SRlp5Jm0Xaw_LazrRFzqEShIzM_Q"}]);
	const [selectedRank, setSelectedRank] = useState(1);
	const [selectedNumber, setSelectedNumber] = useState(619);
	const [selectedObject, setSelectedOdject] = useState({ "id": 139, "image": "https://lh3.googleusercontent.com/wE2-80gqmq6oeb06mWUVZ-oQNY_vJDj6ueeqnqX3OUpU9pPwMffNty96IFcYAWeQT0wvOEHnkt9htkwen_jFD5VZhDIITkRlfIwZTw", "score": "916.66" });
	const [search, setSearch] = useState(1);

	useEffect(() => {
		const options = { method: "GET" };
		fetch('/api/scorelist', options)
			.then(response => response.json())
			.then(response => setImages(response))
			.then(setRankings(images.map(item => ({ ...item.id })) ))
			.then("IMAGES", console.log(images))
			.then("RANKINGS", console.log(rankings))
			.catch(err => console.error(err));
	}, [images]);

	return (
		<main role="main">
			{/* <div className="bum">
				{images.map((x, index) => <div key= { index }><img alt="seabum" src={x.image + "=w181"}></img><h3>Rank:{index+1}{" - #"}{x.id}</h3></div>)}
			</div> */}

			<div className="bum"><img alt="seabum" src={selectedImage + "=w560"}></img><h3>Rank: {selectedRank} {" - #"}{selectedNumber}</h3>

			<form>
				<label>
					Number:
					<input type="text" name="name" 
					onChange={(e)=>setSearch(e.target.value)}
/>
				</label>
				<button onClick={
					(e) => { 
						e.preventDefault(); 
						setSelectedNumber(search);
						console.log("parseInt(search)", parseInt(search));
						// console.log(rankings.map((e) => e.id.indexOf(search));

						console.log(images.map(object => object.id).indexOf(parseInt(search)));

						setSelectedRank((images.map(object => object.id).indexOf(parseInt(search)))+1);
						// console.log("this", rankings.findIndex(object => { object.id === parseInt(search); }))
						// console.log(selectedRank);
						// console.log(images.filter((images) => images.id == parseInt(search))[0].image); 
						setSelectedImage(images.filter((images) => images.id == parseInt(search))[0].image);
					}
				}>Search</button>
			</form>
			</div>
		</main>
	);
}

export default Home;

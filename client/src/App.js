import { Route, Switch } from "react-router-dom";
import "./pages/Home.css";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
	<Switch>
		<Route path="/" exact>
			<Home />
		</Route>
		<Route path="/about/this/site">
			<About />
		</Route>
	</Switch>
);

export default App;

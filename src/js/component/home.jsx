import React from "react";

import NavBar from "./NavBar.jsx";
import Jumbotrom from "./Jumbotrom.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
function Home () {
	return (
		<div>
			<NavBar />
			<Jumbotrom />
			<Card />
			<Footer />
			
		</div>
	);
};

export default Home;

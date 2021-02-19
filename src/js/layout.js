import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import { NavBar } from "./component/NavBar";
import { Footer } from "./component/Footer";

import Home from "./views/Home";
import Character from "./views/Character";
import Planet from "./views/Planet";
import Vehicle from "./views/Vehicle";
import NotFound from "./views/NotFound";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter basename={basename}>
			<NavBar />
			<Switch>
				<Route exact path="/character/:id" component={Character} />
				<Route exact path="/planet/:id" component={Planet} />
				<Route exact path="/vehicle/:id" component={Vehicle} />
				<Route exact path="/" component={Home} />
				<Route path={["*", "/404"]} component={NotFound} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default injectContext(Layout);

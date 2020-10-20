import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import GuestRoute from "./pages/GuestRoute";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
	const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

	return (
		<Router history={history}>
			<Switch>
				<GuestRoute path="/login" component={Login} />
				<Route path="*" component={NotFound}></Route>
			</Switch>
		</Router>
	);
}

export default App;

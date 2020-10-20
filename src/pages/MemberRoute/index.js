import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";

const MemberRoute = ({
	component: Component,
	match,
	location,
	path,
	...rest
}) => {
	const ok = localStorage.getItem("DAILYCOURSE:token");
	localStorage.removeItem("DAILYCOURSE:redirect");

	return (
		<Route
			{...rest}
			render={(props) =>
				ok ? (
					<Component {...props} />
				) : path === "/joined/:class" ? (
					<Redirect to={`/login?path=${location.pathname}`} />
				) : (
					<Redirect to={`/private?path=${location.pathname}`} />
				)
			}
		/>
	);
};

export default withRouter(MemberRoute);

import React from "react";
import { Link, withRouter } from "react-router-dom";
import propTypes from "prop-types";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Header = ({ onLight, location }) => {
	const linkColor = onLight ? "text-gray-900" : "text-white";

	const linkCTA =
		location.pathname.indexOf("/login") > -1
			? `${process.env.REACT_APP_BASE_URL}/register`
			: `${process.env.REACT_APP_BASE_URL}/login`;
	const textCTA =
		location.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

	return (
		<header className="flex justify-between items-center">
			<div className="logo" style={{ height: 55 }}>
				<Logo className={`${onLight ? "on-light" : "on-dark"}`} />
			</div>
			<ul className="flex">
				<li>
					<Link>
						<a
							href="/"
							className={[
								linkColor,
								"text-white hover:text-teal-500 text-lg px-6 py-3",
							].join(" ")}
						>
							Home
						</a>
					</Link>
				</li>
				<li>
					<Link>
						<a
							href="/"
							className={[
								linkColor,
								"text-white hover:text-teal-500 text-lg px-6 py-3",
							].join(" ")}
						>
							Pricing
						</a>
					</Link>
				</li>
				<li>
					<Link>
						<a
							href="/"
							className={[
								linkColor,
								"text-white hover:text-teal-500 text-lg px-6 py-3",
							].join(" ")}
						>
							Features
						</a>
					</Link>
				</li>
				<li>
					<Link>
						<a
							href="/"
							className={[
								linkColor,
								"text-white hover:text-teal-500 text-lg px-6 py-3",
							].join(" ")}
						>
							Story
						</a>
					</Link>
				</li>
				<li>
					<a
						href="/"
						target="_blank"
						rel="noopener noreferer"
						href={linkCTA}
						className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white text-lg px-6 py-3 ml-6"
					>
						{textCTA}
					</a>
				</li>
			</ul>
		</header>
	);
};

Header.propTypes = {
	onLight: propTypes.bool,
};

export default withRouter(Header);

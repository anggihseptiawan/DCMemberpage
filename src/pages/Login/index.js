import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginForm from './LoginForm';

const Login = () => {
	return (
		<>
			<section className="container mx-auto pt-5">
				<Header onLight />
			</section>
			<section className="container mx-auto pt-5">
				<LoginForm />
			</section>
			<section className="mt-24 bg-indigo-900 py-12">
				<Footer />
			</section>
		</>
	);
};

export default Login;

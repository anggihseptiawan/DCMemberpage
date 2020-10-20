import React, {useState} from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e) => {
        e.preventDefault();
    };

	return (
        <div className="flex justify-center items-center pb-24">
            <div className="w-3/12">
                <h1 className="text-4xl text-gray-900 mb-6">
                    <span className="font-bold">Continue</span> Study, <br />
                    Finish Your <span className="font-bold">Goals</span>
                </h1>
                <form onSubmit={submit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" className="bg-white focus:outline-none border-0 px-6 py-3 w-full border mt-2" placeholder="Your email address" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="bg-white focus:outline-none border-0 px-6 py-3 w-full border mt-2" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full" onClick={submit}>Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

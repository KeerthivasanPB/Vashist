import React, { useState } from "react";
import InputField from "./InputField";

const Signup = ({ switchToLogin }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Signup:", { name, email, password });
    };

    return (
        <div className="auth-box">
            <h2>Sign Up</h2>

            <form onSubmit={handleSignup}>
                <InputField
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <InputField
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="auth-btn">Create Account</button>
            </form>

            <p>
                Already have an account?{" "}
                <span onClick={switchToLogin}>Login</span>
            </p>
        </div>
    );
};

export default Signup;
import React, { useState } from "react";
import InputField from "./InputField";

const Login = ({ switchToSignup }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login:", { email, password });
    };

    return (
        <div className="auth-box">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
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

                <button className="auth-btn">Login</button>
            </form>

            <p>
                Don't have an account?{" "}
                <span onClick={switchToSignup}>Sign up</span>
            </p>
        </div>
    );
};

export default Login;
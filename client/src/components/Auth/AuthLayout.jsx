import React from "react";
import "./Auth.css";

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-container">
            <div className="auth-left">
                <h1>Welcome Back 🚀</h1>
                <p>Build smarter learning with collaboration.</p>
            </div>

            <div className="auth-right">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
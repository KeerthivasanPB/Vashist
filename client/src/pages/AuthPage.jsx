import React, { useState } from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <AuthLayout>
            {isLogin ? (
                <Login switchToSignup={() => setIsLogin(false)} />
            ) : (
                <Signup switchToLogin={() => setIsLogin(true)} />
            )}
        </AuthLayout>
    );
};

export default AuthPage;
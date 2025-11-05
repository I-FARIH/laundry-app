import { useState } from 'react';
import './App.css';
import Dashboard from "./Dashboard";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.success) {
                setIsLoggedIn(true);  // ✅ This changes state and shows Dashboard
            } else {
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            alert('Error connecting to server');
        }
    };

    if (isLoggedIn) {
        return <Dashboard />;
    }

    return (
        <div className="page-container">
            <div className="signin-card">
                {/* Logo */}
                <div className="logo-container">
                    <img
                        src="/Al_Akhawayn_University_Logo.png"
                        alt="University Logo"
                        className="logo"
                    />
                </div>

                {/* Title */}
                <h1 className="title">Welcome Back</h1>
                <p className="subtitle">Sign in to your account</p>

                {/* Sign In Form */}
                <div className="form-container">
                    {/* Email Input */}
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@university.edu"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="form-options">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span>Remember me</span>
                        </label>
                        <button className="link-button">Forgot password?</button>
                    </div>

                    {/* Submit Button */}
                    <button onClick={handleSubmit} className="signin-button">
                        Sign In
                    </button>
                </div>
            </div>

            {/* Footer */}
        </div>
    );
}
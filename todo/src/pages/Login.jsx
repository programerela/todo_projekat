import "../styles/login.css";
import { Link } from "react-router";

export default function Login() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Welcome back!</h1>
                <p>Log in to continue organizing your tasks.</p>

                <form className="auth-form">
                    <input type="email" placeholder="Email" className="auth-input" />
                    <input type="password" placeholder="Password" className="auth-input" />
                    <button type="submit" className="auth-btn">Log In</button>
                </form>

                <div className="auth-footer">
                    <span>Don't have an account? <Link to="/register">Sign up</Link></span>
                </div>
            </div>
        </div>
    );
}
import "../styles/login.css";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";


export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Welcome back!</h1>
                <p>Log in to continue organizing your tasks.</p>

                <form className="auth-form">
                    <input type="email" placeholder="Email" className="auth-input" />
                    <input type="password" placeholder="Password" className="auth-input" />
                    <button type="button" className="auth-btn" onClick={() => {;

                    }}>Log In</button>
                </form>

                <div className="auth-footer">
                    <span>Don't have an account? <Link to="/register">Sign up</Link></span>
                </div>
            </div>
        </div>
    );
}
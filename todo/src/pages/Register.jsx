import "../styles/register.css";

function Register() {
    return(
        <div className="auth-page">
            <div className="auth-card">
                <h1>Create an Account</h1>
                <p>Join our community today!</p>

                <form className="auth-form">
                    <input type="text" placeholder="Username" className="auth-input" />
                    <input type="email" placeholder="Email" className="auth-input" />
                    <input type="password" placeholder="Password" className="auth-input" />
                    <button type="submit" className="auth-btn">Register</button>
                </form>

                <div className="auth-footer">
                    Already have an account? <a href="/login">Log in</a>
                </div>
            </div>
        </div>
    );
}

export default Register;
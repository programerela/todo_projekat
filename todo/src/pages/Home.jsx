import "../styles/home.css";
import { Link } from "react-router";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>
          Organize your tasks.
          <br />
          <span>Reward your focus.</span>
        </h1>

        <p>
          A playful yet minimal to-do app that helps you stay productive
          and take meaningful breaks.
        </p>

        <Link to="/login" className="hero-btn">Start organizing</Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Simple tasks</h3>
          <p>Add, complete and track your daily to-dos without clutter.</p>
        </div>

        <div className="feature-card">
          <h3>Stay consistent</h3>
          <p>Build streaks and routines that actually stick.</p>
        </div>

        <div className="feature-card">
          <h3>Playful breaks</h3>
          <p>Reward your focus with short, fun mini-games.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;

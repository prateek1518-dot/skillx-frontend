import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    skillOffered: "",
    skillWanted: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Name, email and password are required.");
      return;
    }

    // TODO: replace with POST /api/auth/register
    setError("");
    navigate("/dashboard");
  }

  return (
    <section className="auth-section">
      <div className="ticket auth-card" style={{ "--notch-bg": "var(--canvas)" }}>
        <div className="auth-head">
          <span className="eyebrow">Join for free</span>
          <h1>Create your account</h1>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Aditi Rao"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@student.edu"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="row" style={{ gap: 12 }}>
            <div className="field" style={{ flex: 1 }}>
              <label htmlFor="skillOffered">A skill you can teach</label>
              <input
                id="skillOffered"
                name="skillOffered"
                type="text"
                placeholder="e.g. React"
                value={form.skillOffered}
                onChange={handleChange}
              />
            </div>
            <div className="field" style={{ flex: 1 }}>
              <label htmlFor="skillWanted">A skill you want</label>
              <input
                id="skillWanted"
                name="skillWanted"
                type="text"
                placeholder="e.g. Java"
                value={form.skillWanted}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Create account
          </button>
        </form>

        <p className="auth-foot">
          Already on SkillX? <Link to="/login">Log in</Link>
        </p>
      </div>
    </section>
  );
}

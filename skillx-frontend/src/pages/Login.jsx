import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Enter both your email and password.");
      return;
    }

    setError("");
    navigate("/dashboard");
  }

  return (
    <section className="auth-section">
      <div className="ticket auth-card" style={{ "--notch-bg": "var(--canvas)" }}>
        <div className="auth-head">
          <span className="eyebrow">Welcome back</span>
          <h1>Log in to SkillX</h1>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
        </form>

        <p className="auth-foot">
          New to SkillX? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </section>
  );
}

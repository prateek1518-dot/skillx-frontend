import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/dashboard", label: "Browse" },
  { to: "/requests", label: "Requests" },
  { to: "/sessions", label: "Sessions" },
  { to: "/profile", label: "Profile" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          Skill<span>X</span>
        </Link>

        <nav className={`navbar-links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "is-active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/login" className="btn btn-ghost btn-sm">
            Log in
          </Link>
          <Link to="/register" className="btn btn-primary btn-sm">
            Join SkillX
          </Link>
        </div>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

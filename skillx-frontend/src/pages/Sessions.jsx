import { sessions } from "../data/mockData.js";
import "./Sessions.css";

export default function Sessions() {
  const sorted = [...sessions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="section sessions">
      <div className="container">
        <span className="eyebrow">Sessions</span>
        <h1 className="sessions-title">Learning session tracker</h1>
        <p className="sessions-sub">
          Every session from an active exchange shows up here. Mark them off
          as you go — completing all sessions on both sides is what triggers
          a certificate.
        </p>

        <div className="timeline">
          {sorted.map((s) => (
            <div key={s.id} className="timeline-item">
              <div className="timeline-marker">
                <span
                  className={`timeline-dot ${
                    s.status === "completed" ? "is-done" : ""
                  }`}
                />
                <span className="timeline-line" />
              </div>

              <div className="ticket timeline-card">
                <div className="timeline-card-head">
                  <p className="timeline-skill">{s.skill}</p>
                  <span
                    className={`status-pill ${
                      s.status === "completed" ? "status-done" : "status-active"
                    }`}
                  >
                    {s.status === "completed" ? "Completed" : "Upcoming"}
                  </span>
                </div>
                <p className="timeline-with">with {s.withUser}</p>
                <p className="timeline-note">{s.note}</p>
                <p className="timeline-date">{s.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

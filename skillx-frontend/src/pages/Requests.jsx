import { useState } from "react";
import { exchangeRequests as initialRequests } from "../data/mockData.js";
import "./Requests.css";

const statusLabel = {
  pending: "Pending",
  active: "Active",
  done: "Completed",
  declined: "Declined",
};

export default function Requests() {
  const [requests, setRequests] = useState(initialRequests);
  const [filter, setFilter] = useState("all");

  function respond(id, next) {
    // TODO: PATCH /api/requests/:id { status }
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: next } : r))
    );
  }

  const visible = requests.filter((r) =>
    filter === "all" ? true : r.direction === filter
  );

  return (
    <section className="section requests">
      <div className="container">
        <span className="eyebrow">Requests</span>
        <h1 className="requests-title">Your exchange requests</h1>

        <div className="requests-filter">
          {["all", "incoming", "outgoing"].map((f) => (
            <button
              key={f}
              className={`requests-filter-btn ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="requests-list">
          {visible.map((r) => (
            <div key={r.id} className="ticket request-row">
              <div className="request-main">
                <p className="request-with">
                  {r.direction === "incoming" ? "From " : "To "}
                  <strong>{r.withUser}</strong>
                </p>
                <p className="request-trade">
                  Their <span className="tag">{r.theirSkill}</span> for your{" "}
                  <span className="tag tag-wants">{r.yourSkill}</span>
                </p>
                <p className="request-date">Sent {r.sentOn}</p>
              </div>

              <div className="request-side">
                <span className={`status-pill status-${r.status}`}>
                  {statusLabel[r.status]}
                </span>

                {r.direction === "incoming" && r.status === "pending" && (
                  <div className="request-actions">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => respond(r.id, "active")}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => respond(r.id, "declined")}
                    >
                      Decline
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <p className="requests-empty">No {filter} requests yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

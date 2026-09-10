import { useMemo, useState } from "react";
import { skillListings } from "../data/mockData.js";
import SkillTicket from "../components/SkillTicket.jsx";
import "./Dashboard.css";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [sentTo, setSentTo] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return skillListings;
    return skillListings.filter(
      (l) =>
        l.offers.toLowerCase().includes(q) ||
        l.wants.toLowerCase().includes(q) ||
        l.user.toLowerCase().includes(q)
    );
  }, [query]);

  function handleRequest(listing) {
    // TODO: POST /api/requests { toUser, skill }
    setSentTo(listing.id);
    setTimeout(() => setSentTo(null), 2500);
  }

  return (
    <section className="section dashboard">
      <div className="container">
        <div className="dashboard-head">
          <div>
            <span className="eyebrow">Browse</span>
            <h1 className="dashboard-title">Find a skill to trade for</h1>
          </div>
          <input
            className="dashboard-search"
            type="text"
            placeholder="Search a skill or a name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {sentTo && (
          <div className="dashboard-toast">
            Request sent — you'll see it under "Requests" once they respond.
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="dashboard-empty">
            Nothing matches "{query}". Try a different skill.
          </p>
        ) : (
          <div className="listing-grid">
            {filtered.map((l) => (
              <SkillTicket key={l.id} listing={l} onRequest={handleRequest} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

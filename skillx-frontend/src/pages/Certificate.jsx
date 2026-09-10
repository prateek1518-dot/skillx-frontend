import { useParams, Link } from "react-router-dom";
import { certificates, currentUser } from "../data/mockData.js";
import "./Certificate.css";

export default function Certificate() {
  const { id } = useParams();
  const cert = certificates.find((c) => c.id === id) || certificates[0];

  if (!cert) {
    return (
      <section className="section certificate-empty">
        <div className="container">
          <p>No certificate found.</p>
          <Link to="/sessions">Back to sessions</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section certificate">
      <div className="container certificate-container">
        <div className="ticket certificate-card" style={{ "--notch-bg": "var(--canvas)" }}>
          <div className="certificate-eyebrow-row">
            <span className="eyebrow">SkillX · Certificate of exchange</span>
            <span className="certificate-number">{cert.number}</span>
          </div>

          <h1 className="certificate-title">{cert.skill}</h1>
          <p className="certificate-body">
            This certifies that <strong>{currentUser.name}</strong> completed
            a peer-to-peer skill exchange in <strong>{cert.skill}</strong>{" "}
            with <strong>{cert.withUser}</strong>, through mutual teaching and
            learning sessions on SkillX.
          </p>

          <hr className="ticket-divider" />

          <div className="certificate-foot">
            <div>
              <span className="eyebrow">Issued</span>
              <p>{cert.issuedOn}</p>
            </div>
            <div>
              <span className="eyebrow">Exchange partner</span>
              <p>{cert.withUser}</p>
            </div>
          </div>
        </div>

        <button className="btn btn-ghost" onClick={() => window.print()}>
          Print / save as PDF
        </button>
      </div>
    </section>
  );
}

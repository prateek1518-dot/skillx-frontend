import { useState } from "react";
import { currentUser } from "../data/mockData.js";
import "./Profile.css";

export default function Profile() {
  const [offered, setOffered] = useState(currentUser.skillsOffered);
  const [wanted, setWanted] = useState(currentUser.skillsWanted);
  const [newOffered, setNewOffered] = useState("");
  const [newWanted, setNewWanted] = useState("");

  function addSkill(e, list, setList, value, setValue) {
    e.preventDefault();
    const v = value.trim();
    if (!v || list.includes(v)) return;
    setList([...list, v]);
    setValue("");
  }

  function removeSkill(list, setList, skill) {
    setList(list.filter((s) => s !== skill));
  }

  return (
    <section className="section profile">
      <div className="container profile-grid">
        <div className="card profile-summary">
          <div className="profile-avatar">
            {currentUser.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <h1 className="profile-name">{currentUser.name}</h1>
          <p className="profile-email">{currentUser.email}</p>
          <p className="profile-rating">★ {currentUser.rating.toFixed(1)} rating</p>
        </div>

        <div className="profile-skills">
          <div className="card">
            <h2 className="profile-section-title">Skills you offer</h2>
            <div className="profile-tag-row">
              {offered.map((s) => (
                <span key={s} className="tag profile-editable-tag">
                  {s}
                  <button
                    type="button"
                    aria-label={`Remove ${s}`}
                    onClick={() => removeSkill(offered, setOffered, s)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <form
              className="profile-add-form"
              onSubmit={(e) =>
                addSkill(e, offered, setOffered, newOffered, setNewOffered)
              }
            >
              <input
                type="text"
                placeholder="Add a skill you can teach"
                value={newOffered}
                onChange={(e) => setNewOffered(e.target.value)}
              />
              <button type="submit" className="btn btn-ghost btn-sm">
                Add
              </button>
            </form>
          </div>

          <div className="card">
            <h2 className="profile-section-title">Skills you want</h2>
            <div className="profile-tag-row">
              {wanted.map((s) => (
                <span key={s} className="tag tag-wants profile-editable-tag">
                  {s}
                  <button
                    type="button"
                    aria-label={`Remove ${s}`}
                    onClick={() => removeSkill(wanted, setWanted, s)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <form
              className="profile-add-form"
              onSubmit={(e) =>
                addSkill(e, wanted, setWanted, newWanted, setNewWanted)
              }
            >
              <input
                type="text"
                placeholder="Add a skill you want to learn"
                value={newWanted}
                onChange={(e) => setNewWanted(e.target.value)}
              />
              <button type="submit" className="btn btn-ghost btn-sm">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

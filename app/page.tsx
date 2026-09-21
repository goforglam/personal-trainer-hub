import Link from "next/link";

const buildItems = [
  { name: "Client workspace", meta: "Profiles, assessments and goals", status: "Next" },
  { name: "Training methodology", meta: "Rules, principles and progression", status: "Next" },
  { name: "Exercise library", meta: "Movements, cues and progressions", status: "Next" },
];

export default function Dashboard() {
  return (
    <div className="content">
      <section className="hero">
        <div>
          <span className="pill">Trainer / Admin</span>
          <h1>Your method.<br />Your clients.<br />One hub.</h1>
          <p>A calm workspace to turn your training methodology into repeatable, personalised coaching — without losing the human part.</p>
        </div>
        <div className="pill">Foundation shell ready</div>
      </section>
      <section className="grid stats">
        <div className="card"><div className="stat-label">Active clients</div><div className="stat-value">—</div><div className="stat-note">Supabase layer to come</div></div>
        <div className="card"><div className="stat-label">Programs</div><div className="stat-value">—</div><div className="stat-note">Methodology first</div></div>
        <div className="card"><div className="stat-label">Sessions</div><div className="stat-value">—</div><div className="stat-note">To be tracked</div></div>
        <div className="card"><div className="stat-label">Adherence</div><div className="stat-value">—</div><div className="stat-note">To be measured</div></div>
      </section>
      <section className="grid two">
        <div className="card">
          <div className="card-head"><div className="card-title">Build sequence</div><span className="card-link">Foundation</span></div>
          <div className="list">
            {buildItems.map((item) => (
              <div className="list-item" key={item.name}>
                <div className="list-main"><div className="list-name">{item.name}</div><div className="list-meta">{item.meta}</div></div>
                <span className="badge">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-head"><div className="card-title">Next step</div></div>
          <div className="empty"><div><strong>Define the methodology layer</strong><span>We will encode your principles, decision rules and progression logic before adding complex client data.</span></div></div>
        </div>
      </section>
      <div style={{ marginTop: 14 }}>
        <Link className="card" href="/method" style={{ display: "block" }}>
          <div className="card-head" style={{ marginBottom: 8 }}><div className="card-title">Open Methodology</div><span className="card-link">→</span></div>
          <div className="stat-note">The future source of truth for how the Hub makes training decisions.</div>
        </Link>
      </div>
    </div>
  );
}

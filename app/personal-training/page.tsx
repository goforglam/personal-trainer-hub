const stages = [
  ["01", "Onboarding", "Understand the person, context and expectations."],
  ["02", "Assessment", "Establish the meaningful starting point."],
  ["03", "Goals", "Translate outcomes into measurable priorities."],
  ["04", "Program", "Turn methodology + context into an individual plan."],
  ["05", "Sessions", "Prepare, coach, adapt and capture."],
  ["06", "Progress", "Review evidence against goals and baseline."],
  ["07", "Adapt", "Change the plan deliberately and record why."],
];

export default function PersonalTrainingPage() {
  return (
    <div className="content">
      <div className="section-page">
        <span className="pill">Individual · Longitudinal</span>
        <h1 style={{ marginTop: 12 }}>Personal Training</h1>
        <p>A detailed client journey designed around your actual coaching decisions — not just a calendar of appointments.</p>

        <div className="grid" style={{ marginTop: 24 }}>
          {stages.map(([number, title, text]) => (
            <div className="card" key={number} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 16, alignItems: "start" }}>
              <div className="badge" style={{ textAlign: "center" }}>{number}</div>
              <div>
                <div className="card-title">{title}</div>
                <div className="stat-note" style={{ marginTop: 6 }}>{text}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 14 }}>
          <div className="card-head">
            <div><div className="card-title">Session principle</div><div className="stat-note">The detail should serve the next decision.</div></div>
          </div>
          <div className="empty">
            <div><strong>Prepare → Coach → Adapt → Capture</strong><span>Every completed session should leave you with one clear answer: what should I remember when I see this client again?</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

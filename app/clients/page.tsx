const principles = [
  ["Profile", "Context, availability and the person behind the training."],
  ["Assessment", "A meaningful baseline, not a giant questionnaire."],
  ["Goals", "Clear outcomes, priorities and success criteria."],
  ["Program", "Your methodology translated into an individual plan."],
  ["Sessions", "Fast coaching capture with useful detail."],
  ["Progress", "Evidence, interpretation and deliberate adaptation."],
];

export default function ClientsPage() {
  return (
    <div className="content">
      <div className="section-page">
        <span className="pill">Personal Training · Clients</span>
        <h1 style={{ marginTop: 12 }}>Know the person.<br />Coach the individual.</h1>
        <p>The client workspace will become the centre of every 1:1 relationship — detailed enough for excellent coaching, light enough to use every day.</p>

        <div className="card" style={{ marginTop: 24 }}>
          <div className="card-head">
            <div><div className="card-title">Client workspace</div><div className="stat-note">One person can participate in both Group Fitness and Personal Training.</div></div>
            <span className="card-link">No clients yet</span>
          </div>
          <div className="empty">
            <div><strong>Your first Personal Training client will appear here</strong><span>When connected to Supabase, this view will become your working client list — with the next action, current goal and latest insight surfaced first.</span></div>
          </div>
        </div>

        <div className="client-grid">
          {principles.map(([title, text], index) => (
            <div className="card client-card" key={title}>
              <div className="client-row">
                <div className="client-avatar">0{index + 1}</div>
                <div>
                  <div className="card-title">{title}</div>
                  <div className="client-meta">{text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

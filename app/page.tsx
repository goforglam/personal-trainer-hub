const today = [
  { time: "08:00", type: "Personal Training", title: "1:1 client session", detail: "Review previous session · confirm today's objective", kind: "pt" },
  { time: "17:30", type: "Group Fitness", title: "Tae Bo", detail: "Class plan · music · expected attendance", kind: "group" },
  { time: "19:00", type: "Group Fitness", title: "DeepWork", detail: "Class focus · equipment · session notes", kind: "group" },
  { time: "20:30", type: "Personal Training", title: "1:1 client session", detail: "Readiness · today's focus · next action", kind: "pt" },
];

const quickActions = [
  "Group class completed",
  "Record attendance",
  "PT session completed",
  "Add client feedback",
  "Add progress metric",
  "Create follow-up",
];

export default function Dashboard() {
  return (
    <div className="content">
      <section className="hero">
        <div>
          <span className="pill">Today · Trainer / Admin</span>
          <h1>Your method.<br />Your clients.<br />One hub.</h1>
          <p>One calm place for the two sides of your coaching work: group fitness delivery and deeply personalised training.</p>
        </div>
        <div className="pill">Day-to-day workspace</div>
      </section>

      <section className="card today-card">
        <div className="card-head">
          <div>
            <div className="card-title">Today</div>
            <div className="stat-note">What needs your attention today</div>
          </div>
          <span className="card-link">Schedule</span>
        </div>
        <div className="today-list">
          {today.map((item) => (
            <div className="today-item" key={item.time + item.title}>
              <div className="today-time">{item.time}</div>
              <div className="today-main">
                <div className="today-type">{item.type}</div>
                <div className="today-title">{item.title}</div>
                <div className="today-detail">{item.detail}</div>
              </div>
              <span className={`badge ${item.kind}`}>{item.kind === "pt" ? "1:1" : "Group"}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid two" style={{ marginTop: 14 }}>
        <div className="card">
          <div className="card-head"><div><div className="card-title">Quick capture</div><div className="stat-note">Record the important thing while it is fresh</div></div></div>
          <div className="quick-grid">
            {quickActions.map((action) => <button className="quick-action" key={action}>+ {action}</button>)}
          </div>
        </div>
        <div className="card">
          <div className="card-head"><div><div className="card-title">This week</div><div className="stat-note">Business at a glance</div></div></div>
          <div className="grid stats compact-stats">
            <div><div className="stat-label">Group classes</div><div className="stat-value small">—</div></div>
            <div><div className="stat-label">PT sessions</div><div className="stat-value small">—</div></div>
            <div><div className="stat-label">PT clients</div><div className="stat-value small">—</div></div>
            <div><div className="stat-label">Hours</div><div className="stat-value small">—</div></div>
          </div>
        </div>
      </section>

      <section className="grid two" style={{ marginTop: 14 }}>
        <div className="card"><div className="card-head"><div className="card-title">Group Fitness</div><span className="card-link">Class-oriented</span></div><div className="empty"><div><strong>Tae Bo · DeepWork · BodyART</strong><span>Manage recurring classes, schedules, attendance and short class reflections without over-documenting participants.</span></div></div></div>
        <div className="card"><div className="card-head"><div className="card-title">Personal Training</div><span className="card-link">Individual</span></div><div className="empty"><div><strong>Detailed client journey</strong><span>Assessment → goals → program → session → feedback → progress → adaptation.</span></div></div></div>
      </section>
    </div>
  );
}

export function Section({ title, text }: { title: string; text: string }) {
  return (
    <div className="content">
      <div className="section-page">
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="card" style={{ marginTop: 24 }}>
          <div className="empty">
            <div>
              <strong>Foundation ready</strong>
              <span>This area is intentionally lightweight for now. We will add the real data model and workflows in the next layer.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Trainer Hub",
  description: "A methodology-led personal training platform.",
};

const nav = [
  ["⌂", "Today", "/"],
  ["◉", "Group Fitness", "/group-fitness"],
  ["♙", "Personal Training", "/personal-training"],
  ["◇", "Exercises", "/exercises"],
  ["✦", "Method", "/method"],
  ["↗", "Business", "/business"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <aside className="sidebar">
            <div className="brand">
              <div className="brand-mark">P</div>
              <div>
                <div className="brand-title">Personal Trainer Hub</div>
                <div className="brand-subtitle">Your methodology, structured.</div>
              </div>
            </div>
            <nav className="nav" aria-label="Primary navigation">
              {nav.map(([icon, label, href]) => (
                <Link key={href} className="nav-link" href={href}>
                  <span className="nav-icon">{icon}</span>
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </aside>
          <main className="main">
            <header className="topbar">
              <div>
                <div className="eyebrow">Personal Trainer Hub</div>
                <div className="page-title">Trainer workspace</div>
              </div>
              <div className="pill">Methodology-led · v0.2</div>
            </header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

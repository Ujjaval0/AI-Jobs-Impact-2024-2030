import React, { useState } from 'react';

// --- SUB-COMPONENTS ---

const ReportHeader = () => (
  <header className="pro-header">
    <div className="pro-top-rule"></div>

    <div className="pro-meta-row">
      <span className="pro-category">AI &amp; LABOUR ECONOMICS — DATA REPORT</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a
          href="https://www.linkedin.com/in/ujjaval-bhardwaj/"
          target="_blank"
          rel="noopener noreferrer"
          className="pro-linkedin-link"
        >
          <Linkedin size={13} strokeWidth={2} />
          Ujjaval Bhardwaj
        </a>
        <span className="pro-year">2024 – 2030</span>
      </div>
    </div>

    <h1 className="pro-title">The AI Economy</h1>
    <p className="pro-subtitle">
      How Artificial Intelligence is Reshaping Startups, Funding &amp; the Future of Work
    </p>

    <div className="pro-rule"></div>

    <div className="pro-data-row">
      <div className="pro-stat">
        <span className="pro-stat-num">500</span>
        <span className="pro-stat-label">Startups Analyzed</span>
      </div>
      <div className="pro-stat-divider"></div>
      <div className="pro-stat">
        <span className="pro-stat-num">$10.7B</span>
        <span className="pro-stat-label">Funding Tracked</span>
      </div>
      <div className="pro-stat-divider"></div>
      <div className="pro-stat">
        <span className="pro-stat-num">30,000</span>
        <span className="pro-stat-label">Job Titles</span>
      </div>
      <div className="pro-stat-divider"></div>
      <div className="pro-stat">
        <span className="pro-stat-num">8</span>
        <span className="pro-stat-label">Industries</span>
      </div>
      <div className="pro-stat-divider"></div>
      <div className="pro-stat">
        <span className="pro-stat-num">5</span>
        <span className="pro-stat-label">Global Regions</span>
      </div>
    </div>

    <div className="pro-rule"></div>

    <div className="pro-tools-row">
      <span className="pro-tools-label">Tools</span>
      <span className="pro-tool-tag">Excel</span>
      <span className="pro-tool-tag">Power BI</span>
      <span className="pro-tool-tag">DAX</span>
      <span className="pro-tools-sep"></span>
      <span className="pro-tools-label">Type</span>
      <span className="pro-tool-tag neutral">Exploratory Data Analysis</span>
      <span className="pro-tool-tag neutral">Data Visualization</span>
      <span className="pro-tool-tag neutral">Business Intelligence</span>
    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

      .pro-header {
        padding: 0 0 2rem 0;
        margin-bottom: 2rem;
      }
      .pro-top-rule {
        height: 4px;
        background: #000;
        margin-bottom: 1.25rem;
        border-radius: 0;
      }
      .pro-meta-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;
      }
      .pro-category {
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--text-secondary);
      }
      .pro-year {
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--text-secondary);
      }
      .pro-title {
        font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        font-size: 3rem;
        font-weight: 800;
        letter-spacing: -0.01em;
        color: #000;
        line-height: 1.05;
        margin-bottom: 0.6rem;
      }
      .pro-subtitle {
        font-size: 1.05rem;
        color: var(--text-secondary);
        font-weight: 400;
        line-height: 1.55;
        margin-bottom: 1.5rem;
        max-width: 680px;
        opacity: 1;
      }
      .pro-rule {
        height: 1px;
        background: var(--border-color);
        margin: 1.25rem 0;
      }
      .pro-data-row {
        display: flex;
        align-items: center;
        gap: 0;
      }
      .pro-stat {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }
      .pro-stat-num {
        font-size: 1.5rem;
        font-weight: 800;
        color: #000;
        letter-spacing: -0.03em;
        font-family: var(--font-main);
        line-height: 1;
      }
      .pro-stat-label {
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--text-secondary);
      }
      .pro-stat-divider {
        width: 1px;
        height: 36px;
        background: var(--border-color);
        flex-shrink: 0;
        margin: 0 1.5rem;
      }
      .pro-tools-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .pro-tools-label {
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--text-secondary);
        margin-right: 0.1rem;
      }
      .pro-tool-tag {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.18rem 0.6rem;
        border-radius: 3px;
        background: #000;
        color: #fff;
      }
      .pro-tool-tag.neutral {
        background: var(--bg-muted);
        color: var(--text-secondary);
        border: 1px solid var(--border-color);
      }
      .pro-tools-sep {
        width: 1px;
        height: 16px;
        background: var(--border-color);
        margin: 0 0.25rem;
        flex-shrink: 0;
      }
      .pro-linkedin-link {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.68rem;
        font-weight: 700;
        color: #0a66c2;
        text-decoration: none;
        letter-spacing: 0.04em;
      }
      .pro-linkedin-link:hover { text-decoration: underline; }
      @media(max-width: 600px) {
        .pro-title { font-size: 2rem; }
        .pro-data-row { flex-wrap: wrap; gap: 1rem; }
        .pro-stat-divider { display: none; }
      }
    `}</style>
  </header>
);

const ReportTags = () => null;



const DashboardCard = ({ title, children, subtitle }) => (
  <div className="dash-card">
    <div className="dash-card-header">
      <div className="dash-title">{title}</div>
      {subtitle && <div className="dash-subtitle">{subtitle}</div>}
    </div>
    <div className="dash-body">{children}</div>
    <style jsx>{`
      .dash-card {
        background: #fff;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
      }
      .dash-card-header { margin-bottom: 1.5rem; }
      .dash-title {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-secondary);
        font-weight: 700;
      }
      .dash-subtitle { font-size: 1.25rem; font-weight: 700; margin-top: 0.25rem; color: #000; }
      .dash-body { flex: 1; min-height: 150px; }
    `}</style>
  </div>
);

// --- MAIN APP ---

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import { startupData, fundingDeals, jobMarketData } from './data/reportData';
import {
  ChevronDown, ChevronUp,
  Lightbulb, Globe, TrendingUp, AlertTriangle,
  Award, BarChart2, Layers, DollarSign,
  Volume2, VolumeX, Newspaper, Car,
  Trophy, Brain, ShieldCheck, Briefcase,
  ArrowUpRight, Wallet, BarChart3, Cpu,
  GraduationCap, Building2, CheckCircle,
  FileSpreadsheet, Code2, Linkedin
} from 'lucide-react';

// ── COLLAPSIBLE DASHBOARD SECTION ──
const CollapsibleDashboard = ({ title, subtitle, defaultOpen = false, badge, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="collapsible-section">
      <button
        className={`collapsible-header ${open ? 'collapsible-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="collapsible-left">
          <div className="collapsible-title">{title}</div>
          {subtitle && <div className="collapsible-subtitle">{subtitle}</div>}
        </div>
        <div className="collapsible-right">
          {badge && <span className="collapsible-badge">{badge}</span>}
          <span className="collapsible-chevron">
            {open
              ? <ChevronUp size={18} strokeWidth={2} />
              : <ChevronDown size={18} strokeWidth={2} />
            }
          </span>
        </div>
      </button>
      <div className={`collapsible-body ${open ? 'collapsible-body-open' : ''}`}>
        <div className="collapsible-inner">{children}</div>
      </div>
      <style>{`
        .collapsible-section {
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .collapsible-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          background: var(--bg-muted);
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 1rem;
          transition: background 0.2s;
        }
        .collapsible-header:hover { background: #eeecea; }
        .collapsible-header.collapsible-open { background: #fff; border-bottom: 1px solid var(--border-color); }
        .collapsible-left { display: flex; flex-direction: column; gap: 0.2rem; }
        .collapsible-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #000;
          letter-spacing: -0.01em;
        }
        .collapsible-subtitle {
          font-size: 0.78rem;
          color: var(--text-secondary);
          font-weight: 400;
        }
        .collapsible-right { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
        .collapsible-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 20px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          white-space: nowrap;
        }
        .collapsible-open .collapsible-badge {
          background: var(--bg-muted);
        }
        .collapsible-chevron {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          transition: transform 0.25s;
        }
        .collapsible-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .collapsible-body-open {
          max-height: 9999px;
          transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .collapsible-inner {
          padding: 1.5rem;
        }
      `}</style>
    </div>
  );
};

// Custom tooltip for efficiency chart
const EfficiencyTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const val = payload[0].value;
    const ind = payload[0].payload.industry;
    return (
      <div style={{ background: '#fff', border: '1px solid #e9e9e8', borderRadius: 6, padding: '0.5rem 0.9rem', fontSize: 13 }}>
        <strong>{ind}</strong><br />
        <span style={{ color: '#787774' }}>$1 invested → </span>
        <strong style={{ color: ind === 'AI' ? '#c94a4a' : '#1a7a6e' }}>${val} value</strong>
      </div>
    );
  }
  return null;
};

const ExitTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #e9e9e8', borderRadius: 6, padding: '0.5rem 0.9rem', fontSize: 13 }}>
        <strong>{payload[0].name}</strong>: {payload[0].value}%
      </div>
    );
  }
  return null;
};

const Dashboard1 = () => {
  const exitColors = ['#37352f', '#d1e9e9', '#fde2e4'];
  const efficiencyColors = startupData.efficiency.map(d =>
    d.industry === 'AI' ? '#fde2e4' : d.industry === 'E-Commerce' ? '#1a7a6e' : '#d1e9e9'
  );

  return (
    <div className="d1-wrapper">

      {/* ── INSIGHT 1: Exit Types ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 01</div>
        <h4 className="insight-heading">Most startups never exit — and that is completely normal.</h4>
        <p className="insight-desc">
          An <strong>"exit"</strong> means a startup either goes public (IPO) or gets bought by a bigger company (Acquisition).
          Most startups do neither — they just keep building privately. That is not failure; it is the norm.
        </p>

        <div className="d1-exit-layout">
          <div className="exit-chart">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={startupData.exits}
                  dataKey="value"
                  nameKey="name"
                  cx="50%" cy="50%"
                  outerRadius={75}
                  innerRadius={48}
                  paddingAngle={4}
                >
                  {startupData.exits.map((_, i) => (
                    <Cell key={i} fill={exitColors[i]} stroke="#fff" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip content={<ExitTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="exit-callouts">
            <div className="callout-row">
              <span className="dot" style={{ background: '#37352f' }}></span>
              <div>
                <div className="callout-val">76%</div>
                <div className="callout-name">Stay Private</div>
                <div className="callout-note">Especially AI & Gaming startups — no IPO, no acquisition, just building.</div>
              </div>
            </div>
            <div className="callout-row">
              <span className="dot" style={{ background: '#d1e9e9' }}></span>
              <div>
                <div className="callout-val">33% in FinTech</div>
                <div className="callout-name">Get Acquired</div>
                <div className="callout-note">FinTech gets bought the most — 1 in 3 startups gets purchased by a bigger company.</div>
              </div>
            </div>
            <div className="callout-row">
              <span className="dot" style={{ background: '#fde2e4' }}></span>
              <div>
                <div className="callout-val">12% in HealthTech</div>
                <div className="callout-name">Go Public (IPO)</div>
                <div className="callout-note">HealthTech has the best shot at an IPO — the highest rate across all industries.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── INSIGHT 2: Efficiency per $1 ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 02</div>
        <h4 className="insight-heading">The most efficient industry is NOT AI.</h4>
        <p className="insight-desc">
          <strong>Efficiency</strong> here means: for every $1 invested into a startup, how much company value does it create?
          A higher number = better return. E-Commerce turns $1 into $10 of value. AI turns $1 into just $7.90.
        </p>

        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={startupData.efficiency} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <XAxis dataKey="industry" tick={{ fontSize: 10, fill: '#787774' }} axisLine={false} tickLine={false} />
            <YAxis domain={[7, 10.5]} tick={{ fontSize: 10, fill: '#787774' }} axisLine={false} tickLine={false} tickCount={4} />
            <Tooltip content={<EfficiencyTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {startupData.efficiency.map((_, i) => (
                <Cell key={i} fill={efficiencyColors[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="efficiency-table">
          <div className="eff-table-header">
            <span>Industry</span>
            <span>Value per $1 Invested</span>
            <span>Rank</span>
          </div>
          {startupData.efficiency.map((row, i) => (
            <div key={row.industry} className={`eff-table-row ${row.industry === 'AI' ? 'eff-last' : ''} ${row.industry === 'E-Commerce' ? 'eff-first' : ''}`}>
              <span>{row.industry}</span>
              <span className="eff-bar-cell">
                <span className="eff-bar-fill" style={{ width: `${((row.value - 7.5) / 2.5) * 100}%`, background: row.industry === 'AI' ? '#fde2e4' : row.industry === 'E-Commerce' ? '#1a7a6e' : '#d1e9e9' }}></span>
                <span className="eff-val">${row.value.toFixed(1)}</span>
              </span>
              <span className="eff-rank">
                {i === 0
                  ? <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Award size={13} color="#1a7a6e" /> #1</span>
                  : i === 7
                    ? <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><AlertTriangle size={13} color="#c94a4a" /> Last</span>
                    : `#${i + 1}`
                }
              </span>
            </div>
          ))}
        </div>

        <div className="insight-callout-box red">
          <span className="box-icon"><Lightbulb size={16} strokeWidth={2} /></span>
          <span>The loudest industry creates the <strong>least value per dollar invested</strong>. AI hype ≠ AI efficiency.</span>
        </div>
      </div>

      {/* ── INSIGHT 3: Regional Funding Equality ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 03</div>
        <h4 className="insight-heading">Startup money is genuinely global now.</h4>
        <p className="insight-desc">
          All 5 global regions are within <strong>2% of each other</strong> in total startup funding.
          The idea that Silicon Valley (North America) controls all the money? The data says otherwise.
        </p>

        <div className="region-grid">
          {startupData.fundingRegions.map((r, i) => {
            const isTop = r.share === Math.max(...startupData.fundingRegions.map(x => x.share));
            return (
              <div key={r.region} className={`region-card ${isTop ? 'region-top' : ''}`}>
                <div className="region-name">{r.region}</div>
                <div className="region-share">{r.share}%</div>
                <div className="region-bar-wrap">
                  <div className="region-bar" style={{ height: `${(r.share / 25) * 60}px`, background: isTop ? '#1a7a6e' : '#d1e9e9' }}></div>
                </div>
                {isTop && <div className="region-badge">Tied #1</div>}
              </div>
            );
          })}
        </div>

        <div className="insight-callout-box teal">
          <span className="box-icon"><Globe size={16} strokeWidth={2} /></span>
          <span>The smallest gap between any two regions is <strong>just 2 percentage points</strong>. Global funding has never been more equal.</span>
        </div>
      </div>

      <style>{`
        .d1-wrapper { display: flex; flex-direction: column; gap: 0; }
        .insight-block {
          padding: 2rem 0 2.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .insight-block:last-child { border-bottom: none; }
        .insight-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.15em;
          color: var(--text-secondary); margin-bottom: 0.4rem;
          text-transform: uppercase;
        }
        .insight-heading {
          font-size: 1.15rem; font-weight: 700; color: #000;
          margin: 0 0 0.6rem; line-height: 1.3;
        }
        .insight-desc {
          font-size: 0.95rem; color: var(--text-secondary);
          margin-bottom: 1.5rem; line-height: 1.7;
        }
        /* Exit layout */
        .d1-exit-layout { display: grid; grid-template-columns: 220px 1fr; gap: 2rem; align-items: center; }
        @media(max-width: 600px) { .d1-exit-layout { grid-template-columns: 1fr; } }
        .exit-callouts { display: flex; flex-direction: column; gap: 1rem; }
        .callout-row { display: flex; gap: 0.75rem; align-items: flex-start; }
        .dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
        .callout-val { font-size: 1.1rem; font-weight: 800; color: #000; }
        .callout-name { font-size: 0.8rem; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.06em; color: var(--text-secondary); margin-bottom: 2px; }
        .callout-note { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; }
        /* Efficiency table */
        .efficiency-table {
          margin: 1.25rem 0;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          overflow: hidden;
          font-size: 0.88rem;
        }
        .eff-table-header {
          display: grid; grid-template-columns: 1fr 2fr 80px;
          padding: 0.5rem 1rem;
          background: var(--bg-muted);
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--text-secondary);
        }
        .eff-table-row {
          display: grid; grid-template-columns: 1fr 2fr 80px;
          padding: 0.55rem 1rem;
          border-top: 1px solid var(--border-color);
          align-items: center;
        }
        .eff-table-row.eff-first { background: #f0faf8; }
        .eff-table-row.eff-last { background: #fff5f5; }
        .eff-bar-cell { display: flex; align-items: center; gap: 0.5rem; }
        .eff-bar-fill {
          display: inline-block; height: 10px; border-radius: 3px;
          max-width: 120px; transition: width 0.3s;
        }
        .eff-val { font-weight: 700; font-size: 0.9rem; color: #000; }
        .eff-rank { font-size: 0.8rem; font-weight: 600; }
        /* Insight callout boxes */
        .insight-callout-box {
          display: flex; gap: 0.75rem; align-items: flex-start;
          padding: 1rem 1.25rem;
          border-radius: 6px;
          font-size: 0.92rem;
          margin-top: 1rem;
          line-height: 1.6;
        }
        .insight-callout-box.red { background: #fff5f5; border: 1px solid #fde2e4; color: #7a2020; }
        .insight-callout-box.teal { background: #f0faf8; border: 1px solid #d1e9e9; color: #1a4a44; }
        .box-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }
        /* Region grid */
        .region-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.75rem;
          margin: 1.25rem 0;
          align-items: end;
        }
        @media(max-width: 600px) { .region-grid { grid-template-columns: repeat(3, 1fr); } }
        .region-card {
          display: flex; flex-direction: column; align-items: center;
          padding: 0.75rem 0.5rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          text-align: center;
          position: relative;
        }
        .region-card.region-top { border-color: #1a7a6e; }
        .region-name { font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.3rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .region-share { font-size: 1.5rem; font-weight: 800; color: #000; }
        .region-bar-wrap { display: flex; align-items: flex-end; height: 60px; margin-top: 0.5rem; }
        .region-bar { width: 24px; border-radius: 4px 4px 0 0; transition: height 0.4s; }
        .region-badge {
          font-size: 9px; font-weight: 700; color: #1a7a6e;
          background: #d1e9e9; border-radius: 3px;
          padding: 1px 5px; margin-top: 0.3rem;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};

const StageTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #e9e9e8', borderRadius: 6, padding: '0.5rem 0.9rem', fontSize: 13 }}>
        <strong>{payload[0].payload.stage}</strong><br />
        <span style={{ color: '#787774' }}>Avg deal size: </span>
        <strong>${payload[0].value}M</strong>
      </div>
    );
  }
  return null;
};

const Dashboard2 = () => {
  const topDeals = [
    { company: 'SpaceX', amount: 1500, industry: 'Aerospace', country: 'USA', isAI: false },
    { company: "Byju's", amount: 1200, industry: 'Education', country: 'India', isAI: false },
    { company: 'OpenAI', amount: 1000, industry: 'AI', country: 'USA', isAI: true },
    { company: 'Anthropic', amount: 900, industry: 'AI', country: 'USA', isAI: true },
    { company: 'Revolut', amount: 800, industry: 'FinTech', country: 'UK', isAI: false },
  ];
  const aiVsNonAI = [
    { name: 'Non-AI Companies', value: 60, color: '#d1e9e9' },
    { name: 'AI Companies', value: 40, color: '#fde2e4' },
  ];
  const regionData = [
    { region: 'USA', total: 6.04, percent: 56, note: '1 country' },
    { region: 'India', total: 2.24, percent: 21, note: '1 country' },
    { region: 'Europe', total: 2.19, percent: 20, note: 'UK + France + Germany + Sweden' },
  ];
  const aiFintech = [
    { name: 'Pure AI', value: 2435 },
    { name: 'FinTech', value: 2425 },
  ];

  return (
    <div className="d2-wrapper">

      {/* ── INSIGHT 01: India vs USA Deal Size ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 01</div>
        <h4 className="insight-heading">India raises more per deal than the USA.</h4>
        <p className="insight-desc">
          A <strong>"deal"</strong> is when investors give money to a company. The <strong>average deal size</strong> is
          how much money each company typically receives. India had fewer companies in this dataset,
          but each one raised a massive amount.
        </p>
        <div className="deal-compare">
          <div className="deal-country-card">
            <div className="dc-flag">🇺🇸</div>
            <div className="dc-country">USA</div>
            <div className="dc-avg">$403M</div>
            <div className="dc-label">avg. deal size</div>
            <div className="dc-bar-wrap"><div className="dc-bar" style={{ width: `${(403 / 745) * 100}%`, background: '#d1e9e9' }}></div></div>
          </div>
          <div className="deal-vs">vs</div>
          <div className="deal-country-card winner">
            <div className="dc-flag">🇮🇳</div>
            <div className="dc-country">India</div>
            <div className="dc-avg">$745M</div>
            <div className="dc-label">avg. deal size</div>
            <div className="dc-bar-wrap"><div className="dc-bar" style={{ width: '100%', background: '#1a7a6e' }}></div></div>
            <div className="dc-badge">Nearly 2×</div>
          </div>
        </div>
        <div className="d2-company-note">
          <span className="note-label">India's 3 companies:</span>
          <span className="note-item">Byju's — $1.2B</span>
          <span className="note-sep">·</span>
          <span className="note-item">OYO — $660M</span>
          <span className="note-sep">·</span>
          <span className="note-item">Razorpay — $375M</span>
        </div>
      </div>

      {/* ── INSIGHT 02: AI vs Non-AI Funding ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 02</div>
        <h4 className="insight-heading">60% of all funding went to NON-AI companies.</h4>
        <p className="insight-desc">
          Despite all the headlines about AI, the <strong>majority of real investment money</strong> in 2024–25
          went to companies doing other things entirely — aerospace, education, fintech, and hospitality.
        </p>
        <div className="ai-split-layout">
          <div className="ai-split-chart">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={aiVsNonAI} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={44} paddingAngle={4}>
                  {aiVsNonAI.map((d, i) => <Cell key={i} fill={d.color} stroke="#fff" strokeWidth={2} />)}
                </Pie>
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="ai-split-deals">
            <div className="split-title">Top 5 Deals of 2024–25</div>
            {topDeals.map((d, i) => (
              <div key={d.company} className={`deal-row ${d.isAI ? 'deal-ai' : 'deal-nonai'}`}>
                <span className="deal-rank">#{i + 1}</span>
                <span className="deal-name">{d.company}</span>
                <span className="deal-tag">{d.industry}</span>
                <span className="deal-amount">${(d.amount / 1000).toFixed(1)}B</span>
              </div>
            ))}
          </div>
        </div>
        <div className="insight-callout-box teal" style={{ marginTop: '1rem' }}>
          <span className="box-icon"><Lightbulb size={16} strokeWidth={2} /></span>
          <span>2 of the top 3 biggest deals — SpaceX and Byju's — had <strong>nothing to do with AI</strong>.</span>
        </div>
      </div>

      {/* ── INSIGHT 03: Regional Dominance ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 03</div>
        <h4 className="insight-heading">One country raised more than four countries combined.</h4>
        <p className="insight-desc">
          The USA brought in <strong>56% of all funding</strong> — more than India, UK, France, Germany, and Sweden put together.
          But the real surprise? India alone beat all of Europe.
        </p>
        <div className="region-dominance">
          {regionData.map((r) => (
            <div key={r.region} className="rd-row">
              <div className="rd-name">{r.region} <span className="rd-note">({r.note})</span></div>
              <div className="rd-bar-cell">
                <div className="rd-bar" style={{ width: `${r.percent}%`, background: r.region === 'USA' ? '#37352f' : r.region === 'India' ? '#1a7a6e' : '#d1e9e9' }}></div>
              </div>
              <div className="rd-vals">
                <span className="rd-total">${r.total}B</span>
                <span className="rd-pct">{r.percent}%</span>
              </div>
            </div>
          ))}
        </div>
        <div className="insight-callout-box red">
          <span className="box-icon"><Trophy size={16} strokeWidth={2} /></span>
          <span>India ($2.24B) vs Europe ($2.19B) — <strong>India alone beat 4 countries combined</strong> by $50M.</span>
        </div>
      </div>

      {/* ── INSIGHT 04: Funding Stage Ladder ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 04</div>
        <h4 className="insight-heading">The later your funding stage, the more you raise.</h4>
        <p className="insight-desc">
          Startups raise money in <strong>rounds</strong> (called "Series"). Each round is bigger than the last because
          the company has proved itself more. <strong>Seed</strong> = just starting out. <strong>Series N</strong> = very late stage, proven business.
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={fundingDeals.stageFunding} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <XAxis dataKey="stage" tick={{ fontSize: 11, fill: '#787774' }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip content={<StageTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {fundingDeals.stageFunding.map((_, i) => (
                <Cell key={i} fill={i === fundingDeals.stageFunding.length - 1 ? '#1a7a6e' : '#d1e9e9'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="stage-ladder">
          {fundingDeals.stageFunding.map((s, i) => (
            <div key={s.stage} className={`stage-row ${i === fundingDeals.stageFunding.length - 1 ? 'stage-top' : ''}`}>
              <span className="stage-name">{s.stage}</span>
              <span className="stage-amount">${s.value}M</span>
              {i === 0 && <span className="stage-badge neutral">Starting Out</span>}
              {i === fundingDeals.stageFunding.length - 1 && <span className="stage-badge top">20× Seed</span>}
            </div>
          ))}
        </div>
        <div className="insight-callout-box teal">
          <span className="box-icon"><TrendingUp size={16} strokeWidth={2} /></span>
          <span>Surviving long enough to prove yourself is worth more than almost anything else. <strong>Series N is 20× bigger than Seed.</strong></span>
        </div>
      </div>

      {/* ── INSIGHT 05: FinTech vs AI ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 05</div>
        <h4 className="insight-heading">FinTech matched AI in funding — with zero media coverage.</h4>
        <p className="insight-desc">
          <strong>FinTech</strong> = financial technology companies (think payments, banking apps, lending platforms).
          They raised almost exactly the same total as pure AI companies across the entire global landscape.
          The media didn't notice.
        </p>
        <div className="fintech-ai-compare">
          <div className="fa-card ai-card">
            <div className="fa-label">Pure AI Companies</div>
            <div className="fa-amount">$2,435M</div>
            <div className="fa-bar-wrap"><div className="fa-bar" style={{ width: '100%', background: '#fde2e4' }}></div></div>
            <div className="fa-coverage fa-loud"><Volume2 size={14} strokeWidth={2} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />All the headlines</div>
          </div>
          <div className="fa-gap">
            <div className="fa-gap-val">$10M</div>
            <div className="fa-gap-label">difference</div>
          </div>
          <div className="fa-card ft-card">
            <div className="fa-label">FinTech Companies</div>
            <div className="fa-amount">$2,425M</div>
            <div className="fa-bar-wrap"><div className="fa-bar" style={{ width: `${(2425 / 2435) * 100}%`, background: '#d1e9e9' }}></div></div>
            <div className="fa-coverage fa-quiet"><VolumeX size={14} strokeWidth={2} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />No headlines</div>
          </div>
        </div>
        <div className="insight-callout-box red">
          <span className="box-icon"><Newspaper size={16} strokeWidth={2} /></span>
          <span>A $10M difference across billions in global funding. <strong>Nobody wrote a headline about FinTech. The data did not care.</strong></span>
        </div>
      </div>

      <style>{`
        .d2-wrapper { display: flex; flex-direction: column; gap: 0; }
        /* Deal compare */
        .deal-compare { display: flex; align-items: center; gap: 1.5rem; margin: 1rem 0; }
        .deal-country-card {
          flex: 1; border: 1px solid var(--border-color); border-radius: 8px;
          padding: 1.25rem; text-align: center;
        }
        .deal-country-card.winner { border-color: #1a7a6e; background: #f0faf8; }
        .dc-flag { font-size: 2rem; margin-bottom: 0.3rem; }
        .dc-country { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); }
        .dc-avg { font-size: 2rem; font-weight: 800; color: #000; margin: 0.25rem 0; }
        .dc-label { font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.75rem; }
        .dc-bar-wrap { height: 8px; background: var(--border-color); border-radius: 4px; overflow: hidden; }
        .dc-bar { height: 100%; border-radius: 4px; }
        .dc-badge { font-size: 0.75rem; font-weight: 700; color: #1a7a6e; margin-top: 0.5rem; }
        .deal-vs { font-size: 1.2rem; font-weight: 800; color: var(--text-secondary); flex-shrink: 0; }
        .d2-company-note {
          display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem;
          font-size: 0.85rem; color: var(--text-secondary);
          padding: 0.75rem 1rem; background: var(--bg-muted);
          border-radius: 6px; margin-top: 0.75rem;
        }
        .note-label { font-weight: 700; color: var(--text-main); }
        .note-item { font-weight: 600; color: #000; }
        .note-sep { color: var(--border-color); }
        /* AI split */
        .ai-split-layout { display: grid; grid-template-columns: 200px 1fr; gap: 1.5rem; align-items: center; margin: 1rem 0; }
        @media(max-width: 600px) { .ai-split-layout { grid-template-columns: 1fr; } }
        .split-title { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); margin-bottom: 0.5rem; }
        .deal-row {
          display: grid; grid-template-columns: 28px 1fr auto auto;
          gap: 0.5rem; align-items: center;
          padding: 0.45rem 0.6rem; border-radius: 4px; margin-bottom: 3px;
          font-size: 0.85rem;
        }
        .deal-row.deal-ai { background: #fff5f5; }
        .deal-row.deal-nonai { background: #f0faf8; }
        .deal-rank { font-size: 10px; font-weight: 700; color: var(--text-secondary); }
        .deal-name { font-weight: 700; color: #000; }
        .deal-tag { font-size: 10px; color: var(--text-secondary); background: var(--bg-muted); padding: 1px 5px; border-radius: 3px; }
        .deal-amount { font-weight: 800; color: #000; font-size: 0.9rem; }
        /* Region dominance */
        .region-dominance { display: flex; flex-direction: column; gap: 0.75rem; margin: 1rem 0; }
        .rd-row { display: grid; grid-template-columns: 200px 1fr 100px; gap: 1rem; align-items: center; }
        @media(max-width: 600px) { .rd-row { grid-template-columns: 1fr; } }
        .rd-name { font-size: 0.88rem; font-weight: 700; color: #000; }
        .rd-note { font-weight: 400; font-size: 0.78rem; color: var(--text-secondary); }
        .rd-bar-cell { height: 22px; background: var(--bg-muted); border-radius: 4px; overflow: hidden; }
        .rd-bar { height: 100%; border-radius: 4px; }
        .rd-vals { display: flex; flex-direction: column; align-items: flex-end; }
        .rd-total { font-weight: 800; font-size: 0.95rem; color: #000; }
        .rd-pct { font-size: 0.75rem; color: var(--text-secondary); }
        /* Stage ladder */
        .stage-ladder { margin: 1rem 0; border: 1px solid var(--border-color); border-radius: 6px; overflow: hidden; }
        .stage-row {
          display: flex; align-items: center; gap: 1rem;
          padding: 0.55rem 1rem; border-top: 1px solid var(--border-color);
          font-size: 0.88rem;
        }
        .stage-row:first-child { border-top: none; }
        .stage-row.stage-top { background: #f0faf8; }
        .stage-name { font-weight: 700; color: #000; min-width: 80px; }
        .stage-amount { font-weight: 800; color: #000; flex: 1; }
        .stage-badge { font-size: 9px; font-weight: 700; padding: 2px 6px; border-radius: 3px; text-transform: uppercase; }
        .stage-badge.neutral { background: var(--bg-muted); color: var(--text-secondary); }
        .stage-badge.top { background: #d1e9e9; color: #1a4a44; }
        /* FinTech vs AI */
        .fintech-ai-compare { display: flex; align-items: center; gap: 1rem; margin: 1rem 0; }
        .fa-card { flex: 1; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; }
        .fa-card.ai-card { border-color: #fde2e4; background: #fff5f5; }
        .fa-card.ft-card { border-color: #d1e9e9; background: #f0faf8; }
        .fa-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-secondary); margin-bottom: 0.3rem; }
        .fa-amount { font-size: 1.5rem; font-weight: 800; color: #000; margin-bottom: 0.5rem; }
        .fa-bar-wrap { height: 8px; background: var(--border-color); border-radius: 4px; overflow: hidden; margin-bottom: 0.6rem; }
        .fa-bar { height: 100%; border-radius: 4px; }
        .fa-coverage { font-size: 0.8rem; font-weight: 600; }
        .fa-loud { color: #c94a4a; }
        .fa-quiet { color: #1a7a6e; }
        .fa-gap { text-align: center; flex-shrink: 0; padding: 0 0.5rem; }
        .fa-gap-val { font-size: 1.1rem; font-weight: 800; color: #000; }
        .fa-gap-label { font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
        @media(max-width: 600px) { .fintech-ai-compare { flex-direction: column; } .deal-compare { flex-direction: column; } }
      `}</style>
    </div>
  );
};

const JobTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const val = payload[0].value;
    const ind = payload[0].payload.industry;
    return (
      <div style={{ background: '#fff', border: '1px solid #e9e9e8', borderRadius: 6, padding: '0.5rem 0.9rem', fontSize: 13 }}>
        <strong>{ind}</strong><br />
        <span style={{ color: val >= 0 ? '#1a7a6e' : '#c94a4a' }}>
          {val >= 0 ? '+' : ''}{val.toLocaleString()} jobs by 2030
        </span>
      </div>
    );
  }
  return null;
};

const Dashboard3 = () => {
  const salaryCompare = [
    { industry: 'IT', salary: 90942, status: 'growing', risk: 'Low Risk', growth: '+511,824' },
    { industry: 'Transportation', salary: 89451, status: 'declining', risk: 'High Risk', growth: '-444,302' },
  ];

  return (
    <div className="d3-wrapper">

      {/* ── INSIGHT 01: Job Growth/Loss by Industry ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 01</div>
        <h4 className="insight-heading">Who is growing and who is shrinking by 2030.</h4>
        <p className="insight-desc">
          These figures show the <strong>net change in jobs</strong> per industry between 2024 and 2030.
          A positive number means more people will be employed. A negative number means those roles are disappearing — mostly replaced by AI or automation.
        </p>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={jobMarketData.projections}
            layout="vertical"
            margin={{ top: 5, right: 80, left: 10, bottom: 5 }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="industry"
              type="category"
              tick={{ fontSize: 11, fill: '#37352f', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              width={110}
            />
            <Tooltip content={<JobTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
            <Bar dataKey="change" radius={[0, 4, 4, 0]}>
              {jobMarketData.projections.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.change >= 0 ? '#1a7a6e' : '#c94a4a'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="job-table">
          <div className="jt-header">
            <span>Industry</span>
            <span>Jobs Change by 2030</span>
            <span>Verdict</span>
          </div>
          {jobMarketData.projections.map((row) => {
            const isGrowing = row.change >= 0;
            return (
              <div key={row.industry} className={`jt-row ${isGrowing ? 'jt-grow' : 'jt-shrink'}`}>
                <span className="jt-industry">{row.industry}</span>
                <span className="jt-change" style={{ color: isGrowing ? '#1a7a6e' : '#c94a4a' }}>
                  {isGrowing ? '+' : ''}{row.change.toLocaleString()}
                </span>
                <span className="jt-verdict">{isGrowing ? '↑ Growing' : '↓ Shrinking'}</span>
              </div>
            );
          })}
        </div>

        <div className="insight-callout-box red">
          <span className="box-icon"><Car size={16} strokeWidth={2} /></span>
          <span>Transportation loses <strong>nearly half a million jobs</strong> — self-driving vehicles, automated delivery, AI logistics. Most people guessed Manufacturing would fall harder. The data disagreed.</span>
        </div>
      </div>

      {/* ── INSIGHT 02: IT Wins Everything ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 02</div>
        <h4 className="insight-heading">IT wins on every single measure.</h4>
        <p className="insight-desc">
          IT (Information Technology) is the only industry that scores #1 across all three key metrics at once.
          It is also the industry <em>building the very tools that are automating everything else</em> — which is why it cannot automate itself away.
        </p>
        <div className="it-triple">
          <div className="it-card top">
            <div className="it-icon"><Briefcase size={22} strokeWidth={1.5} color="#1a7a6e" /></div>
            <div className="it-metric">+511,824</div>
            <div className="it-label">New Jobs</div>
            <div className="it-note">#1 highest job growth across all 8 industries</div>
          </div>
          <div className="it-card top">
            <div className="it-icon"><DollarSign size={22} strokeWidth={1.5} color="#1a7a6e" /></div>
            <div className="it-metric">$90,942</div>
            <div className="it-label">Avg. Salary</div>
            <div className="it-note">#1 highest average salary in the dataset</div>
          </div>
          <div className="it-card top">
            <div className="it-icon"><Cpu size={22} strokeWidth={1.5} color="#1a7a6e" /></div>
            <div className="it-metric">Strongest</div>
            <div className="it-label">Future Demand</div>
            <div className="it-note">Every industry needs IT to build its own automation tools</div>
          </div>
        </div>
        <div className="insight-callout-box teal">
          <span className="box-icon"><Trophy size={16} strokeWidth={2} /></span>
          <span>IT is not just surviving AI — it is <strong>powering it</strong>. The safest place to be is the one building the machines.</span>
        </div>
      </div>

      {/* ── INSIGHT 03: Two Numbers That Matter ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 03</div>
        <h4 className="insight-heading">Two numbers that matter right now.</h4>
        <p className="insight-desc">
          <strong>Automation risk</strong> = how likely it is that an AI or machine could do a job instead of a human.
          A risk above <strong>70%</strong> means that job is very likely to be automated. These numbers show the scale of both the problem and the opportunity.
        </p>
        <div className="two-numbers">
          <div className="tn-card danger">
            <div className="tn-num">4,437</div>
            <div className="tn-title">Jobs at Risk — Right Now</div>
            <div className="tn-desc">Automation risk above 70% <em>and</em> already declining today. Not a future problem. A right now problem.</div>
            <div className="tn-tag red-tag">⚠️ High Risk + Already Shrinking</div>
          </div>
          <div className="tn-card safe">
            <div className="tn-num">4,520</div>
            <div className="tn-title">Jobs That Are Safe</div>
            <div className="tn-desc">Low automation risk <em>and</em> growing. Roles that need real human connection, physical unpredictability, or creative thinking.</div>
            <div className="tn-tag green-tag">✓ Low Risk + Growing</div>
          </div>
        </div>
        <div className="insight-callout-box teal">
          <span className="box-icon"><ShieldCheck size={16} strokeWidth={2} /></span>
          <span>The safe jobs share one thing: <strong>AI cannot replace them</strong>. Human judgment, physical presence, creativity. Build one of those skills.</span>
        </div>
      </div>

      {/* ── INSIGHT 04: Salary ≠ Safety ── */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 04</div>
        <h4 className="insight-heading">Your salary tells you nothing about your job security.</h4>
        <p className="insight-desc">
          Most people assume a high salary means a safe job. This data destroys that assumption.
          IT and Transportation earn almost <em>exactly</em> the same annual salary — but their futures could not be more different.
        </p>
        <div className="salary-compare">
          <div className="sc-row">
            <div className="sc-industry">
              <span className="sc-name">IT</span>
              <span className="sc-badge safe-badge">Safe ↑</span>
            </div>
            <div className="sc-bar-cell">
              <div className="sc-bar" style={{ width: '100%', background: '#1a7a6e' }}></div>
            </div>
            <div className="sc-salary">$90,942 / yr</div>
          </div>
          <div className="sc-gap">
            <div className="sc-gap-line"></div>
            <div className="sc-gap-label">$1,491 difference per year</div>
            <div className="sc-gap-line"></div>
          </div>
          <div className="sc-row">
            <div className="sc-industry">
              <span className="sc-name">Transportation</span>
              <span className="sc-badge danger-badge">At Risk ↓</span>
            </div>
            <div className="sc-bar-cell">
              <div className="sc-bar" style={{ width: `${(89451 / 90942) * 100}%`, background: '#fde2e4' }}></div>
            </div>
            <div className="sc-salary">$89,451 / yr</div>
          </div>
        </div>
        <div className="insight-callout-box red">
          <span className="box-icon"><Wallet size={16} strokeWidth={2} /></span>
          <span><strong>$1,491 per year separates the safest and most endangered industry.</strong> High pay does not mean safe career. Look at job growth, not just the paycheck.</span>
        </div>
      </div>

      <style>{`
        .d3-wrapper { display: flex; flex-direction: column; gap: 0; }
        /* Job table */
        .job-table {
          margin: 1.25rem 0;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          overflow: hidden;
          font-size: 0.88rem;
        }
        .jt-header {
          display: grid; grid-template-columns: 1fr 1.5fr 100px;
          padding: 0.5rem 1rem;
          background: var(--bg-muted);
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--text-secondary);
        }
        .jt-row {
          display: grid; grid-template-columns: 1fr 1.5fr 100px;
          padding: 0.55rem 1rem;
          border-top: 1px solid var(--border-color);
          align-items: center;
        }
        .jt-row.jt-grow { background: #f0faf8; }
        .jt-row.jt-shrink { background: #fff5f5; }
        .jt-industry { font-weight: 700; color: #000; }
        .jt-change { font-weight: 800; font-size: 0.95rem; }
        .jt-verdict { font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); }
        /* IT triple */
        .it-triple {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1rem; margin: 1rem 0;
        }
        @media(max-width: 600px) { .it-triple { grid-template-columns: 1fr; } }
        .it-card {
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1.25rem;
          text-align: center;
        }
        .it-card.top { border-color: #1a7a6e; background: #f0faf8; }
        .it-icon { font-size: 1.5rem; margin-bottom: 0.4rem; }
        .it-metric { font-size: 1.4rem; font-weight: 800; color: #000; margin-bottom: 0.15rem; }
        .it-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #1a7a6e; margin-bottom: 0.4rem; }
        .it-note { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; }
        /* Two numbers */
        .two-numbers { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0; }
        @media(max-width: 600px) { .two-numbers { grid-template-columns: 1fr; } }
        .tn-card {
          border: 1px solid var(--border-color);
          border-radius: 8px; padding: 1.5rem;
        }
        .tn-card.danger { border-color: #fde2e4; background: #fff5f5; }
        .tn-card.safe { border-color: #d1e9e9; background: #f0faf8; }
        .tn-num { font-size: 2.5rem; font-weight: 800; color: #000; margin-bottom: 0.2rem; }
        .tn-title { font-size: 0.85rem; font-weight: 700; color: #000; margin-bottom: 0.5rem; }
        .tn-desc { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.75rem; }
        .tn-tag { font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 4px; display: inline-block; }
        .red-tag { background: #fde2e4; color: #7a2020; }
        .green-tag { background: #d1e9e9; color: #1a4a44; }
        /* Salary compare */
        .salary-compare { margin: 1.25rem 0; display: flex; flex-direction: column; gap: 0.5rem; }
        .sc-row { display: grid; grid-template-columns: 180px 1fr 130px; gap: 1rem; align-items: center; }
        @media(max-width: 600px) { .sc-row { grid-template-columns: 1fr; } }
        .sc-industry { display: flex; align-items: center; gap: 0.5rem; }
        .sc-name { font-weight: 700; color: #000; font-size: 0.95rem; }
        .sc-badge { font-size: 0.7rem; font-weight: 700; padding: 2px 6px; border-radius: 3px; }
        .safe-badge { background: #d1e9e9; color: #1a4a44; }
        .danger-badge { background: #fde2e4; color: #7a2020; }
        .sc-bar-cell { height: 20px; background: var(--bg-muted); border-radius: 4px; overflow: hidden; }
        .sc-bar { height: 100%; border-radius: 4px; }
        .sc-salary { font-weight: 800; font-size: 0.95rem; color: #000; text-align: right; }
        .sc-gap { display: flex; align-items: center; gap: 0.75rem; padding: 0 0; }
        .sc-gap-line { flex: 1; height: 1px; border-top: 1px dashed var(--border-color); }
        .sc-gap-label { font-size: 0.78rem; font-weight: 700; color: var(--text-secondary); white-space: nowrap; }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <div className="report-container">
      <ReportHeader />
      <ReportTags />

      <section>
        <h2>The Project Overview</h2>
        <p>
          Everyone has an opinion about AI. This project skips the opinions and goes straight to the data —
          <strong> 500 startups, 25 real funding deals, and 30,000 jobs</strong> analyzed across 8 industries worldwide.
          What we found challenges almost everything people assume about AI, money, and careers.
        </p>
      </section>

      <section>
        <h2>Exploratory Data Analysis</h2>

        <CollapsibleDashboard
          title="Dashboard 1 — The Startup World"
          subtitle="500 startups · 8 industries · 5 global regions"
          badge="3 Insights"
          defaultOpen={true}
        >
          <div className="dash1-meta">
            <span className="meta-chip"><BarChart2 size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />500 Startups</span>
            <span className="meta-chip"><Layers size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />8 Industries</span>
            <span className="meta-chip"><Globe size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />5 Global Regions</span>
            <span className="meta-chip muted">Cleaned in Excel · Visualized in Power BI</span>
          </div>
          <Dashboard1 />
          <style>{`
              .dash1-meta { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
              .meta-chip {
                font-size: 0.8rem; font-weight: 600;
                padding: 0.25rem 0.7rem;
                background: var(--bg-muted);
                border: 1px solid var(--border-color);
                border-radius: 20px;
                color: var(--text-main);
                display: inline-flex; align-items: center;
              }
              .meta-chip.muted { color: var(--text-secondary); font-weight: 400; }
            `}</style>
        </CollapsibleDashboard>

        <CollapsibleDashboard
          title="Dashboard 2 — Real Funding Deals (2024–25)"
          subtitle="25 real companies · $10.7B raised · 7 countries"
          badge="5 Insights"
          defaultOpen={true}
        >
          <div className="dash1-meta">
            <span className="meta-chip"><Briefcase size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />25 Real Companies</span>
            <span className="meta-chip"><DollarSign size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />$10.7B Raised</span>
            <span className="meta-chip"><Globe size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />7 Countries</span>
            <span className="meta-chip muted">SpaceX · OpenAI · Revolut · Anthropic · and more</span>
          </div>
          <Dashboard2 />
        </CollapsibleDashboard>

        <CollapsibleDashboard
          title="Dashboard 3 — Jobs in the Age of AI (2024–2030)"
          subtitle="30,000 job titles · 8 industries · projections to 2030"
          badge="4 Insights"
          defaultOpen={true}
        >
          <div className="dash1-meta">
            <span className="meta-chip"><BarChart3 size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />30,000 Job Titles</span>
            <span className="meta-chip"><Layers size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />8 Industries</span>
            <span className="meta-chip"><TrendingUp size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />Projections to 2030</span>
            <span className="meta-chip muted">Data cleaned in Excel · Visualized in Power BI</span>
          </div>
          <Dashboard3 />
        </CollapsibleDashboard>
      </section>

      <section>
        <h2>The Surprising Findings</h2>
        <p style={{ marginBottom: '1.5rem', marginTop: '-0.5rem' }}>Things the data revealed that most people would not expect:</p>
        <div className="findings-grid">
          {[
            { icon: <AlertTriangle size={15} strokeWidth={2} />, color: '#c94a4a', bg: '#fff5f5', border: '#fde2e4', text: 'AI has the worst return on investment of all startup industries — 7.9x vs E-Commerce at 10x' },
            { icon: <Layers size={15} strokeWidth={2} />, color: '#37352f', bg: '#f7f6f3', border: '#e9e9e8', text: '76% of AI startups never exit — they stay private forever' },
            { icon: <Globe size={15} strokeWidth={2} />, color: '#1a7a6e', bg: '#f0faf8', border: '#d1e9e9', text: 'India beats the USA on average deal size per startup' },
            { icon: <Car size={15} strokeWidth={2} />, color: '#c94a4a', bg: '#fff5f5', border: '#fde2e4', text: 'Transportation loses more jobs than Manufacturing by 2030 — almost nobody sees this coming' },
            { icon: <Newspaper size={15} strokeWidth={2} />, color: '#1a7a6e', bg: '#f0faf8', border: '#d1e9e9', text: 'FinTech matched AI in total funding within $10M — with zero headlines' },
            { icon: <TrendingUp size={15} strokeWidth={2} />, color: '#1a7a6e', bg: '#f0faf8', border: '#d1e9e9', text: 'All 5 global startup regions are within 2% of each other — geography barely matters anymore' },
            { icon: <Wallet size={15} strokeWidth={2} />, color: '#c94a4a', bg: '#fff5f5', border: '#fde2e4', text: 'Only $1,491 salary gap separates the safest and most endangered industry' },
          ].map((item, i) => (
            <div key={i} className="finding-card" style={{ background: item.bg, borderColor: item.border }}>
              <span className="finding-icon" style={{ color: item.color }}>{item.icon}</span>
              <p className="finding-text">{item.text}</p>
            </div>
          ))}
        </div>
        <style>{`
          .findings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 2rem; }
          @media(max-width: 600px) { .findings-grid { grid-template-columns: 1fr; } }
          .finding-card { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1rem 1.1rem; border: 1px solid; border-radius: 8px; }
          .finding-icon { flex-shrink: 0; margin-top: 3px; display: flex; align-items: center; }
          .finding-text { font-size: 0.88rem; color: var(--text-main); line-height: 1.65; margin: 0; opacity: 1; }
        `}</style>
      </section>

      <section>
        <h2>Recommendations</h2>
        <div className="rec-grid">
          <div className="rec-card">
            <div className="rec-card-header">
              <span className="rec-icon-wrap"><GraduationCap size={18} strokeWidth={1.75} /></span>
              <div className="rec-role">For Students &amp; Job Seekers</div>
            </div>
            <ul className="rec-list">
              <li><CheckCircle size={13} strokeWidth={2} color="#1a7a6e" style={{ flexShrink: 0, marginTop: 3 }} /><span>Go toward <strong>IT or Healthcare</strong> — most new jobs, highest pay, lowest risk of disappearing</span></li>
              <li><AlertTriangle size={13} strokeWidth={2} color="#c94a4a" style={{ flexShrink: 0, marginTop: 3 }} /><span>If you are in a repetitive job — data entry, routine analysis — start building new skills now. The 4,437 danger zone jobs are already shrinking</span></li>
              <li><CheckCircle size={13} strokeWidth={2} color="#1a7a6e" style={{ flexShrink: 0, marginTop: 3 }} /><span>Safe careers share one thing: real human judgment, creativity, or physical presence. Build toward that</span></li>
              <li><CheckCircle size={13} strokeWidth={2} color="#1a7a6e" style={{ flexShrink: 0, marginTop: 3 }} /><span><strong>IT + Healthcare</strong> = the best career combination heading into 2030</span></li>
            </ul>
          </div>
          <div className="rec-card">
            <div className="rec-card-header">
              <span className="rec-icon-wrap"><Building2 size={18} strokeWidth={1.75} /></span>
              <div className="rec-role">For Businesses (Small to Medium)</div>
            </div>
            <ul className="rec-list">
              <li><Lightbulb size={13} strokeWidth={2} color="#1a7a6e" style={{ flexShrink: 0, marginTop: 3 }} /><span>Do not chase AI just because it is trending — <strong>E-Commerce and HealthTech</strong> quietly deliver better returns</span></li>
              <li><CheckCircle size={13} strokeWidth={2} color="#1a7a6e" style={{ flexShrink: 0, marginTop: 3 }} /><span>If you are in <strong>FinTech</strong>, you have the highest chance of getting acquired — a strong exit strategy here</span></li>
              <li><AlertTriangle size={13} strokeWidth={2} color="#c94a4a" style={{ flexShrink: 0, marginTop: 3 }} /><span>Transportation and Education businesses need to rethink their models now, not later</span></li>
              <li><Lightbulb size={13} strokeWidth={2} color="#1a7a6e" style={{ flexShrink: 0, marginTop: 3 }} /><span>The salary gap is tiny — retain talent with career growth, skill building, and purpose. Not just pay</span></li>
            </ul>
          </div>
        </div>
        <style>{`
          .rec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 2rem; }
          @media(max-width: 700px) { .rec-grid { grid-template-columns: 1fr; } }
          .rec-card { border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; background: #fff; }
          .rec-card-header { display: flex; gap: 0.75rem; align-items: center; margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); }
          .rec-icon-wrap { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; flex-shrink: 0; background: var(--bg-muted); border: 1px solid var(--border-color); border-radius: 8px; color: #000; }
          .rec-role { font-size: 0.82rem; font-weight: 700; color: #000; text-transform: uppercase; letter-spacing: 0.07em; line-height: 1.4; }
          .rec-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.85rem; }
          .rec-list li { display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.88rem; color: var(--text-main); line-height: 1.65; margin: 0; }
        `}</style>
      </section>

      <section>
        <h2>Tools Used</h2>
        <div className="tools-row">
          <div className="tool-card">
            <div className="tool-header"><span className="tool-icon-wrap"><FileSpreadsheet size={18} strokeWidth={1.75} /></span><span className="tool-name">Microsoft Excel</span></div>
            <p className="tool-desc">Used for all data cleaning — removing duplicates, standardizing formats, handling missing values, and structuring raw datasets before analysis.</p>
          </div>
          <div className="tool-card">
            <div className="tool-header"><span className="tool-icon-wrap"><BarChart2 size={18} strokeWidth={1.75} /></span><span className="tool-name">Microsoft Power BI</span></div>
            <p className="tool-desc">All three dashboards and interactive visuals were built in Power BI. Charts, filters, and cross-report insights were designed for clear data storytelling.</p>
          </div>
          <div className="tool-card">
            <div className="tool-header"><span className="tool-icon-wrap"><Code2 size={18} strokeWidth={1.75} /></span><span className="tool-name">DAX</span></div>
            <p className="tool-desc">Data Analysis Expressions (DAX) was used inside Power BI for all custom calculations — averages, net job change projections, efficiency ratios, and more.</p>
          </div>
        </div>
        <style>{`
          .tools-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; }
          @media(max-width: 700px) { .tools-row { grid-template-columns: 1fr; } }
          .tool-card { border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; background: #fff; }
          .tool-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.75rem; }
          .tool-icon-wrap { width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; background: var(--bg-muted); border: 1px solid var(--border-color); border-radius: 6px; flex-shrink: 0; color: #000; }
          .tool-name { font-size: 0.88rem; font-weight: 700; color: #000; }
          .tool-desc { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; margin: 0; opacity: 1; }
        `}</style>
      </section>

      <footer style={{ marginTop: '6rem', padding: '2.5rem 0', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span>THE AI ECONOMY — by <strong style={{ color: '#000' }}>Ujjaval Bhardwaj</strong></span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href="https://www.linkedin.com/in/ujjaval-bhardwaj/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                color: '#0a66c2', fontWeight: 600, fontSize: '0.83rem',
                textDecoration: 'none',
              }}
            >
              <Linkedin size={14} strokeWidth={2} />
              LinkedIn Profile
            </a>
            <span>Excel · Power BI · DAX</span>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;

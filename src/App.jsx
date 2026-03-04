import React, { useState, useCallback, memo, useEffect } from 'react';

import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell,
} from 'recharts';

import { startupData, fundingDeals, jobMarketData } from './data/reportData';

import {
  ChevronDown, ChevronUp,
  Lightbulb, Globe, TrendingUp, AlertTriangle,
  Award, BarChart2, Layers, DollarSign,
  Volume2, VolumeX, Newspaper, Car,
  Trophy, Cpu,
  Wallet, BarChart3,
  GraduationCap, Building2, CheckCircle,
  FileSpreadsheet, Code2, Linkedin, Briefcase,
  ShieldCheck,
} from 'lucide-react';

// ── RESPONSIVE CHART HEIGHT HOOK ──────────────────────────────────────────────
const useWindowWidth = () => {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
};
// Scale a desktop chart height down for mobile — keeps charts readable
const useChartHeight = (desktopH) => {
  const w = useWindowWidth();
  if (w <= 400) return Math.round(desktopH * 0.68);
  if (w <= 600) return Math.round(desktopH * 0.80);
  return desktopH;
};

// ── REPORT HEADER ──────────────────────────────────────────────────────────────
const ReportHeader = memo(() => (
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
  </header>
));

// ── COLLAPSIBLE DASHBOARD SECTION ──────────────────────────────────────────────
const CollapsibleDashboard = memo(({ title, subtitle, defaultOpen = false, badge, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = useCallback(() => setOpen(o => !o), []);
  return (
    <div className="collapsible-section">
      <button
        className={`collapsible-header ${open ? 'collapsible-open' : ''}`}
        onClick={toggle}
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
    </div>
  );
});

// ── CUSTOM TOOLTIPS ────────────────────────────────────────────────────────────
const TooltipBox = ({ children }) => (
  <div style={{ background: '#fff', border: '1px solid #e9e9e8', borderRadius: 6, padding: '0.5rem 0.9rem', fontSize: 13 }}>
    {children}
  </div>
);

const EfficiencyTooltip = memo(({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const val = payload[0].value;
  const ind = payload[0].payload.industry;
  return (
    <TooltipBox>
      <strong>{ind}</strong><br />
      <span style={{ color: '#787774' }}>$1 invested → </span>
      <strong style={{ color: ind === 'AI' ? '#c94a4a' : '#1a7a6e' }}>${val} value</strong>
    </TooltipBox>
  );
});

const ExitTooltip = memo(({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <TooltipBox>
      <strong>{payload[0].name}</strong>: {payload[0].value}%
    </TooltipBox>
  );
});

const StageTooltip = memo(({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <TooltipBox>
      <strong>{payload[0].payload.stage}</strong><br />
      <span style={{ color: '#787774' }}>Avg deal size: </span>
      <strong>${payload[0].value}M</strong>
    </TooltipBox>
  );
});

const JobTooltip = memo(({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const val = payload[0].value;
  const ind = payload[0].payload.industry;
  return (
    <TooltipBox>
      <strong>{ind}</strong><br />
      <span style={{ color: val >= 0 ? '#1a7a6e' : '#c94a4a' }}>
        {val >= 0 ? '+' : ''}{val.toLocaleString()} jobs by 2030
      </span>
    </TooltipBox>
  );
});

// ── DASHBOARD 1 ────────────────────────────────────────────────────────────────
const exitColors = ['#37352f', '#d1e9e9', '#fde2e4'];
const efficiencyColors = startupData.efficiency.map(d =>
  d.industry === 'AI' ? '#fde2e4' : d.industry === 'E-Commerce' ? '#1a7a6e' : '#d1e9e9'
);

const Dashboard1 = memo(function Dashboard1() {
  const exitH = useChartHeight(200);
  const effH = useChartHeight(240);
  return (
    <div className="d1-wrapper">
      {/* INSIGHT 1: Exit Types */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 01</div>
        <h4 className="insight-heading">Most startups never exit — and that is completely normal.</h4>
        <p className="insight-desc">
          An <strong>"exit"</strong> means a startup either goes public (IPO) or gets bought by a bigger company (Acquisition).
          Most startups do neither — they just keep building privately. That is not failure; it is the norm.
        </p>

        <div className="d1-exit-layout">
          <div className="exit-chart">
            <ResponsiveContainer width="100%" height={exitH}>
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
                <div className="callout-note">Especially AI &amp; Gaming startups — no IPO, no acquisition, just building.</div>
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

      {/* INSIGHT 2: Efficiency per $1 */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 02</div>
        <h4 className="insight-heading">The most efficient industry is NOT AI.</h4>
        <p className="insight-desc">
          <strong>Efficiency</strong> here means: for every $1 invested into a startup, how much company value does it create?
          A higher number = better return. E-Commerce turns $1 into $10 of value. AI turns $1 into just $7.90.
        </p>

        <ResponsiveContainer width="100%" height={effH}>
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

      {/* INSIGHT 3: Regional Funding Equality */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 03</div>
        <h4 className="insight-heading">Startup money is genuinely global now.</h4>
        <p className="insight-desc">
          All 5 global regions are within <strong>2% of each other</strong> in total startup funding.
          The idea that Silicon Valley (North America) controls all the money? The data says otherwise.
        </p>

        <div className="region-grid">
          {startupData.fundingRegions.map((r) => {
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
    </div>
  );
});

// ── DASHBOARD 2 ────────────────────────────────────────────────────────────────
const topDeals = [
  { company: 'SpaceX', amount: 1500, industry: 'Aerospace', isAI: false },
  { company: "Byju's", amount: 1200, industry: 'Education', isAI: false },
  { company: 'OpenAI', amount: 1000, industry: 'AI', isAI: true },
  { company: 'Anthropic', amount: 900, industry: 'AI', isAI: true },
  { company: 'Revolut', amount: 800, industry: 'FinTech', isAI: false },
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

const Dashboard2 = memo(function Dashboard2() {
  const pieH = useChartHeight(180);
  const stageH = useChartHeight(220);
  return (
    <div className="d2-wrapper">
      {/* INSIGHT 01: India vs USA Deal Size */}
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

      {/* INSIGHT 02: AI vs Non-AI Funding */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 02</div>
        <h4 className="insight-heading">60% of all funding went to NON-AI companies.</h4>
        <p className="insight-desc">
          Despite all the headlines about AI, the <strong>majority of real investment money</strong> in 2024–25
          went to companies doing other things entirely — aerospace, education, fintech, and hospitality.
        </p>
        <div className="ai-split-layout">
          <div className="ai-split-chart">
            <ResponsiveContainer width="100%" height={pieH}>
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

      {/* INSIGHT 03: Regional Dominance */}
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

      {/* INSIGHT 04: Funding Stage Ladder */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 04</div>
        <h4 className="insight-heading">The later your funding stage, the more you raise.</h4>
        <p className="insight-desc">
          Startups raise money in <strong>rounds</strong> (called "Series"). Each round is bigger than the last because
          the company has proved itself more. <strong>Seed</strong> = just starting out. <strong>Series N</strong> = very late stage, proven business.
        </p>
        <ResponsiveContainer width="100%" height={stageH}>
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

      {/* INSIGHT 05: FinTech vs AI */}
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
    </div>
  );
});

// ── DASHBOARD 3 ────────────────────────────────────────────────────────────────
const Dashboard3 = memo(function Dashboard3() {
  const jobH = useChartHeight(320);
  const w = useWindowWidth();
  return (
    <div className="d3-wrapper">
      {/* INSIGHT 01: Job Growth/Loss by Industry */}
      <div className="insight-block">
        <div className="insight-label">INSIGHT 01</div>
        <h4 className="insight-heading">Who is growing and who is shrinking by 2030.</h4>
        <p className="insight-desc">
          These figures show the <strong>net change in jobs</strong> per industry between 2024 and 2030.
          A positive number means more people will be employed. A negative number means those roles are disappearing — mostly replaced by AI or automation.
        </p>

        <ResponsiveContainer width="100%" height={jobH}>
          <BarChart
            data={jobMarketData.projections}
            layout="vertical"
            margin={{ top: 5, right: w <= 600 ? 50 : 80, left: 0, bottom: 5 }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="industry"
              type="category"
              tick={{ fontSize: w <= 400 ? 9 : 11, fill: '#37352f', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              width={w <= 400 ? 80 : 110}
            />
            <Tooltip content={<JobTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
            <Bar dataKey="change" radius={[0, 4, 4, 0]}>
              {jobMarketData.projections.map((entry, i) => (
                <Cell key={i} fill={entry.change >= 0 ? '#1a7a6e' : '#c94a4a'} />
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

      {/* INSIGHT 02: IT Wins Everything */}
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

      {/* INSIGHT 03: Two Numbers That Matter */}
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

      {/* INSIGHT 04: Salary ≠ Safety */}
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
    </div>
  );
});

// ── MAIN APP ───────────────────────────────────────────────────────────────────
const App = () => {
  return (
    <div className="report-container">
      <ReportHeader />

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
    </div>
  );
};

export default App;

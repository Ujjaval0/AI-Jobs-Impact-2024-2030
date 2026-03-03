# The AI Economy — Data Report

**Author:** Ujjaval Bhardwaj &nbsp;|&nbsp; [LinkedIn](https://www.linkedin.com/in/ujjaval-bhardwaj/)  
**Coverage:** 2024 – 2030 &nbsp;|&nbsp; **Tools:** Excel · Power BI · DAX · React · Recharts

---

## Overview

A data-driven report exploring how artificial intelligence is reshaping startups, global funding, and the job market. Built on three datasets: 500 startups, 25 real funding deals totaling $10.7B, and 30,000 job titles across 8 industries and 5 global regions.

---

## Key Findings

**On Startups (Dashboard 1)**

- AI has the lowest return on investment of all industries — $7.90 value per $1 invested, compared to E-Commerce at $10.00. The most talked-about sector is the least efficient.
- 76% of startups never exit through an IPO or acquisition. This is not failure — it is the norm across every industry, including AI and Gaming.
- All 5 global regions (North America, Europe, Asia, South America, Africa) hold within 2% of each other in total startup funding share. Geography has stopped being a barrier to startup capital.

**On Funding Deals (Dashboard 2)**

- India's average deal size ($745M) is nearly double that of the USA ($403M), driven by large individual rounds from Byju's, OYO, and Razorpay.
- 60% of all 2024–25 funding went to non-AI companies. The two largest individual deals — SpaceX ($1.5B) and Byju's ($1.2B) — had nothing to do with AI.
- FinTech raised $2,425M globally — just $10M less than pure AI companies — with virtually no media attention.

**On Jobs (Dashboard 3)**

- IT gains +511,824 jobs by 2030 and holds the highest average salary ($90,942/yr). It is the only industry that ranks first across job growth, salary, and future demand simultaneously.
- Transportation loses approximately 444,000 jobs — more than Manufacturing — driven by autonomous logistics and AI-powered delivery systems. Most forecasts underestimate this.
- 4,437 job titles are already shrinking today with automation risk above 70%. This is not a future trend; it is happening now.
- The salary gap between the safest industry (IT, $90,942) and the most at-risk (Transportation, $89,451) is $1,491 per year. Pay alone is a poor signal of career stability.

---

## Recommendations

**For job seekers and students:** IT and Healthcare offer the strongest combination of growth, pay, and resilience to automation. Safe roles consistently require human judgment, physical presence, or creative problem-solving — skills that are worth developing regardless of industry.

**For businesses:** Chasing AI for its trend value is not supported by the ROI data. E-Commerce and HealthTech deliver stronger returns. Businesses in Transportation and Education should be actively rethinking their operating models.

---

## Running Locally

```bash
git clone https://github.com/Ujjaval0/AI-Jobs-Impact-2024-2030.git
cd AI-Jobs-Impact-2024-2030
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── App.jsx            # All dashboards and report content
├── index.css          # Global styles and design tokens
├── main.jsx           # React entry point
└── data/
    └── reportData.js  # Structured data for all three dashboards
```

---

*Data cleaned in Excel. Dashboards built in Power BI with DAX. Web report built with React and Recharts.*

export const startupData = {
    exits: [
        { name: 'Private', value: 76 },
        { name: 'Acquired', value: 33, industry: 'FinTech' },
        { name: 'IPO', value: 12, industry: 'HealthTech' }
    ],
    efficiency: [
        { industry: 'E-Commerce', value: 10.0 },
        { industry: 'HealthTech', value: 9.2 },
        { industry: 'Cybersecurity', value: 9.2 },
        { industry: 'Gaming', value: 9.2 },
        { industry: 'IoT', value: 9.1 },
        { industry: 'EdTech', value: 8.8 },
        { industry: 'FinTech', value: 8.5 },
        { industry: 'AI', value: 7.9 }
    ],
    fundingRegions: [
        { region: 'Asia', share: 20 },
        { region: 'Australia', share: 19 },
        { region: 'Europe', share: 21 },
        { region: 'North America', share: 21 },
        { region: 'South America', share: 19 }
    ]
};

export const fundingDeals = {
    avgDealSize: [
        { country: 'USA', value: 403 },
        { country: 'India', value: 745 }
    ],
    topDeals: [
        { company: 'SpaceX', amount: 1.5, industry: 'Aerospace' },
        { company: "Byju's", amount: 1.2, industry: 'Education' },
        { company: 'OpenAI', amount: 1.0, industry: 'AI' }
    ],
    regionalFunding: [
        { region: 'USA', value: 6.04, percent: 56 },
        { region: 'India', value: 2.24, percent: 21 },
        { region: 'Europe', value: 2.19, percent: 20 }
    ],
    stageFunding: [
        { stage: 'Seed', value: 75 },
        { stage: 'Series C', value: 314 },
        { stage: 'Series E', value: 900 },
        { stage: 'Series N', value: 1500 }
    ],
    aiVsFintech: [
        { name: 'AI', value: 2435 },
        { name: 'FinTech', value: 2425 }
    ]
};

export const jobMarketData = {
    projections: [
        { industry: 'IT', change: 511824, salary: 90942 },
        { industry: 'Healthcare', change: 403323, salary: 85000 },
        { industry: 'Entertainment', change: 386550, salary: 75000 },
        { industry: 'Retail', change: 221177, salary: 45000 },
        { industry: 'Finance', change: 39182, salary: 88000 },
        { industry: 'Manufacturing', change: 12474, salary: 65000 },
        { industry: 'Education', change: -92910, salary: 55000 },
        { industry: 'Transportation', change: -444302, salary: 89451 }
    ],
    riskStats: [
        { label: 'High Risk (>70%)', count: 4437, status: 'Declining' },
        { label: 'Low Risk', count: 4520, status: 'Growing' }
    ]
};

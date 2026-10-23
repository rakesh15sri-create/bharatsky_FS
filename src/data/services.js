// Single source of truth for our services: used by Home, Services, Contact and the footer.
// title = [main words, faded words]

export const SERVICES = [
  {
    id: 'banking',
    name: 'Personal Banking',
    short: 'Introductions To UAE Banks For Current, Savings And Salary Accounts.',
    title: ['Open The Right Account', 'With The Right Bank.'],
    lead: 'New to the UAE, changing employer or simply looking for a better bank? We help you understand the options and introduce you to a bank that fits your needs.',
    tags: ['Residents', 'New arrivals', 'Salaried professionals'],
    listTitle: 'We can introduce you for',
    list: ['Current and salary-transfer accounts', 'Savings and fixed-deposit accounts', 'Premium and priority banking relationships', 'Multi-currency and international banking needs', 'Guidance on the documents a bank will usually ask for'],
  },
  {
    id: 'finance',
    name: 'Personal & Home Finance',
    short: 'Personal Loans, Credit Cards And Mortgages Through Regulated Lenders.',
    title: ['Financing Through', 'Regulated Lenders.'],
    lead: 'We help you understand the types of financing available and introduce you to regulated banks and finance companies, so you can compare terms before you apply.',
    tags: ['Personal loans', 'Credit cards', 'Mortgages', 'Auto finance'],
    listTitle: 'We can introduce you for',
    list: ['Personal loans and debt consolidation', 'Credit cards suited to your spending and income', 'Home finance for residents and non-residents', 'Vehicle finance', 'An explanation of rates, fees and key terms before you apply'],
  },
  {
    id: 'business',
    name: 'Business Banking',
    short: 'Business And Corporate Account Opening For Mainland And Free-Zone Companies.',
    title: ['Business Accounts', 'Without The Guesswork.'],
    lead: 'Opening a business account in the UAE can take time. We help mainland and free-zone companies understand bank requirements and introduce them to a suitable bank.',
    tags: ['Mainland', 'Free zone', 'Start-ups', 'SMEs'],
    listTitle: 'We can introduce you for',
    list: ['Corporate and SME current accounts', 'Multi-currency business accounts', 'Merchant and payment-acceptance services', 'Payroll and cash-management solutions', 'A checklist of company documents banks commonly request'],
  },
  {
    id: 'corporate',
    name: 'Business Finance',
    short: 'Working Capital, Trade Finance And SME Facilities From Regulated Institutions.',
    title: ['Funding To Help', 'Your Business Grow.'],
    lead: 'From working capital to trade finance, we help businesses understand their financing options and connect with regulated institutions that provide them.',
    tags: ['Working capital', 'Trade finance', 'Asset finance'],
    listTitle: 'We can introduce you for',
    list: ['Working-capital and overdraft facilities', 'Trade finance, including letters of credit and guarantees', 'Equipment and asset finance', 'Business loans for expansion', 'Help preparing the information lenders usually require'],
  },
  {
    id: 'investment',
    name: 'Investment & Trading Accounts',
    short: 'Introductions To Regulated Brokers And Investment Platforms, Where Permitted.',
    title: ['Access Markets Through', 'Regulated Brokers.'],
    lead: 'Where permitted, we introduce eligible clients to regulated brokers and investment platforms offering forex, metals, energies, indices, shares and more. The broker handles account opening, verification, funding, execution and any disputes, not us.',
    tags: ['Forex & metals', 'Indices', 'Shares & ETFs', 'Demo accounts', 'Swap-free'],
    listTitle: 'Before any referral, we',
    list: ['Confirm the introduction is permitted and you are eligible', 'Name the broker and its regulator in writing', 'Explain who holds your money and how it is protected', 'Point you to the broker’s full risk disclosures and a demo account', 'Never execute trades, give trade signals or manage portfolios'],
  },
  {
    id: 'islamic',
    name: 'Islamic Finance Options',
    short: 'Shariah-Compliant Banking, Financing And Swap-Free Account Options.',
    title: ['Shariah-Compliant', 'Choices.'],
    lead: 'For clients who prefer Islamic finance, we introduce you to providers offering Shariah-compliant banking, financing and swap-free (no overnight interest) account options.',
    tags: ['Islamic banking', 'Murabaha & Ijara', 'Swap-free accounts'],
    listTitle: 'We can introduce you for',
    list: ['Islamic current and savings accounts', 'Shariah-compliant personal and home financing', 'Islamic business banking and financing', 'Swap-free investment and trading accounts, where offered', 'A plain-language explanation of how each structure works'],
  },
  {
    id: 'insurance',
    name: 'Insurance & Protection',
    short: 'Introductions To Licensed Insurers And Brokers For Personal And Business Cover.',
    title: ['Cover That Fits', 'Your Life And Business.'],
    lead: 'Insurance protects what you have built. We help you understand the types of cover available and, where permitted, introduce you to licensed insurers and insurance brokers so you can compare quotes and choose with confidence.',
    tags: ['Health', 'Life', 'Motor', 'Home', 'Business'],
    listTitle: 'We can introduce you for',
    list: ['Health and family health insurance', 'Life, critical illness and savings plans', 'Motor, home, travel and personal belongings cover', 'Group health and group life for employers', 'Business cover: liability, property, marine, fleet and professional indemnity', 'Renewal reminders and guidance on the insurer’s claims process'],
  },
  {
    id: 'wealth',
    name: 'Wealth & Private Clients',
    short: 'Introductions To Regulated Wealth Managers For Individuals, Families And Foundations.',
    title: ['Tailored Introductions For', 'Private Wealth.'],
    lead: 'For individuals, families and foundations with more complex needs, we introduce you to regulated wealth and investment managers whose approach, services and reporting match your objectives.',
    tags: ['High-net-worth', 'Families', 'Foundations', 'Family offices'],
    listTitle: 'We can introduce you for',
    list: ['Discretionary and advisory portfolio management', 'Diversified and alternative investment mandates', 'Estate, succession and family-office services', 'Transparent, regular performance reporting', 'A shortlist of managers to meet and compare'],
  },
];

export const WHO_WE_SERVE = [
  ['Individuals & Families', 'Residents and new arrivals looking for the right bank, financing, cover or investment account.'],
  ['Businesses & SMEs', 'Mainland and free-zone companies that need accounts, finance, insurance or payment solutions.'],
  ['Professionals & Private Clients', 'High-net-worth individuals who want tailored banking, wealth and investment relationships.'],
  ['Institutions & Foundations', 'Organisations that need introductions to institutional-grade providers and services.'],
];

// Evidence-based provider review we carry out before introducing any client
export const PROVIDER_CHECKS = [
  ['Licence verified', 'We confirm the provider’s licence directly in its regulator’s public register, not from its own marketing.'],
  ['Regulatory & legal record', 'We look for public enforcement actions, court judgments and insolvency notices involving the provider.'],
  ['Client money arrangements', 'We check how client funds are held, for example in segregated accounts with established banks.'],
  ['Costs & terms', 'We review fees, charges and key terms so they can be explained to you clearly before you decide.'],
  ['Complaints route', 'We confirm how complaints are handled and which authority you can escalate to if needed.'],
  ['Ongoing review', 'Providers are reviewed periodically, and we stop introducing clients if serious concerns arise.'],
];

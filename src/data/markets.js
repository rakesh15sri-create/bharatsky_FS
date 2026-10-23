// Educational content about trading access. Bhaarat Sky only introduces clients to
// regulated brokers; products, terms and conditions are always set by the broker.

export const MARKETS = [
  { icon: 'trend', tone: 'grey', name: 'Forex', text: 'Major, minor and exotic currency pairs such as EUR/USD, traded around the clock five days a week.' },
  { icon: 'bolt', tone: 'yellow', name: 'Gold & Metals', text: 'Gold, silver, platinum and palladium, among the most actively traded instruments in the GCC.' },
  { icon: 'broadcast', tone: 'orange', name: 'Oil & Energy', text: 'Brent and WTI crude oil and natural gas, driven by global supply, demand and events.' },
  { icon: 'card', tone: 'grey', name: 'Global Indices', text: 'Benchmark indices such as the US 500, US 100 and Germany 40, tracking whole markets at once.' },
  { icon: 'clock', tone: 'yellow', name: 'Global & UAE Stocks', text: 'Shares in well-known US, European, Asian and UAE-listed companies, as stocks or CFDs where offered.' },
  { icon: 'search', tone: 'orange', name: 'ETFs & Bonds', text: 'Exchange-traded funds and bonds for broader, diversified exposure to markets and sectors.' },
  { icon: 'trend', tone: 'yellow', name: 'Futures', text: 'Contracts on currencies, indices, metals and energy, with set expiry dates and standard sizes.' },
  { icon: 'bolt', tone: 'grey', name: 'Crypto CFDs', text: 'Price exposure to assets such as Bitcoin and Ether without holding a wallet, where permitted.' },
];

export const ACCOUNT_TYPES = [
  {
    name: 'Demo',
    for: 'For practising first',
    points: ['Virtual funds and real prices', 'No risk to your own money', 'Ideal for learning the platform'],
  },
  {
    name: 'Standard',
    for: 'For most new traders',
    points: ['Lower minimum deposit', 'Costs built into the spread', 'Usually no separate commission'],
  },
  {
    name: 'Raw / ECN',
    for: 'For active traders',
    points: ['Higher minimum deposit', 'Tighter, market-based spreads', 'A small commission per trade'],
  },
  {
    name: 'Islamic (Swap-Free)',
    for: 'For Shariah-compliant trading',
    points: ['No overnight interest (riba)', 'Same markets as standard accounts', 'Verified by the broker before activation'],
  },
  {
    name: 'Premium / VIP',
    for: 'For larger accounts',
    points: ['Highest minimum deposit', 'Tailored pricing', 'A dedicated account manager'],
  },
  {
    name: 'Institutional',
    for: 'For companies and professionals',
    points: ['Bespoke terms and liquidity', 'Low-latency execution and API access', 'Subject to eligibility checks'],
  },
];

export const PLATFORMS = [
  { name: 'MetaTrader 4', text: 'One of the world’s most widely used trading platforms since 2005, popular for forex and automated strategies.' },
  { name: 'MetaTrader 5', text: 'The newer multi-asset version, with more markets, 21 timeframes and market-depth tools on desktop, web and mobile.' },
  { name: 'TradingView', text: 'A popular charting platform that some brokers connect to, so you can analyse and trade from the same screen.' },
  { name: 'Broker Mobile Apps', text: 'Many brokers offer their own app for trading, funding and account management on the go.' },
];

// How opening an account with an introduced broker typically works
export const BROKER_STEPS = [
  ['Apply', 'Complete the broker’s online application and suitability questions.'],
  ['Verify', 'Upload your Emirates ID or passport and a recent proof of address.'],
  ['Fund', 'Deposit from a bank account or card in your own name.'],
  ['Trade', 'Log in to the broker’s platform on desktop, web or mobile.'],
];

export const TRADING_RISK =
  'Trading leveraged products such as forex and CFDs carries a high level of risk and may not be suitable for everyone. You can lose more than you expect, and possibly all of your invested capital. Make sure you understand the risks and read the broker’s full risk disclosure before trading.';

import Icon from './Icons';
import { Button, CardNum, CardTitle, CheckList, Chip, Container, H2, Ic, InfoCard, ListTitle, Muted, Small, SplitHead } from './ui';
import { ACCOUNT_TYPES, BROKER_STEPS, MARKETS, PLATFORMS, TRADING_RISK } from '../data/markets';

export function RiskNote({ className = '' }) {
  return (
    <p className={`flex gap-3 rounded-xl bg-[#fff6e0] px-4 py-3.5 text-xs leading-normal text-[#7a5b00] ${className}`}>
      <span className="mt-px grid size-5 shrink-0 place-items-center rounded-full bg-[#f5c542] text-[11px] font-bold text-white">!</span>
      <span><strong>Risk warning:</strong> {TRADING_RISK}</span>
    </p>
  );
}

/* Home: markets clients can access through an introduced broker */
export function MarketsSection() {
  return (
    <section className="pb-10 pt-20 md:pt-[130px]">
      <Container>
        <SplitHead chip="Investment & Trading Access" title={<>Global Markets, Through<br />Regulated <Muted>Brokers.</Muted></>}>
          <Small>
            Access World Markets Through A Regulated Broker That Suits You. We Introduce Eligible Clients; The Broker Provides The Account, Platform,
            Pricing And Trading Services.
          </Small>
          <Button to="/services#accounts" variant="outline" size="sm">Account types explained</Button>
        </SplitHead>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MARKETS.map(m => (
            <InfoCard key={m.name} className="p-6!">
              <Ic name={m.icon} tone={m.tone} className="text-[44px]" />
              <CardTitle>{m.name}</CardTitle>
              <Small>{m.text}</Small>
            </InfoCard>
          ))}
        </div>

        <RiskNote className="mt-8" />
      </Container>
    </section>
  );
}

/* Services: account types, platforms and opening steps explained */
export function AccountsSection() {
  return (
    <section id="accounts" className="scroll-mt-[110px] py-20 md:py-[110px]">
      <Container>
        <SplitHead chip="Before You Open A Trading Account" title={<>Account Types &amp;<br />Platforms <Muted>Explained.</Muted></>}>
          <Small>
            Brokers Usually Offer Several Account Types And Platforms. Here Is What The Common Options Mean, So You Can Compare Them With Confidence.
            Exact Minimums, Spreads, Commissions And Leverage Are Set By Each Broker.
          </Small>
        </SplitHead>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACCOUNT_TYPES.map((a, i) => {
            const dark = i === ACCOUNT_TYPES.length - 1;
            return (
              <InfoCard key={a.name} dark={dark}>
                <CardNum>{a.for}</CardNum>
                <CardTitle>{a.name}</CardTitle>
                <CheckList items={a.points} dark={dark} className="mt-2 [&_li]:text-sm" />
              </InfoCard>
            );
          })}
        </div>

        <div className="mt-[70px] grid items-start gap-[30px] lg:grid-cols-[1fr_2fr] lg:gap-[60px]">
          <div>
            <Chip>Trading Platforms</Chip>
            <H2>Where You<br />Actually <Muted>Trade.</Muted></H2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {PLATFORMS.map(p => (
              <InfoCard key={p.name}>
                <span className="grid size-11 place-items-center rounded-xl bg-night text-white">
                  <Icon name="trend" className="size-5" />
                </span>
                <CardTitle>{p.name}</CardTitle>
                <Small>{p.text}</Small>
              </InfoCard>
            ))}
          </div>
        </div>

        <div className="mt-[70px]">
          <Chip>After Your Introduction</Chip>
          <H2 className="mb-10">Opening Your Account <Muted>With The Broker.</Muted></H2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BROKER_STEPS.map(([title, text], i) => (
              <InfoCard key={title} className="bg-panel! border-transparent!">
                <CardNum>Step {String(i + 1).padStart(2, '0')}</CardNum>
                <CardTitle>{title}</CardTitle>
                <Small>{text}</Small>
              </InfoCard>
            ))}
          </div>
          <Small className="mt-5">These Steps Are Carried Out Directly With The Broker, Under Its Own Terms And Regulation.</Small>
        </div>

        <InfoCard className="mt-[70px]">
          <ListTitle>Questions to ask any broker before you open an account</ListTitle>
          <CheckList
            className="md:grid-cols-2 md:gap-x-10"
            items={[
              'Which regulator licenses you, and can I verify it?',
              'Are client funds held in segregated accounts?',
              'What are the total costs: spreads, commissions and overnight fees?',
              'How long do withdrawals take, and are there fees?',
              'Is a free demo account available to practise first?',
              'Is a swap-free (Islamic) account available if I need one?',
            ]}
          />
        </InfoCard>

        <RiskNote className="mt-8" />
      </Container>
    </section>
  );
}

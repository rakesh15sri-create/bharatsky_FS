import { Button, CardNum, CardTitle, CheckList, Chip, Container, Cta, H2, InfoCard, Lead, ListTitle, Muted, Panel, Small, SplitHead, PageHero, useTitle } from '../components/ui';

const SERVICES = [
  {
    id: 'banking', n: '01', name: 'Personal Banking',
    title: <>Open The Right Account <Muted>With The Right Bank.</Muted></>,
    lead: 'New to the UAE, changing employer or simply looking for a better bank? We help you understand the options and introduce you to a bank that fits your needs.',
    tags: ['Residents', 'New arrivals', 'Salaried professionals'],
    listTitle: 'We can introduce you for',
    list: ['Current and salary-transfer accounts', 'Savings and fixed-deposit accounts', 'Premium and priority banking relationships', 'Multi-currency and international banking needs', 'Guidance on the documents a bank will usually ask for'],
  },
  {
    id: 'finance', n: '02', name: 'Personal & Home Finance',
    title: <>Financing Through <Muted>Regulated Lenders.</Muted></>,
    lead: 'We help you understand the types of financing available and introduce you to regulated banks and finance companies, so you can compare terms before you apply.',
    tags: ['Personal loans', 'Credit cards', 'Mortgages', 'Auto finance'],
    listTitle: 'We can introduce you for',
    list: ['Personal loans and debt consolidation', 'Credit cards suited to your spending and income', 'Home finance for residents and non-residents', 'Vehicle finance', 'An explanation of rates, fees and key terms before you apply'],
  },
  {
    id: 'business', n: '03', name: 'Business Banking',
    title: <>Business Accounts <Muted>Without The Guesswork.</Muted></>,
    lead: 'Opening a business account in the UAE can take time. We help mainland and free-zone companies understand bank requirements and introduce them to a suitable bank.',
    tags: ['Mainland', 'Free zone', 'Start-ups', 'SMEs'],
    listTitle: 'We can introduce you for',
    list: ['Corporate and SME current accounts', 'Multi-currency business accounts', 'Merchant and payment-acceptance services', 'Payroll and cash-management solutions', 'A checklist of company documents banks commonly request'],
  },
  {
    id: 'corporate', n: '04', name: 'Business Finance',
    title: <>Funding To Help <Muted>Your Business Grow.</Muted></>,
    lead: 'From working capital to trade finance, we help businesses understand their financing options and connect with regulated institutions that provide them.',
    tags: ['Working capital', 'Trade finance', 'Asset finance'],
    listTitle: 'We can introduce you for',
    list: ['Working-capital and overdraft facilities', 'Trade finance, including letters of credit and guarantees', 'Equipment and asset finance', 'Business loans for expansion', 'Help preparing the information lenders usually require'],
  },
  {
    id: 'investment', n: '05', name: 'Investment & Trading Accounts',
    title: <>Access Markets Through <Muted>Regulated Brokers.</Muted></>,
    lead: 'Where permitted, we introduce eligible clients to regulated brokers and investment platforms. The broker handles account opening, funding, execution and any disputes, not us.',
    tags: ['Equities', 'Funds', 'Forex & metals', 'Indices'],
    listTitle: 'Before any referral, we',
    list: ['Confirm the introduction is permitted and you are eligible', 'Name the broker and its regulator in writing', 'Explain who holds your money and how it is protected', 'Point you to the broker’s full risk disclosures', 'Never execute trades, give trade signals or manage portfolios'],
  },
  {
    id: 'islamic', n: '06', name: 'Islamic Finance Options',
    title: <>Shariah-Compliant <Muted>Choices.</Muted></>,
    lead: 'For clients who prefer Islamic finance, we introduce you to providers offering Shariah-compliant banking, financing and swap-free (no overnight interest) account options.',
    tags: ['Islamic banking', 'Murabaha & Ijara', 'Swap-free accounts'],
    listTitle: 'We can introduce you for',
    list: ['Islamic current and savings accounts', 'Shariah-compliant personal and home financing', 'Islamic business banking and financing', 'Swap-free investment and trading accounts, where offered', 'A plain-language explanation of how each structure works'],
  },
];

const WE_DO = [
  'Listen to your needs and explain your options',
  'Check your eligibility before any referral',
  'Introduce you only to regulated institutions',
  'Give you a written disclosure before every introduction',
  'Tell you about any fee or commission we receive',
  'Stay your point of contact for questions about the introduction',
];

const WE_DONT = [
  'Accept, hold or transfer client money',
  'Open accounts, approve loans or execute trades',
  'Manage portfolios or give personal investment advice',
  'Guarantee approval, rates, returns or any outcome',
  'Charge you to send an enquiry',
  'Ask for your passwords or authentication codes',
];

const CHECKS = [
  ['Verify the licence', 'Look the provider up in its regulator’s public register. Avoid any firm that cannot show a verifiable licence.'],
  ['Read the risk disclosures', 'Every regulated provider publishes its terms and risk warnings. Read them carefully before you sign.'],
  ['Know who holds your money', 'Understand where your funds are kept, whether they are segregated and what protection applies.'],
  ['Compare costs', 'Compare rates, fees, charges and minimum balances, not just the headline offer.'],
];

export default function Services() {
  useTitle('Our Services');
  return (
    <>
      <PageHero
        crumb="Services"
        chip="Our Services"
        title={<>The Right Provider<br /><Muted>For Every Need.</Muted></>}
        sub="We Introduce Individuals And Businesses To Regulated Financial Institutions In The UAE, Explaining Each Provider And Our Role In Writing Before Any Referral."
      >
        <Button to="/contact">Request an introduction</Button>
        <Button href="#scope" variant="outline">Our role explained</Button>
      </PageHero>

      {/* ============ SERVICE DETAILS ============ */}
      <Panel>
        <Container>
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`grid scroll-mt-[110px] gap-[30px] md:grid-cols-[1fr_1.25fr] md:gap-[50px] ${i === 0 ? 'pb-[60px]' : 'border-t border-[#dcdcdc] py-[60px]'}`}
            >
              <div>
                <Chip>{s.n} · {s.name}</Chip>
                <h2 className="mb-4 mt-3.5 text-[clamp(28px,3vw,40px)] leading-[1.15] tracking-[-.02em]">{s.title}</h2>
                <Lead>{s.lead}</Lead>
                <div className="mt-[22px] flex flex-wrap gap-2">
                  {s.tags.map(t => <span key={t} className="rounded-full border border-line bg-white px-3 py-[7px] text-xs">{t}</span>)}
                </div>
              </div>
              <div>
                <ListTitle>{s.listTitle}</ListTitle>
                <CheckList items={s.list} />
              </div>
            </article>
          ))}
        </Container>
      </Panel>

      {/* ============ SCOPE ============ */}
      <section className="scroll-mt-[110px] py-20 md:py-[110px]" id="scope">
        <Container>
          <SplitHead chip="Our Role" title={<>An Introducer,<br />Nothing More, <Muted>Nothing Less.</Muted></>}>
            <Small>Being Clear About Our Role Protects You. You Always Know Exactly Who Is Responsible For Your Account, Your Money And Your Service.</Small>
          </SplitHead>
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard>
              <ListTitle>We do</ListTitle>
              <CheckList items={WE_DO} />
            </InfoCard>
            <InfoCard dark>
              <ListTitle className="text-[#9a9a9a]">We do not</ListTitle>
              <CheckList items={WE_DONT} cross dark />
            </InfoCard>
          </div>
        </Container>
      </section>

      {/* ============ HOW TO CHOOSE + COMPENSATION ============ */}
      <Panel>
        <Container>
          <SplitHead chip="Choosing A Provider" title={<>Four Checks Before<br />You <Muted>Commit.</Muted></>}>
            <Small>Whether Or Not You Use Our Service, These Are The Questions Every Client Should Ask Before Opening An Account With Any Financial Provider.</Small>
          </SplitHead>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CHECKS.map(([title, text], i) => (
              <InfoCard key={title} className="border-transparent">
                <CardNum>{String(i + 1).padStart(2, '0')}</CardNum>
                <CardTitle>{title}</CardTitle>
                <Small>{text}</Small>
              </InfoCard>
            ))}
          </div>

          <div className="mt-[90px] grid items-start gap-[30px] md:grid-cols-2 md:gap-[60px]">
            <div>
              <Chip>Compensation Disclosure</Chip>
              <H2>How We<br />Are <Muted>Paid.</Muted></H2>
            </div>
            <div>
              <Lead>
                Sending us an enquiry is free. We may receive a fee or commission from a provider when an introduction leads to an account or
                facility. Where this applies, the amount or basis is stated in your written disclosure before you decide to proceed.
              </Lead>
              <Lead>Any fees charged by the provider for its own products are separate from ours and are set out in the provider’s terms.</Lead>
            </div>
          </div>
        </Container>
      </Panel>

      <Cta
        title="Not Sure Where To Start?"
        sub="Tell Us What You Need And We Will Explain Your Options. No Documents Required To Enquire."
        primary={{ to: '/contact', children: 'Request an introduction' }}
        secondary={{ to: '/process', children: 'See how it works' }}
      />
    </>
  );
}

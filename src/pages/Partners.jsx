import { Button, CardNum, CardTitle, CheckList, Chip, Container, Cta, H2, Ic, InfoCard, Lead, ListTitle, Muted, Panel, Small, SplitHead, PageHero, useTitle } from '../components/ui';
import { SITE } from '../data/site';

const PARTNER_TYPES = [
  ['card', 'grey', 'Banks', 'Personal, business and private banking, salary accounts and payment services.'],
  ['trend', 'yellow', 'Lenders & Finance Companies', 'Personal loans, credit cards, mortgages, auto finance and SME facilities.'],
  ['broadcast', 'orange', 'Insurers & Insurance Brokers', 'Health, life, motor, home, travel and business cover.'],
  ['bolt', 'grey', 'Regulated Brokers', 'Investment and trading accounts across forex, metals, indices and shares.'],
  ['clock', 'yellow', 'Wealth & Investment Managers', 'Advisory and discretionary mandates for private clients, families and foundations.'],
  ['search', 'orange', 'Islamic Finance Providers', 'Shariah-compliant banking, financing, takaful and swap-free accounts.'],
];

const WE_DO = [
  'Understand each client’s needs and check basic eligibility',
  'Explain your products and terms in plain language',
  'Give every client a written disclosure naming you and your regulator',
  'Introduce only clients who choose to proceed',
  'Stay the client’s point of contact for questions about the introduction',
];

const YOU_DO = [
  'Carry out your own KYC, AML and suitability checks',
  'Open accounts, approve applications or issue policies',
  'Hold and manage all client funds',
  'Service the client, handle claims and resolve disputes',
  'Remain fully responsible under your own licence and regulator',
];

const STANDARDS = [
  ['Regulated partners only', 'We work only with institutions licensed by a recognised authority, verified in the regulator’s public register.'],
  ['Disclosure first', 'Clients are told who you are, who regulates you and what we receive before any referral is made.'],
  ['No client funds', 'We never accept, hold or transfer client money. Funds move only between the client and you.'],
  ['No pressure selling', 'We never guarantee approvals, rates or returns, and clients are always free not to proceed.'],
];

const ONBOARDING = [
  ['Introduction call', 'We learn about your products, target clients and acceptance criteria.'],
  ['Due diligence', 'We verify your licence, review public regulatory and legal records and check client-money arrangements.'],
  ['Introducer agreement', 'We agree roles, responsibilities, disclosure wording and commercial terms in writing.'],
  ['Go live & review', 'We start introducing suitable clients and review the partnership regularly.'],
];

export default function Partners() {
  useTitle('Partner With Us');
  return (
    <>
      <PageHero
        crumb="Partners"
        chip="For Financial Institutions"
        title={<>Partner With<br /><Muted>Bhaarat Sky.</Muted></>}
        sub="We Introduce Informed, Prepared Clients To Regulated Banks, Lenders, Insurers, Brokers And Wealth Managers In The UAE, With Transparency Built Into Every Referral."
      >
        <Button href={`mailto:${SITE.email}?subject=${encodeURIComponent('Partnership enquiry')}`}>Become a partner</Button>
        <Button href="#onboarding" variant="outline">How onboarding works</Button>
      </PageHero>

      {/* ============ WHO WE PARTNER WITH ============ */}
      <Panel>
        <Container>
          <SplitHead chip="Who We Partner With" title={<>Regulated Providers<br />Across <Muted>Every Sector.</Muted></>}>
            <Small>Our Clients Need Banking, Finance, Insurance, Investment And Wealth Services. We Partner With Regulated Institutions That Provide Them.</Small>
          </SplitHead>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNER_TYPES.map(([icon, tone, title, text]) => (
              <InfoCard key={title} className="border-transparent">
                <Ic name={icon} tone={tone} className="text-[46px]" />
                <CardTitle>{title}</CardTitle>
                <Small>{text}</Small>
              </InfoCard>
            ))}
          </div>
        </Container>
      </Panel>

      {/* ============ ROLES ============ */}
      <section className="py-20 md:py-[110px]">
        <Container>
          <SplitHead chip="Clear Roles" title={<>We Introduce.<br />You <Muted>Provide.</Muted></>}>
            <Small>Our Introducer Model Keeps Responsibilities Clearly Separated, So Clients, Partners And Regulators Always Know Who Does What.</Small>
          </SplitHead>
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard>
              <ListTitle>Bhaarat Sky</ListTitle>
              <CheckList items={WE_DO} />
            </InfoCard>
            <InfoCard dark>
              <ListTitle className="text-[#9a9a9a]">Our partner</ListTitle>
              <CheckList items={YOU_DO} dark />
            </InfoCard>
          </div>
        </Container>
      </section>

      {/* ============ STANDARDS + ONBOARDING ============ */}
      <Panel>
        <Container>
          <SplitHead chip="Our Standards" title={<>Commitments We Make<br />To <Muted>Every Partner.</Muted></>}>
            <Small>These Standards Protect Our Clients And Our Partners’ Reputations Alike.</Small>
          </SplitHead>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map(([title, text], i) => (
              <InfoCard key={title} className="border-transparent">
                <CardNum>{String(i + 1).padStart(2, '0')}</CardNum>
                <CardTitle>{title}</CardTitle>
                <Small>{text}</Small>
              </InfoCard>
            ))}
          </div>

          <div id="onboarding" className="mt-[90px] scroll-mt-[110px]">
            <SplitHead chip="Partner Onboarding" title={<>Four Steps To<br />A <Muted>Partnership.</Muted></>}>
              <Small>Every Partnership Starts With Due Diligence And A Written Agreement, Before Any Client Is Introduced.</Small>
            </SplitHead>
            <div className="grid gap-5">
              {ONBOARDING.map(([title, text], i) => (
                <article key={title} className="group grid items-center gap-4 rounded-card bg-white p-[30px] md:grid-cols-[120px_1fr_1.4fr] md:gap-10 md:p-10">
                  <span className="text-[56px] font-medium leading-none tracking-[-.04em] text-mute transition-colors duration-300 group-hover:text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[24px] font-medium tracking-[-.02em]">{title}</h3>
                  <Small className="text-sm!">{text}</Small>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Panel>

      {/* ============ COMMERCIALS ============ */}
      <section className="py-20 md:py-[110px]">
        <Container className="grid items-start gap-[30px] md:grid-cols-2 md:gap-[60px]">
          <div>
            <Chip>Commercial Terms</Chip>
            <H2>Simple, Transparent<br /><Muted>Arrangements.</Muted></H2>
          </div>
          <div>
            <Lead>
              Partnerships are usually based on a referral fee or a revenue-share arrangement, agreed in writing before any introduction takes place.
            </Lead>
            <Lead>
              Whatever the arrangement, its basis is disclosed to every client in their written disclosure, so there are no hidden incentives and
              clients can decide with full information.
            </Lead>
          </div>
        </Container>
      </section>

      <Cta
        title="Let’s Build A Partnership"
        sub="Tell Us About Your Institution, Your Products And The Clients You Serve. Our Team Will Arrange An Introduction Call."
        primary={{ href: `mailto:${SITE.email}?subject=${encodeURIComponent('Partnership enquiry')}`, children: 'Email our partnerships team' }}
        secondary={{ to: '/contact', children: 'Use the contact form' }}
      />
    </>
  );
}

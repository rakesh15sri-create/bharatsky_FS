import Icon from '../components/Icons';
import { Button, Chip, Container, Cta, H1, H2, HeroLines, Ic, IcPair, Muted, Panel, Reveal, Small, SplitHead, useTitle } from '../components/ui';
import { Dashboard, FeatureRow, LoopCard, Marquee, MockCards, OrbitCard } from '../components/Illustrations';
import { SITE } from '../data/site';

const SERVICES = [
  ['Personal Banking', 'Introductions To UAE Banks For Current, Savings And Salary Accounts.'],
  ['Personal & Home Finance', 'Personal Loans, Credit Cards And Mortgages Through Regulated Lenders.'],
  ['Business Banking', 'Business And Corporate Account Opening For Mainland And Free-Zone Companies.'],
  ['Business Finance', 'Working Capital, Trade Finance And SME Facilities From Regulated Institutions.'],
  ['Investment & Trading Accounts', 'Introductions To Regulated Brokers And Investment Platforms, Where Permitted.'],
  ['Islamic Finance Options', 'Shariah-Compliant Banking, Financing And Swap-Free Account Options.'],
];

export default function Home() {
  useTitle();
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pb-10 pt-[60px] sm:pt-[90px]">
        <HeroLines tall />
        <Container className="relative z-10 text-center">
          <Chip className="bg-[#efefef]">Introduction To Financial Services · Dubai, UAE</Chip>
          <h1 className="mb-[26px] mt-[22px] text-[clamp(44px,8.4vw,118px)] font-medium leading-[1.02] tracking-[-0.035em]">
            <span className="flex flex-wrap items-center justify-center gap-[.14em]">
              <span className="inline-flex items-center text-[.62em]">
                <Ic name="trend" tone="grey" className="-mr-[.18em] size-[.8em]!" />
                <Ic name="bolt" />
              </span>
              Your Trusted
              <Ic name="broadcast" tone="yellow" className="text-[.62em]" />
            </span>
            <span className="flex flex-wrap items-center justify-center gap-[.14em]">Finance <Muted>Introducer.</Muted></span>
          </h1>
          <p className="mx-auto mb-[34px] max-w-[640px] text-[15px] leading-[1.55] text-grey">
            BHAARAT SKY Helps UAE Residents And Businesses Connect With Regulated Banks, Brokers And Financial Institutions, With A Written
            Disclosure Before Every Introduction And No Pressure To Proceed.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <Button to="/contact">Request an introduction</Button>
            <Button to="/services" variant="outline">Explore our services</Button>
          </div>
        </Container>
        <Container className="relative z-10 mt-[50px] flex flex-col items-center gap-3.5 text-[13px] text-copy sm:mt-[90px] sm:flex-row sm:justify-between">
          {[['card', 'No Documents Needed To Enquire'], ['clock', 'Written Disclosure Before Any Referral']].map(([icon, text]) => (
            <span key={text} className="inline-flex items-center gap-2.5">
              <Icon name={icon} className="size-[30px] rounded-full bg-[#f1f1f1] p-1.5 text-[#555]" /> {text}
            </span>
          ))}
        </Container>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <Panel>
        <Container>
          <SplitHead chip="What We Do" title={<>We Connect You To The Right<br />Provider, <Muted>We Never Hold Your Funds.</Muted></>}>
            <Small>
              We Are An Introducer. We Understand Your Needs, Check Your Eligibility And Introduce You To A Regulated Financial Institution. The
              Provider Handles Your Account, Your Money And Its Services, Not Us.
            </Small>
            <Button to="/about" variant="outline" size="sm">Discover our company</Button>
          </SplitHead>

          <Reveal className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
            <OrbitCard />
            <LoopCard
              title="Full Transparency Before Every Introduction"
              text="Before Any Referral, You Receive A Written Disclosure Naming The Provider, Its Regulator, Any Fees We Receive And The Exact Limits Of Our Role. You Decide With Full Information."
              labels={['1. Your Enquiry', '2. Eligibility Check', '3. Written Disclosure', '4. Introduction']}
            />
          </Reveal>

          <FeatureRow
            items={[
              ['Regulated Providers Only', 'We Only Introduce Clients To Institutions Regulated By A Recognised Financial Authority.'],
              ['Written Disclosure First', 'The Provider, Its Regulator And Our Role Are Explained In Writing Before Any Referral.'],
              ['Your Decision, Always', 'No Commitment And No Pressure. You Are Free Not To Proceed At Any Stage.'],
            ]}
          />
        </Container>
      </Panel>

      {/* ============ WHY US ============ */}
      <section className="pb-10 pt-20 md:pt-[130px]">
        <Container>
          <Chip>Why Clients Choose Us</Chip>
          <H1>Introductions You<br />Can <Muted>Trust.</Muted></H1>
        </Container>
        <div className="mx-auto my-10 flex max-w-[1180px] items-center justify-between gap-[30px] px-4 sm:px-6 md:my-[70px]">
          <Marquee words={['Full Transparency', 'No Pressure', 'UAE-Wide Service', 'Fully Digital']} />
          <IcPair className="hidden text-[72px] sm:block md:text-[104px]" />
        </div>
        <Container className="flex flex-col items-start justify-between gap-[30px] md:flex-row md:items-center">
          <Small className="max-w-[470px]">
            A Dubai-Based Team That Serves Clients Across All Seven Emirates. Enquiries And Onboarding Support Are Handled Online, So You Never Need
            To Travel, And A Real Person Stays Accountable For Your Introduction From Start To Finish.
          </Small>
          <Button to="/contact" variant="outline" size="sm">Talk to our team</Button>
        </Container>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="pb-10 pt-20 md:pt-[130px]">
        <Container>
          <SplitHead chip="Our Services" title={<>Introductions Across<br />Every <Muted>Financial Need</Muted></>}>
            <Small>
              Whether You Need A Bank Account, Financing, A Business Facility Or An Investment Account, We Help You Find A Suitable Regulated
              Provider And Understand It Before You Commit.
            </Small>
          </SplitHead>
          <Reveal><MockCards /></Reveal>
          <FeatureRow items={SERVICES.slice(0, 3)} />
          <FeatureRow items={SERVICES.slice(3)} className="mt-[30px] md:mt-[50px]" />
        </Container>
      </section>

      {/* ============ PROCESS ============ */}
      <Panel className="overflow-hidden pb-0!">
        <Container>
          <div className="mb-[60px] flex flex-col items-start justify-between gap-[30px] md:mb-[110px] md:flex-row md:items-center">
            <div>
              <Chip>How It Works</Chip>
              <H1>Four Simple<br />Steps <Muted>To Start.</Muted></H1>
              <Button to="/process" size="sm" className="mt-8">See the full process</Button>
            </div>
            <IcPair className="hidden text-[72px] md:block md:text-[104px]" />
          </div>
          <Reveal><Dashboard /></Reveal>
        </Container>
      </Panel>

      <Cta
        title="Request A Free Introduction"
        sub="Tell Us What You Need. No Documents Are Required At This Stage, And There Is No Obligation To Proceed."
        primary={{ to: '/contact', children: 'Send your enquiry' }}
        secondary={{ href: SITE.phoneHref, children: `Call ${SITE.phone}` }}
        meta={[['card', 'We Never Hold Client Funds'], ['clock', 'Serving All Seven Emirates']]}
      />
    </>
  );
}

import { Button, CardNum, CardTitle, CheckList, Chip, Container, Cta, H2, InfoCard, Lead, ListTitle, Muted, Panel, Small, SplitHead, PageHero, useTitle } from '../components/ui';
import { AccountsSection } from '../components/Trading';
import { SERVICES } from '../data/services';

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
  'Open accounts, approve loans, issue policies or execute trades',
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
        sub="Banking, Finance, Insurance, Investment And Private Wealth. We Introduce Individuals And Businesses To Regulated Institutions In The UAE, Explaining Each Provider And Our Role In Writing Before Any Referral."
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
                <Chip>{String(i + 1).padStart(2, '0')} · {s.name}</Chip>
                <h2 className="mb-4 mt-3.5 text-[clamp(28px,3vw,40px)] leading-[1.15] tracking-[-.02em]">
                  {s.title[0]} <Muted>{s.title[1]}</Muted>
                </h2>
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

      {/* ============ ACCOUNTS & PLATFORMS ============ */}
      <AccountsSection />

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

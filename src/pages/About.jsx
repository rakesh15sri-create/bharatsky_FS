import { Button, CardNum, CardTitle, CheckList, Chip, Container, Cta, H2, Ic, InfoCard, Lead, Muted, Panel, Small, SplitHead, PageHero, useTitle } from '../components/ui';

const VALUES = [
  ['Transparency', 'The provider, its regulator, our role and any fees we receive are disclosed in writing before any referral.'],
  ['Accountability', 'A real person in the UAE stays responsible for your introduction from first enquiry to referral.'],
  ['Integrity', 'We only introduce clients to regulated institutions, and we tell you honestly when we cannot help.'],
  ['Client First', 'No commitment and no pressure. You are free not to proceed at any stage.'],
];

const WHY = [
  'Dubai-based team serving clients across all seven emirates',
  'Introductions only to regulated financial institutions',
  'Written disclosure before every referral',
  'No documents needed to enquire, and no cost to enquire',
  'Fully digital process, so there is no need to travel',
  'We never hold client funds, and there is no pressure to proceed',
];

export default function About() {
  useTitle('About Us');
  return (
    <>
      <PageHero
        crumb="About"
        chip="About Bhaarat Sky"
        title={<>Connecting You To<br /><Muted>The Right Provider.</Muted></>}
        sub="A Dubai-Based Introducer That Helps UAE Residents And Businesses Reach Regulated Financial Institutions, With Full Transparency At Every Step."
      >
        <Button to="/contact">Request an introduction</Button>
        <Button to="/services" variant="outline">Explore our services</Button>
      </PageHero>

      {/* ============ STORY ============ */}
      <Panel>
        <Container className="grid items-start gap-[30px] md:grid-cols-2 md:gap-[60px]">
          <div>
            <Chip>Our Company Story</Chip>
            <H2>Built To Make Finding<br />A Provider <Muted>Simple And Safe.</Muted></H2>
          </div>
          <div>
            <Lead>
              BHAARAT SKY Financial Services L.L.C was established in Dubai in 2026 with one purpose: to introduce individuals and businesses to the
              financial services they need, through institutions they can trust.
            </Lead>
            <Lead>
              In a market with many banks, lenders and brokers, choosing the right provider can be confusing, and it is easy to commit before you
              fully understand who you are dealing with. We close that gap. We listen to what you need, check your eligibility, and give you a
              written disclosure naming the provider, its regulator and our role before any referral is made.
            </Lead>
            <Lead>
              We are an introducer, nothing more and nothing less. We never hold client money, open accounts or execute transactions. Your
              relationship, your funds and your decisions stay with you and your chosen provider.
            </Lead>
          </div>
        </Container>

        <Container className="mt-[70px] grid gap-5 md:grid-cols-2">
          <InfoCard dark>
            <Ic name="bolt" className="text-[46px]" />
            <CardNum>Our Mission</CardNum>
            <CardTitle>To connect every client with the right regulated provider, with full information and no pressure.</CardTitle>
            <Small>We achieve this through honest conversations, careful eligibility checks and a written disclosure before every introduction.</Small>
          </InfoCard>
          <InfoCard>
            <Ic name="broadcast" tone="yellow" className="text-[46px]" />
            <CardNum>Our Vision</CardNum>
            <CardTitle>To be a trusted bridge between clients in the UAE and the financial providers best suited to their needs.</CardTitle>
            <Small>A relationship where every client understands what they are choosing, why they are choosing it, and what responsibilities come with it.</Small>
          </InfoCard>
        </Container>
      </Panel>

      {/* ============ VALUES ============ */}
      <section className="py-20 md:py-[110px]">
        <Container>
          <SplitHead chip="Our Core Values" title={<>The Principles That<br />Guide <Muted>Every Conversation.</Muted></>}>
            <Small>These Values Shape How We Speak With Clients, How We Choose The Providers We Introduce And How We Define The Limits Of Our Own Role.</Small>
          </SplitHead>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(([title, text], i) => (
              <InfoCard key={title}>
                <CardNum>{String(i + 1).padStart(2, '0')}</CardNum>
                <CardTitle>{title}</CardTitle>
                <Small>{text}</Small>
              </InfoCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ WHY + LEADERSHIP ============ */}
      <Panel>
        <Container className="grid items-start gap-[30px] md:grid-cols-2 md:gap-[60px]">
          <div>
            <Chip>Why Choose Us</Chip>
            <H2>A Clear Role,<br />Clearly <Muted>Explained.</Muted></H2>
            <CheckList items={WHY} className="mt-9" />
          </div>
          <div>
            <Chip>Leadership</Chip>
            <InfoCard className="mt-5">
              <Ic name="logo" tone="grey" className="text-[46px]" />
              <CardNum>Owner &amp; Manager</CardNum>
              <CardTitle>Javed Rathore</CardTitle>
              <Small>
                Javed leads BHAARAT SKY Financial Services L.L.C and is responsible for the company’s client relationships, provider partnerships and
                adherence to its defined scope of activity.
              </Small>
              <Button to="/contact" variant="outline" size="sm" className="self-start">Speak with our team</Button>
            </InfoCard>
          </div>
        </Container>
      </Panel>

      <Cta
        title="Let’s Talk About Your Needs"
        sub="A Short, No-Obligation Conversation Is The Best Way To See Whether We Can Help."
        primary={{ to: '/contact', children: 'Request an introduction' }}
        secondary={{ to: '/services', children: 'Explore our services' }}
      />
    </>
  );
}

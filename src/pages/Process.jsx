import { Button, CardNum, CardTitle, CheckList, Chip, Container, Cta, H2, Ic, InfoCard, ListTitle, Muted, Panel, Small, SplitHead, PageHero, useTitle } from '../components/ui';
import { Faq } from '../components/Illustrations';
import { SITE } from '../data/site';
import { PROVIDER_CHECKS } from '../data/services';
import Icon from '../components/Icons';

const STEPS = [
  ['Send Your Enquiry', 'Tell us what you are looking for and confirm that you live or operate in the UAE. No documents are needed at this stage, and sending an enquiry is free.', ['Online form, phone or email', 'No documents required yet', 'No cost and no obligation']],
  ['Eligibility Check', 'We discuss your needs and confirm that an introduction is appropriate and permitted, and that you are likely to meet the provider’s acceptance criteria.', ['Short conversation about your needs', 'Check against provider criteria', 'Honest answer if we cannot help']],
  ['Written Disclosure', 'Before any referral, we send you a written disclosure. It names the provider and its regulator, explains our role and its limits, and states any fee or commission we receive.', ['Provider name and regulator', 'Our exact role and its limits', 'Any fees or commissions disclosed']],
  ['Introduction To The Provider', 'If you choose to proceed, we refer you to the provider. From this point the provider deals with you directly under its own terms and regulation.', ['Referral to the regulated provider', 'Provider runs its own checks', 'We remain available for questions']],
];

const AFTER = [
  ['check', 'orange', 'KYC & Verification', 'Identity checks, anti-money-laundering checks and final approval of your application.'],
  ['card', 'grey', 'Account & Funding', 'Opening your account, receiving your deposits and processing withdrawals to an account in your name.'],
  ['broadcast', 'yellow', 'Service & Disputes', 'Day-to-day servicing, transactions or execution, statements, complaints and dispute resolution.'],
];

const REGULATORS = [
  ['Federal', 'Central Bank of the UAE', 'Supervises banks, finance companies, exchange houses and insurers operating across the UAE.'],
  ['Federal', 'Capital Markets Regulator', 'Supervises securities, commodities and investment activity at the federal level.'],
  ['DIFC', 'DFSA', 'The Dubai Financial Services Authority regulates firms inside the Dubai International Financial Centre.'],
  ['ADGM', 'FSRA', 'The Financial Services Regulatory Authority regulates firms inside Abu Dhabi Global Market.'],
];

const FAQS = [
  ['What exactly does Bhaarat Sky do?', 'We are an introducer. We understand what you need, check your eligibility, give you a written disclosure and, if you choose to proceed, refer you to a regulated financial institution. The provider then deals with you directly.'],
  ['Do you hold my money or execute transactions?', 'No. We never accept, hold or transfer client money, and we do not open accounts, approve applications or execute trades. Your money moves only between you and the regulated provider, into and out of accounts in your own name.'],
  ['Does it cost anything to enquire?', 'No. Sending an enquiry is free and there is no obligation to proceed. If we receive a fee or commission from a provider for an introduction, it is stated in your written disclosure before you decide.'],
  ['Which providers do you introduce clients to?', 'Only institutions regulated by a recognised financial authority. The specific provider, and its regulator, are named in your written disclosure so you can verify them independently before proceeding.'],
  ['Do I need documents to get started?', 'Not at the enquiry stage. Documents are only needed later, when the provider carries out its own verification, and we tell you in advance what it will usually ask for.'],
  ['Can you guarantee approval?', 'No. Every provider makes its own decision based on its criteria and checks. We help you understand those criteria in advance, but we cannot guarantee approval, rates or terms.'],
  ['Which markets can I access through an introduced broker?', 'Depending on the broker and your eligibility, typically forex, gold and other metals, oil and energy, global indices and shares, often traded as CFDs. The exact product list, leverage and costs are set by the broker and shown in its terms.'],
  ['What is the difference between MT4, MT5 and a broker app?', 'MetaTrader 4 is a long-established platform popular for forex. MetaTrader 5 is its newer multi-asset version with more markets and tools. Many brokers also offer their own mobile app. The broker you are introduced to will tell you which platforms it supports.'],
  ['How do I get started?', `Send us an enquiry through the contact page, email us at ${SITE.email} or call ${SITE.phone}. No documents are needed at this stage, and our team will get back to you to discuss your needs.`],
  ['Do you help with insurance?', 'Yes. We can introduce you to licensed insurers and insurance brokers for personal cover such as health, life, motor and home, and for business cover such as group health and liability. The insurer issues the policy and handles claims.'],
  ['Do you work with high-net-worth clients and families?', 'Yes. For private clients, families and foundations we introduce regulated wealth and investment managers, and can arrange a shortlist so you can meet and compare them before deciding.'],
  ['Do you offer Islamic finance options?', 'Yes. We can introduce you to providers offering Shariah-compliant banking and financing, and swap-free investment accounts where available.'],
  ['Do I need to visit your office?', 'No. We serve clients across all seven emirates, and enquiries are handled by phone, email and online. Meetings at our Al Sufouh office are available by appointment.'],
  ['What happens if I have a problem with the provider?', 'Account servicing, complaints and disputes are handled by the provider under the rules of its regulator. We remain available to help you understand the process and who to contact.'],
];

export default function Process() {
  useTitle('How It Works');
  return (
    <>
      <PageHero
        crumb="Process"
        chip="How It Works"
        title={<>Four Clear Steps<br />To The <Muted>Right Provider.</Muted></>}
        sub="A Simple, Transparent Introduction Process. You Receive Everything In Writing Before Any Referral, And You Are Free Not To Proceed At Any Stage."
      >
        <Button to="/contact">Start with step one</Button>
        <Button href="#faq" variant="outline">Read the FAQ</Button>
      </PageHero>

      {/* ============ STEPS ============ */}
      <Panel>
        <Container className="grid gap-5">
          {STEPS.map(([title, text, list], i) => (
            <article key={title} className="group grid items-start gap-4 rounded-card bg-white p-[30px] md:grid-cols-[120px_1fr_1fr] md:gap-10 md:p-10">
              <span className="text-[64px] font-medium leading-none tracking-[-.04em] text-mute transition-colors duration-300 group-hover:text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="mb-3 text-[26px] font-medium tracking-[-.02em]">{title}</h3>
                <Small>{text}</Small>
              </div>
              <CheckList items={list} />
            </article>
          ))}
        </Container>
      </Panel>

      {/* ============ AFTER + DOCUMENTS ============ */}
      <section className="py-20 md:py-[110px]">
        <Container>
          <SplitHead chip="After The Introduction" title={<>The Provider Takes It<br />From <Muted>Here.</Muted></>}>
            <Small>Once You Are Introduced, Your Relationship Is With The Provider. It Is Responsible For Everything Below, Under The Rules Of Its Own Regulator.</Small>
          </SplitHead>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AFTER.map(([icon, tone, title, text]) => (
              <InfoCard key={title}>
                <Ic name={icon} tone={tone} className="text-[46px]" />
                <CardTitle>{title}</CardTitle>
                <Small>{text}</Small>
              </InfoCard>
            ))}
          </div>

          <div className="mt-[90px] grid items-start gap-[30px] md:grid-cols-2 md:gap-[60px]">
            <div>
              <Chip>Documents</Chip>
              <H2>What Providers<br />Usually <Muted>Ask For.</Muted></H2>
              <Small className="mt-5 max-w-[380px]">You Do Not Need These To Enquire. We Share The Exact List For Your Chosen Provider In Your Written Disclosure.</Small>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <InfoCard>
                <ListTitle>Individuals</ListTitle>
                <CheckList items={['Emirates ID and passport', 'Proof of address (Ejari or utility bill)', 'Salary certificate or proof of income', 'Recent bank statements']} />
              </InfoCard>
              <InfoCard>
                <ListTitle>Businesses</ListTitle>
                <CheckList items={['Trade licence', 'Memorandum of association', 'Shareholder IDs and passports', 'Company bank statements']} />
              </InfoCard>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ REGULATORS ============ */}
      <Panel>
        <Container>
          <SplitHead chip="Know Your Regulators" title={<>Who Regulates Financial<br />Providers <Muted>In The UAE?</Muted></>}>
            <Small>Different Providers Are Supervised By Different Authorities. Knowing Which One Applies Helps You Verify A Provider And Know Where To Turn If You Have A Complaint.</Small>
          </SplitHead>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {REGULATORS.map(([scope, title, text]) => (
              <InfoCard key={title} className="border-transparent">
                <CardNum>{scope}</CardNum>
                <CardTitle>{title}</CardTitle>
                <Small>{text}</Small>
              </InfoCard>
            ))}
          </div>

          {/* provider due diligence */}
          <div id="due-diligence" className="mt-[90px] scroll-mt-[110px]">
            <SplitHead chip="How We Assess Providers" title={<>Evidence Before<br />Every <Muted>Introduction.</Muted></>}>
              <Small>
                We Do Not Rely On A Provider’s Own Marketing. Before We Introduce Anyone, We Check Public, Verifiable Sources, And We Keep Checking
                Afterwards.
              </Small>
            </SplitHead>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROVIDER_CHECKS.map(([title, text], i) => (
                <InfoCard key={title} dark={i === 0} className={i === 0 ? '' : 'border-transparent'}>
                  <span className={`grid size-11 place-items-center rounded-full ${i === 0 ? 'bg-brand text-white' : 'bg-panel text-brand'}`}>
                    <Icon name="check" className="size-5" />
                  </span>
                  <CardTitle>{title}</CardTitle>
                  <Small>{text}</Small>
                </InfoCard>
              ))}
            </div>
          </div>
        </Container>
      </Panel>

      {/* ============ FAQ ============ */}
      <section className="py-20 md:py-[110px]">
        <Container className="grid items-start gap-[30px] md:grid-cols-2 md:gap-[60px]">
          <div>
            <Chip>Frequently Asked Questions</Chip>
            <H2>Questions Clients<br />Commonly <Muted>Ask.</Muted></H2>
            <Small className="mt-[22px] max-w-[360px]">Can’t Find What You’re Looking For? Our Team Is Happy To Help.</Small>
            <Button to="/contact" variant="outline" size="sm" className="mt-[22px]">Ask a question</Button>
          </div>
          <Faq items={FAQS} />
        </Container>
      </section>

      <Cta
        title="Ready To Take Step One?"
        sub="Send Your Enquiry Today. No Documents Required And No Obligation To Proceed."
        primary={{ to: '/contact', children: 'Send your enquiry' }}
        secondary={{ href: SITE.phoneHref, children: `Call ${SITE.phone}` }}
      />
    </>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { Container, Muted, Panel, PageHero, useTitle } from '../components/ui';
import { LEGAL_LINKS, LICENCE, SITE } from '../data/site';

const UPDATED = '24 October 2026';

/* Shared wrapper: hero + readable prose column + links to the other legal documents */
function LegalPage({ title, first, second, children }) {
  useTitle(title);
  const { pathname } = useLocation();
  return (
    <>
      <PageHero crumb={title} chip="Legal" lines={false} title={<>{first} <Muted>{second}</Muted></>} sub={`Last updated: ${UPDATED}`} />
      <Panel>
        <Container className="max-w-[820px] [&_a]:text-brand [&_a]:underline [&_h2]:mb-3.5 [&_h2]:mt-[50px] [&_h2]:text-[26px] [&_h2]:font-medium [&_h2]:tracking-[-.015em] [&_h2:first-child]:mt-0 [&_li]:text-[15px] [&_li]:leading-[1.75] [&_li]:text-copy [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:text-copy [&_p+p]:mt-3 [&_ul]:my-3 [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-1.5 [&_ul]:pl-[22px]">
          {children}
          <nav className="mt-[60px] rounded-card bg-white p-6 [&_a]:no-underline">
            <p className="mb-3 text-[13px]! font-semibold uppercase tracking-[.06em] text-grey!">Other legal documents</p>
            <div className="flex flex-wrap gap-2">
              {LEGAL_LINKS.filter(([, to]) => to !== pathname).map(([label, to]) => (
                <Link key={to} to={to} className="rounded-full bg-panel px-3.5 py-2 text-[13px] text-ink! hover:bg-brand hover:text-white!">{label}</Link>
              ))}
            </div>
          </nav>
        </Container>
      </Panel>
    </>
  );
}

const Mail = () => <a href={`mailto:${SITE.email}`}>{SITE.email}</a>;

/* The standard statement of who we are and what our licence covers */
function LicenceStatement() {
  return (
    <p>
      {SITE.name} (“Bhaarat Sky”, “we”, “us”) is a limited liability company (single owner) registered in Dubai, United Arab Emirates. We are
      licensed by the {LICENCE.authority} under Commercial Licence No. {LICENCE.number} (Commercial Register No. {LICENCE.register}) for the
      activity “{LICENCE.activity}”. Our registered office is at {SITE.address}.
    </p>
  );
}

/* ---------------------------------------------------------
   Licences & Regulation
   --------------------------------------------------------- */
const LICENCE_ROWS = [
  ['Legal name', SITE.name],
  ['Licensed activity', LICENCE.activity],
  ['Issuing authority', LICENCE.authority],
  ['Commercial licence no.', LICENCE.number],
  ['Commercial register no.', LICENCE.register],
  ['Dubai Chamber membership no.', LICENCE.chamber],
  ['Legal form', LICENCE.legalForm],
  ['Paid-up capital', LICENCE.capital],
  ['Issue date', LICENCE.issued],
  ['Valid until', `${LICENCE.validUntil} (renewed annually)`],
  ['Registered office', SITE.address],
];

export function Licences() {
  return (
    <LegalPage title="Licences & Regulation" first="Licences &" second="Regulation.">
      <h2>1. Our licence</h2>
      <LicenceStatement />
      <dl className="mt-6 overflow-hidden rounded-card border border-line bg-white">
        {LICENCE_ROWS.map(([k, v]) => (
          <div key={k} className="grid gap-1 border-t border-line px-5 py-4 text-[15px] first:border-t-0 sm:grid-cols-[230px_1fr] sm:gap-5 sm:px-7">
            <dt className="text-grey">{k}</dt>
            <dd className="font-medium">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4">
        The authenticity of our commercial licence can be verified with the Department of Economy and Tourism, Dubai, using the QR code on the
        official licence document. A copy is available on request at <Mail />.
      </p>

      <h2>2. What our licence covers</h2>
      <p>Our licence permits us to introduce clients to financial services. In practice, this means we:</p>
      <ul>
        <li>discuss your needs and provide general information about types of financial products and providers;</li>
        <li>check basic eligibility and give you a written disclosure before any introduction;</li>
        <li>introduce you, with your consent, to third-party institutions that hold their own licences.</li>
      </ul>

      <h2>3. What our licence does not cover</h2>
      <p>
        We are not licensed as, and do not act as, a bank, finance company, broker, dealer, insurer, insurance broker, investment manager or
        investment adviser. We therefore do not:
      </p>
      <ul>
        <li>accept, hold, transfer or manage client money or assets;</li>
        <li>open accounts, approve credit, issue insurance policies or execute trades;</li>
        <li>give personal investment, tax or legal advice, or manage portfolios;</li>
        <li>guarantee approvals, rates, returns or any other outcome.</li>
      </ul>

      <h2>4. Regulation of the providers we introduce</h2>
      <p>
        Every product or service you receive after an introduction is provided by a third-party institution under its own licence and the rules of
        its own regulator. Depending on the provider, this may be:
      </p>
      <ul>
        <li><strong>Central Bank of the UAE (CBUAE):</strong> banks, finance companies, exchange houses and insurers.</li>
        <li><strong>Capital Market Authority (formerly the Securities and Commodities Authority):</strong> securities, commodities and investment firms at the federal level.</li>
        <li><strong>Dubai Financial Services Authority (DFSA):</strong> firms in the Dubai International Financial Centre.</li>
        <li><strong>Financial Services Regulatory Authority (FSRA):</strong> firms in Abu Dhabi Global Market.</li>
        <li><strong>Overseas regulators:</strong> where a provider is regulated outside the UAE, this is stated in your written disclosure, together with the differences in investor protection.</li>
      </ul>
      <p>
        Your written disclosure always names the provider, its regulator and its licence number so you can verify them in the regulator’s public
        register before you proceed.
      </p>

      <h2>5. Client money</h2>
      <p>
        We never receive client funds. Deposits, repayments, premiums and withdrawals take place only between you and the provider, and only from
        and to accounts in your own name. If anyone asks you to pay money to {SITE.short} for a financial product, do not pay, and contact us at{' '}
        <Mail />.
      </p>

      <h2>6. Questions</h2>
      <p>For any question about our licence or regulatory status, email <Mail /> or call <a href={SITE.phoneHref}>{SITE.phone}</a>.</p>
    </LegalPage>
  );
}

/* ---------------------------------------------------------
   Cookie Policy
   --------------------------------------------------------- */
export function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" first="Cookie" second="Policy.">
      <h2>1. What cookies are</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. Similar technologies include local storage and embedded
        content from third parties. This policy explains how the {SITE.short} website uses them.
      </p>
      <h2>2. Cookies we use</h2>
      <ul>
        <li><strong>Strictly necessary:</strong> technologies needed for the website to load and work correctly. These cannot be switched off.</li>
        <li><strong>Third-party content:</strong> our website loads fonts from Google Fonts and an embedded map from Google Maps on the Contact page. These services may set their own cookies or collect technical data, under their own privacy policies.</li>
      </ul>
      <p>We do not currently use advertising cookies. If we introduce analytics or marketing cookies in future, we will update this policy and, where required, ask for your consent first.</p>
      <h2>3. Managing cookies</h2>
      <p>
        You can block or delete cookies through your browser settings. Blocking strictly necessary technologies may stop parts of the website from
        working properly.
      </p>
      <h2>4. Contact</h2>
      <p>For questions about this policy, email <Mail />. See also our <Link to="/privacy">Privacy Policy</Link>.</p>
    </LegalPage>
  );
}

/* ---------------------------------------------------------
   Complaints Policy
   --------------------------------------------------------- */
export function Complaints() {
  return (
    <LegalPage title="Complaints Policy" first="Complaints" second="Policy.">
      <h2>1. Our commitment</h2>
      <p>
        We want every client to be treated fairly. If you are unhappy with our service, please tell us so that we can put it right. Complaints
        are handled promptly, fairly and free of charge.
      </p>
      <h2>2. Complaints about our introduction service</h2>
      <p>This covers matters within our control, such as the information we gave you, our written disclosure or how our team treated you.</p>
      <ul>
        <li><strong>How to complain:</strong> email <Mail /> with the subject “Complaint”, or call <a href={SITE.phoneHref}>{SITE.phone}</a>. Please include your name, contact details, what happened and what outcome you would like.</li>
        <li><strong>Acknowledgement:</strong> we aim to acknowledge your complaint within 2 business days.</li>
        <li><strong>Response:</strong> we aim to send a full written response within 15 business days. If we need more time, we will tell you why and when to expect our answer.</li>
      </ul>
      <h2>3. Complaints about a provider</h2>
      <p>
        Accounts, loans, policies, claims, trades, deposits and withdrawals are the responsibility of the provider you were introduced to. Please
        raise these complaints directly with the provider, using its complaints process. Each provider must handle complaints under the rules of
        its own regulator, and you may be able to escalate to that regulator or its dispute-resolution body. We will gladly help you understand who
        to contact.
      </p>
      <h2>4. If you are not satisfied</h2>
      <p>
        If you are not satisfied with our final response, you may contact the Department of Economy and Tourism, Dubai, which issued our licence,
        including through its consumer-protection channels at{' '}
        <a href="https://www.consumerrights.ae" target="_blank" rel="noreferrer">www.consumerrights.ae</a>.
      </p>
    </LegalPage>
  );
}

/* ---------------------------------------------------------
   AML & KYC Policy
   --------------------------------------------------------- */
export function AmlPolicy() {
  return (
    <LegalPage title="AML & KYC Policy" first="AML & KYC" second="Policy.">
      <h2>1. Our commitment</h2>
      <p>
        {SITE.name} is committed to preventing money laundering, terrorist financing and sanctions evasion. We follow applicable UAE law,
        including Federal Decree-Law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism (as amended), and related
        regulations and guidance.
      </p>
      <h2>2. Our role as an introducer</h2>
      <p>
        We do not hold client money, so most customer due diligence is carried out by the regulated provider you are introduced to. Each provider
        performs its own identity verification, source-of-funds checks and ongoing monitoring before and after opening an account.
      </p>
      <h2>3. What we do</h2>
      <ul>
        <li>Collect basic identity and contact information before making an introduction.</li>
        <li>Screen clients and providers against applicable sanctions lists.</li>
        <li>Refuse or stop an introduction where information is false, incomplete or raises concerns.</li>
        <li>Report suspicious activity to the UAE Financial Intelligence Unit where the law requires.</li>
        <li>Keep records of introductions for the periods required by law.</li>
        <li>Train our team to recognise and escalate warning signs.</li>
      </ul>
      <h2>4. What we ask of you</h2>
      <ul>
        <li>Provide accurate, complete and up-to-date information.</li>
        <li>Use only accounts and payment methods in your own name with any provider.</li>
        <li>Never ask us, or anyone claiming to represent us, to receive or transfer money on your behalf.</li>
      </ul>
      <h2>5. Contact</h2>
      <p>Questions about this policy can be sent to <Mail />.</p>
    </LegalPage>
  );
}

export function RiskDisclosure() {
  return (
    <LegalPage title="Risk Disclosure" first="Risk" second="Disclosure.">
      <h2>1. Our role</h2>
      <LicenceStatement />
      <p>We provide general information and may introduce eligible clients to third-party regulated providers.</p>
      <p>
        We are not a bank, broker, lender or custodian. We do not accept, hold or transfer client funds or assets, open accounts on your behalf or
        execute transactions. Any account you open, and any product you use, is provided by the relevant third-party provider under its own terms,
        and that provider is responsible for it.
      </p>
      <h2>2. No guarantee of outcome</h2>
      <p>
        All financial products carry risk. The value of investments can fall as well as rise, and you may get back less than you put in. Past
        performance is not a reliable indicator of future results. No approval, rate, return or other financial outcome is guaranteed by us or by
        any information on this website.
      </p>
      <h2>3. Key risks to understand</h2>
      <ul>
        <li><strong>Credit and borrowing risk:</strong> borrowing must be repaid with interest or profit, and missed payments can affect your credit record.</li>
        <li><strong>Market risk:</strong> prices can move sharply due to economic, political or market events.</li>
        <li><strong>Leverage risk:</strong> leveraged or margined products, such as CFDs and forex, can magnify losses as well as gains, and you may lose all of your invested capital.</li>
        <li><strong>Liquidity risk:</strong> some products may be difficult to sell quickly or at a fair price.</li>
        <li><strong>Currency risk:</strong> exchange-rate movements can affect the value of products in foreign currencies.</li>
        <li><strong>Digital-asset risk:</strong> crypto CFDs and other digital-asset products can be extremely volatile and are subject to evolving regulation.</li>
        <li><strong>Insurance limits:</strong> every policy has exclusions, limits and an excess; read the policy wording before you buy.</li>
        <li><strong>Provider risk:</strong> the performance, solvency and conduct of a third-party provider are outside our control, and investor protection differs between jurisdictions.</li>
      </ul>
      <h2>4. General information only</h2>
      <p>
        Information on this website and in our conversations is general in nature. It does not take full account of your personal objectives,
        financial situation or needs and is not a personal recommendation. You should consider whether a product is appropriate for you and, where
        necessary, seek independent financial, tax or legal advice.
      </p>
      <h2>5. Your responsibilities</h2>
      <ul>
        <li>Read each provider’s terms, fees and risk disclosures before opening an account.</li>
        <li>Verify the provider’s licence with its regulator.</li>
        <li>Only commit money you can afford to have at risk.</li>
        <li>Keep your account credentials private and never share them with us.</li>
      </ul>
      <h2>6. Availability</h2>
      <p>Products and services offered by providers vary and may not be available to every client. Availability depends on the provider, your eligibility and the law that applies to you.</p>
      <h2>7. Contact</h2>
      <p>If you have any questions about this disclosure, please <Link to="/contact">contact us</Link> or email <Mail />.</p>
    </LegalPage>
  );
}

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy" first="Privacy" second="Policy.">
      <h2>1. Who we are</h2>
      <p>
        This policy explains how we handle personal information. We aim to process personal data in line with applicable UAE law, including
        Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.
      </p>
      <LicenceStatement />
      <h2>2. Information we collect</h2>
      <ul>
        <li><strong>Information you provide:</strong> your name, email address, phone number, the type of client you are, and the details of your enquiry.</li>
        <li><strong>Eligibility information:</strong> information you choose to share so we can check whether an introduction is appropriate.</li>
        <li><strong>Website data:</strong> basic technical information such as browser type, device and pages visited, where collected by our website or hosting provider.</li>
      </ul>
      <p>Please do not send us account passwords, authentication codes or payment card details.</p>
      <h2>3. How we use information</h2>
      <ul>
        <li>To respond to your enquiry and check your eligibility</li>
        <li>To prepare your written disclosure and make an introduction</li>
        <li>To share your details with a provider, but only after you agree to be introduced</li>
        <li>To keep appropriate business records and meet our legal obligations</li>
        <li>To maintain and protect the security of our website</li>
      </ul>
      <h2>4. Sharing and retention</h2>
      <p>
        We do not sell your personal information. We share it only where necessary: with a provider you have agreed to be introduced to, with
        service providers who support our business (for example, email or website hosting), or where required by law or a competent authority.
      </p>
      <p>We keep personal information only for as long as needed for the purposes above or as required by law, after which it is securely deleted.</p>
      <h2>5. Your rights</h2>
      <p>
        Subject to applicable law, you may ask to access, correct or delete your personal information, object to or restrict certain processing,
        and withdraw your consent at any time. You may also opt out of non-essential communications. To make a request, please contact us.
      </p>
      <h2>6. Cookies</h2>
      <p>
        Our website uses only the technologies needed for it to function. Embedded third-party content, such as maps or fonts, may be subject to
        the privacy policies of those third parties. You can control cookies through your browser settings.
      </p>
      <h2>7. Security</h2>
      <p>We take reasonable technical and organisational measures to protect personal information. However, no transmission over the internet is completely secure.</p>
      <h2>8. Changes and contact</h2>
      <p>
        We may update this policy from time to time, and the latest version will always be available on this page. For any privacy questions or
        requests, email <Mail /> or call <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>
    </LegalPage>
  );
}

export function Terms() {
  return (
    <LegalPage title="Terms & Conditions" first="Terms &" second="Conditions.">
      <h2>1. About these terms</h2>
      <p>
        These terms govern your use of this website and any enquiry you make through it. By using the website, you agree to these terms.
      </p>
      <LicenceStatement />
      <h2>2. Our services</h2>
      <p>
        In line with our licence, we act solely as an introducer. Our services consist of understanding your needs, checking your eligibility,
        providing a written disclosure and, where appropriate, introducing you to a third-party regulated provider. See{' '}
        <Link to="/licences-and-regulation">Licences &amp; Regulation</Link> for exactly what our licence does and does not cover.
      </p>
      <p>
        We do not accept client funds, open accounts, approve applications or execute transactions. Any agreement for a financial product is made
        directly between you and the relevant provider, under that provider’s terms.
      </p>
      <h2>3. Information on this website</h2>
      <p>
        Content on this website is general and educational. It is not a personal recommendation, an offer or a solicitation to buy or sell any
        financial product. We take reasonable care to keep it accurate, but we do not guarantee that it is complete or up to date. Please read our{' '}
        <Link to="/risk-disclosure">Risk Disclosure</Link>.
      </p>
      <h2>4. Acceptable use</h2>
      <ul>
        <li>Use the website only for lawful purposes.</li>
        <li>Do not attempt to interfere with the website’s security or operation.</li>
        <li>Do not submit false, misleading or third-party information without permission.</li>
      </ul>
      <h2>5. Intellectual property</h2>
      <p>
        The website’s content, design and branding belong to {SITE.name} or its licensors. You may view and print pages for personal,
        non-commercial use, but you may not reproduce or distribute them without our written permission.
      </p>
      <h2>6. Third-party links and providers</h2>
      <p>
        The website may link to third-party websites or services. We are not responsible for their content, products or practices, and an
        introduction to a provider does not mean we guarantee its performance.
      </p>
      <h2>7. Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any loss arising from your use of this website or from decisions you make based on
        its general content, or from the products, services or conduct of any third-party provider.
      </p>
      <h2>8. Eligibility and restricted jurisdictions</h2>
      <p>
        Our services are intended for individuals aged 18 or over and for businesses resident or established in the United Arab Emirates. Nothing
        on this website is an offer, solicitation or recommendation in any jurisdiction where it would be unlawful. Providers we introduce may
        apply their own restrictions on residence and nationality.
      </p>
      <h2>9. Complaints</h2>
      <p>If you are unhappy with our service, please follow our <Link to="/complaints">Complaints Policy</Link>.</p>
      <h2>10. Governing law</h2>
      <p>
        These terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any dispute will be subject
        to the jurisdiction of the courts of Dubai.
      </p>
      <h2>11. Changes and contact</h2>
      <p>We may update these terms from time to time. For questions, please <Link to="/contact">contact us</Link> or email <Mail />.</p>
    </LegalPage>
  );
}

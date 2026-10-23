import { Link } from 'react-router-dom';
import { Container, Muted, Panel, PageHero, useTitle } from '../components/ui';
import { SITE } from '../data/site';

const UPDATED = '20 October 2026';

/* Shared wrapper: hero + readable prose column */
function LegalPage({ title, first, second, children }) {
  useTitle(title);
  return (
    <>
      <PageHero crumb={title} chip="Legal" lines={false} title={<>{first} <Muted>{second}</Muted></>} sub={`Last updated: ${UPDATED}`} />
      <Panel>
        <Container className="max-w-[820px] [&_a]:text-brand [&_a]:underline [&_h2]:mb-3.5 [&_h2]:mt-[50px] [&_h2]:text-[26px] [&_h2]:font-medium [&_h2]:tracking-[-.015em] [&_h2:first-child]:mt-0 [&_li]:text-[15px] [&_li]:leading-[1.75] [&_li]:text-copy [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:text-copy [&_p+p]:mt-3 [&_ul]:my-3 [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-1.5 [&_ul]:pl-[22px]">
          {children}
        </Container>
      </Panel>
    </>
  );
}

const Mail = () => <a href={`mailto:${SITE.email}`}>{SITE.email}</a>;

export function RiskDisclosure() {
  return (
    <LegalPage title="Risk Disclosure" first="Risk" second="Disclosure.">
      <h2>1. Our role</h2>
      <p>
        {SITE.name} (“Bhaarat Sky”, “we”, “us”) is a Dubai-based company that introduces clients to financial services. We provide general
        information and may introduce eligible clients to third-party regulated providers.
      </p>
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
        This policy explains how {SITE.name} (“Bhaarat Sky”, “we”, “us”), {SITE.address}, handles personal information. We aim to process
        personal data in line with applicable UAE law, including Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.
      </p>
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
        These terms govern your use of this website and any enquiry you make through it. The website is operated by {SITE.name}, a limited
        liability company registered in Dubai, United Arab Emirates. By using the website, you agree to these terms.
      </p>
      <h2>2. Our services</h2>
      <p>
        We act solely as an introducer. Our services consist of understanding your needs, checking your eligibility, providing a written
        disclosure and, where appropriate, introducing you to a third-party regulated provider.
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
      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any dispute will be subject
        to the jurisdiction of the courts of Dubai.
      </p>
      <h2>9. Changes and contact</h2>
      <p>We may update these terms from time to time. For questions, please <Link to="/contact">contact us</Link> or email <Mail />.</p>
    </LegalPage>
  );
}

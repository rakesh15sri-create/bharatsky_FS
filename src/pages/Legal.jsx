import { Link, useLocation } from 'react-router-dom';
import { Container, Muted, Panel, PageHero, useTitle } from '../components/ui';
import { LEGAL_LINKS, LICENCE, SITE } from '../data/site';

const UPDATED = '26 October 2026';

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

      <h2>6. How we are paid</h2>
      <p>
        We receive referral fees only from the licensed and regulated institutions to which clients are successfully introduced. We never receive,
        hold or process client funds or assets. Where a referral fee applies to your introduction, it is set out in your written disclosure.
      </p>

      <h2>7. Staff remuneration and conflicts of interest</h2>
      <p>
        Our Rewards Program sets out how our team is assessed and rewarded. It is designed so that pay never encourages staff to put volume ahead
        of your interests:
      </p>
      <ul>
        <li>Performance is assessed once a year on two equally weighted dimensions: <strong>results</strong> against role objectives and <strong>behaviours</strong>, including compliance with our policies, fair treatment of clients and professional conduct.</li>
        <li>Staff involved in introductions have targets that include conduct and quality measures, not volume or revenue alone.</li>
        <li>Before any bonus or incentive is paid, our Compliance Officer confirms in writing that it does not create a regulatory conflict or conduct risk.</li>
        <li>Discretionary awards require documented grounds, sign-off by both the line manager and senior management, and a compliance review.</li>
        <li>Incentive structures are reviewed every year against our regulatory obligations, risk appetite and duties to clients.</li>
      </ul>

      <h2>8. Governance</h2>
      <p>
        Our governance arrangements are set out in our Governance Manual and are proportionate to the size and nature of our business. As we are
        in our initial phase of operations, we do not yet have a Board of Directors. Governance is exercised by the Head of Category and the
        Shareholder, with documented accountability and escalation. A Board, with an appropriate balance of executive and non-executive directors
        and supporting committees, will be appointed as the business grows, and we will notify the regulator of any appointments.
      </p>
      <ul>
        <li><strong>Head of Category:</strong> responsible for the overall management of our introduction activity, our business plan, clear reporting lines and segregation of duties, and a culture of compliance and integrity. Material matters are escalated to the Shareholder.</li>
        <li><strong>Head of Compliance and Money Laundering Reporting Officer:</strong> ordinarily resident in the UAE, with unrestricted access to senior management, the Shareholder and all company records. This role maintains our compliance, AML and financial-crime policies, monitors compliance with applicable rules, trains staff, handles regulatory reporting and manages reporting to the UAE Financial Intelligence Unit. It reports to the Head of Category, with the right to escalate to the Shareholder and the regulator.</li>
        <li><strong>Internal audit:</strong> independent reviews of our controls, governance and compliance framework, which may be outsourced to an accredited firm. Findings are reported to senior management.</li>
        <li><strong>Remuneration:</strong> overseen by the Head of Category, subject to Shareholder oversight, and designed so that it never rewards misconduct or regulatory breaches.</li>
      </ul>
      <p>
        See also our <Link to="/aml-policy">AML &amp; CFT Policy</Link> and the risk-management section of our{' '}
        <Link to="/risk-disclosure">Risk Disclosure</Link>.
      </p>

      <h2>9. Our code of conduct</h2>
      <p>
        Everyone who works for us, including employees, consultants, interns and outsourced staff, is bound by our Code of Conduct. In particular,
        our team must:
      </p>
      <ul>
        <li>never give personalised investment recommendations, suitability assessments or investment advice. These are provided only by the licensed institutions we introduce you to;</li>
        <li>never suggest that we execute transactions, hold client assets, or provide custody or portfolio management services;</li>
        <li>communicate clearly, accurately and promptly, and never misrepresent or leave out material facts;</li>
        <li>keep your information confidential and share it only with your consent or where the law requires;</li>
        <li>declare any conflict of interest to the Head of Compliance, who decides how it is managed;</li>
        <li>treat every client with respect and without discrimination;</li>
        <li>complete the training and qualifications required for their role, including regular AML, compliance and data-protection training;</li>
        <li>only publish marketing or informational content that has been approved by the Head of Compliance.</li>
      </ul>
      <p>
        Our staff may not promote financial products or investment opportunities on our behalf through personal or unofficial social-media
        accounts. If someone contacts you this way claiming to represent {SITE.short}, please treat it with caution and verify by emailing{' '}
        <Mail />.
      </p>
      <p>
        Staff must report any breach of the code, the law or our policies to our compliance team, and may do so confidentially. Anyone who reports
        a concern in good faith is protected.
      </p>

      <h2>10. Questions</h2>
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
        We want every client to be treated fairly. You have the right to complain, and we are committed to resolving every complaint promptly,
        fairly, transparently and free of charge. Complaints are handled by our Head of Compliance, who is independent of the team that served
        you.
      </p>

      <h2>2. What counts as a complaint</h2>
      <p>
        A complaint is any expression of dissatisfaction, made verbally, in writing or electronically, about our service or how you were treated.
        Examples include:
      </p>
      <ul>
        <li>we gave you inadequate or inaccurate information or disclosure;</li>
        <li>negligence or delay on our part that caused you a financial loss;</li>
        <li>we did not meet the client-protection standards or code of conduct we must follow;</li>
        <li>we shared your confidential information without your consent or a legal requirement.</li>
      </ul>
      <p>
        Matters that do not meet this definition are treated as a grievance. Grievances are still investigated fairly, and we aim to give you a
        written answer within 5 working days.
      </p>

      <h2>3. How to complain</h2>
      <p>
        Email <Mail /> with the subject “Complaint”, call <a href={SITE.phoneHref}>{SITE.phone}</a>, or write to us at {SITE.address}. Please
        include your name, contact details, what happened, the outcome you would like, and copies of any relevant documents.
      </p>
      <p>
        If you complain by phone or in person, our Head of Compliance will contact you, record the details, and send you a written summary to
        confirm that your complaint has been captured accurately.
      </p>

      <h2>4. What happens next</h2>
      <ul>
        <li><strong>Within 24 hours:</strong> your complaint is logged in our Complaints Register and assessed.</li>
        <li><strong>Within 3 working days:</strong> we acknowledge your complaint in writing and confirm that an investigation is under way.</li>
        <li><strong>Investigation:</strong> we review the relevant records, speak to the staff involved and to you. You have the right to be heard and to provide any supporting documents. On request, we will send you a copy of our complaints procedure.</li>
        <li><strong>Within 10 working days:</strong> we aim to complete a full review of the matters raised.</li>
        <li><strong>Within 15 working days:</strong> if we cannot resolve your complaint by then, we will contact you to explain why.</li>
        <li><strong>Within 20 working days:</strong> we aim to send you our final written response, setting out our findings, any remedy and your options for escalation. Complex cases may take up to 8 weeks from the date we received your complaint.</li>
      </ul>
      <p>
        Where a complaint is upheld, remedies may include an apology, a correction, compensation or other appropriate redress. Any financial
        remedy is approved by our Head of Category. We also use what we learn from complaints to fix recurring problems and improve our service.
      </p>

      <h2>5. Complaints about a provider</h2>
      <p>
        Accounts, loans, policies, claims, trades, deposits and withdrawals are the responsibility of the provider you were introduced to. Please
        raise these complaints directly with the provider, using its complaints process. Each provider must handle complaints under the rules of
        its own regulator, and you may be able to escalate to that regulator or its dispute-resolution body. We will gladly help you understand who
        to contact.
      </p>

      <h2>6. If you are not satisfied</h2>
      <p>
        If you are not satisfied with our final response, or your complaint is not resolved within 8 weeks, you may escalate it in writing, with
        your supporting documents:
      </p>
      <ul>
        <li>
          <strong>Capital Market Authority (CMA):</strong> where the CMA supervises our introduction activity, it can review complaints against us,
          including through mediation and conciliation. If a matter is not settled, the parties may appeal the CMA’s determination or take the
          matter to the Dubai Courts. We will give you the CMA’s contact details on request.
        </li>
        <li>
          <strong>Department of Economy and Tourism, Dubai:</strong> which issued our commercial licence, including through its consumer-protection
          channels at <a href="https://www.consumerrights.ae" target="_blank" rel="noreferrer">www.consumerrights.ae</a>.
        </li>
      </ul>

      <h2>7. Records</h2>
      <p>
        Every complaint is recorded in our Complaints Register, together with the correspondence, our findings and any redress offered. These
        records are kept for at least ten years from the date the complaint was received.
      </p>
    </LegalPage>
  );
}

/* ---------------------------------------------------------
   AML & CFT Policy (public summary of the internal AML and CFT Policy, v1.1)
   --------------------------------------------------------- */
const CDD_LEVELS = [
  ['Low', 'Simplified due diligence', 'Every 3 years'],
  ['Medium', 'Standard due diligence', 'Every 2 years'],
  ['High', 'Enhanced due diligence', 'Every year'],
];

export function AmlPolicy() {
  return (
    <LegalPage title="AML & CFT Policy" first="AML & CFT" second="Policy.">
      <h2>1. Our commitment</h2>
      <p>
        {SITE.name} takes a <strong>zero-tolerance approach</strong> to money laundering, terrorist financing, the financing of illegal
        organisations, proliferation financing and sanctions evasion. This page summarises our Anti-Money Laundering and Counter-Terrorist
        Financing (“AML &amp; CFT”) Policy, which applies to everyone who works for or on behalf of the Company, including directors,
        consultants and outsourced service providers who deal with clients or client data.
      </p>
      <p>
        Any breach or suspected breach of the law is promptly investigated, escalated and, where required, reported to the competent authorities,
        including the UAE Financial Intelligence Unit (FIU).
      </p>

      <h2>2. Laws and regulations we follow</h2>
      <p>Our policy is built on UAE federal law, international standards and the rules of our regulators, including:</p>
      <ul>
        <li>Federal Decree-Law No. 10 of 2025 on Anti-Money Laundering, Combating the Financing of Terrorism and Combating Proliferation Financing, which replaces Federal Decree-Law No. 20 of 2018;</li>
        <li>Cabinet Decision No. 10 of 2019 and the related implementing regulations;</li>
        <li>Cabinet Resolution No. 74 of 2020 on the UAE terrorist list and the implementation of UN Security Council resolutions on terrorism and proliferation of weapons of mass destruction;</li>
        <li>Cabinet Resolution No. 58 of 2020 on the regulation of beneficial ownership procedures;</li>
        <li>The Capital Market Authority’s regulations, including Chairman’s Decision No. 13 of 2021 on the Regulations Manual of the Financial Activity and Status Regularization Mechanisms;</li>
        <li>The UAE Penal Code, UN Security Council sanctions and resolutions, and the Recommendations of the Financial Action Task Force (FATF).</li>
      </ul>

      <h2>3. Our role and client money</h2>
      <p>
        We are an introducer. We <strong>do not at any stage hold, receive, transfer, control or manage client money or assets</strong>. We do not
        operate trading accounts, hold discretionary mandates, execute transactions or give payment instructions on behalf of clients. Account
        opening, execution, settlement, payments and custody are handled directly and exclusively by the licensed and regulated institutions to
        which clients are introduced. We receive only referral fees from those institutions for clients successfully introduced.
      </p>
      <p>
        Each provider also carries out its own customer due diligence and monitoring. Our checks are in addition to, not a substitute for, the
        provider’s checks.
      </p>

      <h2>4. Who is responsible</h2>
      <ul>
        <li><strong>Head of Compliance and Money Laundering Reporting Officer (MLRO):</strong> these roles are combined. The MLRO oversees our AML &amp; CFT framework day to day, receives internal reports of suspicion, decides independently whether to report to the FIU, and is our point of contact with the authorities. The MLRO has direct access to senior management and unrestricted access to the information needed to do the job.</li>
        <li><strong>Head of Category and Sole Shareholder:</strong> given the size and nature of our business, governance and oversight are currently exercised by the Head of Category and the Sole Shareholder. A Board of Directors will be appointed as the business grows and regulation requires.</li>
        <li><strong>All staff:</strong> every employee must read the policy, sign a declaration that they understand it, and report any knowledge or suspicion of money laundering to the MLRO.</li>
      </ul>

      <h2>5. A risk-based approach</h2>
      <p>
        We assess money-laundering risk across our business at least once a year, and whenever our business changes, taking into account our
        clients, the countries we deal with, our services, our delivery channels and partners, and new technologies. We also take into account the
        UAE National Risk Assessment.
      </p>
      <p>
        Before carrying out due diligence on a new client, we assess that client individually and assign a risk rating. We consider the client’s
        identity and beneficial owners, the purpose of the relationship, the nature of their business, their ownership structure, their country of
        origin, residence or incorporation, and the service involved. The rating decides the level of due diligence and how often we review the
        client file:
      </p>
      <div className="my-5 overflow-hidden rounded-card border border-line bg-white text-[15px]">
        <div className="grid grid-cols-3 gap-3 bg-panel px-5 py-3 font-semibold sm:px-7">
          <span>Risk rating</span><span>Due diligence</span><span>File review</span>
        </div>
        {CDD_LEVELS.map(([rating, level, review]) => (
          <div key={rating} className="grid grid-cols-3 gap-3 border-t border-line px-5 py-3.5 sm:px-7">
            <span className="font-medium">{rating}</span><span className="text-copy">{level}</span><span className="text-copy">{review}</span>
          </div>
        ))}
      </div>
      <p>
        Every high-risk relationship, and every relationship involving a politically exposed person, must be approved by senior management.
      </p>

      <h2>6. Customer due diligence</h2>
      <p>Customer due diligence means identifying you, verifying your identity using reliable and independent sources, and understanding the nature of your business and where your funds come from. We ask for:</p>
      <ul>
        <li><strong>Individuals:</strong> full name (including any alias), date of birth, nationality, legal domicile and current residential address (not a P.O. box), verified from a valid passport or, if you do not hold one, an official photo ID.</li>
        <li><strong>Companies:</strong> full legal and trading name, registered office and principal place of business, date and place of incorporation, certificate of incorporation, articles of association and the names of senior management.</li>
        <li><strong>Foundations:</strong> a certified copy of the charter and by-laws and evidence of the appointment of the guardian or others who exercise powers.</li>
        <li><strong>Trusts and similar arrangements:</strong> a certified copy of the trust deed and evidence of the appointment of the trustee.</li>
        <li><strong>Beneficial owners:</strong> the natural persons who ultimately own or control a client, including anyone with a controlling interest of more than 25%, and, for trusts and foundations, the settlor, trustee, protector, founder, guardian and beneficiaries.</li>
        <li><strong>People acting for a client:</strong> their identity and evidence of their authority to act.</li>
      </ul>
      <p>
        Where we cannot see original documents, we accept copies certified by a person of good standing, such as a lawyer, notary, chartered
        accountant or bank manager. For non-face-to-face onboarding, we verify passports and identity documents over a video call. Due diligence
        must be completed before an introduction is made.
      </p>

      <h2>7. Enhanced due diligence and politically exposed persons</h2>
      <p>For high-risk clients we carry out enhanced due diligence, which may include:</p>
      <ul>
        <li>additional identification information and the reasons for a relationship or transaction;</li>
        <li>documentary evidence of your source of funds and source of wealth, such as bank statements, salary certificates, share certificates, audited accounts or probate documents;</li>
        <li>a closer look at complex structures to confirm they have a genuine and legitimate purpose;</li>
        <li>more frequent reviews and closer monitoring, and in very high-risk cases an independent third-party report.</li>
      </ul>
      <p>
        If you, or a beneficial owner, are a politically exposed person (PEP), or a family member or close associate of one, we obtain senior
        management approval, take reasonable steps to establish your source of wealth and funds, and monitor the relationship more closely. Being
        a PEP does not automatically make a client high risk.
      </p>

      <h2>8. Business we will not accept</h2>
      <ul>
        <li>Clients whose ownership or control prevents us from identifying the ultimate beneficial owners, including structures using bearer shares.</li>
        <li>Anonymous accounts, accounts in fictitious names, or nominee arrangements for undisclosed persons.</li>
        <li>Shell banks, or banks known to allow their accounts to be used by shell banks.</li>
        <li>Any person identified as a proscribed person by the UN, any UAE authority, UK HM Treasury or the US Office of Foreign Assets Control (OFAC).</li>
      </ul>

      <h2>9. Sanctions screening</h2>
      <p>
        We screen clients, potential clients, beneficial owners and authorised persons against the UN Security Council Consolidated List and the
        UAE Local Terrorist List, as well as EU, UK HM Treasury and US OFAC lists, using screening tools such as World-Check (LSEG). Screening takes
        place before onboarding, when client information changes or is reviewed, and without delay whenever the lists are updated. We subscribe to
        updates from the UAE Executive Office for Control and Non-Proliferation.
      </p>
      <p>
        If we find a confirmed match, we apply the measures required by Cabinet Resolution No. 74 of 2020 without delay (within 24 hours) and
        without prior notice, and report through the FIU’s goAML platform within five business days. For a potential match, we suspend any service
        and file a Partial Name Match Report until the authorities instruct us. These measures also apply to entities more than 50% owned or
        controlled by a designated person, and to anyone acting on their behalf.
      </p>

      <h2>10. Ongoing monitoring</h2>
      <p>
        We keep client information up to date and watch for activity that does not fit what we know about a client, such as unusually large or
        complex requests with no clear economic purpose. We review client files on the schedule set by their risk rating, and sooner if there is a
        material change in the relationship, the client’s ownership or our own requirements.
      </p>

      <h2>11. Reporting suspicious activity</h2>
      <p>
        Staff must report any knowledge or suspicion of money laundering or terrorist financing to the MLRO, even if no business relationship is
        formed. The MLRO investigates, documents the decision and, where required, files a Suspicious Activity or Transaction Report with the FIU
        through goAML and notifies the relevant supervisory authority. Reports made in good faith are protected by law.
      </p>
      <p>
        UAE law makes it a criminal offence to “tip off” anyone that a report has been or may be made. For this reason we may be unable to explain
        why we have declined or stopped an introduction.
      </p>

      <h2>12. If due diligence cannot be completed</h2>
      <p>
        If we cannot complete due diligence, we will not make an introduction or provide a service, and we may end an existing relationship and
        consider whether a report to the FIU is required.
      </p>

      <h2>13. Reliance on third parties</h2>
      <p>
        We may rely on due diligence carried out by a regulated financial institution, law firm, notary or audit firm, but only where it meets FATF
        standards, can provide the underlying documents to us without delay, and is approved in advance by the MLRO. We remain responsible for the
        result.
      </p>

      <h2>14. Training</h2>
      <p>
        All relevant staff receive AML &amp; CFT training when they join and at least once a year. Training covers the law, our procedures, how to
        recognise and report suspicious activity, current money-laundering methods and sanctions obligations.
      </p>

      <h2>15. Record keeping</h2>
      <p>
        We keep due diligence records, risk assessments, internal and external reports, correspondence and training records for at least six years
        from the end of the business relationship or the date of the report, whichever is later. Records are kept in English (or with a
        translation) and can be produced to the authorities promptly on request.
      </p>

      <h2>16. What we ask of you</h2>
      <ul>
        <li>Provide accurate, complete and up-to-date information and tell us about any material change.</li>
        <li>Answer questions about your source of funds and wealth, and the purpose of the relationship, when asked.</li>
        <li>Use only accounts and payment methods in your own name with any provider.</li>
        <li>Never ask us, or anyone claiming to represent us, to receive or transfer money on your behalf.</li>
      </ul>

      <h2>17. Review and contact</h2>
      <p>
        This policy is reviewed by the Head of Compliance and MLRO, and its effectiveness is tested through our compliance monitoring programme and
        by internal or external auditors. Questions can be sent to our compliance team at <Mail />.
      </p>
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
      <h2>7. How we manage our own risks</h2>
      <p>
        Under our Risk Management Policy, we identify, assess, control and monitor the risks in our own business so that we can keep serving
        clients reliably and in line with our regulatory obligations.
      </p>
      <ul>
        <li><strong>Risks we track:</strong> regulatory and conduct risk, money-laundering and financial-crime risk, liquidity risk, operational and technology risk (including cyber risk), and strategic and reputational risk.</li>
        <li><strong>How risks are scored:</strong> each risk is rated for likelihood and impact on a 1–5 scale. We then assess the strength of our controls to arrive at a residual risk of high, medium or low, recorded in a risk register with a named owner.</li>
        <li><strong>Three lines of defence:</strong> business managers own and control their risks; our compliance and risk-management function, led by the Head of Compliance, sets standards and challenges them; and an independent internal audit, which we intend to outsource to an accredited accounting firm, reviews the whole framework.</li>
        <li><strong>Controls:</strong> background checks on staff and contractors, a code of conduct with annual declarations, information barriers to protect confidential information, dual review (maker-checker) of onboarding and KYC data, two-person approval for commitments of company assets, and restricted access to our premises and systems.</li>
        <li><strong>Resilience:</strong> we maintain a business continuity plan and a disaster recovery plan.</li>
        <li><strong>Prudence:</strong> we only take on risks we understand and can manage, analyse new services before launching them, keep enough capital to meet regulatory requirements and our obligations as they fall due, and avoid concentrating our business in high-risk jurisdictions, sectors or client types.</li>
        <li><strong>Review:</strong> the full framework is reviewed at least once a year, with more time-sensitive areas reviewed more often.</li>
      </ul>
      <p>These measures protect our own operations. They do not reduce the risks of any product you take out with a provider, which are described above.</p>

      <h2>8. Contact</h2>
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
      <h2>7. Security and confidentiality</h2>
      <p>
        Everyone who works for us is bound by confidentiality obligations under our Code of Conduct and may access client information only where
        needed for their role. Access to our premises and systems is restricted, and onboarding and KYC data is subject to dual review.
      </p>
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
      <p>
        Every introduction is subject to our <Link to="/aml-policy">AML &amp; CFT Policy</Link>. We may decline or stop an introduction if we cannot
        complete due diligence or where the law requires, and we may not always be able to give a reason.
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

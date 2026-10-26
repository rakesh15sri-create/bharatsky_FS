import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Icon from './Icons';
import { Button, Container } from './ui';
import { LEGAL_LINKS, LICENCE, NAV, SITE } from '../data/site';
import { SERVICES } from '../data/services';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // wait for the new page to render before scrolling to its anchor
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

const pill = ({ isActive }) =>
  `block rounded-full px-4 py-2 text-[13px] transition-colors ${isActive ? 'bg-brand text-white' : 'text-[#d8d8d8] hover:text-white'}`;

function Logo({ className = '' }) {
  return (
    <Link to="/" className={`inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[22px] font-medium text-white ${className}`}>
      <Icon name="logo" className="h-[21px] w-[30px] shrink-0 fill-white" />
      <span>{SITE.short}</span>
    </Link>
  );
}

const isLegalPath = pathname => LEGAL_LINKS.some(([, to]) => to === pathname);

const Chevron = ({ className = '' }) => (
  <svg viewBox="0 0 12 12" aria-hidden="true" className={`size-3 transition-transform duration-200 ${className}`}>
    <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Desktop "Legal" dropdown: opens on hover or click, closes on navigation, Escape or outside click */
function LegalDropdown() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const ref = useRef(null);
  const active = isLegalPath(pathname);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && setOpen(false);
    const onClick = e => !ref.current?.contains(e.target) && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <li ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className={`flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-[13px] transition-colors ${
          active ? 'bg-brand text-white' : 'text-[#d8d8d8] hover:text-white'
        }`}
      >
        Legal
        <Chevron className={open ? 'rotate-180' : ''} />
      </button>
      {/* pt-3 bridges the gap so the menu stays open while the pointer moves down */}
      <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition duration-200 ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}>
        <ul className="w-[250px] rounded-2xl bg-night p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,.6)] ring-1 ring-white/10">
          {LEGAL_LINKS.map(([label, to]) => (
            <li key={to}>
              <NavLink
                to={to}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-2.5 text-[13px] transition-colors ${isActive ? 'bg-brand text-white' : 'text-[#d8d8d8] hover:bg-white/[.06] hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

/* Full-screen menu for phones and tablets (hidden from lg up) */
function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation();
  const [legalOpen, setLegalOpen] = useState(false);
  const legalActive = isLegalPath(pathname);

  // collapse the Legal list whenever the menu closes
  useEffect(() => {
    if (!open) setLegalOpen(false);
  }, [open]);

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 flex h-dvh flex-col overflow-x-hidden overflow-y-auto overscroll-contain bg-night px-6 pb-8 pt-[100px] text-white transition-[opacity,visibility] duration-300 sm:px-10 sm:pt-[120px] lg:hidden ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* soft brand glow, clipped to the screen so it can never cause sideways scrolling */}
      <span className="pointer-events-none fixed inset-0 overflow-hidden">
        <span className="absolute -right-32 -top-32 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,.28),transparent_65%)]" />
      </span>

      <span className="relative mb-6 text-xs font-medium uppercase tracking-[.08em] text-[#8a8a8a]">Menu</span>

      <nav className="relative">
        <ul className="border-t border-white/10">
          {NAV.map(({ to, label }, i) => (
            <li
              key={to}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              className={`border-b border-white/10 transition duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <NavLink
                to={to}
                end
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) =>
                  `group flex items-center justify-between py-4 text-[clamp(30px,9vw,48px)] font-medium tracking-[-.03em] transition-colors sm:py-5 ${
                    isActive ? 'text-brand' : 'text-white hover:text-brand'
                  }`
                }
              >
                <span className="flex items-baseline gap-4">
                  <span className="text-xs font-semibold tracking-normal text-[#6b6b6b]">{String(i + 1).padStart(2, '0')}</span>
                  {label}
                </span>
                <span className="grid size-10 place-items-center rounded-full bg-white/[.06] text-lg transition group-hover:translate-x-1 group-hover:bg-brand group-hover:text-white">→</span>
              </NavLink>
            </li>
          ))}
          <li
            style={{ transitionDelay: open ? `${80 + NAV.length * 50}ms` : '0ms' }}
            className={`border-b border-white/10 transition duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <button
              type="button"
              aria-expanded={legalOpen}
              aria-controls="mobile-legal-links"
              tabIndex={open ? 0 : -1}
              onClick={() => setLegalOpen(o => !o)}
              className={`group flex w-full cursor-pointer items-center justify-between py-4 text-left text-[clamp(30px,9vw,48px)] font-medium tracking-[-.03em] transition-colors sm:py-5 ${
                legalActive ? 'text-brand' : 'text-white hover:text-brand'
              }`}
            >
              <span className="flex items-baseline gap-4">
                <span className="text-xs font-semibold tracking-normal text-[#6b6b6b]">{String(NAV.length + 1).padStart(2, '0')}</span>
                Legal
              </span>
              <span className={`grid size-10 place-items-center rounded-full text-white transition ${legalOpen ? 'bg-brand' : 'bg-white/[.06] group-hover:bg-brand'}`}>
                <Chevron className={`size-3.5 ${legalOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>
            <div id="mobile-legal-links" className={`grid transition-[grid-template-rows] duration-300 ${legalOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <ul className="overflow-hidden">
                {LEGAL_LINKS.map(([label, to]) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={onClose}
                      tabIndex={open && legalOpen ? 0 : -1}
                      className={({ isActive }) =>
                        `block py-2.5 pl-9 text-[17px] transition-colors last:mb-4 ${isActive ? 'text-brand' : 'text-[#cfcfcf] hover:text-brand'}`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <div
        style={{ transitionDelay: open ? '380ms' : '0ms' }}
        className={`relative mt-auto pt-10 transition duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      >
        <Button to="/contact" onClick={onClose} tabIndex={open ? 0 : -1} className="w-full sm:w-auto">Request an introduction</Button>
        <div className="mt-6 grid gap-3 text-sm text-mute sm:grid-cols-2">
          <a href={SITE.phoneHref} tabIndex={open ? 0 : -1} className="flex items-center gap-3 hover:text-brand">
            <span className="grid size-9 place-items-center rounded-full bg-white/[.06]"><Icon name="phone" className="size-4" /></span>
            {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1} className="flex items-center gap-3 hover:text-brand">
            <span className="grid size-9 place-items-center rounded-full bg-white/[.06]"><Icon name="mail" className="size-4" /></span>
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // close on navigation
  useEffect(() => setOpen(false), [pathname]);

  // lock page scroll while open, close on Escape, and close if resized to desktop
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = e => e.key === 'Escape' && setOpen(false);
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = e => e.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-[18px]">
        <nav className="relative mx-auto flex h-14 max-w-[1400px] items-center justify-between rounded-full bg-night pl-5 pr-2 shadow-[0_10px_30px_-15px_rgba(0,0,0,.5)] sm:h-16 sm:pl-7 sm:pr-3">
          <Logo className="text-[19px] sm:text-[22px]" />

          {/* desktop links */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-1 lg:flex">
            {NAV.map(({ to, label }) => (
              <li key={to}><NavLink to={to} end className={pill}>{label}</NavLink></li>
            ))}
            <LegalDropdown />
          </ul>

          <div className="flex items-center gap-2 lg:gap-6">
            <a href={`mailto:${SITE.email}`} className="hidden items-center gap-2 text-[13px] text-white transition-colors hover:text-brand xl:inline-flex">
              <Icon name="mail" className="size-4" />
              {SITE.email}
            </a>
            {/* very small phones: icon-only enquire button */}
            <Link
              to="/contact"
              aria-label="Enquire Now"
              title="Enquire Now"
              className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-ink transition hover:bg-brand hover:text-white min-[400px]:hidden"
            >
              <Icon name="mail" className="size-[18px]" />
            </Link>
            {/* wider phones and up: full button with icon */}
            <span className="hidden min-[400px]:block">
              <Button to="/contact" variant="white" size="sm" className="gap-2">
                <Icon name="mail" className="size-4" />
                Enquire Now
              </Button>
            </span>
            <button
              className={`grid size-10 cursor-pointer place-items-center rounded-full transition-colors lg:hidden ${open ? 'bg-brand' : 'bg-white/[.08]'}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(o => !o)}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 block h-0.5 w-5 bg-white transition duration-300 ${open ? 'top-[5px] rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 block h-0.5 w-5 bg-white transition duration-300 ${open ? 'top-[5px] -rotate-45' : 'top-2.5'}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

const FOOTER_COLS = [
  ['Company', [['About Us', '/about'], ['Our Services', '/services'], ['Our Process', '/process'], ['Learning Centre', '/learn'], ['Partner With Us', '/partners'], ['Contact', '/contact']]],
  ['Services', SERVICES.map(s => [s.name, `/services#${s.id}`])],
  ['Contact', [['Send Enquiry', '/contact'], ['Call Us', SITE.phoneHref], ['Email Us', `mailto:${SITE.email}`], ['Al Sufouh 2, Dubai', '/contact']]],
  ['Legal', LEGAL_LINKS],
];

const SOCIAL = ['linkedin', 'instagram', 'facebook', 'youtube'];

// full class strings so Tailwind can see them
const TONES = {
  brand: { card: 'border-t-brand', icon: 'bg-brand/15 text-brand', label: 'text-brand' },
  sun: { card: 'border-t-sun', icon: 'bg-sun/15 text-sun', label: 'text-sun' },
  green: { card: 'border-t-emerald-400', icon: 'bg-emerald-400/15 text-emerald-400', label: 'text-emerald-400' },
  red: { card: 'border-t-red-500', icon: 'bg-red-500/15 text-red-400', label: 'text-red-400' },
  pink: { card: 'border-t-rose-400', icon: 'bg-rose-400/15 text-rose-300', label: 'text-rose-300' },
  sky: { card: 'border-t-sky-400', icon: 'bg-sky-400/15 text-sky-400', label: 'text-sky-400' },
};

const DISCLOSURES = [
  {
    label: SITE.name,
    icon: 'building',
    tone: 'brand',
    body: (
      <>
        A limited liability company (single owner) registered in Dubai, United Arab Emirates, and licensed by the {LICENCE.authority} under{' '}
        <strong>Commercial Licence No. {LICENCE.number}</strong> (Commercial Register No. {LICENCE.register}; Dubai Chamber Membership No.{' '}
        {LICENCE.chamber}) for the activity <strong>“{LICENCE.activity}”</strong>. Registered office: {SITE.address}.
      </>
    ),
  },
  {
    label: 'Scope of licence',
    icon: 'check',
    tone: 'sun',
    body: (
      <>
        Our licence covers <strong>introduction services only</strong>. {SITE.short} is not a bank, broker, dealer, insurer, lender or investment
        manager. We do not accept or hold client funds, open accounts, issue policies, execute transactions or give personal investment advice.
        Every product is provided by a third-party institution under its own licence, disclosed to you in writing before any introduction.
      </>
    ),
  },
  {
    label: 'Licence verification',
    icon: 'shield',
    tone: 'green',
    body: (
      <>
        You can verify our licence with the {LICENCE.authorityShort} using <strong>Licence No. {LICENCE.number}</strong>. Our licence is valid
        until {LICENCE.validUntil}. Full details are on our <Link to="/licences-and-regulation">Licences &amp; Regulation</Link> page. Always check
        the licence of any provider we introduce with its own regulator.
      </>
    ),
  },
  {
    label: 'Risk warning',
    icon: 'alert',
    tone: 'red',
    body: (
      <>
        Contracts for difference (CFDs), forex and other leveraged products are complex and carry a <strong>high risk of losing money rapidly</strong>,
        and losses can exceed deposits. All investments can fall as well as rise. Information on this website is general, not a personal
        recommendation. Please read our <Link to="/risk-disclosure">Risk Disclosure</Link>.
      </>
    ),
  },
  {
    label: 'Fraud warning',
    icon: 'cross',
    tone: 'pink',
    body: (
      <>
        We only contact you from <strong>{SITE.email}</strong> or <strong className="whitespace-nowrap">{SITE.phone}</strong>. We will <strong>never</strong> ask you to send money
        to us, share passwords or OTPs, or pay a fee to “unlock” an account or guarantee returns. If anyone claims to represent us otherwise, do not
        engage and report it to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </>
    ),
  },
  {
    label: 'Restricted jurisdictions',
    icon: 'globe',
    tone: 'sky',
    body: (
      <>
        Our services are intended for <strong>residents and businesses in the United Arab Emirates</strong>. Nothing on this website is an offer or
        solicitation in any jurisdiction where it would be unlawful, or to any person to whom it would be unlawful to make such an offer.
      </>
    ),
  },
];

function FooterLink({ label, to }) {
  const cls = 'mb-3 block text-xs text-mute hover:text-brand';
  return to.startsWith('/') ? <Link to={to} className={cls}>{label}</Link> : <a href={to} className={cls}>{label}</a>;
}

function Footer() {
  return (
    <footer className="bg-night pb-[30px] pt-20 text-white">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-[30px]">
          <ul className="flex flex-wrap gap-1.5">
            {NAV.map(({ to, label }) => (
              <li key={to}><NavLink to={to} end className={pill}>{label}</NavLink></li>
            ))}
          </ul>
          <a href={`mailto:${SITE.email}`} className="text-[clamp(28px,3.6vw,50px)] tracking-[-.02em] hover:text-brand">{SITE.email}</a>
        </div>

        <div className="mt-[60px] grid gap-10 md:mt-[110px] md:grid-cols-[1fr_1.6fr]">
          <div>
            <Logo />
            <p className="my-[18px] mb-[22px] text-xs leading-[1.7] text-mute">
              {SITE.name}<br />{SITE.address}<br />
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
            <div className="flex gap-3.5">
              {SOCIAL.map(s => (
                <a key={s} href="#" aria-label={s} className="text-white transition-colors hover:text-brand">
                  <Icon name={s} className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {FOOTER_COLS.map(([title, links]) => (
              <div key={title}>
                <h6 className="mb-4 text-[13px] font-medium">{title}</h6>
                {links.map(([label, to]) => <FooterLink key={label} label={label} to={to} />)}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[90px] flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <span className="whitespace-nowrap text-[clamp(34px,11vw,108px)] font-medium uppercase leading-none sm:text-[clamp(52px,8vw,108px)] tracking-[-.04em]">©{SITE.short}</span>
          <Icon name="logo" className="hidden h-[clamp(98px,14vw,182px)] w-[clamp(140px,20vw,260px)] fill-[#2b2b2b] sm:block" />
        </div>

        {/* legal & regulatory disclosures */}
        <div className="mt-[50px] grid gap-3 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {DISCLOSURES.map(({ label, icon, tone, body }) => (
            <div key={label} className={`rounded-card border border-white/[.08] border-t-2 bg-white/[.03] p-5 ${TONES[tone].card}`}>
              <div className="mb-3 flex items-center gap-2.5">
                <span className={`grid size-8 shrink-0 place-items-center rounded-full ${TONES[tone].icon}`}><Icon name={icon} className="size-4" /></span>
                <span className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${TONES[tone].label}`}>{label}</span>
              </div>
              <p className="text-xs leading-[1.7] text-[#9a9a9a] [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-white [&_strong]:font-medium [&_strong]:text-[#d8d8d8]">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 text-[11px] text-[#8a8a8a] lg:flex-row lg:items-center lg:justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map(([label, to]) => (
              <Link key={to} to={to} className="hover:text-white">{label}</Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

// floating contact + back-to-top buttons, bottom right
function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        title="Back to top"
        className={`grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,.35)] transition duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <Icon name="arrowUp" className="size-[18px]" />
      </button>
      <Link
        to="/contact"
        aria-label="Contact us"
        className="group flex h-14 items-center gap-2 rounded-full bg-brand pl-4 pr-4 text-white shadow-[0_10px_30px_-8px_rgba(255,90,31,.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark sm:pr-5"
      >
        <span className="relative grid size-6 place-items-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
          <Icon name="chat" className="relative size-6" />
        </span>
        <span className="hidden text-sm font-medium sm:inline">Contact us</span>
      </Link>
    </div>
  );
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main><Outlet /></main>
      <Footer />
      <FloatingActions />
    </>
  );
}

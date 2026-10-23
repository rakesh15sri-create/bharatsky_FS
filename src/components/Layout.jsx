import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Icon from './Icons';
import { Button, Container } from './ui';
import { NAV, SITE } from '../data/site';
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

/* Full-screen menu for phones and tablets (hidden from lg up) */
function MobileMenu({ open, onClose }) {
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
  ['Company', [['About Us', '/about'], ['Our Services', '/services'], ['Our Process', '/process'], ['Learning Centre', '/learn'], ['Contact', '/contact']]],
  ['Services', SERVICES.map(s => [s.name, `/services#${s.id}`])],
  ['Contact', [['Send Enquiry', '/contact'], ['Call Us', SITE.phoneHref], ['Email Us', `mailto:${SITE.email}`], ['Al Sufouh 2, Dubai', '/contact']]],
  ['Legal', [['Risk Disclosure', '/risk-disclosure'], ['Privacy Policy', '/privacy'], ['Terms & Conditions', '/terms'], ['FAQ', '/process#faq']]],
];

const SOCIAL = ['linkedin', 'instagram', 'facebook', 'youtube'];

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
          <span className="text-[clamp(52px,9vw,124px)] font-medium leading-none tracking-[-.04em]">©{SITE.short}</span>
          <Icon name="logo" className="hidden h-[clamp(98px,14vw,182px)] w-[clamp(140px,20vw,260px)] fill-[#2b2b2b] sm:block" />
        </div>

        <p className="mt-[50px] max-w-[820px] text-[11px] leading-[1.6] text-[#8a8a8a]">
          <strong>Important disclosure:</strong> {SITE.name} acts solely as an introducer, connecting clients to financial services provided by
          third-party regulated institutions. We are not a bank, broker or lender; we do not execute transactions, manage portfolios or accept
          client funds. Accounts and capital remain directly with the selected licensed provider, subject to its terms and approval. Information on
          this website is general and educational and is not a personal recommendation. No financial outcome is guaranteed.
        </p>

        <div className="mt-[70px] flex flex-wrap justify-between gap-5 text-[11px] text-[#8a8a8a]">
          <span>© Copyright {new Date().getFullYear()}, {SITE.name}. All Rights Reserved</span>
          <span className="flex gap-6">
            <Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}

import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Icon from './Icons';
import { Button, Container } from './ui';
import { NAV, SITE } from '../data/site';

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
    <Link to="/" className={`inline-flex items-center gap-2.5 text-[22px] font-medium text-white ${className}`}>
      <Icon name="logo" className="h-[21px] w-[30px] fill-white" />
      <span>{SITE.short}</span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-[18px]">
      <nav className="relative mx-auto flex h-[58px] max-w-[1400px] items-center justify-between rounded-full bg-night pl-5 pr-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,.5)] sm:h-16 sm:pl-7">
        <Logo />
        <ul
          className={`absolute left-0 right-0 top-[74px] flex flex-col gap-1 rounded-3xl bg-night p-3.5 transition-opacity duration-200 lg:left-1/2 lg:right-auto lg:top-auto lg:-translate-x-1/2 lg:flex-row lg:bg-transparent lg:p-0 lg:opacity-100 lg:pointer-events-auto ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          {NAV.map(({ to, label }) => (
            <li key={to}><NavLink to={to} end className={pill}>{label}</NavLink></li>
          ))}
        </ul>
        <div className="flex items-center gap-2 lg:gap-6">
          <a href={SITE.phoneHref} className="hidden text-[13px] text-white lg:inline">Call Us</a>
          <Button to="/contact" variant="white" size="sm">Enquire Now</Button>
          <button
            className="grid size-9 cursor-pointer place-items-center lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(o => !o)}
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

const FOOTER_COLS = [
  ['Company', [['About Us', '/about'], ['Our Services', '/services'], ['Our Process', '/process'], ['Contact', '/contact']]],
  ['Services', [['Personal Banking', '/services#banking'], ['Personal & Home Finance', '/services#finance'], ['Business Banking', '/services#business'], ['Investment Accounts', '/services#investment'], ['Islamic Finance', '/services#islamic']]],
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
          <Icon name="logo" className="h-[clamp(98px,14vw,182px)] w-[clamp(140px,20vw,260px)] fill-[#2b2b2b]" />
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

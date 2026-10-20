import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icons';

/* ---------- Typography ---------- */
export const Muted = ({ children }) => <span className="text-mute">{children}</span>;

export function H1({ children, className = '', as: Tag = 'h2' }) {
  return (
    <Tag className={`mt-[18px] text-[clamp(42px,6.4vw,96px)] font-medium leading-[1.04] tracking-[-0.035em] ${className}`}>
      {children}
    </Tag>
  );
}

export function H2({ children, className = '' }) {
  return (
    <h2 className={`mt-4 text-[clamp(32px,3.9vw,50px)] font-normal leading-[1.12] tracking-[-0.025em] ${className}`}>
      {children}
    </h2>
  );
}

export function Small({ children, className = '' }) {
  return <p className={`text-[13px] leading-[1.55] text-grey ${className}`}>{children}</p>;
}

export function Lead({ children }) {
  return <p className="text-[17px] leading-[1.65] text-copy [&+&]:mt-4">{children}</p>;
}

export function Chip({ children, className = '' }) {
  return (
    <span className={`inline-block rounded-full bg-[#ececec] px-3 py-1.5 text-[11px] font-medium text-[#777] ${className}`}>
      {children}
    </span>
  );
}

/* ---------- Buttons ---------- */
const BTN_BASE =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition duration-200 hover:-translate-y-0.5 cursor-pointer';
const BTN_SIZE = { md: 'h-[46px] px-6 text-sm', sm: 'h-10 px-5 text-[13px]' };
const BTN_VARIANT = {
  orange: 'bg-brand text-white shadow-[0_8px_20px_-8px_rgba(255,90,31,.7)] hover:bg-brand-dark',
  outline: 'border-[1.5px] border-ink bg-white text-ink hover:bg-ink hover:text-white',
  white: 'bg-white text-ink',
};

export function Button({ to, href, variant = 'orange', size = 'md', className = '', children, ...rest }) {
  const cls = `${BTN_BASE} ${BTN_SIZE[size]} ${BTN_VARIANT[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}

/* ---------- Round icon badge (sized by font-size) ---------- */
const IC_TONE = {
  orange: 'bg-brand text-white',
  grey: 'bg-[#f1f1f1] text-brand',
  yellow: 'bg-sun text-brand',
};

export function Ic({ name, tone = 'orange', className = '' }) {
  return (
    <span className={`inline-grid size-[1em] shrink-0 place-items-center rounded-full ${IC_TONE[tone]} ${className}`}>
      <Icon name={name} className={`size-[52%] ${name === 'logo' ? 'fill-current' : ''}`} />
    </span>
  );
}

// className controls size and visibility (e.g. "hidden md:block text-[104px]")
export function IcPair({ className = 'text-[104px]' }) {
  return (
    <div className={`shrink-0 ${className}`}>
      <div className="inline-flex items-center">
        <Ic name="trend" tone="grey" className="-mr-[.18em] size-[.78em]!" />
        <Ic name="bolt" />
      </div>
    </div>
  );
}

/* ---------- Layout helpers ---------- */
export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Panel({ children, className = '', id }) {
  return (
    <section id={id} className={`mx-auto w-[calc(100%-16px)] max-w-[1400px] rounded-[28px] bg-panel py-20 sm:w-[calc(100%-48px)] md:rounded-panel md:pb-[90px] md:pt-[130px] ${className}`}>
      {children}
    </section>
  );
}

export function SplitHead({ chip, title, children }) {
  return (
    <div className="mb-[60px] flex flex-col items-start justify-between gap-10 md:flex-row">
      <div>
        <Chip>{chip}</Chip>
        <H2>{title}</H2>
      </div>
      {children && <div className="flex max-w-[400px] flex-col items-start gap-[22px] pt-1">{children}</div>}
    </div>
  );
}

export function CheckList({ items, cross = false, className = '', dark = false }) {
  return (
    <ul className={`grid gap-3.5 ${dark ? 'text-[#e5e5e5]' : 'text-copy'} ${className}`}>
      {items.map(item => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-normal">
          <span className={`mt-px grid size-[22px] shrink-0 place-items-center rounded-full ${cross ? 'bg-[#ececec] text-[#555]' : 'bg-brand text-white'}`}>
            <Icon name={cross ? 'cross' : 'check'} className="size-3.5" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ListTitle({ children, className = 'text-grey' }) {
  return <p className={`mb-[18px] text-[13px] font-semibold uppercase tracking-[.06em] ${className}`}>{children}</p>;
}

export function InfoCard({ children, dark = false, className = '' }) {
  return (
    <div
      className={`flex flex-col gap-3.5 rounded-card border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,.25)] ${
        dark ? 'border-night bg-night text-white [&_p]:text-[#bdbdbd]' : 'border-line bg-white'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export const CardNum = ({ children }) => <span className="text-[13px] font-semibold text-brand">{children}</span>;
export const CardTitle = ({ children }) => <h3 className="text-[21px] font-medium tracking-[-.01em]">{children}</h3>;

/* ---------- Background line art ---------- */
export function HeroLines({ tall = false }) {
  const h = tall ? 800 : 600;
  return (
    <svg className="absolute inset-0 z-0 hidden size-full md:block" viewBox={`0 0 1500 ${h}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="#ececec" strokeWidth="1.2">
        <path d={`M0 420 H180 Q200 420 200 440 V${h}`} />
        <path d={`M60 0 V260 Q60 280 80 280 H250 Q270 280 270 300 V${h}`} />
        <path d={`M0 560 H120 Q140 560 140 580 V${h}`} />
        <path d="M330 0 V140 Q330 160 310 160 H120" />
        <path d={`M1500 420 H1320 Q1300 420 1300 440 V${h}`} />
        <path d={`M1440 0 V260 Q1440 280 1420 280 H1250 Q1230 280 1230 300 V${h}`} />
        <path d={`M1500 560 H1380 Q1360 560 1360 580 V${h}`} />
        <path d="M1170 0 V140 Q1170 160 1190 160 H1380" />
        {tall && (
          <>
            <path d="M420 800 V700 Q420 680 440 680 H560 Q580 680 580 660 V560" />
            <path d="M1080 800 V700 Q1080 680 1060 680 H940 Q920 680 920 660 V560" />
            <path d="M760 800 V720" />
          </>
        )}
      </g>
    </svg>
  );
}

/* ---------- Inner page hero ---------- */
export function PageHero({ crumb, chip, title, sub, children, lines = true }) {
  return (
    <section className="relative overflow-hidden pb-[70px] pt-20 text-center">
      {lines && <HeroLines />}
      <Container className="relative z-10">
        <div className="mb-[18px] flex justify-center gap-2 text-xs text-grey">
          <Link to="/" className="hover:text-brand">Home</Link> / <span>{crumb}</span>
        </div>
        <Chip className="bg-[#efefef]">{chip}</Chip>
        <h1 className="mb-[22px] mt-5 text-[clamp(40px,6.4vw,92px)] font-medium leading-[1.04] tracking-[-0.035em]">{title}</h1>
        {sub && <p className="mx-auto mb-[30px] max-w-[640px] text-[15px] leading-[1.55] text-grey">{sub}</p>}
        {children && <div className="flex flex-wrap justify-center gap-2.5">{children}</div>}
      </Container>
    </section>
  );
}

/* ---------- Closing call to action ---------- */
export function Cta({ title, sub, primary, secondary, meta }) {
  return (
    <section className="px-6 pb-[120px] pt-[70px] text-center">
      <Ic name="bolt" className="mb-[26px] text-[58px] shadow-[0_10px_30px_-8px_rgba(255,90,31,.6)]" />
      <h2 className="mb-3.5 text-[clamp(32px,4.2vw,56px)] font-medium leading-[1.12] tracking-[-0.025em]">{title}</h2>
      <Small className="mb-[30px] text-copy!">{sub}</Small>
      <div className="flex flex-wrap justify-center gap-2.5">
        <Button {...primary} size="sm" />
        <Button {...secondary} variant="outline" size="sm" />
      </div>
      {meta && (
        <div className="mt-7 flex flex-col items-center justify-center gap-3 text-xs text-copy sm:flex-row sm:gap-9">
          {meta.map(([icon, text]) => (
            <span key={text} className="inline-flex items-center gap-2.5"><Icon name={icon} className="size-4" /> {text}</span>
          ))}
        </div>
      )}
    </section>
  );
}

/* ---------- Reveal-on-scroll wrapper ---------- */
export function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition duration-[800ms] ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'} ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Page title ---------- */
export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — BHAARAT SKY Financial Services L.L.C` : 'BHAARAT SKY Financial Services L.L.C — Introduction to Financial Services, Dubai';
  }, [title]);
}

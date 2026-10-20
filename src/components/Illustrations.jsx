import Icon from './Icons';
import { Small } from './ui';

/* =========================================================
   Dark orbit card
   ========================================================= */
const centered = 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';
const ring = `${centered} rounded-full border border-white/[.07]`;

const AVATAR = {
  warm: 'bg-[linear-gradient(135deg,#f6c39b,#c97f55)]',
  blue: 'bg-[linear-gradient(135deg,#b7d4ff,#5b7bd6)]',
  gold: 'bg-[linear-gradient(135deg,#ffd9a0,#e09145)]',
  violet: 'bg-[linear-gradient(135deg,#d6c5ff,#7c60d8)]',
  letter: 'border border-[#eee] bg-white text-[#4285f4]',
};

// [position, avatar, pill colour, pill before avatar?, animation delay]
const BADGES = [
  ['left-[9%] top-[15%]', 'warm', 'bg-[#9cc0ff]', false, ''],
  ['right-[6%] top-[24%]', 'letter', 'bg-[#ffb3c9]', false, '[animation-delay:-1s]'],
  ['left-[6%] top-1/2', 'blue', 'bg-[#ffb08f]', false, '[animation-delay:-2s]'],
  ['bottom-[10%] left-[14%]', 'gold', 'bg-[#79a6ff]', false, '[animation-delay:-3s]'],
  ['right-[4%] top-[6%]', 'violet', 'bg-[#e8e8e8]', true, '[animation-delay:-1.5s]'],
  ['bottom-[14%] right-[10%]', 'letter', 'bg-[#ffb3c9]', true, '[animation-delay:-2.5s]'],
];

const SPARKS = [
  'left-[6%] top-[35%] bg-[#4a7bff]',
  'right-[30%] top-[12%] bg-sun',
  'bottom-[36%] right-[6%] bg-brand',
  'bottom-[6%] left-[32%] bg-[#3fcf8e]',
];

export function OrbitCard() {
  return (
    <div className="grid min-h-[380px] place-items-center overflow-hidden rounded-xl bg-[#121212]">
      <div className="relative h-[380px] w-full">
        <span className={`${ring} size-[140px] bg-[rgba(255,120,60,.12)]`} />
        <span className={`${ring} size-[240px] bg-[rgba(255,110,50,.08)]`} />
        <span className={`${ring} size-[330px] bg-[rgba(255,90,31,.06)]`} />
        <span className={`${centered} size-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,110,50,.35)_0%,rgba(120,45,20,.25)_35%,transparent_70%)]`} />
        <div className={`${centered} grid size-[84px] place-items-center rounded-[20px] bg-[#1a1a1a] shadow-[0_0_0_1px_rgba(255,255,255,.08),0_20px_40px_rgba(0,0,0,.5)]`}>
          <Icon name="logo" className="h-[30px] w-11 fill-white" />
        </div>

        {BADGES.map(([pos, avatar, pill, pillFirst, delay]) => {
          const pillEl = <span className={`h-2 w-[46px] rounded-full ${pill} ${pillFirst ? 'ml-1.5' : 'mr-1.5'}`} />;
          return (
            <div key={pos} className={`absolute flex animate-float items-center gap-1.5 rounded-full bg-white p-[5px] shadow-[0_8px_20px_rgba(0,0,0,.35)] ${pos} ${delay}`}>
              {pillFirst && pillEl}
              <span className={`grid size-[22px] shrink-0 place-items-center rounded-full text-[11px] font-bold ${AVATAR[avatar]}`}>
                {avatar === 'letter' ? 'B' : ''}
              </span>
              {!pillFirst && pillEl}
            </div>
          );
        })}

        {SPARKS.map(s => <i key={s} className={`absolute size-1.5 rotate-45 ${s}`} />)}
      </div>
    </div>
  );
}

/* =========================================================
   White card with 4-node loop diagram
   ========================================================= */
const node = 'absolute z-10 flex w-[44%] flex-col items-center gap-[5px]';
const nodeLabel = 'mt-1 text-[9px] not-italic text-[#888]';
const loopRow = 'flex items-center gap-[5px] rounded-full bg-white px-2 py-1 shadow-[0_4px_14px_rgba(0,0,0,.08)]';
const letter = 'grid size-3.5 place-items-center rounded-full border border-[#eee] text-[8px] font-bold text-[#4285f4]';
const bar = 'h-1.5 w-11 rounded-[9px]';
const stripes = 'h-[50px] w-[22px] rounded';

export function LoopCard({ title, text, labels }) {
  const [tl, tr, br, bl] = labels; // flow runs clockwise from top-left
  return (
    <div className="grid min-h-[380px] items-center gap-5 overflow-hidden rounded-xl bg-white px-[34px] py-[30px] xl:grid-cols-[1fr_1.15fr]">
      <div>
        <h3 className="mb-[18px] text-xl font-medium leading-[1.25] tracking-[-.01em]">{title}</h3>
        <Small className="max-w-[260px]">{text}</Small>
      </div>

      <div className="relative h-[300px]">
        <div className={`${node} left-0 top-0`}>
          <div className={loopRow}><span className={letter}>B</span><span className={`${bar} bg-[#a8c5ff]`} /><span className={`size-3.5 rounded-full ${AVATAR.warm}`} /></div>
          <div className={loopRow}><span className="size-3 rounded-full bg-brand" /><span className={`${bar} bg-[#e5e5e5]`} /></div>
          <div className={loopRow}><span className={letter}>B</span><span className={`${bar} bg-[#ffbfd1]`} /></div>
          <em className={nodeLabel}>{tl}</em>
        </div>

        <div className={`${node} right-0 top-0`}>
          <div className="flex gap-1.5 rounded-[10px] bg-[#f6f6f6] p-2.5">
            <span className={`${stripes} bg-[repeating-linear-gradient(#fff_0_8px,transparent_8px_12px)]`} />
            <span className={`${stripes} bg-[repeating-linear-gradient(#ffd8c7_0_8px,transparent_8px_12px)]`} />
            <span className={`${stripes} bg-[repeating-linear-gradient(#fff_0_8px,transparent_8px_12px)]`} />
          </div>
          <em className={nodeLabel}>{tr}</em>
        </div>

        <div className={`${node} bottom-0 left-0`}>
          <div className="grid w-[90px] gap-1.5 rounded-[10px] bg-[linear-gradient(160deg,#d8ccff,#b8a7ff)] p-2.5">
            {['w-full', 'w-[70%]', 'w-full', 'w-full'].map((w, i) => <span key={i} className={`h-1.5 rounded bg-white/75 ${w}`} />)}
          </div>
          <em className={nodeLabel}>{bl}</em>
        </div>

        <div className={`${node} bottom-0 right-0`}>
          <div className="grid w-20 gap-1.5 rounded-[10px] bg-[#f3fbf3] p-2">
            {[0, 1, 2, 3].map(i => (
              <span key={i} className={`h-[7px] rounded ${i % 2 ? 'bg-[#bfe7c4]' : 'w-4/5 bg-[#a7d8ff]'}`} />
            ))}
          </div>
          <em className={nodeLabel}>{br}</em>
        </div>

        <svg className="absolute inset-0 size-full" viewBox="0 0 220 180" aria-hidden="true">
          <g fill="none" stroke="#c9c9c9" strokeWidth="1" strokeDasharray="3 3">
            <path d="M70 40 H130" /><path d="M175 75 V105" /><path d="M130 140 H90" /><path d="M45 105 V75" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/* =========================================================
   Three-column feature row
   ========================================================= */
export function FeatureRow({ items, className = 'mt-[50px] md:mt-20' }) {
  return (
    <div className={`grid gap-[30px] md:grid-cols-3 md:gap-0 ${className}`}>
      {items.map(([title, text]) => (
        <div key={title} className="md:border-l md:border-[#dcdcdc] md:px-[34px] md:first:border-l-0 md:first:pl-0">
          <h4 className="mb-3.5 text-[19px] font-medium tracking-[-.01em]">{title}</h4>
          <Small className="max-w-[240px]">{text}</Small>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   Scrolling pill marquee
   ========================================================= */
export function Marquee({ words }) {
  const loop = [...words, ...words]; // duplicated so translateX(-50%) loops seamlessly
  return (
    <div className="flex-[0_1_560px] overflow-hidden [mask-image:linear-gradient(90deg,transparent_0,#000_6%,#000_94%,transparent_100%)]">
      <div className="flex w-max animate-marquee gap-1.5">
        {loop.map((w, i) => (
          <span
            key={i}
            className={`inline-flex h-[72px] items-center whitespace-nowrap rounded-full px-[30px] text-[40px] font-medium tracking-[-.03em] md:h-[104px] md:px-11 md:text-[62px] ${
              i % 2 ? 'border-2 border-[#ddd] text-[#ddd]' : 'bg-sun text-ink'
            }`}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   App screen mockups
   ========================================================= */
const mockCard =
  'min-h-[240px] overflow-hidden rounded-xl border border-line bg-[#f7f7f7] text-[10px] text-[#333] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,.2)]';
const mockBody = 'm-3 rounded-[10px] border border-[#eee] bg-white p-3.5';
const btnDark = 'whitespace-nowrap rounded-full bg-ink px-2.5 py-1.5 text-[9px] text-white';
const line = 'block h-[5px] w-full rounded bg-[#eee]';
const face = `inline-block size-[18px] shrink-0 rounded-full ${AVATAR.warm}`;
const tinyChip = 'rounded bg-[#f3f3f3] px-1.5 py-0.5 text-[8px]';
const miniField = 'rounded-[5px] border border-[#eee] px-1.5 py-1 text-[8px] text-[#aaa]';

function MockLogo({ className = 'text-xs', iconClass = 'h-[11px] w-4' }) {
  return (
    <div className={`flex items-center gap-1.5 font-medium ${className}`}>
      <Icon name="logo" className={`fill-brand ${iconClass}`} /> Bhaarat Sky
    </div>
  );
}

function CheckRow({ label, status, highlight }) {
  return (
    <div className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[9px] ${highlight ? 'bg-white shadow-[0_6px_16px_rgba(0,0,0,.1)]' : ''}`}>
      <i className="size-2.5 rounded-[3px] border border-[#ccc]" />
      <b className="flex-1 font-medium text-[#555]">{label}</b>
      <em className="rounded-full border border-[#ddd] px-2 py-0.5 text-[8px] not-italic">{status}</em>
    </div>
  );
}

function MiniHead({ icon, title, sub }) {
  return (
    <div className="mb-2.5 flex items-start gap-1.5">
      {icon}
      <div><b className="block text-[10px]">{title}</b><small className="text-[7px] text-[#999]">{sub}</small></div>
    </div>
  );
}

export function MockCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {/* enquiry */}
      <div className={mockCard}>
        <div className="flex gap-[5px] px-3 pt-2.5">
          <i className="size-2 rounded-full bg-[#ff6159]" /><i className="size-2 rounded-full bg-[#ffbd2e]" /><i className="size-2 rounded-full bg-[#28c941]" />
        </div>
        <div className={`${mockBody} mt-2.5`}>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <MockLogo />
              <div className="mt-1.5 text-[9px] text-[#555]">1. Send Your Enquiry</div>
            </div>
            <span className={btnDark}>Enquire Now</span>
          </div>
          <div className="grid grid-cols-[1.4fr_1fr] gap-2.5">
            <div className="grid gap-[9px]">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-2">
                  <i className="size-3.5 rounded-full bg-[#c9cfe8]" /><span className="h-1.5 flex-1 rounded bg-[#e9ecf6]" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[7px] rounded-lg border border-[#eee] p-2">
              <b className="text-[10px] font-semibold">Service</b>
              <span className={`${tinyChip} w-fit py-[3px]`}>Business Banking</span>
              <span className={line} /><span className={line} /><span className={`${line} w-3/5!`} />
            </div>
          </div>
        </div>
      </div>

      {/* written disclosure */}
      <div className={mockCard}>
        <div className={mockBody}>
          <div className="mb-2.5 grid gap-[7px] rounded-lg border border-[#eee] p-2.5">
            <div className="flex items-center gap-1.5"><span className={face} /><b>Written Disclosure</b> <span className="text-brand">· Before referral</span></div>
            <div className="flex gap-[5px]"><span className={tinyChip}>✓ 3 of 3</span><span className={tinyChip}>Ready</span></div>
            <span className={line} /><span className={line} />
            <div className="flex items-center gap-1.5 rounded-md border border-[#eee] px-2 py-[5px]"><Icon name="search" className="size-2.5 text-[#aaa]" /></div>
          </div>
          <CheckRow label="Provider name & regulator" status="Done" highlight />
          <CheckRow label="Our role & its limits" status="Done" />
          <CheckRow label="Fees & commissions" status="Done" />
        </div>
      </div>

      {/* introduction + callback */}
      <div className={mockCard}>
        <div className={`${mockBody} grid grid-cols-2 gap-2.5`}>
          <div>
            <MiniHead icon={<span className={face} />} title="Introduction" sub="To a regulated provider" />
            <div className="mb-[7px] border-b border-[#eee] pb-[5px] text-[8px] text-[#888]">Provider Handles</div>
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="mb-2 flex items-center gap-1.5"><span className={`${face} size-3.5!`} /><span className={line} /></div>
            ))}
          </div>
          <div className="flex flex-col gap-1 border-l border-[#eee] pl-2.5">
            <MiniHead icon={<span className="grid size-[18px] place-items-center rounded-full bg-[#f3f3f3]">+</span>} title="Request A Callback" sub="Our team will contact you" />
            <label className="mt-[3px] text-[8px] text-[#555]">Full name</label><span className={miniField}>Type name</span>
            <label className="mt-[3px] text-[8px] text-[#555]">Phone number</label><span className={miniField}>+971 5X XXX XXXX</span>
            <div className="mt-2 flex items-center gap-2"><span className={btnDark}>Send Enquiry</span><span className="text-[8px] text-[#888]">Cancel</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Dashboard mockup
   ========================================================= */
function Calendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const lead = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();
  const cells = [
    ...Array.from({ length: lead }, (_, i) => ({ d: prevDays - lead + 1 + i, dim: true })),
    ...Array.from({ length: days }, (_, i) => ({ d: i + 1, today: i + 1 === today.getDate() })),
  ];
  return (
    <>
      <div className="mb-2.5 flex justify-center gap-[30px] text-[10px] font-semibold">
        <i className="not-italic text-[#aaa]">‹</i>
        {today.toLocaleString('en-GB', { month: 'short', year: 'numeric' })}
        <i className="not-italic text-[#aaa]">›</i>
      </div>
      <div className="grid grid-cols-7 gap-x-0.5 gap-y-1.5 text-center text-[9px]">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => <span key={d} className="text-[8px] font-bold">{d}</span>)}
        {cells.map((c, i) => (
          <span key={i} className={c.dim ? 'text-[#ccc]' : c.today ? 'rounded-full bg-ink text-white' : ''}>{c.d}</span>
        ))}
      </div>
    </>
  );
}

const TAG_TONE = {
  orange: 'bg-[#ffe2d6] text-brand',
  blue: 'bg-[#dde8ff] text-[#3d6ee0]',
  grey: 'bg-[#eee]',
};

const DASH_COLS = [
  ['ENQUIRY', [['orange', 'Personal', 'Salary account & credit card'], ['grey', 'Business', 'Free-zone company account']]],
  ['DISCLOSURE SENT', [['blue', 'Mortgage', 'Home finance introduction'], ['grey', 'Islamic', 'Shariah-compliant financing']]],
  ['INTRODUCED', [['orange', 'SME', 'Working capital facility'], ['grey', 'Investment', 'Brokerage account referral']]],
];

const STATUS = [
  ['01 Enquiry', 'done'],
  ['02 Eligibility Check', 'done'],
  ['03 Written Disclosure', 'active'],
  ['04 Introduction', null],
];

export function Dashboard() {
  const dateLabel = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <div className="relative h-[420px] overflow-hidden rounded-t-[18px] border border-b-0 border-line bg-white px-[26px] pt-5 text-[11px]">
      <div className="flex items-center gap-[30px] pb-4">
        <MockLogo className="text-[17px]" iconClass="h-[17px] w-6" />
        <div className="hidden flex-1 items-center gap-2 rounded-full bg-[#f5f5f5] px-3.5 py-[9px] text-[#aaa] sm:flex">
          <Icon name="search" className="size-3.5" /> Search introductions ...
        </div>
        <div className="ml-auto flex items-center gap-2.5">
          <span className="mr-2 size-[18px] rounded-full border-2 border-brand" />
          <span className={`size-[34px] rounded-full ${AVATAR.warm}`} />
          <div className="hidden sm:block"><b className="block text-xs">Client Desk</b><small className="text-[9px] text-[#999]">Bhaarat Sky Team</small></div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[150px_1fr_220px]">
        <aside className="hidden flex-col gap-1 xl:flex">
          <small className="mb-1.5 mt-2.5 text-[9px] text-[#aaa]">Main Menu</small>
          {['Dashboard', 'Introductions', 'Clients', 'Providers'].map(l => (
            <a key={l} className={`flex items-center gap-2 py-2 ${l === 'Introductions' ? 'text-brand' : 'text-[#999]'}`}>
              <i className={`size-3 rounded-[3px] ${l === 'Introductions' ? 'bg-brand' : 'bg-[#ddd]'}`} />{l}
            </a>
          ))}
        </aside>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pb-3.5 sm:justify-start">
            <div><b className="block whitespace-nowrap text-sm font-semibold">Client Introductions</b><small className="text-[8px] text-[#aaa]">{dateLabel}</small></div>
            <nav className="flex items-center gap-[18px] whitespace-nowrap text-[#999]">
              <span className="hidden border-b-2 border-brand pb-[3px] text-brand sm:inline">Board</span>
              {['Timeline', 'Disclosures', 'Reports', 'Files'].map(t => <span key={t} className="hidden md:inline">{t}</span>)}
              <span className="rounded-full bg-brand px-2.5 py-[5px] text-white">+ New Enquiry</span>
            </nav>
          </div>
          <div className="flex flex-wrap justify-between gap-2 border-t border-dashed border-[#eee] py-2.5 text-[10px] font-semibold">
            {STATUS.map(([label, state]) => (
              <span key={label}>
                {label}
                {state && (
                  <em className={`ml-1 rounded-full px-1.5 py-px text-[8px] not-italic ${state === 'done' ? 'bg-[#dff6e7] text-[#29a35a]' : 'bg-[#fff3c4] text-[#b48a00]'}`}>
                    {state === 'done' ? '✓' : '•'}
                  </em>
                )}
              </span>
            ))}
          </div>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {DASH_COLS.map(([title, tasks]) => (
              <div key={title}>
                <h5 className="mb-2.5 flex justify-between text-[10px] font-semibold">
                  {title} 5 <i className="grid size-4 place-items-center rounded-full bg-[#f1f1f1] not-italic">+</i>
                </h5>
                {tasks.map(([tone, tag, text]) => (
                  <div key={text} className="mb-2 grid gap-1.5 rounded-lg border border-[#f0f0f0] p-2.5">
                    <span className={`w-fit rounded px-1.5 py-0.5 text-[8px] ${TAG_TONE[tone]}`}>{tag}</span>
                    <b className="text-[10px] font-medium text-[#888]">{text}</b>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <aside className="hidden xl:block">
          <div className="mb-3.5 flex gap-1">
            {['Meeting', 'Follow-up', 'Planner'].map((t, i) => (
              <span key={t} className={`flex-1 rounded-md py-[5px] text-center text-[9px] ${i === 0 ? 'bg-[#ffe8de] text-brand' : 'text-[#999]'}`}>{t}</span>
            ))}
          </div>
          <Calendar />
        </aside>
      </div>

      {/* fade into the panel background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-[linear-gradient(to_bottom,rgba(245,245,245,0),var(--color-panel)_92%)]" />
    </div>
  );
}

/* =========================================================
   FAQ accordion
   ========================================================= */
export function Faq({ items, id = 'faq' }) {
  return (
    <div id={id} className="scroll-mt-[110px] border-t border-[#dcdcdc]">
      {items.map(([q, a], i) => (
        <details key={q} open={i === 0} className="group border-b border-[#dcdcdc]">
          <summary className="relative cursor-pointer list-none py-[26px] pr-14 text-[17px] font-medium tracking-[-.01em] sm:text-[19px] [&::-webkit-details-marker]:hidden">
            {q}
            <span className="absolute right-0 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-[#f1f1f1] text-xl text-brand transition-colors duration-300 group-open:bg-brand group-open:text-white">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">–</span>
            </span>
          </summary>
          <p className="pb-[26px] text-[15px] leading-[1.65] text-grey sm:pr-[60px]">{a}</p>
        </details>
      ))}
    </div>
  );
}

const stroke = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' };

const PATHS = {
  logo: (
    <>
      <polygon points="6,0 14,0 8,28 0,28" />
      <polygon points="19,0 27,0 21,28 13,28" />
      <polygon points="32,0 40,0 34,28 26,28" />
    </>
  ),
  bolt: <path d="M13.5 2 4 13.5h7L10 22l10-12h-7l.5-8z" fill="currentColor" />,
  trend: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" {...stroke} strokeWidth="2.2" />,
  broadcast: (
    <>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" {...stroke} strokeWidth="2" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" {...stroke} strokeWidth="1.6" />
      <path d="M3 10h18M7 15h4" {...stroke} strokeWidth="1.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" {...stroke} strokeWidth="1.6" />
      <path d="M12 7v5l3 2" {...stroke} strokeWidth="1.6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" {...stroke} strokeWidth="1.8" />
      <path d="M16 16l4 4" {...stroke} strokeWidth="1.8" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" {...stroke} strokeWidth="2.6" />,
  cross: <path d="M8 8l8 8M16 8l-8 8" {...stroke} strokeWidth="2.6" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" {...stroke} strokeWidth="1.7" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" {...stroke} strokeWidth="1.7" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" {...stroke} strokeWidth="1.7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" {...stroke} strokeWidth="1.7" />
      <circle cx="12" cy="9.5" r="2.5" {...stroke} strokeWidth="1.7" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-2v18M12 8l8 2.5V21M2.5 21h19" {...stroke} strokeWidth="1.7" />
      <path d="M7.5 8.5v.01M7.5 12v.01M7.5 15.5v.01M16 13v.01M16 16.5v.01" {...stroke} strokeWidth="2.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.4-7.5 9.5-4.3-1.1-7.5-4.9-7.5-9.5V6L12 3z" {...stroke} strokeWidth="1.7" />
      <path d="M8.8 12.2l2.2 2.2 4.3-4.4" {...stroke} strokeWidth="1.9" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5l9.5 16.5h-19L12 3.5z" {...stroke} strokeWidth="1.7" />
      <path d="M12 10v4.2M12 17.2v.01" {...stroke} strokeWidth="2.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" {...stroke} strokeWidth="1.7" />
      <path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z" {...stroke} strokeWidth="1.7" />
    </>
  ),
  arrowUp: <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" {...stroke} strokeWidth="2.2" />,
  chat: (
    <>
      <path d="M20 11.5a7.5 7.5 0 0 1-11 6.6L4 19.5l1.4-4.6A7.5 7.5 0 1 1 20 11.5z" {...stroke} strokeWidth="1.8" />
      <path d="M8.5 11.5v.01M12 11.5v.01M15.5 11.5v.01" {...stroke} strokeWidth="2.6" />
    </>
  ),
  linkedin: <path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1.5 7v8h2.7v-8H5.5zm1.3-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM10 10v8h2.7v-4.2c0-1.1.4-1.9 1.5-1.9s1.3.9 1.3 2V18h2.7v-4.7c0-2.5-1.3-3.5-3.1-3.5a2.8 2.8 0 0 0-2.4 1.3V10H10z" />,
  instagram: <path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />,
  facebook: <path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5v-7h2.4l.4-2.8H15V9.4c0-.8.3-1.4 1.4-1.4H18V5.5a19 19 0 0 0-2.3-.1c-2.3 0-3.7 1.4-3.7 3.9v1.9H9.6V14H12v7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />,
  youtube: <path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z" />,
};

export default function Icon({ name, className = '' }) {
  const viewBox = name === 'logo' ? '0 0 40 28' : '0 0 24 24';
  return (
    <svg viewBox={viewBox} className={`block ${className}`} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

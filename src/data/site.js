import { SERVICES } from './services';

export const SITE = {
  name: 'BHAARAT SKY Financial Services L.L.C',
  short: 'Bhaarat Sky',
  phone: '+971 54 777 2862',
  phoneHref: 'tel:+971547772862',
  email: 'official@bhaaratsky.ae',
  address: 'Office 3007, Al Sufouh 2, Dubai, United Arab Emirates',
};

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/learn', label: 'Learn' },
  { to: '/contact', label: 'Contact' },
];

export const SERVICE_TOPICS = [...SERVICES.map(s => s.name), 'Provider partnership', 'Other / Not sure'];

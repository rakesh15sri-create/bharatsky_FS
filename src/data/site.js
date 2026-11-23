import { SERVICES } from './services';

export const SITE = {
  name: 'BHAARAT SKY FINANCIAL SERVICES L.L.C',
  short: 'Bhaarat Sky',
  phone: '+971 54 777 2862',
  phoneHref: 'tel:+971547772862',
  email: 'official@bhaaratsky.ae',
  address: 'Office 3007, Al Sufouh 2, Dubai, United Arab Emirates',
};

// From the DET commercial licence, commercial register extract and Dubai Chamber certificate.
// Update `validUntil` (and `issued`) every year when the licence is renewed.
export const LICENCE = {
  authority: 'Department of Economy and Tourism (DET), Government of Dubai',
  activity: 'Introduction to Financial Services',
  number: '1630538',
  register: '2877628',
  chamber: '689757',
  legalForm: 'Limited Liability Company – Single Owner (LLC – SO)',
  issued: '19 June 2026',
  validUntil: '18 June 2027',
  capital: 'AED 500,000',
};

// From the Capital Market Authority licence certificate.
export const CMA_LICENCE = {
  authority: 'Capital Market Authority (CMA), United Arab Emirates',
  number: '20200000509',
  registerReference: 'CP-0001998',
  registerUrl: 'https://www.uaecma.gov.ae/en/open-data/licensed-companies?q=CP-0001998',
  category: 'Fifth category (Arrangement and advice)',
  activity: 'Introduction',
  issued: '6 November 2026',
  validUntil: '31 December 2027',
  law: 'Federal Decree-Law No. (33) of 2025 Concerning the Regulation of the Capital Market',
  lawUrl: 'https://legislation.uaecma.gov.ae/en/regulation-capital-market-law',
};

// Every legal page, in footer order
export const LEGAL_LINKS = [
  ['Licences & Regulation', '/licences-and-regulation'],
  ['Risk Disclosure', '/risk-disclosure'],
  ['Terms & Conditions', '/terms'],
  ['Privacy Policy', '/privacy'],
  ['Cookie Policy', '/cookie-policy'],
  ['Complaints Policy', '/complaints'],
  ['AML & CFT Policy', '/aml-policy'],
];

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/learn', label: 'Learn' },
  { to: '/contact', label: 'Contact' },
];

export const SERVICE_TOPICS = [...SERVICES.map(s => s.name), 'Provider partnership', 'Other / Not sure'];

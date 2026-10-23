import { useMemo, useState } from 'react';
import Icon from '../components/Icons';
import { Button, CheckList, Container, Cta, InfoCard, ListTitle, Muted, Panel, Small, SplitHead, PageHero, useTitle } from '../components/ui';
import { RiskNote } from '../components/Trading';
import { CHECKLISTS, GLOSSARY } from '../data/glossary';
import { SITE } from '../data/site';

const CATEGORIES = ['All', ...new Set(GLOSSARY.map(([, cat]) => cat))];

function Glossary() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const terms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GLOSSARY.filter(
      ([term, cat, meaning]) =>
        (category === 'All' || cat === category) && (!q || term.toLowerCase().includes(q) || meaning.toLowerCase().includes(q)),
    );
  }, [query, category]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="flex w-full items-center gap-3 rounded-full border-[1.5px] border-transparent bg-white px-5 py-3.5 transition focus-within:border-brand lg:max-w-[420px]">
          <Icon name="search" className="size-[18px] shrink-0 text-grey" />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search a term, e.g. leverage"
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#9a9a9a]"
            aria-label="Search the glossary"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`cursor-pointer rounded-full px-4 py-2 text-[13px] transition-colors ${
                category === c ? 'bg-ink text-white' : 'bg-white text-copy hover:text-brand'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {terms.length ? (
        <dl className="grid gap-5 md:grid-cols-2">
          {terms.map(([term, cat, meaning]) => (
            <div key={term} className="rounded-card bg-white p-6 sm:p-7">
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                <dt className="text-lg font-medium tracking-[-.01em]">{term}</dt>
                <span className="rounded-full bg-panel px-2.5 py-1 text-[11px] text-grey">{cat}</span>
              </div>
              <dd><Small className="text-sm!">{meaning}</Small></dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="rounded-card bg-white p-8 text-center text-sm text-grey">
          No terms match “{query}”. Try another word, or ask our team at <a href={`mailto:${SITE.email}`} className="text-brand underline">{SITE.email}</a>.
        </p>
      )}
    </>
  );
}

export default function Learn() {
  useTitle('Learning Centre');
  return (
    <>
      <PageHero
        crumb="Learning Centre"
        chip="Learning Centre"
        title={<>Understand Before<br /><Muted>You Decide.</Muted></>}
        sub="Plain-Language Explanations Of The Financial Terms You Will Meet, And Simple Checklists To Use Before Opening An Account, Borrowing, Buying Insurance Or Investing."
      >
        <Button href="#glossary">Browse the glossary</Button>
        <Button href="#checklists" variant="outline">Decision checklists</Button>
      </PageHero>

      {/* ============ GLOSSARY ============ */}
      <Panel id="glossary" className="scroll-mt-[90px]">
        <Container>
          <SplitHead chip="Financial Glossary" title={<>Key Terms,<br />Explained <Muted>Simply.</Muted></>}>
            <Small>Banking, Finance, Insurance, Investing And Islamic Finance Terms, Explained Without Jargon. Search Or Filter By Topic.</Small>
          </SplitHead>
          <Glossary />
        </Container>
      </Panel>

      {/* ============ CHECKLISTS ============ */}
      <section id="checklists" className="scroll-mt-[110px] py-20 md:py-[110px]">
        <Container>
          <SplitHead chip="Decision Checklists" title={<>Four Quick Checks<br />Before <Muted>You Commit.</Muted></>}>
            <Small>Whichever Provider You Choose, These Questions Help You Avoid The Most Common Surprises.</Small>
          </SplitHead>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CHECKLISTS.map(({ title, items }, i) => (
              <InfoCard key={title} dark={i === CHECKLISTS.length - 1}>
                <ListTitle className={i === CHECKLISTS.length - 1 ? 'text-[#9a9a9a]' : 'text-grey'}>{title}</ListTitle>
                <CheckList items={items} dark={i === CHECKLISTS.length - 1} className="[&_li]:text-sm" />
              </InfoCard>
            ))}
          </div>
          <RiskNote className="mt-8" />
        </Container>
      </section>

      <Cta
        title="Still Have Questions?"
        sub="Our Team Is Happy To Explain Any Term Or Option Before You Make A Decision."
        primary={{ to: '/contact', children: 'Ask our team' }}
        secondary={{ to: '/services', children: 'Explore our services' }}
      />
    </>
  );
}

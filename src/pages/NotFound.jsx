import { Link, useLocation } from 'react-router-dom';
import { Button, Chip, Container, HeroLines, Muted, useTitle } from '../components/ui';
import Icon from '../components/Icons';
import { NAV, SITE } from '../data/site';

export default function NotFound() {
  useTitle('404 – Page Not Found');
  const { pathname } = useLocation();

  return (
    <section className="relative overflow-hidden pb-[90px] pt-16 text-center md:pt-20">
      <HeroLines />
      <Container className="relative z-10">
        <div className="mb-[18px] flex justify-center gap-2 text-xs text-grey">
          <Link to="/" className="hover:text-brand">Home</Link> / <span>404</span>
        </div>
        <Chip className="bg-[#efefef]">Error 404</Chip>

        <p className="mt-6 select-none bg-linear-to-b from-brand to-sun bg-clip-text text-[clamp(110px,24vw,260px)] font-semibold leading-none tracking-[-0.06em] text-transparent">
          404
        </p>
        <h1 className="mb-[18px] mt-2 text-[clamp(34px,5vw,64px)] font-medium leading-[1.06] tracking-[-0.035em]">
          Page Not <Muted>Found.</Muted>
        </h1>
        <p className="mx-auto mb-4 max-w-[560px] text-[15px] leading-[1.55] text-grey">
          The page you’re looking for doesn’t exist, has been moved, or the URL was typed incorrectly.
        </p>
        <code className="mx-auto mb-[30px] inline-block max-w-full break-all rounded-full bg-panel px-4 py-1.5 text-[13px] text-copy">
          {pathname}
        </code>

        <div className="flex flex-wrap justify-center gap-2.5">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="outline">Contact us</Button>
        </div>

        <div className="mx-auto mt-14 max-w-[720px]">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-grey">Popular pages</p>
          <div className="flex flex-wrap justify-center gap-2">
            {NAV.filter(({ to }) => to !== '/').map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="rounded-full border border-line px-4 py-2 text-sm text-copy transition-colors hover:border-brand hover:text-brand"
              >
                {label}
              </Link>
            ))}
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-8 inline-flex items-center gap-2.5 text-sm text-grey transition-colors hover:text-brand"
          >
            <Icon name="mail" className="size-4" /> {SITE.email}
          </a>
        </div>
      </Container>
    </section>
  );
}

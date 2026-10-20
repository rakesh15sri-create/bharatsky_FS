import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Chip, Container, Ic, Muted, Panel, Small, SplitHead, PageHero, useTitle } from '../components/ui';
import { SERVICE_TOPICS, SITE } from '../data/site';

const field =
  'w-full rounded-xl border-[1.5px] border-transparent bg-panel px-4 py-3.5 text-sm text-ink outline-none transition focus:border-brand focus:bg-white';
const label = 'mb-2 block text-[13px] font-medium';

function ContactItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4 border-t border-white/10 py-[22px] first-of-type:border-t-0">
      <Ic name={icon} className="text-[44px]" />
      <div>
        <b className="mb-1 block font-medium">{title}</b>
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  useTitle('Contact Us');
  const [sent, setSent] = useState(false);

  // No backend yet: compose the enquiry as an email to the company inbox.
  function handleSubmit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `Website enquiry: ${d.get('topic')} – ${d.get('name')}`;
    const body = [
      `Name: ${d.get('name')}`,
      `Email: ${d.get('email')}`,
      `Phone: ${d.get('phone') || '-'}`,
      `Client type: ${d.get('clientType')}`,
      `Topic: ${d.get('topic')}`,
      '',
      d.get('message'),
    ].join('\n');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        crumb="Contact"
        chip="Contact Us"
        title={<>How Can We<br /><Muted>Help You?</Muted></>}
        sub="Tell Us What You Need And Our Dubai-Based Team Will Get Back To You. Enquiries Are Free, No Documents Are Required And There Is No Obligation To Proceed."
      />

      <Panel>
        <Container className="grid items-start gap-6 lg:grid-cols-[.9fr_1.1fr]">
          {/* contact details */}
          <div className="flex flex-col gap-3.5 rounded-card bg-night p-8 text-white">
            <span className="text-[13px] font-semibold text-brand">Get In Touch</span>
            <h3 className="text-[30px] font-medium tracking-[-.01em]">Speak with our team directly.</h3>
            <ContactItem icon="phone" title="Phone"><a href={SITE.phoneHref} className="hover:text-brand">{SITE.phone}</a></ContactItem>
            <ContactItem icon="mail" title="Email"><a href={`mailto:${SITE.email}`} className="hover:text-brand">{SITE.email}</a></ContactItem>
            <ContactItem icon="pin" title="Office"><Small className="text-[#bdbdbd]!">Office 3007, Al Sufouh 2<br />Dubai, United Arab Emirates</Small></ContactItem>
            <ContactItem icon="clock" title="Meetings"><Small className="text-[#bdbdbd]!">By appointment. Please contact us to arrange a convenient time.</Small></ContactItem>
          </div>

          {/* enquiry form */}
          <div className="rounded-card border border-line bg-white p-5 sm:p-10">
            <Chip>Send An Enquiry</Chip>
            <h3 className="mb-2 mt-4 text-[26px] font-medium tracking-[-.02em]">Request an introduction</h3>
            <Small>Complete the form and our team will get back to you.</Small>

            <form onSubmit={handleSubmit} className="mt-[26px] grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>Full name *</label>
                <input id="name" name="name" required minLength={2} placeholder="Your full name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className={label}>Email address *</label>
                <input id="email" name="email" type="email" required placeholder="name@example.com" className={field} />
              </div>
              <div>
                <label htmlFor="phone" className={label}>Phone number</label>
                <input id="phone" name="phone" type="tel" placeholder="+971 5X XXX XXXX" className={field} />
              </div>
              <div>
                <label htmlFor="clientType" className={label}>I am enquiring as</label>
                <select id="clientType" name="clientType" className={field}>
                  <option>An individual</option>
                  <option>A business</option>
                  <option>An institution</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="topic" className={label}>Enquiry type *</label>
                <select id="topic" name="topic" required defaultValue="" className={field}>
                  <option value="" disabled>Select a topic</option>
                  {SERVICE_TOPICS.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={label}>How can we help? *</label>
                <textarea id="message" name="message" required minLength={10} rows={5} placeholder="Tell us what you are looking for. No documents needed at this stage." className={`${field} min-h-[130px] resize-y`} />
              </div>
              <label className="flex items-start gap-2.5 text-xs leading-normal text-grey sm:col-span-2">
                <input type="checkbox" required className="mt-[3px] accent-brand" />
                <span>
                  I have read and agree to the <Link to="/privacy" className="underline">Privacy Policy</Link>,{' '}
                  <Link to="/terms" className="underline">Terms &amp; Conditions</Link> and{' '}
                  <Link to="/risk-disclosure" className="underline">Risk Disclosure</Link>, and consent to {SITE.name} contacting me about my enquiry.
                </span>
              </label>
              <div className="sm:col-span-2">
                <Button type="submit">Send enquiry</Button>
                {sent && (
                  <p className="mt-3.5 text-[13px] text-[#29a35a]">
                    Your email app should now open with your enquiry ready to send. If it doesn’t, please email us directly at {SITE.email}.
                  </p>
                )}
              </div>
            </form>
            <p className="mt-[18px] rounded-xl bg-[#fff6e0] px-4 py-3.5 text-xs leading-normal text-[#7a5b00]">
              For your security, never send account passwords, authentication codes or money through this form. We do not accept client funds.
            </p>
          </div>
        </Container>
      </Panel>

      {/* ============ MAP ============ */}
      <section className="py-20 md:py-[110px]">
        <Container>
          <SplitHead chip="Our Location" title={<>Find Us In<br />Al Sufouh, <Muted>Dubai.</Muted></>}>
            <Small>Office 3007, Al Sufouh 2, Dubai, United Arab Emirates. Visits Are By Appointment Only, So Please Contact Us Before You Come.</Small>
          </SplitHead>
          <div className="h-[420px] overflow-hidden rounded-card border border-line">
            <iframe
              title="Map of Al Sufouh 2, Dubai"
              src="https://maps.google.com/maps?q=Al%20Sufouh%202%2C%20Dubai&z=14&output=embed"
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

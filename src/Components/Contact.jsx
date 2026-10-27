import Section from "./Section";
import Card from "./Card";
import Button from "./Button";
import { profile, contactBlurb } from "../data/content";

const rows = [
  { label: "Email", text: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", text: profile.github.label, href: profile.github.href, external: true },
  { label: "LinkedIn", text: profile.linkedin.label, href: profile.linkedin.href, external: true },
];

const Contact = () => (
  <Section id="contact" title="Contact">
    <Card tone="yellow" className="flex flex-col gap-4">
      <p className="leading-[1.6] text-body">{contactBlurb}</p>
      <dl className="flex flex-col gap-3 text-sm text-muted">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-wrap items-center justify-between gap-x-4">
            <dt className="font-semibold">{r.label}</dt>
            <dd>
              <a
                href={r.href}
                {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="underline underline-offset-2 hover:text-ink"
              >
                {r.text}
              </a>
            </dd>
          </div>
        ))}
      </dl>
      <div>
        <Button variant="amber" href={`mailto:${profile.email}`}>Get in touch</Button>
      </div>
    </Card>
  </Section>
);

export default Contact;

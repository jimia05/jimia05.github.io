import Section from "./Section";
import Card from "./Card";
import Button from "./Button";
import { projects, comingSoonCount } from "../data/content";

const toneStyles = {
  orange: { card: "orange", button: "orangeOutline" },
  green: { card: "projectGreen", button: "greenOutline" },
  blue: { card: "blue", button: "blueOutline" },
  yellow: { card: "yellow", button: "blueOutline" },
  purple: { card: "purple", button: "blueOutline" },
};

const Detail = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <h4 className="text-sm font-semibold text-muted">{label}</h4>
    <p className="leading-[1.6] text-body">{children}</p>
  </div>
);

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="mt-2 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <Card key={p.name} tone={toneStyles[p.tone].card} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-normal text-ink">{p.name}</h3>
            <p className="text-sm text-muted">{p.dates}</p>
          </div>
          <p className="leading-[1.6] text-body">{p.description}</p>
          <Detail label="What I did">{p.contributions}</Detail>
          <Detail label="Tech used">{p.tech}</Detail>
          {p.link && (
            <div>
              <Button variant={toneStyles[p.tone].button} href={p.link} external>
                View Project
              </Button>
            </div>
          )}
        </Card>
      ))}
      {Array.from({ length: comingSoonCount }, (_, i) => (
        <Card key={i} tone="slate" className="flex flex-col gap-2">
          <h3 className="text-2xl font-normal text-ink">Coming soon</h3>
          <p className="leading-[1.6] text-body">A new project will show up here.</p>
        </Card>
      ))}
    </div>
  </Section>
);

export default Projects;

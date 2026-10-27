import Section from "./Section";
import Card from "./Card";
import { experience } from "../data/content";

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
      {experience.map((job) => (
        <Card key={job.role} tone="teal" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-normal text-ink">{job.role}</h3>
            <p className="text-sm text-muted">{job.org} · {job.dates}</p>
          </div>
          <ul className="flex list-disc flex-col gap-2 pl-5 leading-[1.6] text-body">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

export default Experience;

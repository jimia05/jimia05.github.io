import Section from "./Section";
import Card from "./Card";
import Chip from "./Chip";
import { education } from "../data/content";

const Education = () => (
  <Section id="education" title="Education">
    <Card tone="red" className="flex flex-col gap-4">
      <h3 className="text-2xl font-normal text-ink">{education.school}</h3>
      <p className="leading-[1.6] text-body">{education.detail}</p>
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-muted">Relevant coursework</h4>
        <ul className="flex flex-wrap gap-3">
          {education.coursework.map((course) => (
            <Chip key={course} borderClass="border-[#fecaca]">{course}</Chip>
          ))}
        </ul>
      </div>
    </Card>
  </Section>
);

export default Education;

import Section from "./Section";
import Card from "./Card";
import Chip from "./Chip";
import { skillGroups } from "../data/content";

const Skills = () => (
  <Section id="skills" title="Skills">
    <Card tone="green" className="flex flex-col gap-5 p-6">
      {skillGroups.map((group) => (
        <div key={group.label} className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-muted">{group.label}</h3>
          <ul className="flex flex-wrap gap-3">
            {group.items.map((item) => (
              <Chip key={item} borderClass="border-[#a7f3d0]">{item}</Chip>
            ))}
          </ul>
        </div>
      ))}
    </Card>
  </Section>
);

export default Skills;

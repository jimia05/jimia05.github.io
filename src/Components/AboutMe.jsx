import Section from "./Section";
import Card from "./Card";
import Button from "./Button";
import { about } from "../data/content";

const AboutMe = () => (
  <Section id="about" title="About me">
    <Card tone="blue" className="flex max-w-[600px] flex-col gap-5 p-8">
      <p className="text-lg leading-[1.6] text-body">{about}</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="blue" href="#projects">View projects</Button>
        <Button variant="blueOutline" href="#contact">Get in touch</Button>
      </div>
    </Card>
  </Section>
);

export default AboutMe;

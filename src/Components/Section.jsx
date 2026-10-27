const Section = ({ id, title, children }) => (
  <section id={id} className="flex flex-col gap-4">
    <h2 className="text-[32px] font-normal text-ink">{title}</h2>
    {children}
  </section>
);

export default Section;

import { profile } from "../data/content";

const Header = () => (
  <header className="flex flex-col gap-1.5">
    <h1 className="text-4xl font-normal tracking-[-0.04em] text-ink">{profile.name}</h1>
    <p className="text-lg text-[#64748b]">{profile.tagline}</p>
  </header>
);

export default Header;

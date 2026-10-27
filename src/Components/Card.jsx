// Full class names are listed so Tailwind can see them.
const tones = {
  blue: "bg-[#eff6ff] border-[#bfdbfe]",
  green: "bg-[#ecfdf5] border-[#a7f3d0]",
  orange: "bg-[#fff7ed] border-[#fed7aa]",
  projectGreen: "bg-[#f0fdf4] border-[#86efac]",
  purple: "bg-[#f5f3ff] border-[#c4b5fd]",
  red: "bg-[#fef2f2] border-[#fecaca]",
  yellow: "bg-[#fffbeb] border-[#fde68a]",
  teal: "bg-[#f0fdfa] border-[#99f6e4]",
  slate: "bg-white border-dashed border-[#cbd5e1]",
};

const Card = ({ tone = "blue", className = "", children }) => (
  <div className={`rounded-[20px] border p-7 ${tones[tone]} ${className}`}>
    {children}
  </div>
);

export default Card;

const variants = {
  blue: "bg-[#2563eb] text-white hover:bg-[#1d4ed8]",
  blueOutline: "bg-white border border-[#93c5fd] text-body hover:bg-[#eff6ff]",
  amber: "bg-[#d97706] text-white hover:bg-[#b45309]",
  orangeOutline: "bg-white border border-[#f97316] text-[#c2410c] hover:bg-[#fff7ed]",
  greenOutline: "bg-white border border-[#16a34a] text-[#14532d] hover:bg-[#f0fdf4]",
};

const Button = ({ variant = "blue", href, external = false, children }) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className={`inline-block rounded-full px-[18px] py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] ${variants[variant]}`}
  >
    {children}
  </a>
);

export default Button;

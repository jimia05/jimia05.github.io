const Chip = ({ borderClass, children }) => (
  <li
    className={`rounded-full border bg-white px-3.5 py-2.5 text-sm font-semibold text-body ${borderClass}`}
  >
    {children}
  </li>
);

export default Chip;

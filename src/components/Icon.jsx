function Icon({ type, value }) {
  return (
    <div className="flex items-center justify-between gap-0.3rem">
      <img src={type} />
      <span className="text-sm font-normal text-neutral-500">{value}</span>
    </div>
  );
}

export default Icon;

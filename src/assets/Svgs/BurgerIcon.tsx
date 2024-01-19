export default function burger({
  className,
  open,
}: {
  className?: string;
  open?: boolean;
}): JSX.Element {
  return (
    <svg
      className={className}
      width="60"
      height="31"
      viewBox="0 0 60 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="transall"
        y={open ? "14" : "0"}
        x="14"
        width="46"
        height="3"
        fill="#D9D9D9"
      />
      <rect
        className="transall"
        x="27"
        y={open ? "14" : "28"}
        width="33"
        height="3"
        fill="#D9D9D9"
      />
      <rect y="14" width="60" height="3" fill="#D9D9D9" />
    </svg>
  );
}

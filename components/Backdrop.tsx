interface Props {
  onClick: () => void;
  className?: string;
}

export default function Backdrop({ onClick, className = "z-40" }: Props) {
  return (
    <div
      className={`fixed inset-0 bg-black/90 ${className}`}
      onClick={onClick}
    />
  );
}

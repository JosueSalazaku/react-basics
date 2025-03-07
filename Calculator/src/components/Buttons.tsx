interface ButtonProps {
  value: string;
    onClick: (value: string) => void;
    className: string
}

function Buttons({ value, onClick }: ButtonProps) {
  return <button onClick={() => onClick(value)}>{value}</button>;
}

export default Buttons;

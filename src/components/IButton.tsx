interface IButtonProps {
  text: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  type?: "button" | "submit";
}

const IButton = ({ text, onClick, color = "primary", type = "button" }: IButtonProps) => {
  const base =
    "px-6 py-2.5 font-medium transition-all duration-200 tracking-wide text-sm rounded-lg shadow-md hover:shadow-lg";
  const styles =
    color === "primary"
      ? "bg-[#25A2D8] text-[#F1EEEE] hover:bg-[#1d8ac1]"
      : "bg-[#403738] text-[#F1EEEE] hover:bg-[#4D4244]";

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles}`}>
      {text}
    </button>
  );
};

export default IButton;
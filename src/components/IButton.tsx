interface IButtonProps {
  text: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  type?: "button" | "submit";
}

const IButton = ({ text, onClick, color = "primary", type = "button" }: IButtonProps) => {
  const base =
    "px-4 py-2 font-medium rounded-md transition-all duration-300 shadow-sm";
  const styles =
    color === "primary"
      ? "bg-[#25A2D8] text-white hover:bg-[#1d8ac1]"
      : "bg-[#043150] text-white hover:bg-[#06497a]";

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles}`}>
      {text}
    </button>
  );
};

export default IButton;

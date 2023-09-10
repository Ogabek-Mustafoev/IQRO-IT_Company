import { TBtn } from "../../types";

export default function CustomBtn({
  name,
  width = "unset",
  px = "40px",
  py = "24px",
  onClick,
  modal,
}: TBtn) {
  function click() {
    onClick && onClick(modal!);
  }

  return (
    <button
      onClick={click}
      className="custom-btn"
      style={{ width, padding: `${py} ${px}` }}
    >
      {name}
    </button>
  );
}

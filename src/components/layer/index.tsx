import { TLayer } from "../../types";

export default function Layer({
  top = "unset",
  left = "unset",
  right = "unset",
  bottom = "unset",
  width = "unset",
  height = "unset",
}: Partial<TLayer>) {
  return (
    <div
      className="layer"
      style={{ top, left, right, bottom, width, height }}
    />
  );
}

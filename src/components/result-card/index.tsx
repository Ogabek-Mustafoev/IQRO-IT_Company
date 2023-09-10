import { TCard } from "../../types";

export default function ResultCard({ icon, title }: TCard) {
  return (
    <div className="result-item gradient-bg">
      <img src={icon} alt={title} />

      {/* Setting HTML from String */}
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}

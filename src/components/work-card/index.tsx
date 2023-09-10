import { TCard } from "../../types";

export default function WorkCard({ icon, title }: TCard) {
  return (
    <div className="work-item row">
      {/* Work Icon */}
      <div className="icon centered">
        <img src={icon} alt={title} />
      </div>

      {/* Setting HTML from String */}
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}

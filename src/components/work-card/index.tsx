import { TCard } from "../../types";

export default function WorkCard({ icon, title }: TCard) {
  return (
    <div className="work-item row">
      <div className="icon centered">
        <img src={icon} alt={title} />
      </div>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}

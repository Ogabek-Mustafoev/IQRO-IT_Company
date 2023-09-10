import { TServices } from "../../types";
import CustomBtn from "../custom-btn";

export default function ServiceCard({ title, btn }: TServices) {
  return (
    <div className="service-item col gradient-border gradient-bg">
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <CustomBtn name={btn} />
    </div>
  );
}

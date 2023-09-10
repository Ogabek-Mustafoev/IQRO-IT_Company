import { works } from "../../constants";
import Heading from "../heading";
import WorkCard from "../work-card";
import "./style.css";

export default function WorkFlow() {
  return (
    <section id="workflow">
      <Heading title="Как мы работаем " />
      <div className="work-list row gradient-bg">
        {works.map((item, idx) => (
          <WorkCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
}

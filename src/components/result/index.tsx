import { results } from "../../constants";
import Heading from "../heading";
import ResultCard from "../result-card";
import "./style.css";

export default function Result() {
  return (
    <section id="result">
      <Heading
        subTitle="Что даст вашему бизнесу"
        title="внедрение Digital-инструментов"
      />
      <div className="result-list">
        {results.map((item, idx) => (
          <ResultCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

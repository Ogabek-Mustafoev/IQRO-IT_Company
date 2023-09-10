import { useState } from "react";
import { InfoModal, SendModal, ThanksModal } from "../pricing-modal";
import "./style.css";

export default function Pricing() {
  const [modal, setModal] = useState<"info" | "send" | "thanks">("info");

  return (
    <section id="pricing" className="gradient-bg pricing row">
      <div className="left col">
        <h1>Сколько стоят услуги</h1>
        <p>
          Цена рассчитывается индивидуально в зависимости отсложности, объема и
          сроков работы.
        </p>
        <p>
          Разработчик оценивает временные затраты по проекту, а аналитики
          устанавливают стоимость продукта.
        </p>
      </div>
      <div className="right col">
        {modal === "info" ? (
          <InfoModal setModal={setModal} />
        ) : modal === "send" ? (
          <SendModal setModal={setModal} />
        ) : (
          modal === "thanks" && <ThanksModal setModal={setModal} />
        )}
      </div>
    </section>
  );
}

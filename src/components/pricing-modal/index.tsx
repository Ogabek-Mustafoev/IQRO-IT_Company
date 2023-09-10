import CustomBtn from "../custom-btn";

type Props = {
  setModal: (value: "info" | "send" | "thanks") => void;
};

// First Modal
export function InfoModal({ setModal }: Props) {
  return (
    <>
      <h1>Получить бесплатную консультацию</h1>
      <p>
        В рамках консультации уточним необходимую информацию для анализа вашего
        проекта
      </p>
      <CustomBtn onClick={setModal} modal="send" name="Получить" width="100%" />
    </>
  );
}

// Second (send) Modal
export function SendModal({ setModal }: Props) {
  return (
    <>
      <div>
        <input type="text" placeholder="Ваше имя" style={{ width: "100%" }} />
        <input
          type="tel"
          placeholder="номер телефона"
          style={{ width: "100%" }}
        />
      </div>
      <CustomBtn
        onClick={setModal}
        modal="thanks"
        name="Отправить"
        width="100%"
      />
    </>
  );
}

// Third (Thanks) Modal
export function ThanksModal({ setModal }: Props) {
  return (
    <>
      <div className="success">
        <img src="./check.svg" alt="success image" />
      </div>
      <h1>Cпасибо за вашу заявку!</h1>
      <p>Наш менеджер cкоро свяжется с вами</p>
      <CustomBtn
        onClick={setModal}
        modal="info"
        name="отправлено"
        width="100%"
      />
    </>
  );
}

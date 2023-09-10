import CustomBtn from "../custom-btn";
import "./style.css";

export default function Hero() {
  return (
    <div className="hero row">
      <div className="hero-content">
        <h1>
          Разаработка сайтов <br /> и мобильных приложений
        </h1>
        <p>
          Помогаем бизнесу увеличить прибыль <br /> с помощью
          digital-инструментов
        </p>
        <CustomBtn name="Обсудить проект" />
      </div>
      <div className="hero-img">
        <img src="/hero.png" alt="hero image" />
      </div>
    </div>
  );
}

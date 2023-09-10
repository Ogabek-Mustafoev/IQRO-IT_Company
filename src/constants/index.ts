import { TLinks, TServices, TCard } from "../types";

export const links: Array<TLinks> = [
  { link: "Услуги", href: "#services" },
  { link: "Как мы работаем", href: "#workflow" },
  { link: "Результат", href: "#result" },
  { link: "Заказать", href: "#pricing" },
];

export const services: Array<TServices> = [
  { title: "Разработка <br/> сайтов", btn: "Заказать" },
  { title: "Мобильные <br/> приложения", btn: "Подробнее" },
  { title: "Маркетинг <br/> продвижение", btn: "Подробнее" },
  { title: "SMM-<br/>продвижение", btn: "Подробнее" },
  { title: "SEO-<br/>оптимизация", btn: "Подробнее" },
  { title: "Брендинг и <br/> айдентика", btn: "Подробнее" },
];

export const works: Array<TCard> = [
  { icon: "./zoom.svg", title: "Исследование ниши <br/> и стратегия развития" },
  {
    icon: "./selecttion.svg",
    title: "Прототип-е UI | UX <br/> дизайна для продукта",
  },
  {
    icon: "./intersect.svg",
    title: "Анализ конкурентов <br/> и юзабилити тесты",
  },
  { icon: "./selectall.svg", title: "Разработка <br/> и верстка" },
  {
    icon: "./beziercurve.svg",
    title: "Семан-ая структура <br/> и оптимизация",
  },
  {
    icon: "./rocket.svg",
    title: "Финальное тест-ние <br/> и запуск продукта",
  },
];

export const results: Array<TCard> = [
  { icon: "./success.png", title: "Автоматизация <br/> бизнес-процессов" },
  { icon: "./success.png", title: "Привлечение <br/> новых клиентов" },
  { icon: "./success.png", title: "Увеличение <br/> прибыли" },
  { icon: "./success.png", title: "Ускорение <br/> принятия решений" },
  { icon: "./success.png", title: "Рост <br/> эффективности" },
  { icon: "./success.png", title: "Повышение <br/> лояльности" },
];

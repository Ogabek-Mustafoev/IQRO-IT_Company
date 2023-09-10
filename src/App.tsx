import {
  Result,
  Footer,
  Pricing,
  Services,
  WorkFlow,
  Home,
} from "./components";

export default function App() {
  return (
    <>
      <main className="container">
        <Home /> {/* NavBar & Hero */}
        <Services /> {/* Услуги */}
        <WorkFlow /> {/* Как мы работаем */}
        <Result /> {/* Что даст вашему бизнесу */}
        <Pricing /> {/* Сколько стоят услуги */}
      </main>
      <Footer /> {/* End of the web */}
    </>
  );
}

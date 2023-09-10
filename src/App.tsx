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
        <Home />
        <Services />
        <WorkFlow />
        <Result />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

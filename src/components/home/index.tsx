import { Hero, Navbar } from "..";
import Layer from "../layer";
import "./style.css";

export default function Home() {
  return (
    <section className="home" id="home">
      {/* Top Right Corner Layer */}
      <Layer top="-20%" right="-35%" width="70%" height="70%" />

      <Navbar />
      <Hero />

      {/* Bottom Left Corner Layer */}
      <Layer bottom="-5%" left="-20%" width="40%" height="40%" />
    </section>
  );
}

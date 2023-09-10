import { links } from "../../constants";
import Layer from "../layer";
import "./style.css";

export default function Footer() {
  return (
    <footer className="centered">
      <Layer top="-60%" left="-15%" width="500px" height="400px" />
      <ul className="row">
        {links.map(({ link, href }) => (
          <li key={link}>
            <a href={href}>{link}</a>
          </li>
        ))}
      </ul>
      <Layer top="-70%" right="-10%" width="500px" height="400px" />
    </footer>
  );
}

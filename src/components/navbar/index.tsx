import { useEffect, useState } from "react";
import { links } from "../../constants";
import MobileMenu from "../mobile-menu";
import "./style.css";

export default function Navbar() {
  const [offset, setOffset] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  if (openMenu) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
  }

  useEffect(() => {
    window.addEventListener("scroll", () => setOffset(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () => setOffset(window.scrollY));
  }, []);

  return (
    <header className={offset > 0 ? "sticky" : ""}>
      <nav className="centeredY container">
        <a href="/" className="logo">
          <img src="./logo.svg" alt="logo" />
        </a>
        <div className="menu-btn" onClick={() => setOpenMenu((prev) => !prev)}>
          <img src="./menu.svg" alt="menu image" />
        </div>
        <ul className="row">
          {links.map(({ link, href }) => (
            <li key={link}>
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>
        {openMenu && (
          <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        )}
      </nav>
    </header>
  );
}

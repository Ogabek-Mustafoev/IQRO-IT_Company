import { useEffect, useState } from "react";
import { links } from "../../constants";
import MobileMenu from "../mobile-menu";
import "./style.css";

export default function Navbar() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  // Disabling scroll when menu is opened
  if (openMenu) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
  }

  useEffect(() => {
    // Setting Sticky Navbar
    window.addEventListener("scroll", () => setScrollY(window.scrollY));

    return () =>
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  return (
    <header className={scrollY > 0 ? "sticky" : ""}>
      <nav className="centeredY container">
        {/* IQRO logo */}
        <a href="/" className="logo">
          <img src="./logo.svg" alt="logo" />
        </a>

        {/* Mobile Menu BTN */}
        <div className="menu-btn" onClick={() => setOpenMenu((prev) => !prev)}>
          <img src="./menu.svg" alt="menu image" />
        </div>

        {/* Nav Links */}
        <ul className="row">
          {links.map(({ link, href }) => (
            <li key={link}>
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {openMenu && (
          <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        )}
      </nav>
    </header>
  );
}

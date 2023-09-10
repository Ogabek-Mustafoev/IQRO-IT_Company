import { links } from "../../constants";
import { TMobileMenu } from "../../types";

export default function MobileMenu({ setOpenMenu, openMenu }: TMobileMenu) {
  return (
    <div className="mobile-menu col">
      <div className="mobile-menu_btn" onClick={() => setOpenMenu(!openMenu)}>
        <img src="./menu.svg" alt="menu image" />
      </div>
      {links.map(({ link, href }) => (
        <a onClick={() => setOpenMenu(!openMenu)} href={href} key={link}>
          {link}
        </a>
      ))}
      <div className="call">
        <img src="./call.svg" alt="phone call" />
        <span>Позвонить</span>
      </div>
    </div>
  );
}

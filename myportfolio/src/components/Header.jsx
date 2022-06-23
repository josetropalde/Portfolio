import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.css";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const menuActive = menu
    ? `${styles.header} ${styles.header__mobile}`
    : `${styles.header}`;
  return (
    <header className={menuActive}>
      <nav className={styles.header__menu}>
        <ul>
          <li>
            <Link href="/">
              <a>Ínicio</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfólio</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setMenu(!menu)}
        className={styles.header__toggle}
      ></div>
    </header>
  );
}

import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <p>logo</p>
      </div>
      <nav className="header__menu">
        <ul>
          <li className="header__menu-item">Ínicio</li>
          <li className="header__menu-item">Portfólio</li>
          <li className="header__menu-item">Habilidades</li>
          <li className="header__menu-item">Contato</li>
        </ul>
      </nav>
    </header>
  );
}

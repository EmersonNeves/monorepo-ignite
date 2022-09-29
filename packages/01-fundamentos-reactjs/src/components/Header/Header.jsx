import styles from "./Header.module.css";
import igniteLogoImg from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogoImg} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}

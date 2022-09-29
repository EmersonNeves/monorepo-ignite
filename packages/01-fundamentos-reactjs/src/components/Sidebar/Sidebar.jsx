import styles from "./Sidebar.module.css";
import {PencilLine} from 'phosphor-react'
import { Avatar } from "../Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=50"
        alt="Imagem de capa do perfil"
      />
      <div className={styles.profile}>
       <Avatar hasBorder src="http://www.github.com/emersonneves.png"/>
        <strong>Emerson Pereira</strong>
        <span>Web Developer</span>
        <footer>
          <a href=""><PencilLine size={20}/>Editar seu perfil</a>
        </footer>
      </div>
    </aside>
  );
}

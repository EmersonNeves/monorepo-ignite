import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../../components";
import styles from "./Comment.module.css";
export function Comment({content, onDeleteComment}) {
  const [applause, setApplause] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleNewApplause() {
    setApplause((currentValue)=>{
      return currentValue + 1
    })
  }

  

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://www.github.com/joao123.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Silva</strong>
              <time dateTime="2022-09-25 21:14:00">Comentado há 1h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleNewApplause}>
            <ThumbsUp /> Aplaudir
            <span>{applause}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

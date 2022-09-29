import { Avatar, Comment } from "../../components";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ id, author, content, publishedAt }) {
  const [comments, setComments] = useState(["Otimo projeto"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormat = format(publishedAt, "dd 'de' LLLL H:mm'h'", {
    locale: ptBr,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é inválido')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsAtualized = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsAtualized);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          Publicado há {publishedDateRelativeToNow}
        </time>
      </header>
      <main className={styles.content}>
        {content.map((line, index) => {
          if (content.type === "title") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>{" "}
              </p>
            );
          } else {
            return (
              <p key={line.content}>
                <a href="">#{line.content}</a>
              </p>
            );
          }
        })}
      </main>
      <footer>
        <form onSubmit={handleCreateNewComment} className={styles.comment}>
          <strong>Deixe seu feedback</strong>

          <textarea
            value={newCommentText}
            onChange={handleNewCommentChange}
            placeholder="Deixe seu comentário"
            name="comment"
            onInvalid={handleNewCommentInvalid}
            required
          />

          <div>
            <button type="submit">Comentar</button>
          </div>
        </form>
      </footer>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}

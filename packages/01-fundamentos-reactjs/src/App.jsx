import "./global.css";
import styles from "./app.module.css";
import { Header, Post, Sidebar, Comment } from "./components";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://www.github.com/emersonneves.png",
      name: "Emerson Pereira",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quos quisquam vel cupiditate adipisci architecto aspernatur velit. Aliquid iure velit mollitia quaerat impedit ducimus nulla qui, facere labore, pariatur ad!",
      },
      { type: "link", content: "github/projeto-01" },
      { type: "hashtag", content: "novoprojeto" },
      { type: "hashtag", content: "teste" },
    ],
    publishedAt: new Date("2022-09-28 09:54:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://www.github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "title", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quos quisquam vel cupiditate adipisci architecto aspernatur velit. Aliquid iure velit mollitia quaerat impedit ducimus nulla qui, facere labore, pariatur ad!",
      },
      { type: "link", content: "github/projeto-01" },
      { type: "hashtag", content: "novoprojeto" },
    ],
    publishedAt: new Date("2022-09-27 16:40:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;

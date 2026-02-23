import { useState } from "react";
import axios from "axios";
import styles from "./CreatePost.module.css";

export default function CreatePost({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/posts", {
        title,
        content,
        author: "Amirah"
      });

      setTitle("");
      setContent("");
      onPostCreated(); // refresh posts
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Create New Post 🌸</h3>

      <input
        type="text"
        placeholder="Post title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Write your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button type="submit">Post 💚</button>
    </form>
  );
}
import { useState } from "react";
import axios from "axios";
import styles from "./CreatePost.module.css";

export default function CreatePost({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first 💚");
      return;
    }

    if (!title.trim() || !content.trim()) {
      alert("Please fill in all fields 🌸");
      return;
    }

    try {
      await axios.post("https://mythoughtsapp.onrender.com/api/posts", {
        title,
        content,
        author: user.username,
      });

      setTitle("");
      setContent("");

      if (onPostCreated) {
        onPostCreated();
      }
    } catch (err) {
      console.error("Error creating post:", err);
      alert("Something went wrong posting 😭");
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
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CommentSection.module.css";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `https://mythoughtsapp.onrender.com/api/comments/${postId}`
      );
      setComments(res.data);
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("You must login first 💚");
      return;
    }

    try {
      await axios.post("https://mythoughtsapp.onrender.com/api/comments", {
        postId: postId,
        text: text,
        author: user.username
      });

      setText("");
      fetchComments();
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <div className={styles.commentBox}>
      <form onSubmit={handleComment}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Send 💚</button>
      </form>

      {comments.map((comment) => (
        <div key={comment._id} className={styles.comment}>
          <strong>{comment.author}</strong>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
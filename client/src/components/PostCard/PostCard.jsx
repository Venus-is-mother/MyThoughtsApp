import CommentSection from "../CommentSection/CommentSection";
import axios from "axios";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      {post.image && <img src={post.image} alt="post" />}

      <div className={styles.actions}>
        <button onClick={handleDelete}>
          Delete 💔
        </button>
      </div>

      <CommentSection postId={post._id} />
    </div>
  );


}
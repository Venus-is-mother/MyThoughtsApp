import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard/PostCard";
import CreatePost from "../components/CreatePost/CreatePost";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://mythoughtsapp.onrender.com/api/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <CreatePost onPostCreated={fetchPosts} />

      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
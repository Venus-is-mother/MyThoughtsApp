import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>Amirah’s Thoughts</h2>

      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/inbox">Inbox</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}
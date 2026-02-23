import styles from "./PrivateChat.module.css";

export default function PrivateChat() {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        <p className={styles.received}>Hello Amirah 🌸</p>
        <p className={styles.sent}>Hi there 💚</p>
      </div>

      <input placeholder="Type message..." />
    </div>
  );
}
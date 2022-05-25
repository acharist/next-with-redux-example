import styles from './PostCard.module.css'

export default function PostCard({ title, body }) {
  return (
    <div className={styles.postCard}>
      <span>Пост</span>
      <div className={styles.postTitle}>{title}</div>
      <div className={styles.postBody}>{body}</div>
    </div>
  );
}

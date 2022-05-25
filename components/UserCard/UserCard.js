import styles from './UserCard.module.css'

export default function UserCard({ name, email }) {
  return (
    <div className={styles.userCard}>
      <span>Пользователь</span>
      <div className={styles.userName}>{name}</div>
      <div className={styles.userEmail}>{email}</div>
    </div>
  );
}

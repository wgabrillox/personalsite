import styles from "./beta.module.css";

export default function Beta() {
  return (
    <div className="container">
      <div className={styles.beta}>BETA</div>
      <div className={styles.header}>
        <h1>Personal Site Coming Soon</h1>
      </div>
      <div className={styles.footer}>
        <p>&#169; Warren Gabrillo X</p>
      </div>
    </div>
  );
}

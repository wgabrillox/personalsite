import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.nameLogo}>
        <div className={styles.firstName}>Warren</div>
        <div className={styles.lastName}>Gabrillo</div>
      </div>
      <div className={styles.spacer} />
      <div className={styles.links}>
        {/* TODO: Add underline animation on hover */}
        <div className={styles.link}>About</div>
        <div className={styles.link}>Project</div>
        {/* TODO: Add button animation on hover/on click */}
        <div className={styles.contact}>Contact</div>
      </div>
    </div>
  );
}

import styles from "./header.module.css";
import Link from "next/link";

export default function Header({ active }) {
  return (
    <div className={styles.headerWrapper}>
      <Link href={"/"}>
        <div className={styles.nameLogo}>
          <div className={styles.firstName}>Warren</div>
          <div className={styles.lastName}>Gabrillo</div>
        </div>
      </Link>
      <div className={styles.spacer} />
      <div className={styles.links}>
        {/* TODO: Add underline animation on hover */}
        <div
          className={`${styles.link} ${active == "about" ? styles.active : ""}`}
        >
          <Link href={"/about"}>About</Link>
        </div>
        {/* <Link href={`/posts/${id}`}>{title}</Link> */}
        <div className={styles.link}>Projects</div>
        {/* TODO: Add button animation on hover/on click */}
        <div className={styles.contact}>Contact</div>
      </div>
    </div>
  );
}

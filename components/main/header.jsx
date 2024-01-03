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
        <div className={styles.link}>
          <div className={`${active == "about" ? styles.active : ""}`}>
            <Link href={"/about"}>About</Link>
          </div>
        </div>
        <div className={styles.link}>
          <div className={`${active == "projects" ? styles.active : ""}`}>
            <Link href={"/projects"}>Projects</Link>
          </div>
        </div>
        {/* TODO: Add button animation on hover/on click */}
        <div className={styles.contact}>Contact</div>
      </div>
    </div>
  );
}

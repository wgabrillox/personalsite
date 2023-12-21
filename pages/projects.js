import Header from "../components/main/header";
import styles from "./about.module.css";

export default function Projects() {
  return (
    <div>
      <Header active={"projects"} />
      <div className={styles.container}>
        <div className={styles.title}>Projects!</div>
        <div className={styles.content}>AH HA HA</div>
      </div>
    </div>
  );
}

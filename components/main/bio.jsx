import styles from "./bio.module.css";
import Image from "next/image";

export default function Bio() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          priority
          src="/images/profile.jpg"
          className={styles.borderCircle}
          height={200}
          width={200}
          alt=""
        />
      </div>
      {/* TODO: Use bg img */}
      <div className={styles.bioInfo}>
        <div className={styles.top}>Hello!</div>
        <div className={styles.middle}>I'm Warren R Gabrillo</div>
        <div className={styles.bottom}>
          A web developer located in Westchester, NY
        </div>
      </div>
    </div>
  );
}

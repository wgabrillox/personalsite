import styles from "./bio.module.css";
import Image from "next/image";

export default function Bio() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profilePicSection}>
          <div className={styles.profilePic}>
            <Image
              priority
              src="/images/profile.jpg"
              className={styles.borderCircle}
              fill
              sizes="(max-width: 200px), (max-height: 200px)"
              alt="Picture of Warren R. Gabrillo"
            />
          </div>
        </div>
        <div className={styles.bioInfo}>
          <div className={styles.top}>Hello!</div>
          <div className={styles.middle}>I'm Warren R Gabrillo</div>
          <div className={styles.bottom}>
            A web developer located in Westchester, NY
          </div>
        </div>
      </div>
    </div>
  );
}

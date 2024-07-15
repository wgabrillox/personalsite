import styles from "./bio.module.css";
import Image from "next/image";
import { IMAGES } from "../../../constants";

export default function Bio() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profilePicSection}>
          <div className={styles.profilePic}>
            <Image
              priority
              src={IMAGES.profilePic}
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

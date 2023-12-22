import styles from "./experiences.module.css";
import Image from "next/image";

export default function Experiences({ experiences }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Experiences</div>

      {experiences.map(
        (
          {
            image,
            imageWidth,
            imageHeight,
            company,
            position,
            timeline,
            description,
            skills,
          },
          index
        ) => (
          <div className={styles.container} key={index}>
            <div className={styles.experience}>
              <div className={styles.leftColumn}>
                <div>
                  <Image
                    priority
                    src={image}
                    width={imageWidth}
                    height={imageHeight}
                    alt="Wheels Up logo"
                  />
                </div>
                <div className={styles.companyName}>{company}</div>
                <div className={styles.position}>{position}</div>
                <div className={styles.timeline}>{timeline}</div>
              </div>
              <div className={styles.middleColumn}>
                <ul className={styles.description}>
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.skills}>
                  <div className={styles.skillsHeader}>Key Skills Used:</div>
                  <ul className={styles.skillList}>
                    {skills.map((skill, index) => (
                      <li key={index} className={styles.skillLabel}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

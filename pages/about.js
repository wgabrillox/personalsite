import Header from "../components/main/header";
import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header active={"about"} />
      <div className={styles.container}>
        <div className={styles.title}>ABOUT ME!</div>
        <div className={styles.content}>
          <div className={styles.images}>
            <div className={styles.leftColumn}>
              <div>
                <Image
                  priority
                  src="/images/about-me/wedding.JPG"
                  height={415}
                  width={250}
                  alt="Picture of Warren R. Gabrillo"
                />
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.rightColumnImage}>
                <div>
                  <Image
                    priority
                    src="/images/about-me/mantou.JPG"
                    height={200}
                    width={200}
                    alt="Picture of Warren R. Gabrillo"
                  />
                </div>
              </div>
              <div className={styles.rightColumnImage}>
                <div>
                  <Image
                    priority
                    src="/images/about-me/alien.jpeg"
                    height={200}
                    width={200}
                    alt="Picture of Warren R. Gabrillo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.infoHeader}>Hello World!</div>
            <div>
              My name is <span id={styles.name}>Warren R. Gabrillo</span>. I’m a
              web developer currently located in Westchester, NY. I have a B.S.
              in Information Technology from
              <span id={styles.rit}>
                {" "}
                Rochester Institute of Technology
              </span>{" "}
              with a concentration in Web Development and Mobile Computing.
              <br />
              <br />
              Most of my previous experience has been on the front end of the
              stack using Javascript, React, Redux, and some Typescript as well.
              Some of the back end exposure I’ve had includes Python, Django,
              and SQL.
              <br />
              <br />
              I’m using this site as a personal resume as well as a practice of
              utilizing and learning different web technologies and frameworks.
              Also listed on this site are some either ongoing or future
              personal projects.
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

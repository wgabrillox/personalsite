import Header from "../components/main/header";
import styles from "./projects.module.css";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <Header active={"projects"} />
      <div className={styles.container}>
        <div className={styles.title}>Projects!</div>
        {/* <div className={styles.content}>AH HA HA</div> */}
        <div className={styles.project}>
          <div className={styles.projectTitle}>Personal Site (This one!)</div>
          <div className={styles.projectDescription}>
            This personal site is a mixture of usage for a resume/semi
            portfolio. Unfortunately a lot of the previous work and projects I
            have helped develop in a professional environment were internal
            applications, therefore I don't have a link to display them here. I
            created this site mostly just to practice some old and learn some
            new technologies. The stack on this site is NextJS, MongoDB, and
            Vercel as a CI/CD tool. I also used Figma to create the initial
            design and will be sure link multiple iterations of the design as
            they come about. Github was the repo I utilized for my files and
            progress. You can find the link to both of these below!
          </div>
          <div className={styles.projectLink}>
            <a href="https://www.figma.com/file/KXnmNM29K4xWvWFT2pyBD7/Personal-Site?type=design&node-id=0%3A1&mode=design&t=BMhWVHNOkzqgoqOR-1">
              <Image
                priority
                src={"/images/figma-icon.png"}
                width={30}
                height={30}
                alt={"Figma Icon"}
              />
              <span>Figma</span>
            </a>
          </div>
          <div className={styles.projectLink}>
            <a href="https://github.com/wgabrillox/personalsite">
              <Image
                priority
                src={"/images/github-logo.png"}
                width={30}
                height={30}
                alt={"Github Logo"}
              />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

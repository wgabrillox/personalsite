import styles from "./projects.module.css";
import Image from "next/image";
import { IMAGES } from "../../constants";

const ProjectLink = ({ type, link }) => {
  const projectLinks = {
    figma: {
      imageLink: IMAGES.figma,
      imageAlt: "Figma Icon",
      imageLabel: "Figma",
    },
    github: {
      imageLink: IMAGES.github,
      imageAlt: "Github Icon",
      imageLabel: "Github",
    },
    trello: {
      imageLink: IMAGES.trello,
      imageAlt: "Trello Icon",
      imageLabel: "Trello",
    },
  };

  const { imageLink, imageAlt, imageLabel } = projectLinks[type];

  return (
    <div className={styles.projectLink}>
      <a href={link}>
        <Image priority src={imageLink} width={30} height={30} alt={imageAlt} />
        <span>{imageLabel}</span>
      </a>
    </div>
  );
};

export default function Projects() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>Projects!</div>
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
          <div className={styles.projectLinks}>
            <ProjectLink
              type="figma"
              link="https://www.figma.com/file/KXnmNM29K4xWvWFT2pyBD7/Personal-Site?type=design&node-id=0%3A1&mode=design&t=BMhWVHNOkzqgoqOR-1"
            />
            <ProjectLink
              type="github"
              link="https://github.com/wgabrillox/personalsite"
            />
            <ProjectLink
              type="trello"
              link="https://trello.com/b/DLvCdqaQ/personal-site"
            />
          </div>
        </div>
        <div className={styles.project}>
          <a href="https://lorcana-guess.vercel.app/" target="_blank">
            <div className={styles.projectTitle}>
              Disney Lorcana: Guess the Card
            </div>
          </a>
          <div className={styles.projectDescription}>
            This is an app that can be used to learn/review the different cards
            used within the Disney Lorcana TCG game. This is not affiliated or
            supported by Disney/Ravensburger, and is purely just a personal
            project. It has a Figma design I used as intial planning and
            placement of components. It utilizes a 3rd party database using
            Axios to make the REST Api calls that parses through their cards and
            sets, and uses that data accordingly. Otherwise it is created purely
            using React, and hosted on Vercel. I will be constantly adding
            updates throughout.
            <div
              // style={{
              //   width: 400,
              //   height: 300,
              //   position: "relative",
              // }}
              className={styles.lorcanaImg}
            >
              <Image
                priority
                src={IMAGES.lorcanaGuess}
                fill
                alt="Lorcana:Guess the Card screenshot"
              />
            </div>
          </div>
          <div className={styles.projectLinks}>
            <ProjectLink
              type="figma"
              link="https://www.figma.com/design/AADqIL2Rnf4lB57jjB5P41/Lorcana-Guess-The-Card?node-id=0-1&t=WUpZyb6U6bwXvztM-1"
            />
            <ProjectLink
              type="github"
              link="https://github.com/wgabrillox/lorcana-guess"
            />
            <ProjectLink
              type="trello"
              link="https://trello.com/b/x8hrbmOT/lorcana-guess"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

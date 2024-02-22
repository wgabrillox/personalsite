import styles from "./projects.module.css";
import Image from "next/image";

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
            <div className={styles.projectLink}>
              <a href="https://trello.com/b/DLvCdqaQ/personal-site">
                <Image
                  priority
                  src={"/images/trello-logo.jpeg"}
                  width={30}
                  height={30}
                  alt={"Trello Logo"}
                />
                <span>Trello</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectTitle}>Guess the EA FC 24 Player</div>
          <div className={styles.projectDescription}>
            When the game EA FC 24 first dropped, a lot of the different teams
            both domestic and international would play a game with their team
            members and try to guess who was the mystery player solely based on
            the statistics they were provided. So I thought this would be a fun
            project to try to convert digitally. Currently I'm just utilizing a
            mock dataset of the top 100 ranked players within the actual EA FC
            player base. Eventually it would be great to get access to the full
            database of 17k+ players, but I'll figure that out when needed. The
            game is still under development but feel free to follow any progress
            I make through the github page. The stack on this is just basic
            Javascript/React.
            <Image
              priority
              src={"/images/guesstheEAFC-example.png"}
              className={styles.eafcImage}
              width={400}
              height={300}
              alt="Guess the EAFC screenshot"
            />
          </div>
          <div className={styles.projectLink}>
            <a href="https://github.com/wgabrillox/guesstheeafc">
              <Image
                priority
                src={"/images/github-logo.png"}
                width={30}
                height={30}
                alt="Github Logo"
              />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

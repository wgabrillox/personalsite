import styles from "./experiences.module.css";
import Image from "next/image";

export default function Experiences() {
  const experiences = [
    {
      company: "Wheels Up",
      position: "Software Engineer",
      timeline: "July 2021 - Mar 2023",
      description: [
        "Used React, Typescript, and MobX",
        "Worked on porting a legacy application to use a more modern framework. The initial infrastructure was created with the idea that backend would maintain the application, but was transitioned to both ends being utilized.",
        "Application was a Flight Management System for the member services team to access the different information related to each reservation for the members. Either scheduling the trip, cancelling specific legs, updating information about the user and other passengers that were with them, which company was the main operator behind the flight, etc.",
        "Our project manager was also the main designer for the application as well as the middle man between the business and the technology sides of our teams. Him along with our scrum master would coordinate to determine our priorities of tasks, and assign them accordingly",
      ],
      skills: [
        "React",
        "Typescript",
        "Mobx",
        "Figma",
        "CircleCI",
        "Microsoft Azure",
        "Jira",
        "Github",
      ],
      image: "/images/Wheels_Up_Logo.jpg",
      imageAlt: "Wheels Up Logo",
      imageWidth: 185,
      imageHeight: 90,
      url: "",
    },
    {
      company: "McKinsey Investment Offices (MIO)",
      position: "Application Developer",
      timeline: "July 2017 - Sep 2020",
      description: [
        "Used React/Redux, Express, Python, SQL",
        "Built mostly internal applicaitons to help the business side of our team to automate their process by creating web portals for them to better organize their documents and data.",
        "Day to day work consisted of reporting to my team lead, who was also the main designer of our applications, and I would receive the wireframes and designs from him and implement the functionality accordingly",
        "Created some external applications, mainly one for partners to go through a step by step process of creating a transaction in the specific offering period",
        "Helped create the company's public facing website using Django CMS, HTML, and CSS",
        "Was temporarily pulled to a separate team where I was the sole front end developer to help refactor an old application and add some new features and functionality",
      ],
      skills: [
        "React",
        "Redux",
        "Express",
        "Django",
        "Python",
        "SQL",
        "Figma",
        "Django CMS",
        "Jenkins",
        "Jira",
        "Github",
      ],
      image: "/images/mio_logo.jpeg",
      imageAlt: "MIO Logo",
      imageWidth: 125,
      imageHeight: 125,
      url: "",
    },
    {
      company: "FDM Group",
      position: "IT Consultant",
      timeline: "May 2017 - Jul 2017",
      description: [
        "FDM is a consulting firm where they typically train new graduates, people doing career changes, or veterans and get them hired as a contractor in a variety of companies",
        "Went through the developer training stream, where they taught Java, HTML, CSS, Javascript, Unix, SQL as well as a finance class due to their clients being mostly in the financial institution",
      ],
      skills: ["Java", "HTML", "CSS", "Javascript", "SQL", "Unix"],
      image: "/images/Fdm-logo.jpg",
      imageAlt: "FDM Logo",
      imageWidth: 155,
      imageHeight: 90,
      url: "",
    },
    {
      company: "Datto",
      position: "QA Engineer Intern",
      timeline: "May 2015 - Aug 2015",
      description: [
        "Created a tool for business owners to be able to keep their clients' data and information safe if something were to happen to their power or connection, such as natural disaters",
        "Working on a team with other interns, we created an internal web application for the QA Engineers to figure out which tests are being run on which test bed environment",
      ],
      skills: ["HTML", "CSS", "Javascript", "SQL", "Selenium", "MySQL"],
      image: "/images/datto.png",
      imageAlt: "Datto Logo",
      imageWidth: 185,
      imageHeight: 80,
      url: "",
    },
    {
      company: "Mediacom",
      position: "OSS Intern",
      timeline: "Juno 2014 - Aug 2015",
      description: [
        "Basic HTML, CSS, Javscript to help maintain some of the companies websites",
      ],
      skills: ["HTML", "CSS", "Javascript", "Microsoft SQL Server"],
      image: "/images/mediacom_logo.jpg",
      imageAlt: "Mediacom Logo",
      imageWidth: 185,
      imageHeight: 80,
      url: "",
    },
  ];

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

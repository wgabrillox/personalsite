"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "../../../constants";
import ContactMe from "./contactMe";

export default function Header({ active = "" }) {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={styles.headerWrapper}>
        <Link href={"/"}>
          <div className={styles.nameLogo}>
            <div className={styles.firstName}>Warren</div>
            <div className={styles.lastName}>Gabrillo</div>
          </div>
        </Link>
        <div className={styles.spacer} />
        <div className={styles.links}>
          <div className={styles.link}>
            <div className={`${active == "about" ? styles.active : ""}`}>
              <Link href={"/about"}>About</Link>
            </div>
          </div>
          <div className={styles.link}>
            <div className={`${active == "projects" ? styles.active : ""}`}>
              <Link href={"/projects"}>Projects</Link>
            </div>
          </div>
          <div className={styles.contact} onClick={() => setShowModal(true)}>
            Contact
          </div>
        </div>
        <div className={styles.hamburgerMenu}>
          <Image
            priority
            src={IMAGES.hamburgerIcon}
            className={styles.hamburgerMenuIcon}
            height={35}
            width={35}
            alt="Hamburger Menu Icon"
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
          />
          {showMenu && (
            <div className={styles.hamburgerMenuContent} ref={ref}>
              <div className={styles.hamburgerLinks}>
                <div className={styles.hamburgerLink}>
                  <div className={`${active == "about" ? styles.active : ""}`}>
                    <Link href={"/about"}>About</Link>
                  </div>
                </div>
                <div className={styles.hamburgerLink}>
                  <div
                    className={`${active == "projects" ? styles.active : ""}`}
                  >
                    <Link href={"/projects"}>Projects</Link>
                  </div>
                </div>
                <div
                  className={styles.hamburgerLink}
                  onClick={() => setShowModal(true)}
                >
                  Contact
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ContactMe showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IMAGES } from "../../../constants";
export default function Header({ active = "" }) {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [yOffset, setYOffset] = useState(0);

  const ref = useRef();

  const handleClickOutside = () => setShowMenu(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    const dismissMenu = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);
    document.addEventListener("mousewheel", dismissMenu);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
      document.removeEventListener("mousewheel", dismissMenu);
    };
  }, [showMenu]);

  useEffect(() => {
    if (document) {
      document.body.style.overflow = showModal ? "hidden" : "auto";
    }

    setYOffset(showModal ? window.scrollY : 0);
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div
          className={styles.shadow}
          style={{ top: `${yOffset}px` }}
          onClick={() => setShowModal(false)}
        >
          <div
            className={styles.contactModal}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={styles.closeButton}
              onClick={() => setShowModal(false)}
            >
              X
            </div>
            <div className={styles.modalContent}>
              <div className={styles.title}>Say Hello!</div>
              <div className={styles.modalItem}>
                <Image
                  priority
                  src="/images/gmail-icon.png"
                  className={styles.contactIcon}
                  height={35}
                  width={35}
                  alt="Gmail Logo"
                />
                <a href="mailto:wgabrillox@gmail.com">wgabrillox@gmail.com</a>
              </div>
              <div className={styles.modalItem}>
                <Image
                  priority
                  src="/images/linkedin-logo.png"
                  className={styles.contactIcon}
                  height={35}
                  width={35}
                  alt="LinkedIn Logo"
                />
                <a href="https://www.linkedin.com/in/wgabrillox/">
                  linkedin.com/in/wgabrillox
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
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
    </>
  );
}

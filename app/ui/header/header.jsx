"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "../../../constants";
import ContactMe from "./contactMe";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function Header({ active = "" }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`flex sticky top-0 bg-white z-10 pb-2.5 pt-5 mb-10 shadow-[0_15px_10px_-20px_rgba(17,17,17,1)]`}
      >
        <Link href={"/"}>
          <div className="flex flex-col pl-3.5">
            <div className="text-customBlue text-3xl font-bold">Warren</div>
            <div className="text-3xl font-bold">Gabrillo</div>
          </div>
        </Link>
        <div className="grow" />
        <div className="hidden sm:flex m-auto text-xl font-bold cursor-pointer pr-3.5">
          <div className={"border-r-2 border-black py-1 px-2"}>
            <div
              className={`${
                active == "about" ? "border-b-2 border-customBlue" : ""
              }`}
            >
              <Link href={"/about"}>About</Link>
            </div>
          </div>
          <div className={"border-r-2 border-black py-1 px-2"}>
            <div
              className={`${
                active == "projects" ? "border-b-2 border-customBlue" : ""
              }`}
            >
              <Link href={"/projects"}>Projects</Link>
            </div>
          </div>
          <div
            className="py-1 px-2 bg-customBlue text-slate-50 rounded mx-2"
            onClick={() => setShowModal(true)}
          >
            Contact
          </div>
        </div>
        <div className={`block sm:hidden my-auto mx-3.5`}>
          <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Image
              priority
              src={IMAGES.hamburgerIcon}
              className={"block sm:hidden"}
              height={35}
              width={35}
              alt="Hamburger Menu Icon"
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link
                className={`${
                  active == "about" ? "border-b-2 border-customBlue" : ""
                }`}
                href={"/about"}
              >
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link
                className={`${
                  active == "projects" ? "border-b-2 border-customBlue" : ""
                }`}
                href={"/projects"}
              >
                Projects
              </Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                setShowModal(true);
              }}
            >
              Contact Me
            </MenuItem>
          </Menu>
        </div>
      </div>
      <ContactMe showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

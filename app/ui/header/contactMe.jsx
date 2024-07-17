"use client";

import Image from "next/image";
import { IMAGES } from "../../../constants";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

export default function ContactMe({ showModal, setShowModal }) {
  return (
    <Dialog open={showModal} onClose={() => setShowModal(false)}>
      <DialogTitle>Say Hello!</DialogTitle>
      <DialogContent>
        <div className="flex font-bold mb-2 items-center">
          <Image
            priority
            src={IMAGES.gmail}
            className="mr-2.5"
            height={35}
            width={35}
            alt="Gmail Logo"
          />
          <a href="mailto:wgabrillox@gmail.com">wgabrillox@gmail.com</a>
        </div>
        <div className="flex font-bold mb-2 items-center">
          <Image
            priority
            src={IMAGES.linkedIn}
            className="mr-2.5"
            height={35}
            width={35}
            alt="LinkedIn Logo"
          />
          <a href="https://www.linkedin.com/in/wgabrillox/">
            linkedin.com/in/wgabrillox
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

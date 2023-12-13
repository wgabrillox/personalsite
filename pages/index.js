import { useState } from "react";
import Beta from "../components/main/beta";
import Header from "../components/main/header";
import Bio from "../components/main/bio";
import Experiences from "../components/main/experiences";
import Skills from "../components/main/skills";
import * as d3 from "d3";
export default function Home() {
  return (
    <div>
      {/* <Beta /> */}
      <Header />
      <Bio />
      <Experiences />
      <Skills />
    </div>
  );
}

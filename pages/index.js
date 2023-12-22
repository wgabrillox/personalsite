import { useState } from "react";
import Beta from "../components/main/beta";
import Header from "../components/main/header";
import Bio from "../components/main/bio";
import Experiences from "../components/main/experiences";
import Skills from "../components/main/skills";
import { connectToDatabase } from "../lib/mongodb";

export default function Home({ experiences }) {
  return (
    <div>
      {/* <Beta /> */}
      <Header />
      <Bio />
      <Experiences experiences={experiences} />
      <Skills />
    </div>
  );
}

export async function getServerSideProps() {
  let { db } = await connectToDatabase();

  const experiences = await db.collection("Experiences").find().toArray();

  return {
    props: { experiences: JSON.parse(JSON.stringify(experiences)) },
  };
}

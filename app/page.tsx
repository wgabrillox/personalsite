import Header from "./ui/header/header";
import Bio from "./ui/home/bio";
import Experiences from "./ui/home/experiences";
import Skills from "./ui/home/skills";
import { connectToDatabase } from "../lib/mongodb";

export default async function Page({}) {
  const { db } = await connectToDatabase();

  const experiences = await db.collection("Experiences").find().toArray();
  const skillsRaw = await db.collection("Skills").find().toArray();
  const baseData = skillsRaw[0];
  const skills = [
    {
      id: baseData._id.toString(),
      name: baseData.name,
      children: baseData.children,
    },
  ];

  return (
    <>
      <Header />
      <Bio />
      <Experiences experiences={experiences} />
      <Skills skills={skills} />
    </>
  );
}

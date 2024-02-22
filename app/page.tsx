import Header from "./ui/header/header";
import Bio from "./ui/home/bio";
import Experiences from "./ui/home/experiences";
import Skills from "./ui/home/skills";
import { connectToDatabase } from "../lib/mongodb";

export default function Page({ experiences, skills }) {
  return (
    <>
      <Header />
      <Bio />
      <Experiences experiences={experiences} />
      <Skills skills={skills} />
    </>
  );
}

// export async function getServerSideProps() {
//   let { db } = await connectToDatabase();

//   const experiences = await db.collection("Experiences").find().toArray();
//   const skills = await db.collection("Skills").find().toArray();

//   return {
//     props: {
//       experiences: JSON.parse(JSON.stringify(experiences)),
//       skills: JSON.parse(JSON.stringify(skills)),
//     },
//   };
// }

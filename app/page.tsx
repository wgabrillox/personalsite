import Header from "./ui/(header)/header";
import Bio from "../components/main/bio";
import Experiences from "../components/main/experiences";
import Skills from "../components/main/skills";
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

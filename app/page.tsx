import Education from "./components/Education";
import Intro from "./components/Intro";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Intro />
      <Education />
      <WorkExperience />
    </main>
  );
}

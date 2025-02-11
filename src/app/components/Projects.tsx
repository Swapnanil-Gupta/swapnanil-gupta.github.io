import type { RefObject } from "react";
import Link from "next/link";
import PROJECTS from "@/data/project";

type Props = {
  ref?: RefObject<HTMLDivElement | null>;
};

function Projects({ ref }: Props) {
  return (
    <div id="projects" ref={ref}>
      <h2 className="text-2xl text-highlight">Projects</h2>
      <div className="mt-8 flex flex-col gap-4">
        {PROJECTS.map((proj) => (
          <Link key={proj.title} href={proj.href || ""}>
            <div className="cursor-pointer bg-neutral-800 hover:bg-accent/10 p-4 rounded-xl select-none transition-colors duration-300 ease-out">
              <p className="text-highlight font-medium">{proj.title}</p>
              <p>{proj.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;

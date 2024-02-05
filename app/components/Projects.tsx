import Link from "next/link";

const PROJECTS = [
  {
    title: "Microtube",
    description:
      "A real, distributed Youtube clone with video upload, 360p/480p/720p processing, thumbnail generation, likes/dislikes and comments.",
    href: "/projects/microtube",
  },
  {
    title: "Dynamic Island",
    description: "An attempt to recreate Apple's Dynamic Island on the web.",
    href: "/projects/dynamic-island",
  },
  {
    title: "Navigating change during COVID-19",
    description:
      "An app to visualize the effect of COVID-19 on US business, economy and environment.",
    href: "/projects/navigating-change-during-covid-19",
  },
];

function Projects() {
  return (
    <div>
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

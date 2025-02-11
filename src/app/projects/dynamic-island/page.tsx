import TechStack from "@/app/components/TechStack";
import { ExternalLink } from "lucide-react";
import { DYNAMIC_ISLAND } from "@/data/project";

function DynamicIsland() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-highlight">{DYNAMIC_ISLAND.title}</h2>
      <p>{DYNAMIC_ISLAND.description}</p>
      <TechStack stack={DYNAMIC_ISLAND.techStack} />
      <div className="flex gap-2 text-accent">
        <a
          className="flex gap-1 items-center"
          href="https://swapnanil-gupta.github.io/dynamic-island/"
          target="_blank"
        >
          Try it out <ExternalLink className="h-4 w-4" />
        </a>
        <p className="text-base">|</p>
        <a
          className="flex gap-1 items-center"
          href={DYNAMIC_ISLAND.githubLink}
          target="_blank"
        >
          Source Code <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      {DYNAMIC_ISLAND.videoLinks.map((video) => (
        <div key={video.title}>
          <p className="text-highlight">{video.title}</p>
          <div className="mt-6 rounded-xl overflow-hidden">
            <video src={video.link} controls />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynamicIsland;

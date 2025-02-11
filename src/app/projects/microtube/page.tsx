import TechStack from "@/app/components/TechStack";
import { ExternalLink } from "lucide-react";
import { MICROTUBE } from "@/data/project";

function Microtube() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-highlight">{MICROTUBE.title}</h2>
      <p>{MICROTUBE.description}</p>
      <TechStack stack={MICROTUBE.techStack} />
      <div className="flex gap-2 text-accent">
        <a
          className="flex gap-1 items-center"
          href={MICROTUBE.githubLink}
          target="_blank"
        >
          Source Code <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      {MICROTUBE.videoLinks.map((video) => (
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

export default Microtube;

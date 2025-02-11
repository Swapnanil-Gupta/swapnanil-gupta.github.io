import TechStack from "@/app/components/TechStack";
import { ExternalLink } from "lucide-react";
import { COVID19 } from "@/data/project";

export default function NavigatingChangeDuringCovid19() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-highlight">{COVID19.title}</h2>
      <p>{COVID19.description}</p>
      <TechStack stack={COVID19.techStack} />
      <div className="flex gap-2 text-accent">
        <a
          className="flex gap-1 items-center"
          href={COVID19.githubLink}
          target="_blank"
        >
          Source Code <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      {COVID19.videoLinks.map((video) => (
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

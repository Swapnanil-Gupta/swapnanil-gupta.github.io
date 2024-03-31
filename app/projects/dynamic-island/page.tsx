import TechStack from "@/app/components/TechStack";
import { ExternalLink } from "lucide-react";

function DynamicIsland() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-highlight">Dynamic Island</h2>
      <p>
        An implementation of Apple&apos;s Dynamic Island on the web using React
        and Framer Motion. Dynamic Island has some of the smoothest and coolest
        animations on an iPhone. The snappy and elastic animations make it look
        very lively and natural - which was the primary focus of the
        implementation. It supports the following states: Idle, Ring, Silent,
        Timer and Music.
      </p>
      <TechStack stack={["TypeScript", "React", "Framer Motion"]} />
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
          href="https://github.com/Swapnanil-Gupta/dynamic-island"
          target="_blank"
        >
          Source Code <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div>
        <p className="text-highlight">See it in action</p>
        <div className="mt-6 rounded-xl overflow-hidden">
          <video
            src="https://d2vwxessb8tj4z.cloudfront.net/videos/dynamic_island.mp4"
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default DynamicIsland;

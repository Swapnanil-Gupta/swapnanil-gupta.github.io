import TechStack from "@/app/components/TechStack";
import { ExternalLink } from "lucide-react";

export default function NavigatingChangeDuringCovid19() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl text-highlight">
        Navigating Change during COVID-19
      </h2>
      <p>
        A fullstack application that aims to correlate and interpret the effect
        of COVID-19 pandemic on the US economy, business and tax revenue. This
        project includes significant effort in data sourcing, cleaning,
        processing and complex SQL queries. The app several several
        visualizations, rich controls and comprehensive interpretation of the
        visualizations.
      </p>
      <TechStack
        stack={[
          "React",
          "React Router",
          "Google Charts",
          "Node.js",
          "Express.js",
          "SQL",
          "Oracle",
        ]}
      />
      <div className="flex gap-2 text-accent">
        <a
          className="flex gap-1 items-center"
          href="https://github.com/Swapnanil-Gupta/navigating-change-during-covid19"
          target="_blank"
        >
          Source Code <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div>
        <p className="text-highlight">Different Visualizations</p>
        <div className="mt-6 rounded-xl overflow-hidden">
          <video
            src="https://d2vwxessb8tj4z.cloudfront.net/videos/nav_change_graphs.mp4"
            controls
          />
        </div>
      </div>
      <div>
        <p className="text-highlight">
          Controls and customizing visualizations
        </p>
        <div className="mt-6 rounded-xl overflow-hidden">
          <video
            src="https://d2vwxessb8tj4z.cloudfront.net/videos/nav_change_controls.mp4"
            controls
          />
        </div>
      </div>
    </div>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";
import PROFILE from "@/data/profile";

function Intro() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-4xl font-medium text-highlight">{PROFILE.name}</h1>
      <div className="font-medium">
        <p>{PROFILE.title}</p>
        <p>{PROFILE.subtitle}</p>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {Object.keys(PROFILE.links).map((link, index) => {
          const typedLink = link as keyof typeof PROFILE.links;
          return (
            <div key={link} className="flex items-center gap-x-4">
              {index > 0 && <p>|</p>}
              <a
                className="text-accent"
                target="_blank"
                href={PROFILE.links[typedLink]}
              >
                {typedLink === "Resume" && typedLink}
                {typedLink === "Transcript" && typedLink}
                {typedLink === "Email" && (
                  <>
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6 text-accent" />
                  </>
                )}
                {typedLink === "GitHub" && (
                  <>
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6 text-accent" />
                  </>
                )}
                {typedLink === "LinkedIn" && (
                  <>
                    <span className="sr-only">LinkedIn link</span>
                    <Linkedin className="h-6 w-6 text-accent" />
                  </>
                )}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Intro;

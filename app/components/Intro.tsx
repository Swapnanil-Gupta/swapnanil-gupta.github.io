import { Github, Linkedin } from "lucide-react";

function Intro() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-mono text-highlight">Swapnanil Gupta</h1>
      <div className="font-medium">
        <p>Software Engineer</p>
        <p>CS graduate student @ UF</p>
      </div>
      <div className="flex items-center gap-4">
        <a
          className="text-accent"
          href="/files/resume.pdf"
          download="Swapnanil Gupta Resume.pdf"
        >
          Resume
        </a>
        <p>|</p>
        <a
          className="text-accent"
          href="/files/transcript.pdf"
          download="Swapnanil Gupta Transcript.pdf"
        >
          Transcript
        </a>
        <p>|</p>
        <a href="https://github.com/Swapnanil-Gupta" target="_blank">
          <span className="sr-only">GitHub link</span>
          <Github className="h-6 w-6 text-accent" />
        </a>
        <p>|</p>
        <a href="https://linkedin.com/in/swapnanil-gupta" target="_blank">
          <span className="sr-only">LinkedIn link</span>
          <Linkedin className="h-6 w-6 text-accent" />
        </a>
      </div>
    </div>
  );
}

export default Intro;

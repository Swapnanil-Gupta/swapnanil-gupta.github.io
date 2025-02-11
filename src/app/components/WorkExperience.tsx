import type { RefObject } from "react";
import Logo from "./Logo";
import WORK_EXPERIENCES from "@/data/work-experience";

type Props = {
  ref?: RefObject<HTMLDivElement | null>;
};

function WorkExperience({ ref }: Props) {
  return (
    <div id="work-experience" ref={ref}>
      <h2 className="text-2xl text-highlight">Work Experience</h2>
      <div className="mt-8 flex flex-col gap-6">
        {WORK_EXPERIENCES.map((xp) => (
          <div key={xp.company} className="flex gap-4 md:gap-6">
            <Logo src={xp.image} alt={`${xp.company} logo`} />
            <div>
              <p className="text-highlight font-medium">{xp.company}</p>
              <p>{xp.role}</p>
              <p>{xp.loc}</p>
              <p>
                {xp.from} - {xp.to}
              </p>
              <ul className="mt-2 flex flex-col gap-2 list-disc ml-4">
                {xp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;

import type { RefObject } from "react";
import Logo from "./Logo";
import EDUCATION from "../../data/education";

type Props = {
  ref?: RefObject<HTMLDivElement | null>;
};

function Education({ ref }: Props) {
  return (
    <div id="education" ref={ref}>
      <h2 className="text-2xl text-highlight">Education</h2>
      <div className="mt-8 flex flex-col gap-6">
        {EDUCATION.map((ed, index) => (
          <div key={ed.deg} className="flex gap-4 md:gap-6">
            <Logo src={ed.image} alt={`${ed.uni} logo`} />
            <div>
              <p className="text-highlight font-medium">{ed.uni}</p>
              <p>{ed.loc}</p>
              <p>{ed.deg}</p>
              <p>
                {ed.from} -{" "}
                <span className={index === 0 ? "text-accent" : ""}>
                  {ed.to}
                </span>
              </p>
              <p>GPA - {ed.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

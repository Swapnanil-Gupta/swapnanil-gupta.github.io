/* eslint-disable @next/next/no-img-element */

import Logo from "./Logo";

const EDUCATION = [
  {
    image: "/images/uf_logo.jpg",
    uni: "University of Florida",
    loc: "Gainesville, Florida, USA",
    deg: "Master of Science, Computer Science",
    from: "Aug 2023",
    to: "Present",
    gpa: "4.0/4.0",
  },
  {
    image: "/images/makaut_logo.jpg",
    uni: "Maulana Abul Kalam Azad University of Technology",
    loc: "Kolkata, West Bengal, India",
    deg: "Bachelor of Technology, Electronics & Communication",
    from: "Jun 2015",
    to: "Jul 2019",
    gpa: "9.55/10",
  },
];

function Education() {
  return (
    <div>
      <h2 className="text-2xl text-highlight">Education</h2>
      <div className="mt-8 flex flex-col gap-6">
        {EDUCATION.map((ed) => (
          <div key={ed.deg} className="flex gap-4 md:gap-6">
            <Logo src={ed.image} alt={`${ed.uni} logo`} />
            <div>
              <p className="text-highlight font-medium">{ed.uni}</p>
              <p>{ed.loc}</p>
              <p>{ed.deg}</p>
              <p>
                {ed.from} -{" "}
                <span className={ed.to === "Present" ? "text-accent" : ""}>
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

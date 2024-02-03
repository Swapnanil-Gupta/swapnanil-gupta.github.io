/* eslint-disable @next/next/no-img-element */

import Logo from "./Logo";

function Education() {
  return (
    <div>
      <h2 className="text-2xl text-highlight">Education</h2>
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex gap-4 md:gap-6">
          <Logo src="/images/uf_logo.jpg" alt="University of Florida logo" />
          <div>
            <p className="text-highlight">University of Florida</p>
            <p>Gainesville, Florida, USA</p>
            <p>Master of Science, Computer Science</p>
            <p>
              Aug 2023 - <span className="text-accent">Present</span>
            </p>
            <p>GPA - 4.0/4.0</p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6">
          <Logo src="/images/makaut_logo.jpg" alt="MAKAUT logo" />
          <div>
            <p className="text-highlight">
              Maulana Abul Kalam Azad University of Technology
            </p>
            <p>Kolkata, West Bengal, India</p>
            <p>Bachelor of Technology, Electronics & Communication</p>
            <p>Jun 2015 - Jul 2019</p>
            <p>GPA - 9.55/10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

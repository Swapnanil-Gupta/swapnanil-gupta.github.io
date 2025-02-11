import PROFILE from "@/data/profile";

function Footer() {
  return (
    <footer>
      <p>
        Please visit my{" "}
        <a href={PROFILE.links.GitHub} className="text-underline text-accent">
          GitHub
        </a>{" "}
        to find more of my projects and all of my code.
      </p>
    </footer>
  );
}

export default Footer;

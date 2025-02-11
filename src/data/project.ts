const PROJECTS = [
  {
    title: "Microtube",
    description:
      "A real, distributed Youtube clone with video upload, 360p/480p/720p processing, thumbnail generation, likes/dislikes and comments.",
    href: "/projects/microtube",
  },
  {
    title: "Dynamic Island",
    description: "An attempt to recreate Apple's Dynamic Island on the web.",
    href: "/projects/dynamic-island",
  },
  {
    title: "Navigating change during COVID-19",
    description:
      "An app to visualize the effect of COVID-19 on US business, economy and environment.",
    href: "/projects/navigating-change-during-covid-19",
  },
];

const MICROTUBE = {
  title: "Microtube",
  description:
    "MicroTube is a real Youtube clone. However, I did not just recreate only the UI of Youtube but also some of it's core features video upload, 360p/480p/720p processing, thumbnail generation, likes/dislikes and comments. etc. from scratch. It is a distributed and extensible system that offers a small subset of Youtube's functionality.",
  techStack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Prisma",
    "AWS SQS",
    "AWS S3",
    "FFMpeg",
    "AWS RDS",
    "MySQL",
  ],
  githubLink: "https://github.com/Swapnanil-Gupta/microtube",
  videoLinks: [
    {
      title: "Browsing, searching and video playback",
      link: "https://d2vwxessb8tj4z.cloudfront.net/videos/microtube_home_search_playback.mp4",
    },
    {
      title: "Likes, dislikes and comments",
      link: "https://d2vwxessb8tj4z.cloudfront.net/videos/microtube_like_dislike_comment.mp4",
    },
    {
      title: "Uploading and processing videos",
      link: "https://d2vwxessb8tj4z.cloudfront.net/videos/microtube_upload.mp4",
    },
  ],
};

const COVID19 = {
  title: "Navigating Change during COVID-19",
  description:
    " A fullstack application that aims to correlate and interpret the effect of COVID-19 pandemic on the US economy, business and tax revenue. This project includes significant effort in data sourcing, cleaning, processing and complex SQL queries. The app several several visualizations, rich controls and comprehensive interpretation of the visualizations.",
  techStack: [
    "React",
    "React Router",
    "Google Charts",
    "Node.js",
    "Express.js",
    "SQL",
    "Oracle",
  ],
  githubLink:
    "https://github.com/Swapnanil-Gupta/navigating-change-during-covid19",
  videoLinks: [
    {
      title: "Different Visualizations",
      link: "https://d2vwxessb8tj4z.cloudfront.net/videos/nav_change_graphs.mp4",
    },
    {
      title: "Controls and customizing visualizations",
      link: "https://d2vwxessb8tj4z.cloudfront.net/videos/nav_change_controls.mp4",
    },
  ],
};

const DYNAMIC_ISLAND = {
  title: "Dynamic Island",
  description:
    "An implementation of Apple's Dynamic Island on the web using React and Framer Motion. Dynamic Island has some of the smoothest and coolest animations on an iPhone. The snappy and elastic animations make it look very lively and natural - which was the primary focus of the implementation. It supports the following states: Idle, Ring, Silent, Timer and Music.",
  techStack: ["TypeScript", "React", "Framer Motion"],
  githubLink: "https://github.com/Swapnanil-Gupta/dynamic-island",
  videoLinks: [
    {
      title: "Fluid Animations",
      link: "https://d2vwxessb8tj4z.cloudfront.net/videos/dynamic_island.mp4",
    },
  ],
};

export default PROJECTS;
export { MICROTUBE, COVID19, DYNAMIC_ISLAND };

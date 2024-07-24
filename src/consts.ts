import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "kh4r0nyx",
  EMAIL: "hanzotaz@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "kh4r0nyx is a Malaysian based CTF team.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/hanzotaz"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/asyeeqasywaree",
  },
  {
    NAME: "ctftime",
    HREF: "https://ctftime.org/team/310186"
  }
];

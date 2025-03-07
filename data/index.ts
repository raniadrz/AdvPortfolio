import { Github } from "lucide-react";

const data = {
  home: {
    name: "Ourania Ntrizi",
    description: "I'm a passionate Junior #Software Engineer, who builds things for #the_Web. ", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "https://app.box.com/s/xm687czoiucirkry1cek0fdtcrda2pi5",
  },
  sidebar: {
    links: [
      {
        name: "git hub",
        link: "https://www.linkedin.com/in/ourania-ntrizi/",
        icon: Github,
      },
    ],
  },
  about: {
    description:
      "I'm a junior Software Engineer who loves building modern web apps. I specialize in creating clean and interactive UI using React. In my free time, I enjoy exploring new technologies and keeping up with the latest trends in web development. Additionally, I like to contribute to open-source projects and share my knowledge through writing technical blogs.",
    numbers: [
      { name: "PROJECTS-COMPLETED", number: 2 },
      { name: "TOTAL-SEMINARS", number: 24 },
      // { name: "CURRENT-YEAR-CONTRIBUTIONS", number: 130 },
    ],
  },
  projects: {
    description: "Projects that have recently been completed.",
    projects: [
      {
        id: 1,
        title: "E-commerce Website",
        description: "A Eshop app that can make orders, admin Dashboard and more...",
        image: "/projects-imgs/eshop.png",
        githubLink: "https://github.com/raniadrz/myProject",
        previewLink: "https://mypetshop.vercel.app/",
      },
      {
        id: 2,
        title: "Game ",
        description:
          "Memory Card Game and TicTacToc Game built with React. It's memory card matching and tictactoc.",
        image: "/projects-imgs/game.png",
        githubLink: "https://github.com/raniadrz/cardGame",
        previewLink: "https://card-game-mu-two.vercel.app/",
      },
      
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 13,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
    ],
  },
  contact: {
    email: "From:",
  },
};

export default data;
        
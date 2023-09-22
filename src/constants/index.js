import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ReactJS",
  },
  {
    title: "Javascript",
  },
  {
    title: "Typescript",
  },
  {
    title: "NodeJS",
  },
  {
    title: "NextJS",
  },
  {
    title: "NestJS",
  },
  {
    title: "Angular",
  },
  {
    title: "AWS",
  },
  {
    title: "Azure",
  },
  {
    title: "Docker",
  },
  {
    title: "Unit testing",
  },
  {
    title: "Serverless",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Javascript Fullstack developer",
    company_name: "Velotio Technologies Pvt Ltd.",
    iconBg: "#383E56",
    date: "December 2021 - Present",
    points: [
      "Here I have worked on B2B, B2C products in majorly healthcare domain, government sites as a fullstack developer.",
      "Tech stack: React(typescript), redux, redux thunk,  node js(typescript), sequlize, mongoose, azure service bus, azure serverless functions, grafana(for checking prod logs), crons(agenda), twilio, mocha, chai, sinon, jest",
      "We optimised our Frontend application, by refactoring the existing components and css import mechanism, lazy loading, for SEO friendliness we also used NextJs static/server/incremental server side rendering in one of our project",
      "In BE, I have developed several apis in both node js(typescript) & lambda, crons, pub sub architectures, created chat plaform, and also established other sort of communication like email, sms, ivr.",
      "Here I got a chance to develop a cron scheduler from scratch specific to our needs which more memory optimised & fast than our existing azenda library based scheduler",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Engineer",
    company_name: "TCS",
    iconBg: "#E6DEDD",
    date: "August 2020 - December 2021",
    points: [
      "Explore microsoft power platform along with other integration like sharepoint, azure, logic apps etc.",
      "Developed custom components using power component framework(PCF), sharepoint framework(SPFx) using javascript/typescript",
      "Worked on RPA(Robotic Process Automation) tools",
      "Worked on Azure ML studio, python & successfully deployed a ML classifier",
    ],
  },
];

const projects = [
  {
    name: "Google doc clone",
    description:
      "A MERN stack project, which supports all the fetaures of rich text editor(Quill), with real time editing",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/approjecthub/gdoc",
  },
  {
    name: "Food Ordering system",
    description: `Here I have considered 2 types of users: admin, customer, Admin can perform CRUD operations on item database, Customer can check their purchase history, place new items to 
      the cart & later proceed to purchase, Authentication tokens are stored for a particular time period to avoid repeated login, User email needs to be unique per user, Authguard, http-interceptor, rxjs, reactive forms etc. concepts
      are applied`,
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/approjecthub/FoodOrderingSystem",
  },
  {
    name: "Slack Clone",
    description:
      "Google login, relatime message update, Firestore integrations etc. done in this project",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "https://slack-clone-2ee4b.web.app/",
  },
  {
    name: "Tree select",
    description:
      "Here selection of parent will cause all children to be selected, reverse is also true, need to implement a lot of graph traversal using BFS algo using vanilla javascript",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/approjecthub/tree-select",
  },
  {
    name: "Snake game",
    description: "A simple snake game implementation using vanilla javascript",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/approjecthub/snake-game",
  },
];

export { services, technologies, experiences, projects };

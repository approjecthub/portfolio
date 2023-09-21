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
  carrent,
  jobit,
  tripguide,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

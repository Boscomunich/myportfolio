import {
  frontend,
  backend,
  mobile,
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
  threejs,
  docker,
  python,
  facebook,
  instagram,
  twitter,
  linkedin,
  whatsapp,
  alx,
  ztm
} from "../assets";

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
    description: 'I create Responsive websites built for an optimal user experience that achieves your business goals.'
  },
  {
    title: "Mobile Developer",
    icon: mobile,
    description:'I create mobile apps with great ui/ux design'
  },
  {
    title: "Backend Developer",
    icon: backend,
    description:'I build fast api that is scaled according to your demand'
  },
];

const links = [
  {
    title:'Portfolio',
    id:1
  },
  {
    title:'About',
    id:2
  },
  {
    title:'Project',
    id:3
  },
  {
    title:'Contact',
    id:4
  },
]

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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name:'Python',
    icon:python
  }
];

const socials = [
  {
    name: 'Facebook',
    icon: facebook
  },
  {
    name: 'Instagram',
    icon: instagram
  },
  {
    name: 'Linkedin',
    icon: linkedin
  },
  {
    name: 'WhatsApp',
    icon: whatsapp
  },
  {
    name: 'Twitter',
    icon: twitter
  }
];

const experiences = [
  {
    title: "ALX SE programme",
    company_name: "ALX",
    icon: alx,
    iconBg: "#010313",
    date: "March 2023 - july 2024",
    points: [
      "c programming languge and basics of coding .",
      "Devops engineer and manging Linux server.",
      "Python and OOP in python.",
      
    ],
  },
  {
    title: "Zero To Mastery full stack web development course",
    company_name: "ZTM",
    icon: ztm,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - june 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing backend for web application and connecting it to frontend with api",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



export { services, technologies, links, socials, experiences};
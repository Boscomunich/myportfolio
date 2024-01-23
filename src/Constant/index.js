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
  python,
  facebook,
  instagram,
  twitter,
  linkedin,
  alx,
  ztm,
  github2,
  postgresql,
  flutter,
  dart,
  pricy,
  webbase
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
    description:'I build and maintain custom backend'
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
    name: "Flutter",
    icon: flutter,
  },
  {
    name:'Python',
    icon:python
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
];

const socials = [
  {
    name: 'Facebook',
    icon: facebook,
    link: 'https://www.facebook.com/boscomunich',
    bg: '#3b5998'
  },
  {
    name: 'Instagram',
    icon: instagram,
    link: 'https://www.instagram.com/boscomunich?igsh=MzNINGNkZWQ4Mg==',
    bg: '#c32aa3'
  },
  {
    name: 'Linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/chidera-obuegbe-ab46b225b/?originalSubdomain=ng',
    bg: '#007bb5'
  },
  {
    name: 'Github',
    icon: github2,
    link: 'https://github.com/Boscomunich',
    bg: '#4078c0'
  },
  {
    name: 'Twitter',
    icon: twitter,
    link: 'https://twitter.com/ChideraObuegbe',
    bg: '#1da1f2'
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

const project = [
  {
    name: 'WebBase',
    github: 'https://github.com/Boscomunich/myagency',
    link: 'https://myagency-sigma.vercel.app',
    description: 'My web dev agency website',
    icon: webbase
  },
  {
    name: 'Pricy',
    github: '',
    link: '',
    description: 'A website that helps users monitor product prices on amazon website',
    icon: pricy
  }
]



export { services, technologies, links, socials, experiences, project};
import { DiRedis } from "react-icons/di";
import {
  frontend,
  backend,
  alx,
  ztm,
  insync,
  pricy,
  webbase,
} from "../assets";

import { FaLinkedin, FaInstagram, FaNodeJs, FaAws, FaServer  } from "react-icons/fa";
import { FaReact, FaSquareGithub, FaXTwitter } from "react-icons/fa6";
import { SiFastapi, SiFlask, SiMicrosoftazure, SiMongodb, SiPostgresql, SiRemix } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const services = [
  {
    id: 1,
    title: "Frontend Developer",
    icon: frontend,
    description: "As a Frontend Developer, I specialize in creating responsive and visually appealing websites. My focus is on delivering an optimal user experience that aligns with your business objectives. By leveraging the latest technologies and best practices, I ensure that every website I develop is not only aesthetically pleasing but also highly functional and accessible across all devices."
  },
  {
    id: 2,
    title: "Backend Developer",
    icon: backend,
    description: "In my role as a Backend Developer, I design, build, and maintain robust and scalable backend systems. My expertise lies in developing custom solutions that meet your specific needs, ensuring seamless integration with frontend interfaces and other services. I prioritize security, performance, and reliability to support your business operations effectively."
  },
];

const stacks = [
  {
    id: 1,
    name: 'Frontend',
    list: [
      {
        name: 'React',
        icon: <FaReact />
      },
      {
        name: 'NextJs',
        icon: <RiNextjsFill />
      },
      {
        name: 'Remix',
        icon: <SiRemix />
      },
    ],
  },
  {
    id: 2,
    name: 'Backend',
    list: [
      {
        name: 'Express',
        icon: <FaNodeJs />
      },
      {
        name: 'FastApi',
        icon: <SiFastapi />
      },
      {
        name: 'Flask',
        icon: <SiFlask />
      },
    ],
  },
  {
    id: 3,
    name: 'Databases',
    list: [
      {
        name: 'MongoDB',
        icon: <SiMongodb />
      }, 
      {
        name: 'Postgres',
        icon: <SiPostgresql />
      },
      {
        name: 'Redis',
        icon: <DiRedis />
      }
    ],
  },
  {
    id: 4,
    name: 'Cloud Services',
    list: [
      {
        name: 'AWS',
        icon: <FaAws />
      }, 
      {
        name: 'Azure',
        icon: <SiMicrosoftazure />
      },
      {
        name: 'VPS',
        icon: <FaServer />
      }
    ]
  }
]

const links = [
  {
    title:'Home',
    id:1
  },
  {
    title:'Services',
    id:2
  },
  {
    title:'Work',
    id:4
  },
  {
    title:'Faq',
    id:3
  },
  {
    title:'Contact',
    id:5
  },
]

const technologies = [
  {
    name: "HTML 5",
  },
  {
    name: "CSS 3",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "React JS",
  },
  {
    name: "NextJs",
  },
  {
    name: "Remix",
  },
  {
    name: "Redux Toolkit",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Node JS",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Three JS",
  },
  {
    name: "Git",
  },
  {
    name:'Python',
  },
  {
    name: "Flask",
  },
  {
    name: "FastApi",
  },
  {
    name: "Postgresql",
  },
  {
    name: "Graphql",
  },
  {
    name: "Appollo client",
  },
  {
    name: "AWS s3",
  },
];

const socials = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/boscomunich?igsh=MzNINGNkZWQ4Mg==',
    bg: '#c32aa3'
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/chidera-obuegbe-ab46b225b/?originalSubdomain=ng',
    bg: '#007bb5'
  },
  {
    name: 'Github',
    icon: <FaSquareGithub />,
    link: 'https://github.com/Boscomunich',
    bg: '#4078c0'
  },
  {
    name: 'Twitter',
    icon: <FaXTwitter />,
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
      "Git/Github",
      "C programming language ",
      "Linux(Basics, Permissions, Redirections, Syscalls, Static Libraries)",
      "Python programming language ",
      "Data structures and algorithms",
      "Systems Engineering",
      "Systems Engineering/Devops",
      "Webstack Debugging",
      "Servers,",
      'Web Servers (Nginx)',
      'Application Servers (Gunicorn)',
      'Configuration Management (Puppet)',
      'Load Balancers',
      'Networking ',
      'Monitoring',
      ' TypeScript',
      "Node JS basic",
      "Unittests",
      'Advanced MySQL',
      'NoSQL',
      'Redis',
      'Pagination',
      'Caching',
      ' i18n',
      'Queuing system in JS',
      'Authentication Basic & Session',
      'User authentication',
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

const works = [
  {
    title: 'Insync',
    description: 'a project management app',
    image: insync,
    github: '',
    live: '',

  },
  {
    title: 'Pricy',
    description: 'a project management app',
    image: pricy,
    github: '',
    live: '',

  },
  {
    title: 'Webbase',
    description: 'a project management app',
    image: webbase,
    github: '',
    live: '',

  }
]

export { services, technologies, links, socials, experiences, stacks, works };
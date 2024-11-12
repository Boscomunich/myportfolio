import { DiRedis } from "react-icons/di";
import {
  frontend,
  backend,
  alx,
  ztm,
  insync,
  webbase,
  xora,
  calendlink,
  blockdocs,
  carepulse,
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
    title: 'CalendLink',
    description: 'A scheduling app',
    detailedDescription: "CalendLink is a powerful and intuitive scheduling app designed to streamline your appointment booking process. Whether you're managing meetings, consultations, or personal appointments, CalendLink offers a seamless experience for both you and your clients. With features like real-time availability, automated reminders, and integration with popular calendar services, CalendLink ensures you never miss an important event. Built with modern technologies like NextJS, TailwindCSS, Shadcn, Prisma, AuthJS, and Nylas, CalendLink provides a robust and scalable solution for all your scheduling needs.",
    image: calendlink,
    github: 'https://github.com/Boscomunich/calendlink.git',
    live: 'https://calendlink.vercel.app/',
    technologies: [
      'NextJS',
      'Tailwindcss',
      'Shadcn',
      'prisma',
      'authjs',
      'nylas'
    ]
  },

  // {
  //   title: 'Insync',
  //   description: 'a project management app',
  //   image: insync,
  //   github: 'https://github.com/Boscomunich/task-manager',
  //   live: 'https://insync-vg0w.onrender.com',
  //   technologies: [
  //     'React',
  //     'GraphqlClient',
  //     'Expressjs',
  //     'Graphql',
  //     'Prisma',
  //     'Postgres'
  //   ],
  //   detailedDescription: 'Insync is a dynamic project management app designed to streamline your workflow and enhance team collaboration. With real-time updates, intuitive task tracking, and seamless integration with popular tools, Insync ensures that your projects stay on track and your team stays in sync.',
  // },

  {
    title: 'Xora',
    description: 'Modern Sass landing page',
    detailedDescription: 'Xora is a sleek and modern SaaS landing page designed to showcase your software products and services. With a clean and responsive design, Xora ensures that your landing page looks great on all devices. Built with React and TailwindCSS, Xora offers a seamless user experience and easy customization. Whether you are launching a new product or promoting an existing one, Xora provides the perfect platform to engage your audience and drive conversions.',
    image: xora,
    github: 'https://github.com/Boscomunich/xorex',
    live: 'https://xorex.vercel.app',
    technologies: [
      'React',
      'Tailwind-css'
    ]
  },

  {
    title: 'BlockDocs',
    description: 'collaborative editor',
    detailedDescription: 'BlockDocs is a cutting-edge collaborative editor designed to enhance team productivity and streamline document management. With real-time editing, version control, and seamless integration with popular tools, BlockDocs ensures that your team can work together efficiently from anywhere. Built with Next.js, Clerk, Liveblocks, Lexical-editor, and TailwindCSS, BlockDocs offers a robust and scalable solution for all your collaborative editing needs.',
    image: blockdocs,
    github: 'https://github.com/Boscomunich/mydocs',
    live: 'https://mydocs-seven.vercel.app/',
    technologies: [
      'Nextjs',
      'Clerk',
      'Liveblocks',
      'Lexical-editor',
      'Tailwind-css'
    ]
  },

  {
    title: 'Carepulse',
    description: 'patient appointment booking app',
    detailedDescription: 'Carepulse is a comprehensive patient appointment booking app designed to simplify the scheduling process for healthcare providers and patients. With features like real-time appointment availability, automated reminders, and secure patient data management, Carepulse ensures a seamless and efficient booking experience. Built with Next.js, TailwindCSS, Appwrite, and Shadcn, Carepulse offers a robust and scalable solution for modern healthcare practices.',
    image: carepulse,
    github: 'https://github.com/Boscomunich/physioassistant',
    live: 'https://physioassistant.vercel.app/',
    technologies: [
      'Nextjs',
      'Tailwind-css',
      'App-write',
      'Shadcn'
    ]
  },

  {
    title: 'Webbase',
    description: 'web development agency',
    detailedDescription: 'Webbase is a dynamic web development agency dedicated to creating innovative and high-performance websites. Our team specializes in building responsive, user-friendly, and visually appealing websites that cater to your business needs. Utilizing cutting-edge technologies like Next.js, TailwindCSS, Ant Design UI, and Framer Motion, Webbase ensures that your web presence is not only functional but also engaging and interactive. Whether you need a simple landing page or a complex web application, Webbase has the expertise to deliver top-notch solutions.',
    image: webbase,
    github: 'https://github.com/Boscomunich/myagency',
    live: 'https://myagency-sigma.vercel.app/',
    technologies: [
      'Nextjs',
      'Tailwind-css',
      'antd-ui',
      'framer-motion'
    ]
  }

]

export { services, technologies, links, socials, experiences, stacks, works };
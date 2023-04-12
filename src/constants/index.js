import {
  mobile,
  backend,
  creator,
  web,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  dshirt,
  threejs,
  udemy,
  job,
  cacademy,
  githubfinder,
  hangman,
  houseretail,
  minecraft,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Fullstack Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'FullStack Developer',
    company_name: 'CodingAcademy',
    icon: cacademy,
    iconBg: '#383E56',
    date: 'March 2022 - June 2022',
    points: [
      'The start of My journey was when I joined "Coding Academy".',
      "That was basically where I learned the fundementals of web; the start of the road practically but it wasn't enough.",
      'I had real fun and learned the basics of web development, and the industry overall.',
      'built small to big projects and coded intreview questions from masters.',
    ],
  },
  {
    title: 'FrontEnd Development',
    company_name: 'Udemy',
    icon: udemy,
    iconBg: '#E6DEDD',
    date: 'June 2022 - Sep 2022',
    points: [
      'After taking the course at Coding Academy I felt I needed more knowledge so I took 11 online Courses which was Project oriented Im gonna name here and take them as references for experience with addition to the 100+ Projects I made from them.',
      'I started with 2 courses; UI&UX Course, and Design Rules Course.',
      'Next I took HTML & CSS Course, following by a full JavaScript Fundementals Course.',
      'After that I took 2 Courses in React.js and 2 Fullstack Courses, then a course In Algorithms & Data Structures - Javascript.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Udemy',
    icon: udemy,
    iconBg: '#383E56',
    date: 'Sep 2022 - Mar 2023',
    points: [
      'to Finish I took 2 Courses for Projects - one was for 20 Projects in Vanilla-JavaScript,',
      'and One was 50 Projects - One a day which made my github explode with new real-life scenario projects.',
      'for now I start Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'Looking for a job',
    icon: job,
    iconBg: '#E6DEDD',
    date: 'May 2023 - Present',
    points: [
      'Develop and maintain web applications using React.js and other related technologies.',
      'Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implement responsive design and ensuring cross-browser compatibility.',
      'Participate in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Idan proved me wrong.',
    name: 'Stacey Maman',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Idan does.",
    name: 'Rami Derulo',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Idan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Cardi Biton',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Pro Shop',
    description:
      'Web-based platform that allows users to search, buy, and manage account via website with various products, admin managment and a convenient and efficient solution for digital needs and shopping.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/IdanKfir/Proshop',
    source_code_link2: 'https://ikproshop.herokuapp.com/',
  },
  {
    name: 'Dev Connect',
    description:
      'This is a MERN stack application, It is a small social network app that includes authentication, profiles and forum posts...',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/IdanKfir/ikdev-connect',
    source_code_link2: 'https://ikdev-connect-production.up.railway.app/',
  },
  {
    name: 'Ik News',
    description:
      'A simple news platform that allows users to see interactive posts, categories, and access newsletter, I learned css html while building this so it has much to add and edit.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/IdanKfir/NewsGrid',
    source_code_link2: 'https://idanknews.netlify.app/',
  },
  {
    name: '3D Shirt Model',
    description:
      "A project that has a 3D-Shirt-Model which is responsive, has Color changes, texture and you can upload logo to the model. I was trying to use OpenAI till they decided their API Isn't so open anymore.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'three.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'openai',
        color: 'green-text-gradient',
      },
    ],
    image: dshirt,
    source_code_link: 'https://github.com/IdanKfir/3D-Shirt',
    source_code_link2: 'https://ik-shirt.vercel.app/',
  },
  {
    name: '3D Minecraft Clone',
    description: 'This project is just me trying to mimic Minecraft in React.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'pink-text-gradient',
      },
      {
        name: 'three.js',
        color: 'green-text-gradient',
      },
    ],
    image: minecraft,
    source_code_link: 'https://github.com/IdanKfir/Minecraft-Clone',
    source_code_link2: 'https://ik-minecraft.vercel.app/',
  },
  {
    name: 'Github Finder',
    description:
      'React app to search Github profiles. This app uses the Context API along with the useContext and useReducer hooks for state management.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
    ],
    image: githubfinder,
    source_code_link: 'https://github.com/IdanKfir/github-finder',
    source_code_link2: 'https://ikgithub-finder.vercel.app/',
  },
  {
    name: 'Hangman game',
    description:
      'Select a letter to figure out a hidden word in a set amount of chances, Display hangman pole and figure using SVG.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: hangman,
    source_code_link: 'https://github.com/IdanKfir/Hangman',
    source_code_link2: 'https://github.com/IdanKfir/Hangman',
  },
  {
    name: 'House Retail',
    description: 'House retail project I built with react',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
    ],
    image: houseretail,
    source_code_link: 'https://github.com/IdanKfir/ik-houseretail',
    source_code_link2: 'https://ik-houseretail.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };

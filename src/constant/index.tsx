import { EmailIcon, GithubIcon, TwitterIcon } from 'ui/icons'
import { LinkedInIcon } from 'ui/icons/LinkedIn'
export const RESUME_URL =
  'https://docs.google.com/document/d/1yPVQfaxMkXqPNVjwvSNAPk3mVgfZ0vvFr2d_qZoyS9c/edit'
export const SITE_URL = 'https://www.wnassour.com/'
export const SITE_NAME = 'Wassim Blog'
export const TWITTER_USERNAME = '@wassimnassour'
export const PHONE_NUMBER = '+212641327128'
export const EMAIL = 'nassourwassim@gmail.com'
export const TWITTER_URL = 'https://www.twitter.com/wassimnassour'
export const LINKED_IN_URL = 'https://www.linkedin.com/in/wassim-nassour-a21b53138/'
export const PROFILE_TITLE = 'Software Engineer'
export const EXPERIENCE_YEARS = '6+ years'
export const PROFILE_DESCRIPTION =
  'Wassim Nassour is a software engineer in Casablanca with 6+ years of experience across application architecture, web and mobile development, and backend APIs.'
export const ABOUT =
  'I’m a software engineer in Casablanca with 6+ years of experience building software for banking, e-commerce, and SaaS products. My work spans application architecture, web and mobile interfaces, and backend APIs. I care about making software easier to maintain through clear design, automated testing, and performance work.'

export const NoteColors = {
  purple: '#B692FE',
  orange: '#FF9B73',
  blue: '#01D4FF',
  yellow: '#FFC972'
}

export const NAV_LINKS = [
  {
    url: '/',
    name: 'Home'
  },

  {
    url: '/notes',
    name: 'Notes'
  },
  {
    url: '/blog',
    name: 'Blog'
  },

  {
    url: '/about',
    name: 'About'
  },
  {
    url: '/#contactMe',
    name: 'Contact me '
  }
]

export const socialLinks = [
  { url: TWITTER_URL, label: 'Twitter', icon: <TwitterIcon /> },
  {
    url: LINKED_IN_URL,
    label: 'LinkedIn',
    icon: <LinkedInIcon />
  },
  { url: 'https://github.com/wassimnassour', label: 'GitHub', icon: <GithubIcon /> },
  { url: `mailto:${EMAIL}`, label: 'Email', icon: <EmailIcon /> }
]

export const jobs = [
  {
    name: 'Maltem Africa',
    role: 'Senior Full Stack Engineer',
    date: '2024/01 – Present / Casablanca',
    url: 'https://maltem.com/en/',
    description:
      'Build banking and enterprise applications, develop Spring Boot REST APIs, and mentor frontend developers.',
    projects: [
      {
        name: 'Yakeey',
        description:
          'Working on a loan application for a bank in Morocco, in collaboration with Yakeey and banks (CIH || Banque of Africa).',
        tasks: [
          'Designed and implemented a configurable JSON-driven form engine supporting conditional rendering, validation rules, reusable field components, and multi-step workflows.',
          'Implemented secure authentication and authorization using Keycloak.',
          'Built reusable UI components and documented them in Storybook, enabling consistency across the application and faster feature development.',
          'Implemented and maintained feature flags to safely roll out new functionality and support incremental releases.',
          'Developed backend REST APIs using Spring Boot and managed database schema evolution with Liquibase.',
          'Integrated frontend applications with backend services and ensured seamless end-to-end functionality.',
          'Established a comprehensive testing strategy using React Testing Library, Vitest, and Playwright.',
          'Improved application accessibility (a11y) by implementing accessible components, keyboard navigation, and semantic HTML where applicable.',
          'Performed performance profiling and optimization, reducing unnecessary re-renders, improving bundle efficiency, and enhancing user experience.',
          'Mentored two junior frontend developers and one intern through code reviews, pair programming, technical guidance, and onboarding.',
          'Participated in architecture discussions, reviewed pull requests, and promoted engineering best practices across the team.',
          'Worked with React, TypeScript, React Query, Zustand, Material UI, Vite, and Storybook to build scalable frontend solutions.'
        ]
      },
      {
        name: 'Inwi',
        description:
          'Built internal dashboards used by sales teams to manage products and monitor business performance.',
        tasks: [
          'Built new features using Next.js 14 and TypeScript.',
          'Developed dashboards for product management and sales monitoring.',
          'Improved Docker images and deployment workflow.',
          'Configured linting, formatting, pre-commit hooks and testing infrastructure.',
          'Worked closely with backend teams to deliver production-ready features.'
        ]
      }
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js 14',
      'React Query',
      'Zustand',
      'Material UI',
      'Vite',
      'Storybook',
      'Spring Boot',
      'Liquibase',
      'Keycloak',
      'Vitest',
      'Playwright',
      'React Testing Library',
      'Docker'
    ]
  },
  {
    name: 'Obytes',
    role: 'Frontend Developer',
    date: '2021 – 2023 / Casablanca',
    url: 'http://www.obytes.com',
    description:
      'Worked as a front-end developer on various projects, building both web and mobile apps from scratch and maintaining existing codebases using React, React Native, and Node.js.',
    projects: [
      {
        name: 'Vieva Care',
        description:
          'A platform to improve workplace engagement and team performance through real-time insights.',
        tasks: [
          'Built role-based dashboards for HR, managers and employees.',
          'Developed reusable UI components aligned with a design system.',
          'Improved application performance using lazy loading, image optimization and code splitting.',
          'Increased Lighthouse and Web Vitals performance scores.',
          'Implemented complex tables, charts and permission-based features.',
          'Managed application state using React Query, Zustand and Context API.',
          'Wrote unit and integration tests with React Testing Library and Jest.'
        ]
      },
      {
        name: 'Newsbyte (React Native Mission)',
        description:
          'A mobile news app that pulls articles from top journalism websites and lets users follow and interact with trending stories.',
        tasks: [
          'Built the mobile app using React Native, TypeScript, and Restyle (Shopify’s styling system).',
          'Designed and implemented the main news feed, pulling content from various news APIs.',
          'Added camera integration for taking and uploading profile or article-related images.',
          'Created a chat feature for real-time messaging with support.',
          'Handled user authentication with login, signup, and password reset.',
          'Integrated push notifications for breaking news alerts.',
          'Managed permissions for camera, media, and location access.',
          'Designed a clean and responsive UI using reusable components and React Navigation.',
          'Built category filters and search functionality to help users find relevant articles.',
          'Implemented bookmarking and history tracking for previously read articles.',
          'Used Zustand/Context to manage global app state.',
          'Optimized performance and load time for slower mobile networks.',
          'Wrote unit tests for components and hooks using Jest.',
          'Monitored app stability and fixed bugs from crash reports and user feedback.'
        ]
      }
    ],
    technologies: [
      'React',
      'React Native',
      'TypeScript',
      'Next.js',
      'React Query',
      'Zustand',
      'Restyle',
      'React Navigation',
      'Jest',
      'React Testing Library',
      'Node.js'
    ]
  },
  {
    name: 'Owto.ma',
    role: 'Co-founder',
    date: '2022 – 2023 / Casablanca',
    url: 'https://owto.ma',
    description:
      'Owto is a used car-selling company based in Morocco. I built two apps: an admin dashboard and a website where people can buy and sell used cars. During this experience, I gained a lot of knowledge, such as:',
    tasks: [
      'Conducting market research and aligning the UX of the app with the Moroccan community.',
      'Generating PDFs based on data.',
      'Building with Next.js, TypeScript, React Query, React PDF, Tailwind CSS, and more.',
      'Creating different building modes like ISG, SSG, and SSR based on the requirements of each page.',
      'Making the app responsive.',
      'Ran some user interviews to seek constructive feedback to improve the UX.',
      'Setting up the frontend codebase, configuring unit, integration, and unit integration tests, linting, formatting, pre-commit, and CI/CD with Digital Ocean and GitHub actions.',
      'Reviewing the backend codebase with Golang.'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'React Query',
      'React PDF',
      'Tailwind CSS',
      'Golang',
      'GitHub Actions',
      'Digital Ocean'
    ]
  },
  {
    name: 'Rantt.com',
    role: 'Full-Stack Developer',
    date: '2019 – 2021 / New York',
    url: 'https://rantt.com',
    description:
      "Social media platform focused on community-led content. Built the core social features for users and a back-office dashboard for community creators and Rantt's internal team.",
    tasks: [
      'Built and maintained backend services using Node.js and Express.js.',
      'Connected the Node.js backend to a gRPC microservice to handle communication between systems.',
      'Integrated Stripe for subscription payments: created plans, handled new subscriptions, updated billing info, and supported both scheduled and immediate cancellations.',
      'Designed and developed React components for the user-facing portal and admin tools.',
      'Built authentication and role-based access control for both web and mobile apps.',
      'Implemented a messaging system between users.',
      'Added social features like following, post creation, commenting, and liking.',
      'Used React Navigation and styled-components to build the mobile experience with a consistent UI.',
      'Worked closely with designers and product managers to translate requirements into smooth user flows.',
      'Wrote and maintained unit and integration tests across the frontend and backend.',
      'Debugged and fixed bugs reported by QA and users in production.',
      'Optimized API responses and frontend performance for better load times.',
      'Deployed updates and hotfixes with CI/CD pipelines.'
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'gRPC',
      'Stripe',
      'React Navigation',
      'styled-components',
      'TypeScript'
    ]
  }
]

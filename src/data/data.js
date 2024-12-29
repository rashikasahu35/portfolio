export const Bio = {
  name: "Rashika Sahu",
  roles: ["DevOps Engineer", "Full Stack Developer"],
  desc: "",
  github: "https://github.com/rashikasahu35",
  resume:
    "https://drive.google.com/file/d/12LAzWOlFI6Oyl4ZY9kHAX3OF7VpHFDSD/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/rashika-sahu-a28167211/",
  leetcode: "https://leetcode.com/rashikasahu35",
  twitter: "https://twitter.com/_rashikasahu",
  medium: "https://medium.com/@rashikasahu35",
};

export const skills = [
  {
    title: "DevOps",
    skills: [
      {
        name: "Microsoft Azure",
        image: "/assets/microsoft-azure.svg",
      },
      {
        name: "AWS",
        image: "/assets/aws.png",
      },
      {
        name: "Docker",
        image: "/assets/docker.svg",
      },
      // {
      //   name: "Jenkins",
      //   image: "https://imgs.search.brave.com/GJT8RT3i4ri73aYJTWykQfinOV1GGMo0GDD0CYmcQXo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzI2/OTkvUE5HLzUxMi9q/ZW5raW5zX2xvZ29f/aWNvbl8xNzA1NTIu/cG5n"
      // },
      {
        name: "Terraform",
        image: "/assets/terraform.svg",
      },
      {
        name: "Azure DevOps",
        image: "/assets/azure-devops.svg",
      },
      {
        name: "Github Actions",
        image: "/assets/github-actions.svg",
      },
      {
        name: "Kubernetes",
        image: "/assets/kubernetes.svg",
      },
      {
        name: "SonarQube",
        image: "/assets/sonarQube.svg",
      },
      {
        name: "Elasticsearch",
        image: "/assets/elasticsearch.svg",
      },
      {
        name: "Kibana",
        image: "/assets/kibana.svg",
      },
      {
        name: "Bicep",
        image: "/assets/bicep.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        image: "/assets/react.svg",
      },
      {
        name: "Next.js",
        image: "/assets/nextjs.webp",
      },
      {
        name: "JavaScript",
        image: "/assets/javascript.svg",
      },
      {
        name: "TypeScript",
        image: "/assets/typescript.svg",
      },
      {
        name: "Redux ToolKit",
        image: "/assets/redux.svg",
      },
      {
        name: "Jest",
        image: "/assets/jest.svg",
      },
      {
        name: "Material UI",
        image: "/assets/material-ui.svg",
      },
      {
        name: "Tailwind CSS",
        image: "/assets/tailwind-css.svg",
      },
      {
        name: "HTML",
        image: "/assets/html.svg",
      },
      {
        name: "CSS",
        image: "/assets/css.svg",
      },
      {
        name: "Sass",
        image: "/assets/sass.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image: "/assets/nodejs.svg",
      },
      {
        name: "Express.js",
        image: "/assets/expressjs.png",
      },
      {
        name: "MongoDB",
        image: "/assets/mongodb.svg",
      },
      {
        name: "Socket.io",
        image: "/assets/socket-io.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Linux",
        image: "/assets/linux.svg",
      },
      {
        name: "Git",
        image: "/assets/git.svg",
      },
      {
        name: "Postman",
        image: "/assets/postman.svg",
      },

      {
        name: "VS Code",
        image: "/assets/vs-code.svg",
      },
      {
        name: "Jira",
        image: "/assets/jira.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    image: "/assets/nagarro.gif",
    title: "Associate Software Engineer",
    subtitle: "Nagarro",
    date: "Mar 2023 - Present",
    desc: [
      "Actively engaged in managing and optimizing the development, deployment, and operations of software systems. Designing CI/CD pipelines to automate build, test, and deployment processes.",
      "Architecting, automating, and optimizing large-scale infrastructure deployments.",
      "Implementing infrastructure provisioning using IaC tools and ensuring application monitoring and security.",
      "Developing and optimizing UI components, managing application state, and ensuring frontend security.",
      "Building and maintaining APIs, managing data flow between backend and frontend, and querying databases effectively.",
    ],
    skills: [
      "Microsoft Azure",
      "Docker",
      "Terraform",
      "Azure DevOps",
      "SonarQube",
      "Kubernetes",
      "Github Actions",
      "AWS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Next.js",
      "JavaScript",
      "TypeScript",
    ],
  },
];

export const projects = [
  {
    id: 17,
    title:
      "Deploy a Microservice Architecture on Azure with Secure ELK Logging",
    date: "Sep 2024 - Oct 2024",
    desc: [
      "Implement a scalable microservices architecture with secure frontend-backend integration via API Management, centralized logging with ELK for effective monitoring, CosmosDB for data storage and automated infrastructure provisioning and deployment using Bicep and CI/CD pipelines.",
      "Deployed Azure resources using Bicep templates and automate via Azure DevOps CI/CD pipelines.",
      "Build and deploy the React frontend to Azure App Service and Node.js microservices as Azure Functions, using Docker and dedicated pipelines.",
      "Used Azure API Management to secure backend APIs and connect seamlessly to Cosmos DB for data storage.",
      "Deployed ELK on Azure VM via Docker Compose with SSL/TLS security, enabling microservices to push logs securely to Elasticsearch.",
    ],
    image: "/assets/microservice-arch.png",
    skills: [
      "Microsoft Azure",
      "Docker",
      "Bicep",
      "Azure DevOps",
      "Elasticsearch",
      "Kibana",
    ],
    category: "devops",
    github: "https://github.com/rashikasahu35/VidChill",
    demo: "https://drive.google.com/file/d/1KL6MkIedSmx92JYWbF6cW6Ul8cEHJbtU/view",
    blog: "https://medium.com/@rashikasahu35/deploying-a-microservice-architecture-on-azure-with-secure-elk-logging-4ca2e7b55a42",
  },
  {
    id: 18,
    title:
      "Azure Self-Hosted Agent Deployment on Azure Kubernetes Service (AKS)",
    date: "May 2024 - May 2024",
    desc: [
      "This repository contains scripts and configurations for deploying Azure Self-hosted agents on Azure Kubernetes Service (AKS) capable of supporting multiple frameworks including .NET, Java, and React applications. These agents can be used to execute your workloads and CI/CD pipelines.",
    ],
    image:
      "https://private-user-images.githubusercontent.com/93260606/371850469-c4eaf3de-f17e-468f-aa04-1f97310bf270.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzUzMDM3MzUsIm5iZiI6MTczNTMwMzQzNSwicGF0aCI6Ii85MzI2MDYwNi8zNzE4NTA0NjktYzRlYWYzZGUtZjE3ZS00NjhmLWFhMDQtMWY5NzMxMGJmMjcwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjI3VDEyNDM1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJkZTMwMmVmODIyMGNjODZiMWZjYmJlMGNkYTlhNWU5NGY2YmJiMTNkODAwNmY2YTQ2NzRlZjI1ODA5ZWYxZDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.A6OZtNu6Wjc7HuGLglHADPfWRMIbPSj8MRWDkRTzg9g",
    skills: [
      "Microsoft Azure",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Azure DevOps",
    ],
    category: "devops",
    github: "https://github.com/rashikasahu35/AKS-AzureSelfHostedAgent",
  },
  {
    id: 11,
    title: "VidChill",
    date: "Apr 2023 - Apr 2024",
    desc: [
      "A video streaming application inspired by YouTube, where users can watch videos, and explore the content with optimized search suggestions.",
      "N-level nested comment section to let users delve deep into discussions.",
      "Live Chat feature for real-time interaction, with auto-scroll and optimized storage capabilities.",
      "Infinite Scroll feature allows users to effortlessly browse through an endless stream of content.",
      "Shimmer UI and Responsive Design for better user experience.",
    ],
    image:
      "https://github.com/rashikasahu35/VidChill/assets/93260606/cc83f488-a2d9-47fb-9c2f-bb3c51483f8e",
    skills: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Youtube Data APIs",
    ],
    category: "webapp",
    github: "https://github.com/rashikasahu35/VidChill",
    webapp: "https://vid-chill-gilt.vercel.app",
    demo: "https://drive.google.com/file/d/1KL6MkIedSmx92JYWbF6cW6Ul8cEHJbtU/view",
  },
  {
    id: 12,
    title: "Best Buy",
    date: "Dec 2023 - Feb 2024",
    desc: [
      "Developed an e-commerce platform with features including Product Filtration, Sorting, and Pagination. Integrated a secure order system offering both COD and Stripe payment options for enhanced transaction security and flexibility.",
      "Designed an intuitive Admin Dashboard enabling efficient inventory tracking, order processing, and user management. Developed User Profiles, password recovery and mobile responsiveness for enhanced user experience.",
      "User Credentials :  #Email: test.user.0123459876@gmail.com  #Password: testuser@123",
      "Admin Credentials : #Email: test.adm.0123459876@gmail.com  #Password: testadmin@123",
      "Card used for Stripe Payment : 4000003560000008 | 4000003560000123 ",
    ],
    image:
      "https://github.com/rashikasahu35/Best-Buy/assets/93260606/72cb1231-187d-4bc7-9aab-49625222d60f",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Stripe",
      "Cloudinary",
      "Tailwind CSS",
    ],
    category: "webapp",
    github: "https://github.com/rashikasahu35/Best-Buy",
    webapp: "https://best-buy-frontend-topaz.vercel.app",
    demo: "https://drive.google.com/file/d/11qXYFyH4JWadc-iHrwF9za3U3rUPCRmE/view?usp=drive_link",
  },
  {
    id: 13,
    title: "Moviex",
    date: "Sep 2023 - Sep 2023",
    desc: [
      "Developed a movie database app leveraging the TMDB API to deliver movie and TV show listings with advance filtration, sorting, and search functionality.",
      "Designed an infinite scroll feature for effortless exploration, ensuring a user-friendly entertainment experience that is fully mobile responsive.",
    ],
    image:
      "https://user-images.githubusercontent.com/93260606/279436792-b9dff860-9eab-4706-950b-7cb5fe47b013.png",
    skills: ["React", "Redux ToolKit", "JavaScript", "HTML", "Sass"],
    category: "webapp",
    github: "https://github.com/rashikasahu35/moviex",
    webapp: "https://moviex-sand.vercel.app",
    demo: "https://drive.google.com/file/d/1avPDmZo8jx2m46NeZGIydt9728nyRPGi/view?usp=drive_link",
  },
  {
    id: 14,
    title: "Real-Time Code Editor",
    date: "Mar 2023 - May 2023",
    desc: [
      "Developed a code editor platform enabling seamless collaboration among users in real-time. Developed functionality to onboard users, facilitating simultaneous viewing and editing. Implemented support for multiple secured rooms, each distinguished by a unique 128-bit UUID key, ensuring privacy and accessibility with non-colliding keys.",
    ],
    image:
      "https://user-images.githubusercontent.com/93260606/279440518-a954b709-5e92-498c-b0c0-3b542c861f01.png",
    skills: [
      "Socket.io",
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Sass",
    ],
    category: "webapp",
    github: "https://github.com/rashikasahu35/Real-Time-Code-Editor",
    webapp: "https://real-time-code-editor-lemon.vercel.app",
    demo: "https://drive.google.com/file/d/1gzHPKstKHEYqangZCSfCWrURgrnYYOQU/view?usp=drive_link",
  },
  {
    id: 15,
    title: "SimpleNote",
    date: "Oct 2023 - Nov 2023",
    desc: [
      "Developed a notes application with capabilities for creating, updating, and deleting notes. Integrated user authentication using JWT and bcrypt for enhanced security. Designed a responsive UI for enhanced user experience.",
    ],
    image:
      "https://user-images.githubusercontent.com/93260606/284087118-d8a94c1f-f2ac-4410-8075-b2f04006c798.png",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
    ],
    category: "webapp",
    github: "https://github.com/rashikasahu35/SimpleNote",
    webapp: "https://notes-app-frontend-six.vercel.app",
  },
  // {
  //   id: 16,
  //   title: "OverCast",
  //   date: "Jul 2023 - Jul 2023",
  //   desc: [
  //     "Developed a web application displaying the weather of user-specified cities, providing real-time updates. Designed a responsive user interface ensuring seamless user experience across all devices.",
  //   ],
  //   image:
  //     "https://user-images.githubusercontent.com/93260606/279434813-ec3232d4-2aa6-4c6a-8e38-a488b4f40738.png",
  //   skills: ["JavaScript", "HTML", "Sass"],
  //   category: "webapp",
  //   github: "https://github.com/rashikasahu35/weather-appp",
  //   webapp: "https://weather-appp-lemon.vercel.app",
  // },
];

export const education = [
  {
    id: 111,
    image: "/assets/psit.webp",
    title: "Master of Computer Applications",
    subtitle: "Pranveer Singh Institute of Technology, Kanpur, Uttar Pradesh",
    date: "Nov 2021 - June 2023",
    desc: "I completed my Master's degree from PSIT Kanpur. In span of 2 years I worked on my problem solving skills with languages like C, C++ and got to work on multiple technologies like React, JavaScript, Node.js, Socket.io, HTML, Sass. My course work included Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    grade: "8.4 SGPA",
  },
  {
    id: 112,
    image: "/assets/mgkvp.jpg",
    title: "Bachelor of Computer Applications",
    subtitle: "Mahatma Gandhi Kashi Vidyapeeth, Varanasi, Uttar Pradesh",
    date: "Jul 2018 - Sep 2021",
    desc: "I completed my Bachelor's degree in Computer Application from Sunbeam College Varanasi. Where I was engaged with coursework and multiple extra curriculum activities",
    grade: "74%",
  },
];

export const certification = [
  {
    id: 1111,
    image: "/assets/microsoft-azure.svg",
    title: "Microsoft AZ 900",
    subtitle: "Microsoft Azure",
    date: "September 2024",
    skills: ["Azure", "Cloud"],
    link: "https://drive.google.com/file/d/17FNIS6mvysnDzYVmT6GY-oTI0wc4zpdp/view?usp=drive_link",
  },
  {
    id: 1112,
    image: "/assets/namaste-react.png",
    title: "Namaste React",
    subtitle: "Namaste Dev",
    date: "April 2024",
    skills: ["React", "Redux", "Tailwind CSS"],
    link: "https://drive.google.com/file/d/127jwk-4xh0zj7ooM-XfCfa98rpTbmjXS/view?usp=drive_link",
  },
  {
    id: 1113,
    image: "/assets/namaste-javascript.png",
    title: "Namaste JavaScript",
    subtitle: "Namaste Dev",
    date: "February 2024",
    skills: ["JavaScript"],
    link: "https://drive.google.com/file/d/1s9DQgbuXufjm7DoqgKdLXps1w4JBm44W/view?usp=drive_link",
  },
];

export const blogs = [
  {
    id: 11111,
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*_gQv8izRAOH7CEOI271niA.png",
    title:
      "Deploy a Microservice Architecture on Azure with Secure ELK Logging",
    date: "Nov, 2024",
    link: "https://medium.com/@rashikasahu35/deploying-a-microservice-architecture-on-azure-with-secure-elk-logging-4ca2e7b55a42",
  },
  {
    id: 11112,
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*bdYpA7leD2JzjUzofgYX9A.png",
    title: "Deployment Strategies: A Beginner’s Guide",
    date: "Sep, 2024",
    link: "https://medium.com/@rashikasahu35/deployment-strategies-ec7fcea82dcd",
  },
];

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a recent Computer Engineering graduate with a deep passion for Software Development, particularly in the MERN stack. With solid skills in HTML, CSS, JavaScript, and MySQL, I'm eager to bring my diverse expertise to real-world challenges. I'm committed to ongoing learning and enthusiastic about joining an innovative team.`;

export const ABOUT_TEXT = `I am a recent graduate with a Bachelor of Engineering in Computer Engineering, passionate about software development and specializing in the MERN stack. With a strong foundation in both front-end and back-end technologies, I excel in building scalable, high-performance web applications and crafting responsive, visually appealing user interfaces. My experience spans across various projects, where I’ve demonstrated my expertise in HTML, CSS, JavaScript, and MySQL, along with proficient use of GitHub for version control and collaboration. I am eager to apply my diverse skill set to real-world challenges, continually learn new technologies, and contribute to innovative teams.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "CyberShop",
    image: project1,
    description:
      "A dynamic e-commerce platform facilitating seamless transactions between buyers and sellers with a primary focus on the backend architecture. Actively spearheaded the creation of user registration and login pages, implementing secure authentication and authorization mechanisms.",
    technologies: ["NodeJS", "ExpressJS", "React", "MongoDB", "Bootstrap"],
    link: "https://github.com/nikhil-nooli/Cybershop", 
  },
  {
    title: "Video Calling Web Application",
    image: project2,
    description:
      "Developed a real-time, one-on-one video calling application using Zegocloud API, React, and Vite. Implemented a responsive UI and ensured seamless video communication, leveraging modern web development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    link: "https://github.com/nikhil-nooli/Video_Call_App", 
  },
  {
    title: "Library Catalogue Website",
    image: project3,
    description:
      "Developed a library catalogue system displaying a comprehensive list of books along with their authors, streamlining resource management for easy reference. It enables users to find books by name, author, or publisher.",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJS", "MySQL"],
    link: "https://github.com/nikhil-nooli/Library_Catalogue", 
  }
];



export const CONTACT = {
  address: "Mumbai, Maharashtra",
  phoneNo: "+91 7821082043 ",
  email: "nikhilnooli007@gmail.com",
};

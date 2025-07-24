const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Achievements",
    link: "#achievements",
  },
];

const words = [
  { text: "Full Stack Developer", imgPath: "/images/code.svg" },
  { text: "Competitive Programmer", imgPath: "/images/concepts.svg" },
  { text: "Cybersecurity Enthusiast", imgPath: "/images/ideas.svg" },

];

const counterItems = [
  { value: 1650, suffix: "+", label: "Rated on Codeforces" },
  { value: 1950, suffix: "+", label: "Rated on Leetcode" },
  { value: 1850, suffix: "+", label: "Rated on Codechef" },
  { value: 10, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "C/C++",
    modelPath: "/models/c++.glb",
    scale: 0.07,
    rotation: [0, -Math.PI / 12, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Git/Github",
    modelPath: "/models/github.glb",
    scale: 2,
    rotation: [0, -Math.PI / 114, 0],
  },
];

const expCards = [
  {
    review: "Apart from leading the club, also worked on a project under Prof. Shriman Narayana to enhance phishing detection mechanisms and develop strategies to mitigate Man-in-the-Middle (MITM) attacks.",
    imgPath: "/images/gdg.png",
    logoPath: "/images/gdglogo.png",
    title: "Cyber Security Lead",
    date: "August 2024 - Present",
    responsibilities: [
      "Led strategic projects tackling real-world cybersecurity challenges.",
      "Organized and managed multiple CTF events with 100+ participants.",
      "Enhanced team skills through hands-on problem-solving scenarios.",
    ],
  },
  {
    review: "During this period I worked collaboratively as a team to optimize network packet handling, increasing anticipated throughput by over 35% and reducing packet loss latency by approximately 120ms.",
    imgPath: "/images/teachnook.png",
    logoPath: "/images/tn-logo.png",
    title: "Cyber Security Intern",
    date: "October 2023 - November 2023",
    responsibilities: [
      "Built a network packet analyzer that processed 10K+ packets over Ethernet/Wi-Fi.",
      "Learned core cybersecurity tools and concepts with 90%+ proficiency.",
      "Identified vulnerabilities with 95% accuracy, aiding threat detection.",
    ],
  },
  {
    review: "My best work during this period was developing a Rock vs Mine Prediction Model, which achieved up to 95% accuracy.",
    imgPath: "/images/gdg.png",
    logoPath: "/images/gdglogo.png",
    title: "Junior Developer",
    date: "September 2023 - July 2024",
    responsibilities: [
      "Assisted in developing and debugging web apps using HTML, CSS, JS, and frameworks.",
      "Developed a ML model for data classification, improving automation and insights.",
      "Participated in code reviews and improved code efficiency by 20%.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const achievements = [
  {
    name: "Art X AI",
    mentions: "@estherhoward",
    review:
      "Secured 1st Rank out of 600+ Participants in the prestigious ArtXAI Competition held at IIIT Surat. Conceptualized and created a 100-page AI-generated comic book (manga), leveraging cutting-edge generative AI tools for storytelling, art design, and panel composition. Recognized for creativity, innovation, and technical excellence in merging art with artificial intelligence.",
    imgPath: "/images/manga.png",
  },
  {
    name: "Codeforces",
    mentions: "@marvinmckinney",
    review:
      "Secured Global Rank 436 among 30,000+ Participants in Codeforces Round 1032. Demonstrated strong grasp over competitive programming concepts and ranked in the top 2.5% globally, highlighting consistency and efficiency in a highly competitive environment.",
    imgPath: "/images/codeforces.png",
  },
  {
    name: "HSBC CTF",
    mentions: "@guyhawkins",
    review:
      "Secured 23rd Rank among 1000+ Participants in the HSBC Cyber Security Capture the Flag (CTF) Competition. Demonstrated strong problem-solving skills across various cybersecurity domains including cryptography, web exploitation, reverse engineering, and digital forensics.",
    imgPath: "/images/HSBC.png",
  },
  {
    name: "Hack Odisha 3.0",
    mentions: "@wadewarren",
    review:
      "Secured 7th Rank among 500+ Teams in HackOdisha, a thrilling 36-hour online hackathon organized by NIT Rourkela.Developed a feature-rich Game Explorer Website with an intuitive frontend, robust backend, and integrated ML-based game recommendation system. Demonstrated full-stack development skills and effective teamwork under intense time constraints.",
    imgPath: "/images/ho.png",
  },
  {
    name: "Codechef",
    mentions: "@floydmiles",
    review:
      "Achieved Global Rank 62 among 10,000+ Participants in CodeChef Starter Round 188. Showcased advanced algorithmic thinking and competitive programming skills in a high-stakes environment, solving complex problems under time pressure. Demonstrated consistency, speed, and accuracy across data structures, math, and optimization challenges.",
    imgPath: "/images/codechef.png",
  },
  {
    name: "Leetcode",
    mentions: "@albertflores",
    review:
      "Ranked in the Top 5% of Programmers on LeetCode with a highest rating of 1968 and best rank of 252. Solved 500+ problems across diverse domains and consistently demonstrated efficient problem-solving and code optimization in global contests and daily challenges.",
    imgPath: "/images/leetcode.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  achievements,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

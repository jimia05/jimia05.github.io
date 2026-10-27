export const profile = {
  name: "Fadejimi Aderele",
  tagline: "Computer Science student at the University of Indianapolis",
  email: "jimiaderele@gmail.com",
  github: { label: "github.com/jimia05", href: "https://github.com/jimia05" },
  linkedin: {
    label: "Fadejimi Fesojaye Aderele",
    href: "https://www.linkedin.com/in/fadejimi-aderele-51522b264/",
  },
};

export const about =
  "I'm a Computer Science student at the University of Indianapolis. I tutor math (Algebra through Calculus I) and build apps in Flutter, React and Python. I'm looking for a Software Engineering internship for Summer 2027. Outside of class, I'm usually reading up on new tech products, watching Formula One, building LEGO or playing racing games.";

export const skillGroups = [
  { label: "Programming", items: ["C++", "Python", "Java", "Dart", "Swift", "C#", "SQL (PostgreSQL)"] },
  { label: "Web and mobile", items: ["Flutter", "React", "Tailwind CSS", "Supabase"] },
  { label: "Hardware", items: ["Arduino", "Raspberry Pi", "Infrared and ultrasonic sensors"] },
  { label: "Tools", items: ["Autodesk Fusion 360", "GitHub", "Arena", "Trello", "MATLAB"] },
];

// `tone` picks the card color. `link` and `code` are optional buttons.
export const projects = [
  {
    name: "Robot Project",
    tone: "orange",
    dates: "Jan 2025 to May 2025 · University of Indianapolis",
    description:
      "My team designed and programmed an autonomous C++ robot for an engineering course. It placed 2nd in automation and 3rd in coding. It came together in three milestones. First, a robot we drove by hand. Second, we hard-coded the Arduino so it moved on its own. Third, we added IR and ultrasonic sensors so it could navigate its environment without us.",
    contributions:
      "Design and programming, calibrating the IR and ultrasonic sensors, and debugging power and navigation issues with the team.",
    tech: "C++, Arduino, IR sensors, ultrasonic sensors.",
    link: "https://drive.google.com/drive/folders/1MFwJC28DzE8BrPYxw55DRVAA2DAaN-Ro?usp=share_link",
  },
  {
    name: "Air Pollution Sensor",
    tone: "green",
    dates: "Jan 2025 to Apr 2025 · University of Indianapolis",
    description:
      "This was my second engineering class. We designed a real-time air quality sensor for engineering lab workers. Our group never built it, but we ran tests and simulations, then collected and analyzed the data, and it backs up the design.",
    contributions:
      "Design, simulation and data analysis, plus technical documentation and data models covering feasibility and performance.",
    tech: "Sensor design, simulation tools.",
    link: "https://drive.google.com/drive/folders/1uJg4PPfjij3G1dI6vU-yfhJJAj9TDZGo?usp=share_link",
  },
  {
    name: "Swipe Counter & Pace Calculator",
    tone: "blue",
    dates: "Dec 2025 to Present · Personal project",
    description:
      "A cross-platform app that helps students track and budget their university meal swipes. It has a live swipe counter and a pace calculator that tracks usage over the term. Still in progress.",
    contributions: "Designing and building the app.",
    tech: "Flutter, Dart.",
  },
  {
    name: "Weather Application",
    tone: "yellow",
    dates: "Aug 2025 to Nov 2025 · Personal project",
    description:
      "A Python app that pulls real-time weather data from the OpenWeather API and displays it. The API calls use async/await so they don't block the UI, and the app handles network timeouts and bad API responses.",
    contributions: "Built the app, the async API calls and the error handling.",
    tech: "Python, OpenWeather API.",
  },
  {
    name: "Personal Portfolio Website",
    tone: "purple",
    dates: "Jul 2025 to Present · Personal project",
    description:
      "This site. It's a responsive personal site that shows my coding and academic work, deployed on GitHub Pages.",
    contributions: "Design and code.",
    tech: "React, Tailwind CSS, Vite, Figma, GitHub Pages.",
  },
];

// Number of dashed "Coming soon" cards shown after the real projects.
export const comingSoonCount = 1;

export const experience = [
  {
    role: "AMP Tutor",
    org: "University of Indianapolis",
    dates: "Aug 2026 to Present",
    points: [
      "Attend MATH 180 (College Algebra & Trig) and MATH 190 (Calculus I) each week to help first-year Engineering majors.",
    ],
  },
  {
    role: "Math Lab Peer Tutor",
    org: "University of Indianapolis",
    dates: "Oct 2025 to Present",
    points: [
      "Tutor 4 to 6 students per week in Algebra through Calculus I, covering limits, derivatives and exam prep.",
      "Work four Math Lab shifts a week (8 hours) in Fall 2026.",
    ],
  },
];

export const education = {
  school: "University of Indianapolis",
  detail:
    "B.S. in Computer Science, minor in Supply Chain Management and Operations. Expected May 2028.",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Discrete Mathematics",
    "Linear Algebra",
    "Calculus II",
    "Computer Architecture and Parallel Computing (in progress)",
  ],
};

export const contactBlurb =
  "Want to work together, ask a question or talk about a project? Send me a message.";

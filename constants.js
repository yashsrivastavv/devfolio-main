export const METADATA = {
  author: "Adarsh Shukla",
  title: "Portfolio | Adarsh Shukla",
  description:
    "Adarsh Shukla is a passionate Software Engineer specializing in AL & ML,adept at transforming complex concepts into impactful solutions.",
  siteUrl: "https://adarshshukla.netlify.app/",
  twitterHandle: "@Adarsh_8100",
  keywords: [
    "Adarsh Shukla",
    "Machine Leaning Engineer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dzb14xkgf/image/upload/v1717182892/Screenshot_56_uercw0.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: adarshshukla1702@gmail.com",
  },
  {
    name: "linkedin",
    url: "http://linkedin.com/in/adarsh-shukla-b004b5206",
  },
  {
    name: "github",
    url: "http://github.com/Adarshshukla8100",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/adarshshuklaa.8100/",
  },
  {
    name: "twitter",
    url: "https://x.com/Adarsh_8100",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "firebase",
    "figma",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "tensorflow",
    "tailwindcss",
    "numpy",
    "pytorch",
    "scikit-learn",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "X - Sentiments",
    image: "/projects/sentiment webp.webp",
    blurImage: "/projects/blur/sentiment webp.webp",
    description: "X-sentiment Analysis using Tensorflow + scikit-learn 🫂",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/Adarshshukla8100/X-Sentiment-Analysis",
    tech: ["tensorflow", "nextjs", "tailwindcss", "scikit-learn"],
  },
  {
    name: "Cardiovascular Disease Prediction",
    image: "/projects/cardio.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Cardiovascular Disease Prediction using Machine Learning 🏥",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/Adarshshukla8100/-Cardiovascular-Risk-Prediction-Model",
    tech: ["typescript", "react", "tensorflow", "scikit-learn", "numpy"],
  },
  {
    name: "Spam Mail Detection",
    image: "/projects/spam mail.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "An automated system to identify and filter spam emails 📩",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/Adarshshukla8100/Spam-Mail-Prediction-",
    tech: ["typescript","tensorflow","pytorch", "numpy", "pandas"],
  },
  {
    name: "Lane Detection Module",
    image: "/projects/lane detection webp.webp",
    blurImage: "/projects/blur/lane detection webp.webp",
    description: "An AI innovation leveraging Lane Detection Module🛣️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/Adarshshukla8100/LaneDetectionModule",
    tech: ["react", "pandas","numpy", "scikit-learn"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  
  PSIT: [
    {
      title: "Pranveer Singh Institute of Technology",
      description:
        "During my four years at Pranveer Singh Institute of Technology, I specialized in Artificial Intelligence and Machine Learning. I completed various projects, including a Cardiovascular Risk Prediction Model, X-Sentiment Analysis, and a Lane Detection Module, utilizing tools such as Python, Numpy, Scikit-Learn, and OpenCV. I honed my skills in data structures, operating systems, DBMS, and machine learning, achieving a GPA of 8.2/10. I earned multiple certifications, excelled in competitive programming with 4-star ratings on HackerRank, and gained practical experience through internships and coding competitions, such as Coding Ninjas Codekaze and Flipkart GRiD.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          A 2024 Computer Science and Artificial Intelligence & Machine Learning graduate.
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";

/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "TayotusDev",
  title: "Hi all, I'm Ademuyiwa",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1J2Cl86nPgrqkbKFMciKb0AZN1t5IGQmR/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tay4real",
  linkedin: "https://www.linkedin.com/in/otubusin-ademuyiwa/",
  gmail: "otubusinolutayo@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/15290005/otubusin-ademuyiwa",
  instagram: 'https://www.instagram.com/tayotusdev/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Federal University of Technology, Akure",
      logo: require("./assets/images/futaLogo.jpeg"),
      subHeader: "Master of Technology in Computer Science",
      duration: "Jan 2015 - Dec 2019",
      desc: "Participated in the research of performance analysis of Principal Component Analysis and Linear Discriminant Analysis for Face Recognition Systems",
      descBullets: [
        "Machine Learning Algorithms"
      ]
    },
    {
      schoolName: "Olabisi Onabanjo University",
      logo: require("./assets/images/oouLogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "November 2003 - May 2008",
      desc:
        "Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer / Senior Programme Analyst",
      company: "State Information Technology Agency",
      companylogo: require("./assets/images/sitaLogo.png"),
      date: "Jan 2014 – Present",
      desc:
        "I lead a team of software developers building custom applications for MDAs",
      descBullets: [
        "Custom building applications",
        "Software Testing",
        "Software Deployment"
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "tay4real", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME WEB APPLICATIONS I CREATED",
  projects: [
    {
      image: require("./assets/images/memfile.png"),
      projectName: "MemFile",
      projectDesc: "MemFile is a file management system application designed for storing and  easy  processing of filed documents and provides a searchable database for quick retrieval.",
      footerLink: [
        {
          name: "Demo",
          url: "https://memfile.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mindcare.png"),
      projectName: "MindCare",
      projectDesc: "Mindcare is an health awareness application that allows anyone to measure their mental health status and get relevant information for better well-being.",
      footerLink: [
        {
          name: "Demo",
          url: "https://mindcare.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/aes.png"),
      projectName: "Automated Exam System",
      projectDesc: "Automated Exam System is a PHP web application for conducting examination in secondary schools. it offers three roles - admin, examiner and student. ",
      footerLink: [
        {
          name: "Demo",
          url: "http://automatedexam.herokuapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Build for SDG Challenge 2020",
      subtitle:
        "Worked with a team of software developers to initiate and develop MindCare application, one of the top 15 highest ranking applications out of 60 submitted in the Build for SDG Challenge.",
      image: require("./assets/images/sdgLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1Jtl9eP_n89GK-608gj9aj7Hn-vVGaNBz/view?usp=sharing"
        },
        {
          name: "Top 15 Projects",
          url:
            "http://buildforsdgprojects.andela.com/"
        },
       
      ]
    },
   

    {
      title: "PWA Web App Developer",
      subtitle:  "Completed Google Africa Developer Training program for Mobile Web Development",
      image: require("./assets/images/googleDevLogo.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1vCJ-bTYMtXCa47-KpjV-dCN9ei3F4Ylw/view?usp=sharing"},
        
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Projects",
  subtitle:
    "Web Development Projects",

  blogs: [
    {
      url:
        "https://memfile.netlify.app",
      title: "MemFile",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+234)80 6003 1582",
  email_address: "otubusinolutayo@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

"use client";

import { FaDatabase, FaCloud, FaFileExcel } from "react-icons/fa";
import { SiMicrosoftazure, SiJupyter, SiTableau } from "react-icons/si";


import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


const skills1 = {
  title: "My Tools",
  description: "These are the tools I use regularly.",
  skillList: [
    { name: "Azure", icon: <SiMicrosoftazure /> },
    { name: "Jupyter", icon: <SiJupyter /> },
    { name: "Excel", icon: <FaFileExcel /> },
    { name: "Tableau", icon: <SiTableau /> },
    { name: "Data Science", icon: <FaDatabase /> },
    { name: "Cloud", icon: <FaCloud /> },
  ],
};


// about data
const about = {
  title: "About me",
  description:
    "Hi, I’m Nazrul—a passionate data professional with a background in engineering and a deep love for transforming data into impactful stories. With hands-on experience in Power BI, Microsoft Fabric, Excel, SQL, and cloud technologies like Azure, I help businesses make smarter decisions through data-driven insights. Whether it's building dashboards, automating workflows, or uncovering trends, I bring clarity to complexity with every project.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nazrul Islam",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 171 308 6265",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "arfanislamabir",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "contact@nazruls.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bangla",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "With over 5 years of experience in data and cloud technologies, I’ve worked across diverse roles—from QA Automation Engineer to Power BI Developer and Data Consultant. I specialize in building end-to-end data solutions using tools like Power BI, Microsoft Fabric, Azure, SQL, and Python. Currently, I’m working at cien.ai, crafting complex DAX logic and data models.",
  items: [
    {
      company: "Cien Inc.",
      position: "Microsoft Power BI Developer",
      duration: "2024 - Present",
    },
    {
      company: "Omdena",
      position: "Data Scientist",
      duration: "Project Contract",
    },
    {
      company: "Traeger, Inc. ",
      position: "Data Integration Automation specialist",
      duration: "2023 - 2024",
    },
    {
      company: "Freelance(Upwork)",
      position: "Data Analyst",
      duration: "2019 - 2023",
    }
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My academic background laid a strong foundation in algorithms, systems design, and data processing—skills I now apply to real-world data challenges every day.",
  items: [
    {
      institution: "365 Data Science",
      degree: "Full Stack Data Sciene Bootcamp",
      duration: "2023",
    },
    {
      institution: "Coursera",
      degree: "Google Data Analytics Certification (Professional)",
      duration: "2022",
    },
    {
      institution: "Coursera",
      degree: "IBM Data Science",
      duration: "2022-23",
    },
    {
      institution: "Udemy",
      degree: "BI & Analytics",
      duration: "2019",
    },
    {
      institution: "University of Science and Technology, Chittagong",
      degree: "Msc in Computer",
      duration: "2021 - 2022",
    }
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I’m a Data Analyst, Power BI Developer, and Business Analyst with 5+ years of experience turning complex data into clear insights. I specialize in advanced DAX, SQL, and data modeling, using tools like Power BI, Azure Data Factory, and Databricks. I bridge business needs with technical solutions, delivering impactful dashboards and reports across domains like sales, healthcare, and customer analytics.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

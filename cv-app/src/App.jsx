import { useState } from "react";
import GeneralInputForm from "./components/GeneralInputForm";
import GeneralInfoPreview from "./components/GeneralInfoPreview";
import EducationInfoPreview from "./components/EducationInfoPreview";
import EducationInputForm from "./components/EducationInputForm";
import SkillsInputForm from "./components/SkillsInputForm";
import SkillsInfoPreview from "./components/SkillsInfoPreview";
import ProjectsInputForm from "./components/ProjectsInputForm";
import ProjectsInfoPreview from "./components/ProjectsInfoPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Robroi Neo M. Dingal",
    city: "Davao City",
    street: "Bucana, SIR Phase 2, Juan Luna St.",
    country: "Philippines",
    phone: "(+63) 936-269-0603 ",
    email: "robroineo2@gmail.com",
    linkedIn: "https://www.linkedin.com/in/robroi-neo-dingal/",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
    university: "University of Mindanao - Main",
    course: "Bachelor of Science in Computer Science (Ongoing)",
    honors: "Academic Honors Recipient (3 Semesters) — GWA 3.5+, no grade below 3.0",
    address: "Davao City, Philippines",
    date: "August 2023–August 2027",
   },
  ])
  const [skillsInfo, setSkillsInfo] = useState({
    technicalSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "Python",
      "SQL",
      "SQLite",
      "Git",
      "Figma",
      "TensorFlow",
      "Streamlit",
      "REST API Development",
      "Machine Learning",
      "Tinker CAD",
    ],
    interpersonalSkills: [
      "Team Collaboration",
      "Conflict Resolution",
      "Attention to Detail",
      "Problem-Solving",
    ],
  });

  const [projectsInfo, setProjectsInfo] = useState([
    {
      title: "Hardware Management System",
      technologies: "Laravel, SQLite, Blade, REST API",
      date: "April 2026 – May 2026",
      bullets: [
        "Developed a hardware inventory and management system using Laravel and SQLite",
        "Implemented RESTful APIs for inventory operations and data handling",
        "Built backend logic for Inventory Tracking, CRUD operations, and database management, and Logs",
      ],
    },
    {
      title: "Terraria Agentic RAG Chatbot Helper using Llama 3",
      technologies: "Python, Streamlit, Llama 3, RAG",
      date: "January 2026 – March 2026",
      bullets: [
        "Developed an agentic Retrieval-Augmented Generation (RAG) chatbot assistant for Terraria gameplay support",
        "Integrated Llama 3 for contextual question answering and in-game guidance",
        "Deployed the application using Streamlit for interactive web-based interaction",
      ],
    },
    {
      title: "FER 2013 Facial Emotion Recognition",
      technologies: "TensorFlow, Python, Deep Learning",
      date: "January 2026 – March 2026",
      bullets: [
        "Built a facial emotion recognition model using a customized VGGNet architecture in TensorFlow",
        "Trained and evaluated the model on image datasets (FER 2013) for emotion classification",
        "Applied computer vision and deep learning techniques for emotion prediction",
      ],
    },
    {
      title: "Physics Caster",
      technologies: "Godot, Game Development",
      date: "November 2025 – December 2025",
      bullets: [
        "Developed a physics-based game using the Godot engine",
        "Implemented gameplay mechanics, collision systems, and interactive physics behaviors",
        "Designed core game systems and player interactions",
      ],
    },
  ]);


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Input Fields */}
        <section className="bg-white rounded-xl shadow-md p-6 space-y-4 sticky top-6 max-h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Resume Builder</h2>

          <GeneralInputForm 
            generalInfo = {generalInfo}
            setGeneralInfo = {setGeneralInfo}
          />
          <EducationInputForm 
            educationInfo = {educationInfo}
            setEducationInfo = {setEducationInfo}
          />
          <SkillsInputForm 
            skillsInfo= {skillsInfo}
            setSkillsInfo= {setSkillsInfo}
          />
          <ProjectsInputForm
            projectsInfo= {projectsInfo}
            setProjectsInfo= {setProjectsInfo}
          />
        {/* todo:
          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">TO DO Certifications</h3>
          </div>

          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">
              Affiliations & Relevant Roles
            </h3>
          </div> */}
        </section> 

        {/* Resume Preview */}
        <section className="lg:col-span-2 bg-white rounded-xl shadow-md p-8 sticky top-6 max-h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Resume Preview</h2>

          <div className="flex justify-center">
            {/* These numbers are there to emulate A4 Size */}
            <div className="w-[794px] min-h-[1123px] bg-white shadow-lg p-10 print:shadow-none print:border-none">
              <GeneralInfoPreview generalInfo={generalInfo} />
              <EducationInfoPreview educationInfo={educationInfo} />
              <SkillsInfoPreview skillsInfo={skillsInfo} />
              <ProjectsInfoPreview projectsInfo={projectsInfo} />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App

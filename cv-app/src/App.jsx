import { useState } from "react";
import GeneralInputForm from "./components/GeneralInputForm";
import GeneralInfoPreview from "./components/GeneralInfoPreview";
import EducationInfoPreview from "./components/EducationInfoPreview";
import EducationInputForm from "./components/EducationInputForm";
import SkillsInputForm from "./components/SkillsInputForm";
import SkillsInfoPreview from "./components/SkillsInfoPreview";

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
          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Projects</h3>
          </div>

          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Certifications</h3>
          </div>

          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">
              Affiliations & Relevant Roles
            </h3>
          </div>
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
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App

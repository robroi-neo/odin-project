import { useState } from "react";
import GeneralInputForm from "./components/GeneralInputForm";
import GeneralInfoPreview from "./components/GeneralInfoPreview";

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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Input Fields */}
        <section className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-bold mb-6">Resume Builder</h2>

          <GeneralInputForm 
            generalInfo = {generalInfo}
            setGeneralInfo = {setGeneralInfo}
          />

          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Education</h3>
          </div>

          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="font-semibold">Skills</h3>
          </div>

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
        <section className="lg:col-span-2 bg-white rounded-xl shadow-md p-8 min-h-[800px]">
          <h2 className="text-2xl font-bold mb-6">Resume Preview</h2>
          <div className="pt-5 border-2 border-dashed border-gray-300 rounded-lg h-full flex justify-center">
            <GeneralInfoPreview 
              generalInfo = {generalInfo}
            />
          </div>


        </section>

      </div>
    </div>
  );
}

export default App

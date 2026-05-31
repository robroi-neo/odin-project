import { useState, useEffect } from "react";

function SkillsInputForm({ skillsInfo, setSkillsInfo }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [formData, setFormData] = useState({
    technicalSkills: [],
    interpersonalSkills: [],
  });

  useEffect(() => {
    setFormData(skillsInfo);
  }, [skillsInfo]);

  const handleChange = (type, index, value) => {
    const updated = [...formData[type]];
    updated[index] = value;

    setFormData({
      ...formData,
      [type]: updated,
    });
  };

  const handleAdd = (type) => {
    setFormData({
      ...formData,
      [type]: [...formData[type], ""],
    });
  };

  const handleRemove = (type, index) => {
    const updated = formData[type].filter((_, i) => i !== index);

    setFormData({
      ...formData,
      [type]: updated,
    });
  };

  const handleSave = () => {
    setSkillsInfo(formData);
  };

  return (
    <section className="p-6 bg-white rounded-xl shadow-md space-y-5">
      {/* header */}
      <button
        type="button"
        onClick={() => setIsCollapsed((c) => !c)}
        className="flex w-full justify-between items-center cursor-pointer"
      >
        <h2 className="text-xl font-bold text-gray-800">Skills</h2>

        <span className="text-sm text-gray-500 cursor-pointer">
          {isCollapsed ? "Expand" : "Collapse"}
        </span>
      </button>

      {!isCollapsed && (
        <>
          {/* Technical Skills */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">
              Technical Skills
            </h3>

            {formData.technicalSkills.map((skill, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) =>
                    handleChange("technicalSkills", index, e.target.value)
                  }
                  className="flex-1 px-3 py-2 border rounded-lg"
                />

                <button
                  type="button"
                  onClick={() => handleRemove("technicalSkills", index)}
                  className="text-red-500 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => handleAdd("technicalSkills")}
              className="text-blue-600 text-sm cursor-pointer"
            >
              + Add Technical Skill
            </button>
          </div>

          {/* Interpersonal Skills */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">
              Interpersonal Skills
            </h3>

            {formData.interpersonalSkills.map((skill, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) =>
                    handleChange("interpersonalSkills", index, e.target.value)
                  }
                  className="flex-1 px-3 py-2 border rounded-lg"
                />

                <button
                  type="button"
                  onClick={() => handleRemove("interpersonalSkills", index)}
                  className="text-red-500 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => handleAdd("interpersonalSkills")}
              className="text-blue-600 text-sm cursor-pointer"
            >
              + Add Interpersonal Skill
            </button>
          </div>

          {/* SAVE BUTTON */}
          <button
            type="button"
            onClick={handleSave}
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Save
          </button>
        </>
      )}
    </section>
  );
}

export default SkillsInputForm;
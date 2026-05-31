import { useState, useEffect } from "react";

function EducationInputForm({ educationInfo, setEducationInfo }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [draftEducation, setDraftEducation] = useState(educationInfo);

  useEffect(() => {
    setDraftEducation(educationInfo);
  }, [educationInfo]);

  const handleChange = (index, e) => {
    const updated = draftEducation.map((entry, i) =>
      i === index ? { ...entry, [e.target.name]: e.target.value } : entry
    );

    setDraftEducation(updated);
  };

  const handleAdd = () => {
    setDraftEducation([
      ...draftEducation,
      {
        university: "",
        course: "",
        honors: "",
        address: "",
        date: "",
      },
    ]);
  };

  const handleRemove = (index) => {
    const updated = draftEducation.filter((_, i) => i !== index);
    setDraftEducation(updated);
  };

  // just added this shit for consistency
  const handleSave = () => {
    setEducationInfo(draftEducation);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-5">
      <button
        type="button"
        onClick={() => setIsCollapsed((current) => !current)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={!isCollapsed}
      >
        <h2 className="text-xl font-bold text-gray-800">Education</h2>
        <span className="text-sm font-medium text-gray-500 cursor-pointer">
          {isCollapsed ? "Expand" : "Collapse"}
        </span>
      </button>

      {!isCollapsed && (
        <>
          {draftEducation.map((entry, index) => (
            <div key={index} className="space-y-4 border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600">
                  Entry {index + 1}
                </span>

                {draftEducation.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemove(index)}
                    className="text-sm text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    Remove
                  </button>
                )}
              </div>

              <input
                name="university"
                value={entry.university}
                onChange={(e) => handleChange(index, e)}
                placeholder="University"
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                name="course"
                value={entry.course}
                onChange={(e) => handleChange(index, e)}
                placeholder="Course"
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                name="honors"
                value={entry.honors}
                onChange={(e) => handleChange(index, e)}
                placeholder="Honors"
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                name="address"
                value={entry.address}
                onChange={(e) => handleChange(index, e)}
                placeholder="Address"
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                name="date"
                value={entry.date}
                onChange={(e) => handleChange(index, e)}
                placeholder="Date"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={handleAdd}
            className="cursor-pointer w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            + Add Education
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="cursor-pointer w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default EducationInputForm;
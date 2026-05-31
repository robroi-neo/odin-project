import { useState } from "react";

function ProjectsInputForm({ projectsInfo, setProjectsInfo }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleChange = (index, e) => {
    const updated = projectsInfo.map((entry, i) =>
      i === index ? { ...entry, [e.target.name]: e.target.value } : entry
    );
    setProjectsInfo(updated);
  };

  const handleBulletChange = (projectIndex, bulletIndex, value) => {
    const updated = projectsInfo.map((entry, i) => {
      if (i !== projectIndex) return entry;
      const updatedBullets = entry.bullets.map((b, j) =>
        j === bulletIndex ? value : b
      );
      return { ...entry, bullets: updatedBullets };
    });
    setProjectsInfo(updated);
  };

  const handleAddBullet = (projectIndex) => {
    const updated = projectsInfo.map((entry, i) =>
      i === projectIndex ? { ...entry, bullets: [...entry.bullets, ""] } : entry
    );
    setProjectsInfo(updated);
  };

  const handleRemoveBullet = (projectIndex, bulletIndex) => {
    const updated = projectsInfo.map((entry, i) => {
      if (i !== projectIndex) return entry;
      return { ...entry, bullets: entry.bullets.toSpliced(bulletIndex, 1) };
    });
    setProjectsInfo(updated);
  };

  const handleAdd = () => {
    setProjectsInfo([
      ...projectsInfo,
      { title: "", technologies: "", date: "", bullets: [""] },
    ]);
  };

  const handleRemove = (index) => {
    setProjectsInfo(projectsInfo.toSpliced(index, 1));
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-5">
      <button
        type="button"
        onClick={() => setIsCollapsed((current) => !current)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={!isCollapsed}
      >
        <h2 className="text-xl font-bold text-gray-800">Projects</h2>
        <span className="cursor-pointer text-sm font-medium text-gray-500">
          {isCollapsed ? "Expand" : "Collapse"}
        </span>
      </button>

      {!isCollapsed && (
        <>
          {projectsInfo.map((entry, projectIndex) => (
            <div key={projectIndex} className="border rounded-lg p-4 space-y-4">

              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600">
                  Project {projectIndex + 1}
                </span>
                {projectsInfo.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemove(projectIndex)}
                    className="cursor-pointer text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Title</label>
                <input
                  name="title"
                  value={entry.title}
                  onChange={(e) => handleChange(projectIndex, e)}
                  type="text"
                  placeholder="Hardware Management System"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Technologies</label>
                <input
                  name="technologies"
                  value={entry.technologies}
                  onChange={(e) => handleChange(projectIndex, e)}
                  type="text"
                  placeholder="Laravel, SQLite, Blade, REST API"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Date</label>
                <input
                  name="date"
                  value={entry.date}
                  onChange={(e) => handleChange(projectIndex, e)}
                  type="text"
                  placeholder="April 2026 – May 2026"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Bullets</label>
                {entry.bullets.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="flex gap-2 items-start">
                    <textarea
                      value={bullet}
                      onChange={(e) => handleBulletChange(projectIndex, bulletIndex, e.target.value)}
                      placeholder="Describe what you did..."
                      rows={2}
                      className="w-full px-3 py-2 border rounded-lg resize-none"
                    />
                    {entry.bullets.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveBullet(projectIndex, bulletIndex)}
                        className="cursor-pointer text-red-500 hover:text-red-700 text-sm mt-2"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddBullet(projectIndex)}
                  className="cursor-pointer text-sm text-blue-600 hover:text-blue-800"
                >
                  + Add Bullet
                </button>
              </div>

            </div>
          ))}

          <button
            type="button"
            onClick={handleAdd}
            className="w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            + Add Project
          </button>
        </>
      )}
    </div>
  );
}

export default ProjectsInputForm;
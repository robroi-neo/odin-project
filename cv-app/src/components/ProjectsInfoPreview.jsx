function ProjectsInfoPreview({ projectsInfo }) {
  return (
    <div className="py-4 max-w-2xl w-full">
      <h2 className="text-xs font-bold mb-1">Projects</h2>
      <hr className="border-t border-gray-800 mb-4" />

      {projectsInfo.map((entry, index) => (
        <div key={index} className="mb-4">

          <div className="flex justify-between">
            <span className="text-xs font-bold">{entry.title}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-xs text-gray-500">{entry.technologies}</span>
            <span className="text-xs text-gray-500 whitespace-nowrap ml-3">{entry.date}</span>
          </div>

          <ul className="list-disc ml-5 mt-1 space-y-0.5">
            {entry.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="text-xs text-gray-700">
                {bullet}
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}

export default ProjectsInfoPreview;
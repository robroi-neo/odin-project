function EducationInfoPreview({ educationInfo }) {
  return (
    <div className="py-4 max-w-2xl w-full">
      <h2 className="font-bold mb-1">Education</h2>
      <hr className="border-t border-gray-300 mb-4" />

      {educationInfo.map((entry, index) => (
        <div key={index} className="mb-4">

          <div className="flex justify-between">
            <span className="font-bold">{entry.university}</span>
            <span className="whitespace-nowrap ml-3">{entry.address}</span>
          </div>

          <div className="flex justify-between">
            <span className="">{entry.course}</span>
            <span className="whitespace-nowrap ml-3">{entry.date}</span>
          </div>

          {entry.honors && (
            <ul className="list-disc ml-5 mt-1">
              <li className="text-sm">
                <strong className="">{entry.honors.split("—")[0].trim()}</strong>
                {entry.honors.includes("—") && (
                  <span className="text-sm"> — {entry.honors.split("—")[1].trim()}</span>
                )}
              </li>
            </ul>
          )}

        </div>
      ))}
    </div>
  );
}

export default EducationInfoPreview;
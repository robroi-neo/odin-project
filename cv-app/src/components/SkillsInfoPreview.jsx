function SkillsInfoPreview({ skillsInfo }) {
  const { technicalSkills, interpersonalSkills } = skillsInfo;

  return (
    <section className="text-xs w-full text-gray-800 mb-2">
      <h2 className="font-bold border-b pb-2">Skills</h2>

      {/* Technical Skills */}
      <div>
        <h3 className="font-bold">
          Technical Skills:
        </h3>

        <p className="leading-relaxed">
          {technicalSkills?.filter(Boolean).join(", ")}
        </p>
      </div>

      {/* Interpersonal Skills */}
      <div>
        <h3 className="font-bold mt-3">
          Interpersonal Skills:
        </h3>

        <p className="text-sm leading-relaxed">
          {interpersonalSkills?.filter(Boolean).join(", ")}
        </p>
      </div>
    </section>
  );
}

export default SkillsInfoPreview;
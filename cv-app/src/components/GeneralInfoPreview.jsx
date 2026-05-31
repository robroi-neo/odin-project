function GeneralInfoPreview({ generalInfo }) {

  return (
    <section className="text-center mb-8">
      <h1 className=" font-bold underline">
        {generalInfo.name}
      </h1>

      <p className="mt-1">
        {generalInfo.street}, {generalInfo.city}, {generalInfo.country}
      </p>

      <div className="mt-1 flex flex-wrap justify-center gap-1">
        <span>{generalInfo.phone}</span>

        <span>|</span>

        <a
          href={`mailto:${generalInfo.email}`}
          className="text-blue-600 hover:underline"
        >
          {generalInfo.email}
        </a>

        <span>|</span>

        <a
          href={generalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          {generalInfo.linkedIn}
        </a>
      </div>
    </section>
  );
}

export default GeneralInfoPreview;
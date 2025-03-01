const experienceData = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "Argusoft",
    duration: "July 2024 - September 2024",
    description:
      //   "Developed and maintained web applications using React.js and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Led the migration of a government healthcare application from AngularJS to ReactJS, improving load times by 40%. Worked with a team of five developers to integrate modern UI components, increasing user satisfaction by 10%.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "General Office Aide",
    company: "University of Illinois Chicago",
    duration: "June 2023 - Present",
    description:
      //  "Assisted in the development of responsive web designs. Implemented UI components using HTML, CSS, and JavaScript.",
      "Managed processing of over 1000 identification cards and improved data entry efficiency, reducing processing time by 10%. Oversaw Dragon Dollar$ and meal plan programs, increasing participation by 10% in one academic year.",
    technologies: [],
  },
  {
    id: 3,
    title: "Intramural Sports Official",
    company: "University of Illinois Chicago",
    duration: "April 2023 - July 2023",
    description:
      //  "Assisted in the development of responsive web designs. Implemented UI components using HTML, CSS, and JavaScript.",
      "Officiated 10+ intramural games, ensuring compliance with rules and reducing conflicts by 15%. Led pre-game meetings to promote inclusivity, improving participant feedback by 15%.",
    technologies: [],
  },
];

function Experience() {
  return (
    // Outer section with a dark/black background
    <section className="bg-black w-full py-12">
      {/* Centered container */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Experience
        </h2>

        {/* Experience cards */}
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="mb-8 p-6 rounded-lg bg-white text-black shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
            <h4 className="text-xl text-black mb-1">{exp.company}</h4>
            <p className="text-black/80 italic mb-3">{exp.duration}</p>
            <p className="mb-4 leading-relaxed">{exp.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white text-[#144272] py-1 px-3 rounded-full text-sm font-medium
                               hover:bg-yellow-300 hover:text-[#144272] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

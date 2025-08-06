import React from "react";
import ProfileCard from "./ProfileCard";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  // Function to scroll to contact section when contact button is clicked
  const handleContactClick = (): void => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills: string[] = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "Java", "C++", "SQL", "MongoDB", "Git", "Docker", "AWS", "TailwindCSS"
  ];

  return (
    <section id="about" className={`py-20 bg-black ${className || ''}`.trim()}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <ProfileCard
              name="Dev Shah"
              title="Software Developer"
              handle="ddevv15"
              status="Available for Work"
              contactText="Contact Me"
              avatarUrl="/images/vaaniyo.jpg"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={handleContactClick}
            />
          </div>
          <div>
            <p className="text-white mb-6 text-3xl">
              Hi, I'm Dev Shah, a Computer Science major at the University of
              Illinois Chicago with a concentration in Software Engineering and
              a minor in Mathematics. Passionate about software development, I
              have experience in full-stack web development, security
              vulnerability assessments, and AI-driven solutions. My work spans
              from optimizing large-scale applications to building innovative
              projects like face recognition-based authentication kiosks. I
              thrive on problem-solving and collaboration, ensuring efficient
              and scalable solutions in every project.
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
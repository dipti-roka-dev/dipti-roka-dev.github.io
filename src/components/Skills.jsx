import React from 'react';

const skills = ['React', 'Node.js', 'Java', 'Spring Boot', 'AWS', 'Docker', 'Vite', 'Git'];

const Skills = () => {
  return (
    <section className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-gray-200 rounded-lg text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

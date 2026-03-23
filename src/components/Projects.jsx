import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Banking App',
    description: 'Full-stack banking app with React frontend and Java backend.',
    techStack: ['React', 'Java', 'Spring Boot', 'Docker', 'AWS'],
    githubLink: 'https://github.com/dipti-roka-dev',
    demoLink: null,
  },
  {
    title: 'Parking Rates App',
    description: 'App to calculate parking rates with weekend and hourly pricing.',
    techStack: ['React', 'Node.js', 'Vite'],
    githubLink: 'https://dipti-roka-dev.github.io/Parking-rate-app/',
    demoLink: null,
  },
  {
    title: 'AI Resume Building',
    description: 'AI-powered resume builder SaaS application.',
    techStack: ['React', 'Node.js', 'Typescript'],
    githubLink: 'https://github.com/dipti-roka-dev/ai-resume-builder',
    demoLink: null,
  },
  {
    title: 'Simple Java Calculator',
    description: 'command-line calculator built in Java',
    techStack: ['Java'],
    githubLink: 'https://github.com/dipti-roka-dev/simple-java-calculator',
    demoLink: null,
  },
];

const Projects = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

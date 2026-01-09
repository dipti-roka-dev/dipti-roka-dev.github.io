import React from 'react';

const ProjectCard = ({ title, description, techStack, githubLink, demoLink }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md m-2 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="my-2">{description}</p>
      <p className="text-sm text-gray-600">{techStack.join(' | ')}</p>
      <div className="mt-2 flex gap-2">
        {githubLink && (
          <a href={githubLink} target="_blank" className="text-blue-500">
            Code
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" className="text-green-500">
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

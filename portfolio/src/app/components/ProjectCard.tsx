import React from 'react';
interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl: string;
  demoUrl?: string;
  imagePath?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  imagePath,
}: ProjectCardProps) {
  // Color classes for technology tags
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-300 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      red: "bg-red-300 text-red-800 dark:bg-red-900 dark:text-red-200",
      green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      yellow: "bg-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      purple: "bg-purple-300 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      pink: "bg-pink-300 text-pink-800 dark:bg-pink-700 dark:text-pink-300",
      indigo: "bg-indigo-300 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      gray: "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
      orange: "bg-orange-300 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      cyan: "bg-cyan-300 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      fuchsia: "bg-fuchsia-300 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200",
      emerald: "bg-emerald-300 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    };
    
    return colorMap[color] || colorMap.gray;
  };

  return (
    <div className="bg-theme-card p-6 rounded-lg shadow-md flex flex-col justify-between h-full border-theme">
      {imagePath && (
        <div className="mb-4 overflow-hidden rounded-md">
        </div>
      )}
      
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-theme-muted text-[15px] leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech.name} 
              className={`${getColorClasses(tech.color)} px-2 py-1 text-xs rounded`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3 mt-auto">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn inline-block px-4 py-2 rounded transition text-sm text-center"
        >
          View on GitHub
        </a>
        
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block px-4 py-2 rounded transition text-sm text-center"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

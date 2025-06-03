import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL", "HTML", "CSS"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express", "Flask", "TailwindCSS"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "AWS", "MongoDB", "MySQL"]
    },
    {
      name: "Concepts",
      skills: ["RESTful APIs", "Responsive Design", "Agile/Scrum", "CI/CD", "Testing", "Data Structures & Algorithms"]
    }
  ];

  return (
    <section className="py-12 bg-theme-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-theme-foreground">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name}
              className="bg-theme-card rounded-lg shadow-md p-6 border-theme"
            >
              <h3 className="text-xl font-semibold mb-4 text-theme-foreground">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="skill-tag px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

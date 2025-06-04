import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C# (.NET)", "SQL", "HTML", "CSS","PHP (Laravel)"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express", "Flask", "TailwindCSS", "MongoDB", "Vite", "Socket.io"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Jira", "Git", "GitHub", "VS Code", "Postman", "AWS", "MongoDB", "MySQL", "Docker", "Vercel"]
    },
    {
      name: "Concepts",
      skills: [
        "REST APIs",
        "Agile/Scrum",
        "CI/CD",
        "Testing",
        "Data Structures & Algorithms",
        "Operating Systems",
        "Microservices",
        "Backend",
        "iOS/Android App Development"
      ]
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

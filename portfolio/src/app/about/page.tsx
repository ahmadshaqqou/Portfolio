import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";
import ContactForm from "../components/ContactForm";

export default function AboutPage() {
  // Project data
  const projects = [
    {
      title: "DevSwipe",
      description: "A full stack application that allows users to swipe left or right on project ideas. Websockets are utilized for real-time updates to project ideas, matches, and chat messages after a match.",
      technologies: [
        { name: "React", color: "blue" },
        { name: "CSS", color: "pink" },
        { name: "MongoDB", color: "emerald" },
        { name: "Apache", color: "yellow" },
        { name: "Node.js", color: "cyan" },
        { name: "TypeScript", color: "indigo" },
        { name: "Amazon lightsail", color: "orange" },
        { name: "Socket.io", color: "red" },
        { name: "Postman", color: "fuchsia" },
        { name: "Express", color: "emerald" }
      ],
      githubUrl: "https://github.com/devswipe-dev/devswipe",
    },
    {
      title: "AudioSync",
      description: "Music recognition app that lets users identify songs through audio input using the Shazam API. Once a song is recognized, the app retrieves details like the title, artist, and album, and allows users to add it directly to their Spotify playlists.",
      technologies: [
        { name: "Python", color: "purple" },
        { name: "React", color: "yellow" },
        { name: "CSS", color: "blue" },
        { name: "Flask", color: "orange" }
      ],
      githubUrl: "https://github.com/NSel1727/Audio-Sync",
    },
    {
      title: "Forex Trading Bot",
      description: "A Python-based trading bot that uses market indicators to make automated buy/sell decisions in the foreign exchange market. The bot's performance was optimized through backtesting with the Alpaca API, resulting in consistent and profitable trade outcomes.",
      technologies: [
        { name: "Python", color: "purple" },
        { name: "Jupyter Notebook", color: "yellow" },
        { name: "Alpaca API", color: "gray" }
      ],
      githubUrl: "https://github.com/christina8711/forex",
    },
    {
      title: "ahmadshaqqou.dev",
      description: " Aportfolio that showcases my projects, technical skills, and experience.",
      technologies: [
        { name: "Next.js", color: "fuchsia" },
        { name: "TypeScript", color: "red" },
        { name: "Tailwind CSS", color: "yellow" },
        { name: "JavaScript", color: "cyan" },
        { name: "CSS", color: "blue" },
        { name: "Vite", color: "orange" }
      ],
      githubUrl: "https://github.com/ahmadshaqqou/Portfolio",// Add this image to your public folder
    },

    {
      title: "Contact Manager",
      description: "A full-stack CRUD application that allows users to securely log in, add, edit, delete, and search through their personal contact list. Built with user authentication and a streamlined interface for managing and organizing contact information efficiently.",
      technologies: [
        { name: "Linux", color: "fuchsia" },
        { name: "Apache", color: "red" },
        { name: "MySQL", color: "yellow" },
        { name: "PHP", color: "purple" },
        { name: "JavaScript", color: "cyan" },
        { name: "CSS", color: "blue" },
        { name: "Vite", color: "orange" }
      ],
      githubUrl: "https://github.com/vphatfla/COP-4331-S-Project",
      imagePath: "/project-images/contact-manager.png" // Add this image to your public folder
    }
  ];

  return (
    <div className="bg-theme-background text-theme-foreground">
      {/* About Section */}
      <section id="about" className="w-full bg-theme-secondary py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <Image
                src="/103124SHPE-0781.jpg"
                alt="Ahmad Shaqqou"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg leading-relaxed mb-4 text-theme-foreground">
                Hi! My name is Ahmad Shaqqou and I'm a Computer Science student at
                UCF, graduating December 2025. I enjoy solving problems, building
                web apps, and learning new technologies.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-theme-foreground">
                My passion lies in creating efficient, user-friendly applications that solve real-world problems.
                I'm particularly interested in full-stack development, where I can work on both the frontend and backend
                aspects of applications.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <section id="experience" className="w-full bg-theme-secondary py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {/* General Dynamics Card */}
            <div className="bg-theme-card p-6 rounded-lg shadow-md relative overflow-hidden border-theme">
              {/* Logo pinned right */}
              <div className="absolute top-0 right-0 p-4">
                <Image
                  src="/GD.png"
                  alt="General Dynamics logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Text content padded from logo */}
              <div className="pr-32">
                <h3 className="text-xl font-bold">
                  IT Software Engineering Intern
                </h3>
                <p className="text-md text-theme-foreground">
                  General Dynamics - BIW · Summer 2025
                </p>
                <div className="mt-4">
                  <ul className="list-disc list-inside space-y-2 text-theme-muted">
                    <li>Configured and optimized 20+ Jira workflows by setting up custom transitions, conditions, and post-functions using SIL scripts, improving ticket flow across multiple teams.</li>
                    <li>Worked as a Jira Developer and Administrator, using JQL to build smart filters and automate ticket handling, helping cut down ticket processing time by 30%</li>
                    <li>Wrote and deployed SIL scripts to automate manual Jira tasks, cutting configuration time by 40% and making day-to-day operations more efficient for the team.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tutor Card */}
            <div className="bg-theme-card p-6 rounded-lg shadow-md border-theme">
              <h3 className="text-xl font-bold">
                Computer Science and Math Tutor
              </h3>
              <p className="text-md text-theme-foreground">
                Coach Kelly Live · July 2023 - Current
              </p>
              <ul className="mt-4 text-theme-muted list-disc list-inside space-y-4">
                <li>
                  Tutored over 20+ students, leading to a 90% pass rate on the
                  UCF Computer Science Foundation Exam through personalized and
                  targeted support.
                </li>
                <li>
                  Elevated grades for over 20+ computer science students by an
                  average of one full letter grade, demonstrating significant
                  academic progress.
                </li>
                <li>
                  Provided individualized and small group tutoring, enhancing
                  comprehension and performance on class assignments and
                  personal projects for more than 20+ students.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-theme-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                imagePath={project.imagePath}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full bg-theme-secondary py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Education</h2>
          <div className="bg-theme-card p-6 rounded-lg shadow-md relative overflow-hidden border-theme">
            <div className="absolute top-0 right-0 p-4">
              <Image
                src="/UCF.png"
                alt="UCF logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="pr-32">
              <h3 className="text-xl font-bold">
                University of Central Florida (UCF)
              </h3>
              <p className="text-md text-theme-foreground">
                B.S. in Computer Science, Expected Graduation: December 2025
              </p>
              <ul className="mt-4 text-theme-muted list-disc list-inside space-y-2">
                <li>Dean's List (multiple semesters)</li>
                <li>Member of Knight Hacks, SHPE</li>
                <li>
                  Relevant Courses: Data Structures & Algorithms, Software
                  Engineering, Operating Systems, System Software
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="bg-theme-card py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Contact Text & Info */}
            <div>
              <h3 className="text-2xl font-semibold">Let's connect.</h3>
              <p className="mt-2 text-gray-3=500">
                Fill out the form and I'll get back to you shortly.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/ahmad-shaqqou/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M100.28 448H7.4V149.8h92.88zM53.79 108.1C24.09 108.1 0 83.52 0 53.9 0 24.3 24.09 0 53.79 0s53.79 24.3 53.79 53.9c0 29.62-24.09 54.2-53.79 54.2zM447.9 448h-92.4V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.6V149.8h88.9v40.7h1.3c12.4-23.5 42.6-48.3 87.8-48.3 93.8 0 111.1 61.8 111.1 142.3V448z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/ahmadshaqqou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition text-sm font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.188c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.467-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.294-1.23 3.294-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.625-5.48 5.922.43.37.814 1.096.814 2.21v3.285c0 .32.192.694.8.576C20.565 21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

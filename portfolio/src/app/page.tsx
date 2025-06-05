import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-theme-background p-4">
      <div className="flex flex-col items-center text-center bg-theme-card p-8 rounded-2xl shadow-xl max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
          <div className="flex-shrink-0">
            <Image
              src="/103124SHPE-0781.jpg"
              alt="My professional headshot"
              width={250}
              height={250}
              className="rounded-full shadow-lg object-cover"
              priority
            />
          </div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-bold text-theme-foreground">
              Ahmad Shaqqou
            </h1>
            <p className="text-xl text-theme-muted mt-1">
              Software Engineer • UCF 2025
            </p>
            
            <p className="mt-4 text-theme-foreground max-w-lg">
              Passionate software engineer with experience in full-stack development, 
              focusing on creating efficient, user-friendly applications. 
              Currently pursuing a Computer Science degree at UCF.
            </p>
            
            <div className="mt-6 flex gap-4">
              <Link
                href="/about"
                className="btn px-4 py-2 rounded-lg transition"
              >
                About Me
              </Link>
              <a
                href="/AhmadShaqqouResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2 rounded-lg transition"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        
        {/* Featured Skills Section */}
        <div className="mt-12 w-full">
          <h2 className="text-2xl font-semibold text-theme-foreground mb-4">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "TypeScript",
              "React",
              "Node.js",
              "Python",
              "MongoDB",
              "MySQL",
              "React Native",
              "Git",
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-theme-card px-3 py-2 rounded-lg shadow text-center border-theme"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured Projects Section */}
        <div className="mt-12 w-full">
          <h2 className="text-2xl font-semibold text-theme-foreground mb-4">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-theme-card p-4 rounded-lg shadow-md border-theme">
              <h3 className="text-lg font-semibold">DevSwipe</h3>
              <p className="text-sm text-theme-muted mt-1">
                A full stack application that allows users to swipe on project ideas
              </p>
              <div className="mt-3">
                <Link 
                  href="/about#projects" 
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-theme-card p-4 rounded-lg shadow-md border-theme">
              <h3 className="text-lg font-semibold">AudioSync</h3>
              <p className="text-sm text-theme-muted mt-1">
                Music recognition app that lets users identify songs through audio input
              </p>
              <div className="mt-3">
                <Link 
                  href="/about#projects" 
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

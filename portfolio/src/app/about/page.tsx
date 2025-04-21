import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-white">
      <div className="flex justify-end items-center gap-4 px-6 py-4">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Home
        </Link>
        <a
          href="/AhmadShaqqouResume.pdf"
          target="blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          Resume
        </a>
      </div>
      {/* About Section */}
      <section className="w-full bg-gray-100 dark:bg-gray-900 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
          <p className="text-lg leading-relaxed text-center">
            Hi! My name is Ahmad Shaqqou and I’m a Computer Science student at
            UCF, graduating December 2025. I enjoy solving problems, building
            web apps, and learning new tech!
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full bg-gray-200 dark:bg-[#1e1e1e] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Experience
          </h2>

          <div className="space-y-6">
            {/* General Dynamics Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative overflow-hidden">
              {/* Logo pinned right */}
              <div className="absolute top-0 right-0 bottom-0 p-0">
                <Image
                  src="/GD.png"
                  alt="General Dynamics logo"
                  width={100}
                  height={100}
                  className="object-contain h-full w-full rounded-none"
                />
              </div>

              {/* Text content padded from logo */}
              <div className="pr-32">
                <h3 className="text-xl font-bold">
                  Incoming IT Software Engineering Intern
                </h3>
                <p className="text-md text-gray-800 dark:text-gray-200">
                  General Dynamics BIW · Summer 2025
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  - Will be working with ...
                </p>
              </div>
            </div>

            {/* Tutor Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">
                Computer Science and Math Tutor
              </h3>
              <p className="text-md text-gray-800 dark:text-gray-200">
                Coach Kelly Live · July 2023 - Current
              </p>
              <ul className="mt-4 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-4">
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
      <section className="w-full bg-gray-100 dark:bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">DevSwipe</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  A platform for developers to create profiles, post updates,
                  and connect with each other.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 text-xs rounded">
                    Next.js
                  </span>
                  <span className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
                    Tailwind CSS
                  </span>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 text-xs rounded">
                    MongoDB
                  </span>
                </div>
              </div>
              <a
                href="https://github.com/devswipe-dev/devswipe"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center"
              >
                View on GitHub
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">AudioSync</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  An app for creating study rooms, sharing notes, and
                  collaborating in real-time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 text-xs rounded">
                    React
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    Firebase
                  </span>
                  <span className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
                    CSS
                  </span>
                </div>
              </div>
              <a
                href= "https://github.com/NSel1727/Audio-Sync"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center"
              >
                View on GitHub
              </a>
            </div>

            {/* Add more projects here */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Manager</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  An app for creating study rooms, sharing notes, and
                  collaborating in real-time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 text-xs rounded">
                    React
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    Firebase
                  </span>
                  <span className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
                    CSS
                  </span>
                </div>
              </div>
              <a
                href="https://github.com/vphatfla/COP-4331-S-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">insert project</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  An app for creating study rooms, sharing notes, and
                  collaborating in real-time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 text-xs rounded">
                    React
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    Firebase
                  </span>
                  <span className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
                    CSS
                  </span>
                </div>
              </div>
              <a
                href="https://github.com/yourusername/insert project"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">insert project</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  An app for creating study rooms, sharing notes, and
                  collaborating in real-time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 text-xs rounded">
                    React
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    Firebase
                  </span>
                  <span className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
                    CSS
                  </span>
                </div>
              </div>
              <a
                href="https://github.com/yourusername/insert project"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">insert project</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  An app for creating study rooms, sharing notes, and
                  collaborating in real-time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 text-xs rounded">
                    React
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    Firebase
                  </span>
                  <span className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
                    CSS
                  </span>
                </div>
              </div>
              <a
                href="https://github.com/yourusername/insert project"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center"
              >
                View on GitHub
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full bg-gray-200 dark:bg-[#1e1e1e] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Education</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bottom-0 p-0">
              <Image
                src="/UCF.png"
                alt="UCF logo"
                width={100}
                height={100}
                className="object-contain h-full w-full rounded-none"
              />
            </div>
            <div className="pr-32">
              <h3 className="text-xl font-bold">
                University of Central Florida (UCF)
              </h3>
              <p className="text-md text-gray-800 dark:text-gray-200">
                B.S. in Computer Science, Expected Graduation: December 2025
              </p>
              <ul className="mt-4 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                <li>Dean’s List (multiple semesters)</li>
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
    </div>
  );
}

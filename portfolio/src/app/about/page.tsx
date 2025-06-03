import Image from "next/image";
import Link from "next/link";
import react from "react";

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
                  IT Software Engineering Intern
                </h3>
                <p className="text-md text-gray-800 dark:text-gray-200">
                  General Dynamics - BIW · Summer 2025
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
                <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed mb-4">
                  A full stack application that allows users to swipe left or
                  right on project ideas. Websockets are utlized for real-time
                  updates to project ideas, matches, and chat messages after a
                  match.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-300 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 text-xs rounded">
                    React
                  </span>
                  <span className="bg-pink-300 text-pink-800 dark:bg-pink-700 dark:text-pink-300 px-2 py-1 text-xs rounded">
                    CSS
                  </span>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 text-xs rounded">
                    MongoDB
                  </span>
                  <span className="bg-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    Apache
                  </span>
                  <span className="bg-cyan-300 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 px-2 py-1 text-xs rounded">
                    Node.js
                  </span>
                  <span className="bg-indigo-300 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-1 text-xs rounded">
                    TypeScript
                  </span>
                  <span className="bg-orange-300 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-2 py-1 text-xs rounded">
                    Amazon lightsail
                  </span>
                  <span className="bg-red-300 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 text-xs rounded">
                    Socket.io
                  </span>
                  <span className="bg-fuchsia-300 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200 px-2 py-1 text-xs rounded">
                    Postman
                  </span>
                  <span className="bg-emerald-300 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 px-2 py-1 text-xs rounded">
                    Express
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
                <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed mb-4">
                  music recognition app that lets users identify songs through
                  audio input using the Shazam API. Once a song is recognized,
                  the app retrieves details like the title, artist, and album,
                  and allows users to add it directly to their Spotify
                  playlists.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-300 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 text-xs rounded">
                    Python
                  </span>
                  <span className="bg-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    React
                  </span>
                  <span className="bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-300 px-2 py-1 text-xs rounded">
                    CSS
                  </span>
                  <span className="bg-orange-300 text-orange-800 dark:bg-orange-700 dark:text-orange-300 px-2 py-1 text-xs rounded">
                    Flask
                  </span>
                </div>
              </div>
              <a
                href="https://github.com/NSel1727/Audio-Sync"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center"
              >
                View on GitHub
              </a>
            </div>

            {/* Project 3*/}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Forex Trading Bot</h3>
                <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed mb-4">
                  A Python-based trading bot that uses market indicators to make
                  automated buy/sell decisions in the foreign exchange market.
                  The bot’s performance was optimized through backtesting with
                  the Alpaca API, resulting in consistent and profitable trade
                  outcomes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-300 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 text-xs rounded">
                    Python
                  </span>
                  <span className="bg-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    Jupyter Notebook
                  </span>
                  <span className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
                    Alpaca API
                  </span>
                </div>
              </div>
              <a
                href="https://github.com/christina8711/forex"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Manager</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                A full-stack CRUD application that allows users to securely log in, add, edit, delete, and search through their personal contact list.
                Built with user authentication and a streamlined interface for managing and organizing contact information efficiently.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-fuchsia-300 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200 px-2 py-1 text-xs rounded">
                    Linix
                  </span>
                  <span className="bg-red-300 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 text-xs rounded">
                    Apache
                  </span>
                  <span className="bg-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    MySQL
                  </span>
                  <span className="bg-purple-300 text-purple-800 dark:bg-purple-700 dark:text-purple-300 px-2 py-1 text-xs rounded">
                    PHP
                  </span>
                  <span className="bg-cyan-300 text-cyan-800 dark:bg-cyan-700 dark:text-cyan-300 px-2 py-1 text-xs rounded">
                    JavaScript
                  </span>
                  <span className="bg-blue-300 text-blue-800 dark:bg-blue-700 dark:text-blue-300 px-2 py-1 text-xs rounded">
                    CSS
                  </span>
                  <span className="bg-orange-300 text-orange-800 dark:bg-orange-700 dark:text-orange-300 px-2 py-1 text-xs rounded">
                    Vite
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
                <h3 className="text-xl font-bold mb-2">Forex Trading Bot</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  An app for creating study rooms, sharing notes, and
                  collaborating in real-time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-300 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 text-xs rounded">
                    React
                  </span>
                  <span className="bg-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 text-xs rounded">
                    Firebase
                  </span>
                  <span className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
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
                <h3 className="text-xl font-bold mb-2">Forex Trading Bot</h3>
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
      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Contact Text & Info */}
            <div>
              <h3 className="text-2xl font-semibold">Let's connect.</h3>
              <p className="mt-2 text-gray-300">
                Fill out the form and I'll get back to you shortly.
              </p>
              <div className="mt-8 space-y-4">
                <div className="text-sm text-gray-400">
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
                </div>
                <div className="text-sm text-gray-400">
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

            {/*Contact Form */}
            <form className="bg-white text-black rounded-lg p-6 flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label htmlFor="email" className="text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label htmlFor="message" className="text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="border rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

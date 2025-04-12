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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">
                    Incoming IT Software Engineering Intern
                  </h3>
                  <p className="text-md text-gray-800 dark:text-gray-200">
                    General Dynamics BIW · Summer 2025
                  </p>
                </div>

                <Image
                  src="/GD.png"
                  alt="General Dynamics logo"
                  width={60}
                  height={60}
                  className="ml-4 rounded-md"
                />
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                - Will be working with ...
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">
                Computer Science and Math tutor
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
    </div>
  );
}

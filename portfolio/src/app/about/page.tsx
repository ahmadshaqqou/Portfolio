import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-white">
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
                    Incoming IT Software Engineering Intern @ General Dynamics
                    BIW
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
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
              <p>
                - Built personal websites, worked with clients, and deployed
                apps using Next.js
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

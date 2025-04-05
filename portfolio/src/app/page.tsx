import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black p-4">
      <div className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-xl max-w-sm">
        <Image
          src="/103124SHPE-0781.jpg"
          alt="My professional headshot"
          width={800}
          height={200} 
          className="rounded-full shadow-lg mb-4 object-cover"
          priority
        />

        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Ahmad Shaqqou
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Software Engineer • UCF 2025
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/about"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            About Me
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

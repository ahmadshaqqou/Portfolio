import React from 'react';

export default function AboutPage() {
  return (
    <div className= "flex items-center justify-center min-h-screen bg-white dark:bg-black p-8">
          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Hey! I’m Ahmad Shaqqou, a passionate software engineer studying at UCF. I love solving problems,
          building things on the web, and constantly learning new technologies.
          <br /><br />
          Outside of coding, I enjoy [insert your hobbies here!], and I'm currently working on projects involving [cool tech you're into].
        </p>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { FaPlay, FaPause, FaTrophy, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

const LessonComponent = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [productIdea, setProductIdea] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [earnedBadge, setEarnedBadge] = useState(false);

  const lessonSections = [
    {
      title: "Introduction",
      duration: "10 minutes",
      content: (
        <div className="space-y-4">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64">
            <img
              src="images.unsplash.com/photo-1567014543648-e4391c989aab"
              alt="Kids learning business"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 m-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-3">What is a Business?</h3>
            <p className="text-gray-700">Meet Sam and Mia as they start their exciting lemonade stand adventure!</p>
          </div>
        </div>
      )
    },
    {
      title: "Build Your Business Idea",
      duration: "20 minutes",
      content: (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h3 className="text-xl font-bold text-purple-600">My Product Idea</h3>
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">What product or service would you like to offer?</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                value={productIdea}
                onChange={(e) => setProductIdea(e.target.value)}
                placeholder="Example: Magic Bookmark Service"
              />
            </label>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-700 mb-2">Popular Ideas:</h4>
              <ul className="list-disc list-inside text-purple-600">
                <li>Pet Walking Service</li>
                <li>Handmade Jewelry</li>
                <li>Garden Helper</li>
                <li>Custom Art Cards</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Name Your Business",
      duration: "20 minutes",
      content: (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h3 className="text-xl font-bold text-green-600">Business Name Generator</h3>
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Create your awesome business name!</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Example: Sparkle Treats"
              />
            </label>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-700 mb-2">Name Tips:</h4>
              <ul className="list-disc list-inside text-green-600">
                <li>Keep it short and sweet</li>
                <li>Make it easy to remember</li>
                <li>Be creative and fun</li>
                <li>Make sure it relates to your product</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Quiz & Rewards",
      duration: "10 minutes",
      content: (
        <div className="space-y-6">
          {!earnedBadge ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Quick Quiz!</h3>
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setShowQuiz(true);
                    setEarnedBadge(true);
                  }}
                  className="w-full py-3 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MdQuiz size={24} />
                  Start Quiz
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-6xl text-yellow-500 mb-4 flex justify-center">
                <FaTrophy />
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">Congratulations!</h3>
              <p className="text-gray-700">You've earned your Kidpreneur Starter Badge!</p>
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">My First Business – Basics of Starting and Naming a Business</h1>
      
      <div className="mb-8 bg-blue-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Lesson Overview</h2>
        <p className="text-blue-700">Duration: 1 hour | Age Group: 8-12 years</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            {lessonSections[currentSection - 1].content}
          </div>

          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
            <button
              onClick={() => setCurrentSection(Math.max(1, currentSection - 1))}
              disabled={currentSection === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${currentSection === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
            >
              <FaArrowLeft /> Previous
            </button>
            <span className="text-gray-600 font-medium">
              Section {currentSection} of {lessonSections.length}
            </span>
            <button
              onClick={() => setCurrentSection(Math.min(lessonSections.length, currentSection + 1))}
              disabled={currentSection === lessonSections.length}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${currentSection === lessonSections.length ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
            >
              Next <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonComponent;
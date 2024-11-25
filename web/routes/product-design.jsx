import React, { useState } from "react";
import "./ProductDesign.css";
import { FaPlay, FaShare, FaStar, FaCheckCircle, FaLightbulb, FaPencilAlt, FaUsers, FaMedal } from "react-icons/fa";

const LessonPlanBreakdown = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const lessonData = {
    title: "What is Design?",
    description: "Explore the fascinating world of design and discover the role of designers in creating amazing products!",
    sections: [
      {
        id: "overview",
        title: "Lesson Overview",
        icon: <FaLightbulb className="text-yellow-500" />
      },
      {
        id: "introduction",
        title: "Introduction",
        icon: <FaPencilAlt className="text-blue-500" />
      },
      {
        id: "video",
        title: "Interactive Video",
        icon: <FaPlay className="text-red-500" />
      },
      {
        id: "keypoints",
        title: "Key Points",
        icon: <FaCheckCircle className="text-green-500" />
      },
      {
        id: "activity1",
        title: "Core Activity 1",
        icon: <FaStar className="text-purple-500" />
      },
      {
        id: "activity2",
        title: "Core Activity 2",
        icon: <FaStar className="text-purple-500" />
      },
      {
        id: "collaboration",
        title: "Collaboration",
        icon: <FaUsers className="text-indigo-500" />
      },
      {
        id: "reflection",
        title: "Reflection",
        icon: <FaLightbulb className="text-orange-500" />
      },
      {
        id: "rewards",
        title: "Rewards",
        icon: <FaMedal className="text-yellow-600" />
      }
    ]
  };

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-4">
            <img
              src="images.unsplash.com/photo-1515378791036-0648a3ef77b2"
              alt="Design Overview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-gray-600">
              This lesson introduces children to the fundamentals of design and creativity through interactive activities and engaging content.
            </p>
          </div>
        );
      case "introduction":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Welcome to Design Thinking!</h3>
            <p className="text-gray-600">
              Designers are creative problem-solvers who shape the world around us. Today, we'll learn how to think like designers!
            </p>
          </div>
        );
      case "video":
        return (
          <div className="space-y-4">
            <div className="relative pt-[56.25%] bg-gray-100 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <FaPlay className="text-4xl text-blue-500 mx-auto mb-2" />
                  <p className="text-gray-600">Watch Alex's Design Adventure</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "keypoints":
        return (
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Understanding the role of designers</li>
              <li>Introduction to basic design tools</li>
              <li>Exploring creativity and innovation</li>
              <li>Learning about user needs</li>
            </ul>
          </div>
        );
      case "activity1":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Learn Basic Design Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold mb-2">Step 1: Shapes & Colors</h4>
                <p className="text-gray-600">Explore basic shapes and color combinations</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold mb-2">Step 2: Textures</h4>
                <p className="text-gray-600">Learn about different textures and patterns</p>
              </div>
            </div>
          </div>
        );
      case "activity2":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Create Your Virtual Product</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold mb-2">Step 1: Choose Your Idea</h4>
                <p className="text-gray-600">Select what you want to design</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-bold mb-2">Step 2: Design Time</h4>
                <p className="text-gray-600">Use the tools to bring your idea to life</p>
              </div>
            </div>
          </div>
        );
      case "collaboration":
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <FaShare className="text-blue-500" />
              <h3 className="text-xl font-bold">Share Your Creation</h3>
            </div>
            <p className="text-gray-600">
              Present your design to the group and get feedback from your peers!
            </p>
          </div>
        );
      case "reflection":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Think About Your Journey</h3>
            <ul className="space-y-2 text-gray-600">
              <li>What was your favorite part of the design process?</li>
              <li>What challenges did you face?</li>
              <li>How would you improve your design?</li>
            </ul>
          </div>
        );
      case "rewards":
        return (
          <div className="space-y-4">
            <div className="text-center">
              <FaMedal className="text-6xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Congratulations!</h3>
              <p className="text-gray-600">You've earned your Design Studio Creator Badge!</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500">
          <h1 className="text-3xl font-bold text-white">{lessonData.title}</h1>
          <p className="text-white mt-2">{lessonData.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
          <div className="md:col-span-1 space-y-2">
            {lessonData.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {section.icon}
                <span>{section.title}</span>
              </button>
            ))}
          </div>

          <div className="md:col-span-3 bg-gray-50 p-6 rounded-lg">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanBreakdown;
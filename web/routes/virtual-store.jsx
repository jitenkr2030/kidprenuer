import React, { useState, useRef } from "react";
import "./VirtualStore.css";
import { FaPlay, FaPause, FaForward, FaTrophy, FaRegLightbulb } from "react-icons/fa";
import { BsFillPencilFill, BsCheckCircleFill } from "react-icons/bs";

const KidpreneurLesson = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [productIdea, setProductIdea] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showCertificate, setShowCertificate] = useState(false);
  const videoRef = useRef(null);

  const productCategories = [
    { id: 1, name: "Lemonade Stand", image: "images.unsplash.com/photo-1621263764928-df1444c5e859" },
    { id: 2, name: "Pet Care Service", image: "images.unsplash.com/photo-1548199973-03cce0bbc87b" },
    { id: 3, name: "Handmade Crafts", image: "images.unsplash.com/photo-1499744937866-d7e566a20a61" },
    { id: 4, name: "Garden Helper", image: "images.unsplash.com/photo-1585320806297-9794b3e4eeae" }
  ];

  const quizQuestions = [
    {
      question: "What is a business?",
      options: [
        "A place to play games",
        "Selling products or services to make money",
        "A type of food",
        "A holiday destination"
      ],
      correct: 1
    },
    {
      question: "Why do people start businesses?",
      options: [
        "To solve problems and make money",
        "To make friends",
        "To get homework",
        "To go on vacation"
      ],
      correct: 0
    }
  ];

  const handleVideoControl = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleQuizAnswer = (questionIndex, optionIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">My First Business Adventure! 🚀</h1>
        <p className="text-lg text-gray-600">Learn how to start your very own business</p>
      </header>

      {currentStep === 1 && (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">1. What is a Business?</h2>
          <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden bg-gray-100">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="images.unsplash.com/photo-1553729459-efe14ef6055d"
            >
              <source src="https://youtu.be/mQo4SzKvtNA" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button
                onClick={handleVideoControl}
                className="p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">2. Choose Your Business Idea</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setProductIdea(category.name)}
                className={`cursor-pointer rounded-xl overflow-hidden border-4 ${
                  productIdea === category.name ? "border-indigo-500" : "border-transparent"
                }`}
              >
                <img
                  src={`https://${category.image}`}
                  alt={category.name}
                  className="w-full h-40 object-cover"
                />
                <p className="text-center py-2 bg-indigo-50 font-semibold">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">3. Name Your Business</h2>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Type your business name here..."
              className="w-full p-3 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold mb-2">Tips for a great business name:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Make it easy to remember</li>
                <li>Keep it short and sweet</li>
                <li>Be creative and unique</li>
                <li>Make sure it relates to your business</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">4. Quiz Time!</h2>
          {quizQuestions.map((q, qIndex) => (
            <div key={qIndex} className="mb-6">
              <p className="font-semibold mb-3">{q.question}</p>
              <div className="space-y-2">
                {q.options.map((option, oIndex) => (
                  <button
                    key={oIndex}
                    onClick={() => handleQuizAnswer(qIndex, oIndex)}
                    className={`w-full p-3 text-left rounded-lg ${
                      quizAnswers[qIndex] === oIndex
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-xl max-w-2xl w-full text-center">
            <FaTrophy className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Congratulations!</h2>
            <p className="text-xl mb-4">You've earned your Kidpreneur Starter Badge!</p>
            <p className="mb-6">Score: {calculateScore()} out of {quizQuestions.length}</p>
            <button
              onClick={() => setShowCertificate(false)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          className={`px-6 py-2 rounded-lg ${
            currentStep === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (currentStep === 4) {
              setShowCertificate(true);
            } else {
              setCurrentStep(Math.min(4, currentStep + 1));
            }
          }}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          {currentStep === 4 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default KidpreneurLesson;

import React, { useState, useRef, useEffect } from "react";
import "./FinancialTracking.css";
import { FaPlay, FaPause, FaClock, FaStar, FaPaintBrush, FaCoins, FaPiggyBank, FaChalkboardTeacher, FaSave } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

const InteractiveLearning = () => {
  const [currentSection, setCurrentSection] = useState("introduction");
  const [timer, setTimer] = useState(600);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [storyStarted, setStoryStarted] = useState(false);
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [selectedStickers, setSelectedStickers] = useState([]);
  const [savingsGoal, setSavingsGoal] = useState(60);
  const [slogan, setSlogan] = useState("");
  const [marketingCampaign, setMarketingCampaign] = useState({ poster: null, slogan: "" });
  const [gameScore, setGameScore] = useState({ profit: 0, budget: 0 });
  const timerRef = useRef(null);

  useEffect(() => {
    if (timer === 0) {
      pauseTimer();
      alert("Time's up! Let's check your progress.");
    }
    return () => clearInterval(timerRef.current);
  }, [timer]);

  const sections = [
    { id: "introduction", title: "Introduction", time: 10, icon: <FaChalkboardTeacher /> },
    { id: "games", title: "Games", time: 20, icon: <IoGameController /> },
    { id: "savings", title: "Savings Jar", time: 15, icon: <FaPiggyBank /> },
    { id: "marketing", title: "Marketing Fun", time: 15, icon: <FaPaintBrush /> }
  ];

  const learningOutcomes = [
    { category: "Money Matters", outcomes: ["Understanding basic profits", "Budgeting skills", "Saving habits"] },
    { category: "Marketing Fun", outcomes: ["Creative thinking", "Brand awareness", "Communication skills"] }
  ];

  const startTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      timerRef.current = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
    clearInterval(timerRef.current);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStickerSelect = (color) => {
    setSelectedStickers([...selectedStickers, color]);
  };

  const updateSavingsGoal = (value) => {
    setSavingsGoal(Math.min(100, Math.max(0, value)));
  };

  const handleGameScore = (game, points) => {
    setGameScore(prev => ({
      ...prev,
      [game]: prev[game] + points
    }));
  };

  const saveMarketingCampaign = () => {
    setMarketingCampaign({
      poster: "campaign_poster",
      slogan: slogan
    });
    alert("Marketing campaign saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-purple-600">Money Matters & Marketing Fun!</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <FaClock className="text-purple-500 mr-2" />
              <span className="text-xl font-semibold">{formatTime(timer)}</span>
            </div>
            <button
              onClick={isTimerRunning ? pauseTimer : startTimer}
              className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600"
            >
              {isTimerRunning ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className={`p-4 rounded-xl flex flex-col items-center transition-all ${currentSection === section.id ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-purple-100"}`}
            >
              <div className="text-2xl mb-2">{section.icon}</div>
              <span className="font-medium">{section.title}</span>
              <span className="text-sm">{section.time} mins</span>
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          {currentSection === "introduction" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="images.unsplash.com/photo-1551269901-5c5e14c25df7"
                  alt="Kids Learning"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-purple-600 mb-4">Story Time: The Smart Saver</h2>
                <p className="text-gray-700 mb-4">
                  {storyStarted ? "Alex learned that saving money is like planting a seed - it grows over time!" : "Join Alex on an exciting journey to learn about saving money and smart spending!"}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setStoryStarted(!storyStarted)}
                    className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600"
                  >
                    {storyStarted ? "Restart Story" : "Start Story"}
                  </button>
                  <button 
                    onClick={() => setShowDiscussion(!showDiscussion)}
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
                  >
                    Discussion Time
                  </button>
                </div>
                {showDiscussion && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-bold mb-2">Discussion Points:</h3>
                    <ul className="list-disc pl-4">
                      <li>What did Alex learn about saving?</li>
                      <li>How can you start saving money?</li>
                      <li>Why is it important to save?</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentSection === "games" && (
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Profit Puzzle</h3>
                <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">Score: {gameScore.profit}</p>
                  <button 
                    onClick={() => handleGameScore("profit", 10)}
                    className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-lg"
                  >
                    Solve Puzzle
                  </button>
                </div>
                <div className="flex justify-center">
                  <FaCoins className="text-6xl text-yellow-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Budget Challenge</h3>
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">Score: {gameScore.budget}</p>
                  <button 
                    onClick={() => handleGameScore("budget", 5)}
                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg"
                  >
                    Make Decision
                  </button>
                </div>
                <div className="flex justify-center">
                  <FaPiggyBank className="text-6xl text-green-500" />
                </div>
              </div>
            </div>
          )}

          {currentSection === "savings" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Design Your Savings Jar</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {["pink", "blue", "green"].map((color) => (
                  <div
                    key={color}
                    onClick={() => handleStickerSelect(color)}
                    className={`bg-${color}-100 p-4 rounded-lg cursor-pointer hover:bg-${color}-200`}
                  >
                    <FaStar className={`text-4xl text-${color}-500 mx-auto`} />
                  </div>
                ))}
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={savingsGoal}
                  onChange={(e) => updateSavingsGoal(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-purple-500 h-4 rounded-full transition-all"
                    style={{ width: `${savingsGoal}%` }}
                  ></div>
                </div>
                <p className="text-center mt-2 text-gray-600">Savings Goal: {savingsGoal}%</p>
              </div>
            </div>
          )}

          {currentSection === "marketing" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Create Your Marketing Campaign</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-600 mb-2">Poster Design</h4>
                    <div className="flex justify-center">
                      <FaPaintBrush className="text-4xl text-orange-500" />
                    </div>
                  </div>
                  <div className="bg-indigo-100 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-600 mb-2">Slogan Creator</h4>
                    <input
                      type="text"
                      value={slogan}
                      onChange={(e) => setSlogan(e.target.value)}
                      placeholder="Type your creative slogan..."
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>
                <button
                  onClick={saveMarketingCampaign}
                  className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <FaSave className="mr-2" /> Save Campaign
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-purple-100 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Learning Outcomes</h2>
          <div className="grid grid-cols-2 gap-6">
            {learningOutcomes.map((category) => (
              <div key={category.category} className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-purple-600 mb-2">{category.category}</h3>
                <ul className="space-y-2">
                  {category.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center">
                      <FaStar className="text-yellow-500 mr-2" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveLearning;
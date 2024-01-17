// InfluenceReadinessTest.jsx
import React, { useEffect, useState } from "react";
import { Button, Progress } from "@nextui-org/react";
import QuestionList from "./QuestionList";

const apiUrl = "https://dummyjson.com/products";

const InfluenceReadinessTest = ({ fullTestStarted }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [progress, setProgress] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const questions = data.products.slice(0, 8);

        setQuestions(questions);
        setTestStarted(false);
        setCurrentQuestionIndex(0);
        setSelectedQuestionIndex(0);
        setSelectedAnswers({});
        setProgress(0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleStartTest = () => {
    setTestStarted(true);
    setCurrentQuestionIndex(0);
    setProgress(0);
  };

  const handleSelectQuestion = (index) => {
    if (!testStarted) {
      setTestStarted(true);
    }
    setCurrentQuestionIndex(index);
    setSelectedQuestionIndex(index);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      updateProgress();
      setSelectedQuestionIndex(currentQuestionIndex + 1);
    } else if (
      currentQuestionIndex === questions.length - 1 &&
      isAnswerSelected
    ) {
      setTestStarted(false);
      setSelectedQuestionIndex(0);
      setSavedAnswers(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedQuestionIndex(currentQuestionIndex - 1);
    } else {
      setTestStarted(false);
      setSelectedQuestionIndex(0);
      setSelectedAnswers({});
      setProgress(0);
      setSavedAnswers(selectedAnswers);
    }
  };

  const handleAnswerChange = (answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));

    if (currentQuestionIndex === selectedQuestionIndex) {
      updateProgress();
    }
  };

  const updateProgress = () => {
    if (testStarted) {
      const answeredQuestions = Object.keys(selectedAnswers).length;
      const totalQuestions = questions.length;
      const newProgress = (answeredQuestions / totalQuestions) * 100;
      setProgress(newProgress);
    } else {
      setProgress(0);
    }
  };

  const isAnswerSelected = selectedAnswers.hasOwnProperty(currentQuestionIndex);

  const handleSaveAndContinueLater = () => {
    setSavedAnswers(selectedAnswers);
  };

  return (
    <div>
      {testStarted && currentQuestionIndex !== null && (
        <div>
          <div className="font-semibold">
            <p className="text-40 pt-5 font-Montserrat">
              Question {selectedQuestionIndex + 1}:
            </p>
            <p className="text-xl pt-10 font-Montserrat">
              Title: {questions[selectedQuestionIndex]?.title}
            </p>

            <div className="items-stretch self-stretch flex max-w-[860px] flex-col">
              <label
                className={`h-16 items-stretch border ${
                  selectedAnswers[currentQuestionIndex] === "yes"
                    ? "bg-[#273249] text-white"
                    : "border-[color:var(--Brand-Colours-Navy-blue-200,#273249)]"
                } flex w-full justify-between gap-2.5 px-6 py-5 rounded-[70px] border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5`}
              >
                <input
                  type="radio"
                  name="answer"
                  value="yes"
                  checked={selectedAnswers[currentQuestionIndex] === "yes"}
                  onChange={() => handleAnswerChange("yes")}
                />
                Yes
              </label>
              <label
                className={`h-16 items-stretch border ${
                  selectedAnswers[currentQuestionIndex] === "no"
                    ? "bg-[#273249] text-white"
                    : "border-[color:var(--Brand-Colours-Navy-blue-200,#273249)]"
                } flex w-full justify-between gap-2.5 mt-2.5 px-6 py-5 rounded-[70px] border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5`}
              >
                <input
                  type="radio"
                  name="answer"
                  value="no"
                  checked={selectedAnswers[currentQuestionIndex] === "no"}
                  onChange={() => handleAnswerChange("no")}
                />
                No
              </label>
            </div>
            <div className="pt-20 justify-between items-stretch self-stretch flex max-w-[860px] gap-5 max-md:flex-wrap">
              <div className="justify-between items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] flex gap-2.5 px-6 py-3.5 rounded-[70px] border-solid max-md:px-5">
                <button
                  className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight self-center my-auto"
                  onClick={handlePreviousQuestion}
                >
                  Back
                </button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/36062481f3e78ad13758bbc6c531cf03175ebcfa9a99099e07dafd5a6024f80f?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                  className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
              </div>
              <button
                className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-stretch border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] px-6 py-4 rounded-[70px] border-solid max-md:px-5"
                onClick={handleSaveAndContinueLater}
              >
                Save and continue later
              </button>
              <div className="cursor-pointer justify-between items-center border border-[color:var(--Brand-Colours-Red-200,#EC202C)] bg-red-600 flex gap-2.5 px-6 py-3.5 rounded-[70px] border-solid max-md:px-5">
                <button
                  className="w-28 text-white text-center text-sm font-semibold leading-4 tracking-tight my-auto"
                  disabled={!isAnswerSelected}
                  onClick={handleNextQuestion}
                >
                  Next Question
                </button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ec6ba94b84039f79afa820ddfed764358d6022e3dd6cd7ae8c6d773caed014?apiKey=cd95a2d52a9f443b9a20ed553fd6c8ec&"
                  className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
            <Progress className="pt-10" value={progress} />
            <div className="flex gap-2 pt-4 justify-center">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`h-8 w-8 border-2 rounded-full ${
                    index === selectedQuestionIndex ? "bg-blue-500" : "bg-white"
                  }`}
                  onClick={() => handleSelectQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            {currentQuestionIndex === questions.length - 1 &&
              isAnswerSelected &&
              !testStarted && (
                <h2 className="text-2xl font-semibold text-center mt-4">
                  You finished the test
                </h2>
              )}
          </div>
        </div>
      )}

      {!testStarted && (
        <QuestionList
          questions={questions}
          onStartTest={handleStartTest}
          onSelectQuestion={handleSelectQuestion}
        />
      )}
    </div>
  );
};

export default InfluenceReadinessTest;

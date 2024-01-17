// QuestionList.jsx
import React from "react";
import { Button } from "@nextui-org/react";

const QuestionList = ({ questions, onStartTest, onSelectQuestion }) => {
  // Function to chunk the questions into groups of 3
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // Chunk the questions into groups of 3
  const chunkedQuestions = chunkArray(questions, 3);

  return (
    <div>
      <Button
        className="text-white text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Red-200,#EC202C)] bg-red-600 self-stretch mt-8 px-16 py-5 rounded-[70px] border-solid max-md:max-w-full max-md:px-5 w-860"
        onClick={onStartTest}
      >
        Start Full Test
      </Button>

      <div className="flex flex-wrap gap-2.5 mt-2.5 max-md:max-w-full">
        {chunkedQuestions.map((group, groupIndex) => (
          <div key={groupIndex} className="flex items-stretch gap-2.5 w-full">
            {group.map((question, index) => (
              <Button
                key={index}
                className="text-slate-800 text-center text-sm font-semibold leading-4 tracking-tight whitespace-nowrap justify-center items-center border border-[color:var(--Brand-Colours-Navy-blue-200,#273249)] grow flex-1 rounded-[70px] border-solid max-md:px-5"
                onClick={() => onSelectQuestion(index + groupIndex * 3)}
              >
                {question.title}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;

// page.jsx
"use client";
import React, { useState } from "react";
import InfluenceReadinessTest from "../Components/InfluenceReadinessTest";
import Sidebar from "../Components/Sidebar";

const Page = () => {
  const [fullTestStarted, setFullTestStarted] = useState(false);

  const startFullTest = () => {
    setFullTestStarted(false);
  };

  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="flex flex-col md:flex-row gap-0 max-md:max-w-full">
        <div className="hidden md:flex md:flex-none w-[80px] overflow-hidden flex-col pl-4 pt-6 pb-12 border-r border-solid items-end max-md:flex-wrap">
          <Sidebar></Sidebar>
          <div className="items-center self-stretch flex flex-col mt-6 mb-[580px] pl-4 pr-8 py-2">
            {/* Other elements */}
          </div>
        </div>

        {/* Render InfluenceReadinessTest outside of the condition */}
        {!fullTestStarted && (
          <div className="items-stretch bg-slate-100 flex grow basis-[0%] flex-col pl-5 pr-10 py-5 max-md:max-w-full max-md:pr-5">
            <div className="justify-center items-center flex flex-col px-16 max-md:max-w-full max-md:px-5">
              <span className="flex w-[860px] max-w-full flex-col">
                <div className="text-zinc-800 text-4xl font-semibold tracking-tighter self-stretch max-md:max-w-full">
                  Influence Readiness Test
                </div>
                <div className="text-zinc-800 text-3xl font-semibold tracking-tighter self-stretch mt-8 max-md:max-w-full">
                  You are about to take your Influence Readiness Test.
                </div>
                <div className="self-stretch text-zinc-800 text-xl font-medium leading-7 tracking-tight mt-6 max-md:max-w-full">
                  This test will provide a comprehensive marketing assessment
                  within for you to assess your marketing practices for an
                  accurate look at your influence trajectory.
                  <br />
                  <br />
                  This test includes 120 questions, split between
                  multiple-choice questions and single-answer questions. It
                  should take you approximately 30 minutes to complete, and you
                  can save your progress and pick it up at a later time.
                </div>
                <div className="self-stretch text-zinc-800 text-2xl font-bold leading-6 tracking-tight mt-6 max-md:max-w-full">
                  You can take the full test or select which booster you would
                  like to do first.
                </div>
                <div className="self-stretch text-zinc-800 text-xl font-medium leading-7 tracking-tight mt-6 max-md:max-w-full">
                  Select how you want to start your test by clicking on the
                  buttons or on the progress bar below. You can always save your
                  progress and continue later.
                  <InfluenceReadinessTest startFullTest={startFullTest} />
                </div>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
